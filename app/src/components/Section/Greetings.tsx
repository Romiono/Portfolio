import progress from '../../assets/UI/Group 1.svg'
import {useState} from "react";
import Modal from "../UI/modal/Modal.tsx";

const Greetings = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={'container mx-auto flex flex-row px-8 mb-40'}>
            <div data-aos={'fade-right'} data-aos-easing="ease-out-cubic"
                 data-aos-duration="500" data-aos-delay={'300'} className={'basis-full text-center md:basis-3/4 md:text-left'}>
                <h1 className={'font-bold text-5xl mb-7'}>Hello, I'am<br/> a Frontend Developer</h1>
                <p className={'text-gray-600'}>Я Frontend разработчик, занимаюсь<br/> написанием сайтов любой сложности на <br/>React + ts</p>
                <button onClick={() => setIsOpen(!isOpen)} className={'bg-accent w-1/2 xl:w-1/4 h-11 my-7 rounded'}>Создать сайт!</button>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div data-aos={'fade-left'} data-aos-easing="ease-out-cubic"
                 data-aos-duration="500" data-aos-delay={'300'} className={'md:basis-1/4 md:flex justify-end items-center hidden'}>
                <img className={'h-52'} src={progress} alt={'progress'}/>
            </div>
        </div>
    );
};

export default Greetings;