import React from 'react';
import Helmet from 'react-helmet';
import {GatsbyConfig} from 'gatsby';

import cfg from '../gatsby-config.js';

const config: GatsbyConfig = cfg as GatsbyConfig;

/* eslint-disable @typescript-eslint/no-explicit-any */
interface HtmlProps {
    body: any;
    postBodyComponents: any;
    headComponents: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export const Html: React.FunctionComponent<HtmlProps> = (props: HtmlProps) => {
    const head = Helmet.rewind();

    const verification = config.siteMetadata?.googleVerification
        ? (
            <meta
                name="google-site-verification"
                content={config.siteMetadata.googleVerification as string}
            />
        )
        : null;

    const {body, headComponents, postBodyComponents} = props;

    return (
        <html lang="en">
            <head>
                {headComponents}
                <title>{'My website'}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {head.link.toComponent()}
                {verification}
            </head>
            <body>
                {/* eslint-disable-next-line react/no-danger */}
                <div id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
                {postBodyComponents}
            </body>
        </html>
    );
};

export default Html;
