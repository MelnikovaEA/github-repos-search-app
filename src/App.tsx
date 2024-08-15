import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import MainPage from "./components/mainPage/MainPage.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <MainPage>
                <Outlet/>
            </MainPage>
            <Footer />
        </>
    )
}

export default App
