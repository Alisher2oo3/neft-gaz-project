import {Button, Input} from "../components";
import {calculate} from "../constanta/constanta";
import {useState} from "react";

const Calculate = () => {
    const [calculates, setCalculates] = useState([])
    const [totalValue, setTotalValue] = useState(0)
    const handleCalculate = () => {
        let sum = 0, calculateList = Object.values(calculates)
        for (let i = 0; i < Object.values(calculates).length; i++) {
            sum += Number(calculateList[i])
        }
        setTotalValue(sum)
    };
    return (<div className='container py-10'>
        <h1 className={`text-center text-[2rem] font-semibold tracking-wider leading-7`}>
            {calculate.heading}
        </h1>
        <div className='w-full flex justify-between items-start flex-wrap lg:flex-nowrap py-20'>
            <div className={`w-1/2`}>
                {calculate.inputList.map(item => (<Input
                    namesId={item.nameAndId}
                    labels={item.label}
                    types={`number`}
                    placeholder={`miqdorni kiriting...`}
                    stylesLabel={`text-blue-700 text-[1.3rem] tracking-wide`}
                    setValue={setCalculates}
                />))}
            </div>
            <div className={`w-1/2`}>
                <div className={`w-full h-full overflow-hidden rounded-md`}>
                    <img src={calculate.img_1} alt="img" className={`w-full h-full hover:scale-110 duration-200`}/>
                </div>
            </div>
        </div>
        <div className={`mb-5 flex justify-between items-center w-1/2`}>
            <Button name={`Calculate`} onClick={handleCalculate}/>
            <p className={`text-[2rem] font-medium`}>
                TOTAL_VALUE:
                <span className={`font-bold ms-5 text-red-500`}>
                    {totalValue}
                </span>
            </p>
        </div>
    </div>)
}
export default Calculate
