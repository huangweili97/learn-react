
import { AnswerHeaderProps } from "../../../../types/types";
import "./index.css";

const AnswerHeader = ({ ansCount, title }: AnswerHeaderProps) => {
    return (
        <div id="answersHeader" className="space_between">
            <span className="answer-count">{ansCount} answers</span>
            <h2 className="question-title">{title}</h2>
        </div>
    );
};

export default AnswerHeader;
