/** @jsx jsx */
import {jsx} from '@emotion/core';
import {FC, PropsWithChildren} from 'react';
import {useTheme} from 'emotion-theming';

import {SiteTheme} from '../../util/site-theme';

export const Footer: FC = (props: PropsWithChildren<never>) => {
    const {layout} = useTheme<SiteTheme>();

    const css = {
        lineHeight: layout.siteFooterHeight,
        textAlign: 'center',
    };

    return (
        <footer css={css} {...props}>
            {`© ${new Date().getFullYear()}, Built with `}
            <a href="https://www.gatsbyjs.org">{'Gatsby'}</a>
        </footer>
    );
};

export default Footer;
