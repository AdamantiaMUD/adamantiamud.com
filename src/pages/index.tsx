import React, {FC} from 'react';
import {PageRendererProps} from 'gatsby';

import Layout from '../components/layout';
import PageTitle from '../components/general/page-title';
import SEO from '../components/seo';

export const IndexPage: FC<PageRendererProps> = ({location}: PageRendererProps) => (
    <Layout location={location}>
        <SEO title="Home" />
        <PageTitle>{'Home'}</PageTitle>
    </Layout>
);

export default IndexPage;
