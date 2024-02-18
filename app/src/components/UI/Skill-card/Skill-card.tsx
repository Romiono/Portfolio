// import {FolderArrowDownIcon} from '@heroicons/react/24/outline'
import styled from "styled-components";
import {useState} from "react";
import classes from './Skill-cars.module.css'

export interface ISkillCard {
    icon: string
    title: string
    description: string
}

const SkillCard = ({title, icon, description}: ISkillCard) => {

    const Icon = styled.div`
        width: 90%;
        height: 90%;
        margin: 5px;
        border-radius: 10px;
        fill: #FF4A57;    
    `;

    const FrontStyle = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const BackStyle = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateY(180deg);
        flex-direction: column;
        box-sizing: border-box;
    `;
    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className={`${classes.card} ${isFlipped ? classes.flipped : ''}`} onClick={handleClick}>
            <FrontStyle>
                <Icon className={'flex justify-center items-center bg-header'}>
                    <img className={'w-4/6 h-4/6 fill-accent'} src={icon} alt={'card-logo'}/>
                </Icon>
            </FrontStyle>
            <BackStyle>
                <Icon className={'bg-header flex flex-col justify-center p-10 gap-1.5'}>
                    <img className={'w-1/4'} src={icon} alt={'card-logo'}/>
                    <h6 className={'font-bold text-2xl'}>{title}</h6>
                    <p className={'text-xs text-gray-600'}>{description}</p>
                </Icon>
            </BackStyle>
        </div>
    );

};


export default SkillCard;