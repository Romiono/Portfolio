import progress from '../../assets/UI/Group 1.svg'
const Greetings = () => {
    return (
        <div className={'container mx-auto flex flex-row px-8 mb-40'}>
            <div className={'basis-3/4'}>
                <h1 className={'font-bold text-5xl mb-7'}>Hello, I'am<br/> a Frontend Developer</h1>
                <p className={'text-gray-600'}>Я Frontend разработчик, занимаюсь<br/> написанием сайтов любой сложерсти на <br/>React + ts</p>
                <button className={'bg-accent w-1/5 h-11 my-7 rounded'}>Создать сайт!</button>
            </div>
            <div className={'basis-1/4 flex justify-end items-center'}>
                <img className={'h-52'} src={progress} alt={'progress'}/>
            </div>
        </div>
    );
};

export default Greetings;