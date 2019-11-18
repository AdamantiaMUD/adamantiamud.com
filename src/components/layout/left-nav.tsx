/** @jsx jsx */
import {jsx} from '@emotion/core';
import {FC} from 'react';
import {useTheme} from 'emotion-theming';

import {SiteTheme} from '../../util/site-theme';

export const LeftNav: FC = () => {
    const {colors, layout} = useTheme<SiteTheme>();

    const css = {
        backgroundColor: colors.navBg,
        overflow: 'auto',
    };

    const activeLinkCss = {
        borderLeft: `5px solid ${colors.primary}`,
        paddingLeft: 'calc(1.5rem - 5px)',
    };

    const linkCss = {
        'borderBottom': `1px solid ${colors.secondary}`,
        'display': 'block',
        'padding': '1rem 1rem 1rem 1.5rem',
        ':hover': activeLinkCss,
    };

    return (
        <aside css={css}>
            <a css={{...linkCss, ...activeLinkCss}} href="#">Link 1</a>
            <a css={linkCss} href="#">Link 2</a>
            <a css={linkCss} href="#">Link 3</a>
            <a css={linkCss} href="#">Link 4</a>
            <a css={linkCss} href="#">Link 5</a>
            <a css={linkCss} href="#">Link 6</a>
            <a css={linkCss} href="#">Link 7</a>
            <a css={linkCss} href="#">Link 8</a>
        </aside>
    );
};

export default LeftNav;
