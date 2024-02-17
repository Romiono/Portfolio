import styled from "styled-components";
import SkillCard, {ISkillCard} from "../UI/Skill-card/Skill-card.tsx";
import progress from "../../assets/UI/Group 1.svg";
// import {FolderArrowDownIcon} from '@heroicons/react/24/outline'
import git from '../../assets/skill-cards/git.svg'


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
    }
`;
    const cards: ISkillCard[] = [
        {title: 'github', description: 'Контроль версий', icon: git}
    ]
    return (
        <div className={'container mx-auto px-8'}>
            <h2 className={'text-5xl text-accent mb-10'}><Span>Skill</Span>-Set</h2>
            <div className={'columns-2 flex flex-row'}>
                {/*<div className={'columns-3 basis-11/12'}>*/}
                <div className={'basis-7/12 grid grid-cols-3'}>
                    {cards.map((card, index) => <SkillCard icon={card.icon} key={index} title={card.title} description={card.description}/>)}
                </div>
                <div className={'basis-5/12 flex justify-end items-center'}>
                    <img className={'h-52'} src={progress} alt={'progress'}/>
                </div>
            </div>
        </div>
    );
};


export default SkillSet;