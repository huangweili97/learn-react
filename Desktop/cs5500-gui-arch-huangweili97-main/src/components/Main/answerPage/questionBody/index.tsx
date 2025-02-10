// import "./index.css";
// import React from "react";
// import { QuestionBodyProps } from "../../../../types/types";

// /**
//  * The answer renders the question information after the header
//  * @param param0 the input props needed to render the question body
//  * @returns the question body component
//  */
// const QuestionBody = ({ views, text, askby, meta }: QuestionBodyProps) => {
//   return (
//     <div id="questionBody">
//       Question Body
//     </div>
//   );
// };

// export default QuestionBody;
import "./index.css";
import React from "react";
import { QuestionBodyProps } from "../../../../types/types";
import { getMetaData } from "../../../../util/dateFormatter";

const QuestionBody = ({ views, text, askby, meta }: QuestionBodyProps) => {
  return (
    <div id="questionBody" className="space_between">
        <span className="view-count">{views} views</span>
        <span className="question-text">{text}</span>
        <span className="question-author">
            <strong>{askby}</strong> asked {getMetaData(new Date(meta))}
        </span>
    </div>
  );
};

export default QuestionBody;
