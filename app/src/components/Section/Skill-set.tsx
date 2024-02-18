import styled from "styled-components";
import SkillCard, {ISkillCard} from "../UI/Skill-card/Skill-card.tsx";
import progress from "../../assets/UI/Group 2.svg";
// import {FolderArrowDownIcon} from '@heroicons/react/24/outline';
import git from '../../assets/skill-cards/git.svg';
import design from '../../assets/skill-cards/design.svg';
import server from '../../assets/skill-cards/server-cluster_svgrepo.com.svg';
import web from '../../assets/skill-cards/web_svgrepo.com.svg';
import frontend from '../../assets/skill-cards/frontend.svg';
import db from '../../assets/skill-cards/database-1_svgrepo.com.svg';


const SkillSet = () => {

    const Span = styled.span`
        position: relative;

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            top: 110%;
            left: 0;
            background-color: #FF4A57;
            border-radius: 3px;
        }`;


    const cards: ISkillCard[] = [
        {
            title: 'Гитхаб',
            description: 'Давно установленный факт, что читатель будет отвлекаться на читабельное содержимое страницы при просмотре ее заголовка',
            icon: git
        },
        {
            title: 'Дизайн',
            description: 'Давно установленный факт, что читатель будет отвлекаться на читабельное содержимое страницы при просмотре ее заголовка',
            icon: design
        },
        {
            title: 'Бекенд',
            description: 'Давно установленный факт, что читатель будет отвлекаться на читабельное содержимое страницы при просмотре ее заголовка',
            icon: server
        },
        {
            title: 'Веб',
            description: 'Давно установленный факт, что читатель будет отвлекаться на читабельное содержимое страницы при просмотре ее заголовка',
            icon: web
        },
        {
            title: 'Фронтенд',
            description: 'Давно установленный факт, что читатель будет отвлекаться на читабельное содержимое страницы при просмотре ее заголовка',
            icon: frontend
        },
        {
            title: 'Базы данных',
            description: 'Давно установленный факт, что читатель будет отвлекаться на читабельное содержимое страницы при просмотре ее заголовка',
            icon: db
        },
    ]
    return (
        <div className={'container mx-auto px-8 mb-40'}>
            <h2 data-aos={'fade-right'} data-aos-easing="ease-out-cubic"
                data-aos-duration="500" data-aos-delay={'300'} className={'text-5xl text-accent mb-10'}>
                <Span>Skill</Span>-Set</h2>
            <div className={'sm:columns-2 flex flex-row justify-center'}>
                {/*<div className={'columns-3 basis-11/12'}>*/}
                <div data-aos={'fade-right'} data-aos-easing="ease-out-cubic"
                     data-aos-duration="500" data-aos-delay={'500'}
                     className={'xl:basis-9/12 lg:basis-11/12 basis-full grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2'}>

                    {cards.map((card, index) =>
                        <div className={'w-full h-full flex justify-center items-center'}>
                            <SkillCard icon={card.icon} key={index} title={card.title} description={card.description}/>
                        </div>)}

                </div>
                <div data-aos-easing="ease-out-cubic"
                     data-aos-duration="500" data-aos-delay={'500'} data-aos={'fade-left'}
                     className={'xl:basis-3/12 md:basis-1/12 md:flex justify-end items-center hidden'}>
                    <img className={'h-52'} src={progress} alt={'progress'}/>
                </div>
            </div>
        </div>
    );
};


export default SkillSet;
