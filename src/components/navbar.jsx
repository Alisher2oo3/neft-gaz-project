import {Link} from "react-router-dom";
import {useState} from "react";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const openNav = () => setToggleNav(!toggleNav);

    const style = {
        openBtn: 'inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden' +
            ' hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200',
        ul: 'flex flex-col w-[98%] md:w-full font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8' +
            ' md:flex-row md:mt-0 md:border-0 bg-white',
        link: 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
    }
    return (
        <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-md shadow-gray-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-1">
                <Link to={`/`} className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Dashboard
                    </span>
                </Link>
                <button className={style.openBtn} onClick={openNav}>
                    <CgMenuLeft className={`text-[1.5rem]`} />
                </button>
                <div className={`${toggleNav ? 'fixed top-16' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className={style.ul}>
                        <li><Link to={`/calculate`} className={style.link}>Calculate</Link></li>
                        <li><Link to={`/info`} className={style.link}>Info</Link></li>
                        <li><Link to={`/gallery`} className={style.link}>Gallery</Link></li>
                        <li><Link to={`/diagrams`} className={style.link}>Diagrams</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
