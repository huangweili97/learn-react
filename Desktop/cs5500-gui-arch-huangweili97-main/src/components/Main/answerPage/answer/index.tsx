import { AnswerProps } from "../../../../types/types";
import "./index.css";
import { getMetaData } from "../../../../util/dateFormatter";

const Answer = ({ text, ansBy, meta }: AnswerProps) => {
  return (
    <div className="answer">
      <p>{text}</p>
      <span className="answer-meta">
        <strong>{ansBy}</strong> answered {meta}
      </span>
    </div>
  );
};

export default Answer;
