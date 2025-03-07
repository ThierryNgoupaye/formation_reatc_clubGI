import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/AppRouter.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {


    return (

        <div>
            <Header/>
            <main className="flex flex-grow min-h-screen overflow-y-auto overflow-x-hidden bg-blue-50">
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </main>
            <Footer/>
        </div>)
}

