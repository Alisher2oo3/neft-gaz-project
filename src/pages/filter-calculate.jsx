import {filterCalculate} from "../constanta/constanta";
import {Button} from "../components";

const FilterCalculate = () => {
    return (
        <div className={`container py-16`}>
            <h1 className={`text-[2.5rem] text-black opacity-90 leading-[50px] font-semibold text-center`}>
                {filterCalculate.heading}
            </h1>
            <div className={`w-full flex justify-between items-center gap-5 flex-wrap md:flex-nowrap`}>
                <div className={`w-full md:w-[30%] flex flex-col gap-5 px-8`}>
                    <Button name={filterCalculate.btn_1}/>
                    <Button name={filterCalculate.btn_2}/>
                    <Button name={filterCalculate.btn_3}/>
                </div>
                <div className={`w-full md:w-[70%] mt-5`}>
                    <div className={`overflow-hidden w-full h-full m-10 shadow-lg shadow-gray-300 rounded-lg`}>
                        <img
                            src={filterCalculate.img} alt="img"
                            className={`w-full h-full hover:scale-110 duration-200`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterCalculate
