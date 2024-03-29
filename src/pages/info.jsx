import {calculate, info} from "../constanta/constanta";
import {Button, Input} from "../components";
import {useState} from "react";

const Info = () => {
    const [calculatesInfo, setCalculatesInfo] = useState([])
    const [totalValue, setTotalValue] = useState(0)
    const handleCalculate = () => {
        let sum = 0, calculateList = Object.values(calculatesInfo)
        for (let i = 0; i < Object.values(calculatesInfo).length; i++) {
            sum += Number(calculateList[i])
        }
        setTotalValue(sum)
    };

    return (<div className={`container py-10`}>
        <h1 className={`text-center text-[2rem] font-semibold tracking-wider leading-10 bg-gray-200`}>
            {info.heading}
        </h1>
        <div className='w-full flex justify-between items-center flex-wrap lg:flex-nowrap pt-20 pb-10'>
            <div className={`w-[60%]`}>
                {info.inputList.map(item => (<Input
                    namesId={item.nameAndId}
                    labels={item.label}
                    types={`number`}
                    placeholder={`miqdorni kiriting...`}
                    stylesLabel={`text-white bg-lime-500 text-[1rem] tracking-wide px-1 py-[1px]`}
                    setValue={setCalculatesInfo}
                />))}
            </div>
            <div className={`w-[40%]`}>
                <div className={`w-full h-full overflow-hidden rounded-md`}>
                    <img src={info.img} alt="img" className={`w-full h-full hover:scale-110 duration-200`}/>
                </div>
                <div className={`flex flex-col gap-5 my-16`}>
                    <Button name={info.btn_1}/>
                    <Button name={info.btn_2}/>
                </div>
            </div>
        </div>
        <div className={`text-center`}>
            <p className={`text-[2rem] font-medium mb-8`}>
                TOTAL_VALUE:
                <span className={`font-bold ms-5 text-red-500`}>
                    {totalValue}
                </span>
            </p>
            <Button name={info.btn} onClick={handleCalculate}/>
        </div>
    </div>)
}
export default Info
