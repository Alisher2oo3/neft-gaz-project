import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {Calculate, Diagrams, FilterCalculate, Info} from "./components";

const App = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route path='/' element={<Calculate/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/filter-calculate' element={<FilterCalculate/>}/>
            <Route path='/diagrams' element={<Diagrams/>}/>
        </Routes>
    )
}
export default App
