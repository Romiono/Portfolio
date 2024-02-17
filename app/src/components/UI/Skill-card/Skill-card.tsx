// import {FolderArrowDownIcon} from '@heroicons/react/24/outline'
import styled from "styled-components";
import {useState} from "react";
export interface ISkillCard {
    icon: string
    title: string
    description: string
}

const SkillCard = ({title, icon, description}: ISkillCard) => {

    const [flip, setFlip] = useState<boolean>(false)

    const Icon = styled.div`
        width: 90%;
        height: 90%;
        margin: 5px;
    `;
    return (
        <div onClick={() => setFlip(!flip)}>
            {flip ?
                <div>
                    <div>
                        {/*<svg path={icon} className={'w-full h-full'}/>*/}
                        <img src={icon} alt={'card-logo'} />
                        <h6>{title}</h6>
                        <p>{description}</p>
                    </div>
                </div> :
                <Icon className={'grid justify-center items-center bg-header'}>
                    {/*<svg path={icon} className={'w-full'}/>*/}
                    {/*<FolderArrowDownIcon/>*/}
                    <img src={icon} alt={'card-logo'}/>
                </Icon>
            }
        </div>
    );
};

export default SkillCard;