import React, {FC} from 'react';
import {PageRendererProps} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const SecondPage: FC<PageRendererProps> = ({location}: PageRendererProps) => (
    <Layout location={location}>
        <SEO title="Source Docs" />
        <h1>{'Source Docs'}</h1>
    </Layout>
);

export default SecondPage;
