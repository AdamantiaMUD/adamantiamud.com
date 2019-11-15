#!/usr/bin/env node
/* global process */
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/typedef */

const fs = require('fs');
const slash = require('slash');
const matter = require('gray-matter');

// Get files given by lint-staged (*.md files into staged)
/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
process.argv
    /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
    .slice(3)
    .forEach(dirtyPath => {
        // Make sure it will works on windows
        const path = slash(dirtyPath);

        // Only parse blog posts
        if (!path.includes('/data/blog/')) {
            return;
        }

        // Get file from file system and parse it with gray-matter
        /* eslint-disable-next-line no-sync */
        const orig = fs.readFileSync(path, 'utf-8');
        const parsedFile = matter(orig);

        // Get current date and update `updatedDate` data
        const updatedDate = new Date()
            .toISOString()
            .split('T')[0];
        const updatedData = {
            ...parsedFile.data,
            updatedDate,
        };

        // Recompose content and updated data
        const updatedContent = matter.stringify(parsedFile.content, updatedData);

        // Update file
        /* eslint-disable-next-line no-sync */
        fs.writeFileSync(path, updatedContent, {encoding: 'utf-8'});
    });
