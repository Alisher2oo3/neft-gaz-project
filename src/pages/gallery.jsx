import {useState} from 'react';
import {imgData} from "../constanta/constanta";

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = (index) => {
        setModalImage(imgData[index].img);
        setActiveIndex(index);
    };

    const closeModal = () => setModalImage(null);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imgData.length);
        setModalImage(imgData[(activeIndex + 1) % imgData.length].img);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + imgData.length) % imgData.length);
        setModalImage(imgData[(activeIndex - 1 + imgData.length) % imgData.length].img);
    };

    return (
        <div className={`container px-10 lg:px-0 pb-10`}>
            <h1 className={`text-[2rem] mt-10 font-bold`}>Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
                {imgData.map((image, i) => (
                    <div
                        className='w-full h-64 rounded-lg p-2 hover:-mt-2 hover:shadow-lg hover:shadow-[#5b574d] duration-200 bg-[#F1E8D7] shadow-md shadow-[#949087]'>
                        <img
                            key={i}
                            className="w-full h-full object-cover rounded-md hover:cursor-pointer"
                            src={image.img}
                            alt={`Image ${image.id}`}
                            onClick={() => openModal(i)}
                        />
                    </div>
                ))}

                {modalImage && (
                    <div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                        <button
                            className="absolute top-0 right-0 m-4 text-white text-[2rem]"
                            onClick={closeModal}>
                            &times;
                        </button>
                        <button
                            className="absolute top-1/2 left-4 text-white text-[2rem]"
                            onClick={prevSlide}>
                            &lt;
                        </button>
                        <button
                            className="absolute top-1/2 right-4 text-white text-[2rem]"
                            onClick={nextSlide}>
                            &gt;
                        </button>
                        <img
                            className="max-h-full max-w-full zoom-gallery"
                            src={modalImage}
                            alt="Modal Image"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Gallery