import './App.css'
import Header from "./components/UI/Header/Header.tsx";
import Greetings from "./components/Section/Greetings.tsx";
import SkillSet from "./components/Section/Skill-set.tsx";
import Partfolio from "./components/Section/partfolio.tsx";
import {useEffect, useRef} from "react";
import * as Aos from "aos";

function App() {

    const portfolio = useRef<HTMLDivElement>(null);
    const skillSet = useRef<HTMLDivElement>(null);

    const scrolToTarget1 = () => {
        if(skillSet.current) {
            skillSet.current.scrollIntoView({behavior: 'smooth'});
        }
    }
    const scrolToTarget2 = () => {
        if(portfolio.current) {
            portfolio.current.scrollIntoView({behavior: 'smooth'});
        }
    }


    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>
            <Header func1={scrolToTarget1} func2={scrolToTarget2}/>
            <Greetings />
            <div ref={skillSet}>
                <SkillSet/>
            </div>
            <div ref={portfolio}>
                <Partfolio/>
            </div>

        </div>
    )
}

export default App
