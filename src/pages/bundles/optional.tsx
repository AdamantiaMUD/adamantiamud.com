import React, {FC} from 'react';
import {PageRendererProps} from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

export const OptionalBundlesPage: FC<PageRendererProps> = ({location}: PageRendererProps) => (
    <Layout location={location}>
        <SEO title="Optional Bundles" />
        <h1>{'Optional Bundles'}</h1>
    </Layout>
);

export default OptionalBundlesPage;
