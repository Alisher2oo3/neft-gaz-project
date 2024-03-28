import {Button, Input} from "../components";

const Calculate = () => {
    return (
        <div className='container'>
            <h1 className={`text-center text-[2rem] font-semibold tracking-wider leading-7`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid aperiam cupiditate nam nobis quod tenetur?
                Cum minima quasi voluptate.
            </h1>
            <div className='w-full flex justify-between items-start flex-wrap lg:flex-nowrap'>
                <div className={`w-1/2`}>
                    <Input
                        namesId={`username`}
                        types={`text`}
                        placeholder={`sonni kirit`}
                        stylesLabel={`text-blue-700 text-[1.3rem] tracking-wide`}
                    />
                </div>
                <div className={`w-1/2`}>
                    img
                </div>
            </div>
            <div>
                <Button name={`Calculate`} />
            </div>
        </div>
    )
}
export default Calculate
