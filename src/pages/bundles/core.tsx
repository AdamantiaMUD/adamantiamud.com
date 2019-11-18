import React, {FC} from 'react';
import {PageRendererProps} from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

export const CoreBundlesPage: FC<PageRendererProps> = ({location}: PageRendererProps) => (
    <Layout location={location}>
        <SEO title="Core Bundles" />
        <h1>{'Core Bundles'}</h1>
    </Layout>
);

export default CoreBundlesPage;
