import './App.css'
import Header from "./components/UI/Header/Header.tsx";
import Greetings from "./components/Section/Greetings.tsx";
import SkillSet from "./components/Section/Skill-set.tsx";

function App() {

    return (
        <div>
            <Header/>
            <Greetings/>
            <SkillSet/>
        </div>
    )
}

export default App
