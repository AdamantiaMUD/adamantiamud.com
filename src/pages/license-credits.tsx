import React, {FC} from 'react';
import {PageRendererProps} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const SecondPage: FC<PageRendererProps> = ({location}: PageRendererProps) => (
    <Layout location={location}>
        <SEO title="License & Credits" />
        <h1>{'License & Credits'}</h1>
    </Layout>
);

export default SecondPage;
