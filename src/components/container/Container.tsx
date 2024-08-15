import * as React from 'react';
import {ReactNode} from 'react';
import {Container} from "@mui/material";

interface ContainerProps {
    children: ReactNode;
}

export const AppContainer: React.FC<ContainerProps> = ({children}) => {
    return (
        <Container maxWidth='1440px'>
            {children}
        </Container>
    );
};
