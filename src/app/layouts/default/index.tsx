import React from 'react';
import { DefaultLayoutContainer } from './styled';
import { IDefaultLayout } from './types';

const DefaultLayout = ({children}: IDefaultLayout) => {
    return(
        <DefaultLayoutContainer>
            {children}
        </DefaultLayoutContainer>
    )
}

export default DefaultLayout