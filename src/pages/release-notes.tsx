import React, {FC} from 'react';
import {PageRendererProps} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const SecondPage: FC<PageRendererProps> = ({location}: PageRendererProps) => (
    <Layout location={location}>
        <SEO title="Release Notes" />
        <h1>{'Release Notes'}</h1>
    </Layout>
);

export default SecondPage;
