import {Charts} from "../components";
import {option_1, option_2, option_3, option_4, option_5, option_6} from "../constanta/options";

const Diagrams = () => {
    const style = {
        box: 'w-full p-5 bg-white shadow-md shadow-gray-300 rounded-md hover:scale-[102%] duration-200'
    }
    return (
        <div className={`container py-10`}>
            <div className={`flex justify-between items-start flex-wrap`}>
                <div className={`w-1/2 p-4`}>
                    <div className={style.box}>
                        <Charts option={option_1}/>
                    </div>
                </div>
                <div className={`w-1/2 p-4`}>
                    <div className={style.box}>
                        <Charts option={option_2}/>
                    </div>
                </div>
                <div className={`w-full p-4`}>
                    <div className={style.box}>
                        <Charts option={option_3}/>
                    </div>
                </div>
                <div className={`w-full h-[300px] p-4 mb-20`}>
                    <div className={style.box}>
                        <Charts option={option_4}/>
                    </div>
                </div>
                <div className={`w-1/2 h-[300px] p-4 mb-20`}>
                    <div className={`w-full p-5 bg-white shadow-md shadow-gray-300 rounded-md hover:scale-[102%] duration-200`}>
                        <Charts option={option_5}/>
                    </div>
                </div>
                <div className={`w-1/2 h-[300px] p-4 mb-20`}>
                    <div className={`w-full p-5 bg-white shadow-md shadow-gray-300 rounded-md hover:scale-[102%] duration-200`}>
                        <Charts option={option_6}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Diagrams
