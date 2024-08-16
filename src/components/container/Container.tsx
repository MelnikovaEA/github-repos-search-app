import * as React from 'react';
import {ReactNode} from 'react';
import {Container} from "@mui/material";

interface ContainerProps {
    children: ReactNode;
}

export const AppContainer: React.FC<ContainerProps> = ({children}) => {
    return (
        <Container sx={{maxWidth: '1440px'}}>
            {children}
        </Container>
    );
};
