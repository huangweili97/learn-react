


import { Routes, Route } from "react-router-dom";
import FakeStackOverflow from "./components/fakestackoverflow";
import AnswerPage from "./components/Main/answerPage";
import data from "./models/model";
import Application from "./models/application";
import './stylesheets/index.css';
import AskQuestionPage from "./components/Main/askQuestionPage";
import NewAnswer from "./components/Main/newAnswer";



/**
 * The App component handles the main routing.
 */
function App() {
    const app = Application.getInstance(data);

    return (
        <Routes>
            <Route path="/" element={<FakeStackOverflow app={app} />} />
            <Route path="/question/:qid" element={<AnswerPage />} />
            <Route path="/ask" element={<AskQuestionPage />} />
            <Route path="/answer/:qid/new" element={<NewAnswer qid="" addAnswer={() => {}} handleAnswer={() => {}} />} />

            
        </Routes>
    );
}

export default App;



