/** @jsx jsx */
import {jsx} from '@emotion/core';
import {FC, PropsWithChildren} from 'react';
import {useTheme} from 'emotion-theming';

import {SiteTheme} from '../../util/site-theme';

export const SiteContent: FC = (props: PropsWithChildren<never>) => {
    const {layout} = useTheme<SiteTheme>();

    const css = {
        display: 'grid',
        gridTemplateRows: `1fr ${layout.siteFooterHeight}`,
        overflow: 'auto',
        padding: `${layout.gridGutter} ${layout.gridGutter} 0 ${layout.gridGutter}`,
    };

    return (<section css={css} {...props} />);
};

export default SiteContent;
