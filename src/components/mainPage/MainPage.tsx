import * as React from 'react';
import {ReactNode} from 'react';
import {AppContainer} from "../container/Container.tsx";
import {MainBox} from "./styles.tsx";

interface MainProps {
    children: ReactNode,
}

const MainPage: React.FC<MainProps> = ({children}) => {
    return (
        <MainBox>
            <AppContainer>
                {children}
            </AppContainer>
        </MainBox>
    );
};

export default MainPage;