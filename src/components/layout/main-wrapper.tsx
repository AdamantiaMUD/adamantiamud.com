/** @jsx jsx */
import {jsx} from '@emotion/core';
import {FC, PropsWithChildren} from 'react';
import {useTheme} from 'emotion-theming';

import {SiteTheme} from '../../util/site-theme';

export const MainWrapper: FC = (props: PropsWithChildren<never>) => {
    const {layout} = useTheme<SiteTheme>();

    const css = {
        display: 'grid',
        gridTemplateColumns: `${layout.leftNavWidth} 1fr`,
        height: '100%',
        overflow: 'hidden',
    };

    return (<div css={css} {...props} />);
};

export default MainWrapper;
