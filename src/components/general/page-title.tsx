/** @jsx jsx */
import {jsx} from '@emotion/core';
import {FC, PropsWithChildren as PWC} from 'react';

export const PageTitle: FC = (props: PWC<never>) => {
    const css = {marginTop: 0};

    return (<h1 css={css} {...props} />);
};

export default PageTitle;
