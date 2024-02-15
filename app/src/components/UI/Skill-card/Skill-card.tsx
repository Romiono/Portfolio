import {FolderArrowDownIcon} from '@heroicons/react/24/outline'
import styled from "styled-components";
const SkillCard = () => {

    const Icon = styled.div`
        width: 90%;
        height: 90%;
        margin: 5px;
    `;
    return (
        <div>
            <Icon className={'grid content-center bg-header'}>
                <FolderArrowDownIcon/>
            </Icon>
            <div>

            </div>
        </div>
    );
};

export default SkillCard;