
const Greetings = () => {
    return (
        <div className={'container mx-auto flex flex-row px-8'}>
            <div className={'basis-3/4'}>
                <h1 className={'font-bold text-5xl mb-3'}>Hello, I'am<br/> a Frontend Developer</h1>
                <p className={'text-gray-600'}>Я Frontend разработчик, занимаюсь<br/> написанием сайтов любой сложерсти на <br/>React + ts</p>
                <button className={''}>Создать сайт!</button>
            </div>
            <div className={'basis-1/4'}>2</div>
        </div>
    );
};

export default Greetings;