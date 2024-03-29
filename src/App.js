import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {Calculate, Diagrams, FilterCalculate, Gallery, Info} from "./pages";
import {Navbar} from "./components";

const App = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<FilterCalculate/>}/>
                <Route path='/calculate' element={<Calculate/>}/>
                <Route path='/info' element={<Info/>}/>
                <Route path='/diagrams' element={<Diagrams/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
            </Routes>
        </>
    )
}
export default App
