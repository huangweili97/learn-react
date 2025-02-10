import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewAnswerProps } from "../../../types/types";
import data from "../../../models/model";
import "./index.css"; // ✅ 引入 CSS

/**
 * A form for submitting a new answer.
 */
const NewAnswer: React.FC<NewAnswerProps> = ({ qid: propQid, addAnswer, handleAnswer }) => {
  const navigate = useNavigate();
  const { qid: paramQid } = useParams<{ qid: string }>(); // ✅ 从 URL 获取 `qid`
  const qid = propQid || paramQid; // ✅ 优先使用 `propQid`，否则从 `useParams()` 获取

  const [text, setText] = useState("");
  const [ansBy, setAnsBy] = useState("");
  const [errors, setErrors] = useState<{ text?: string; ansBy?: string }>({});

  if (!qid) {
    return <p className="error-message">Error: Missing question ID.</p>;
  }

  const validateForm = () => {
    let errors: { text?: string; ansBy?: string } = {};

    if (!text.trim()) {
      errors.text = "Answer cannot be empty.";
    }

    if (!ansBy.trim()) {
      errors.ansBy = "Your name cannot be empty.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // ✅ 生成符合数据库格式的新答案
    const newAnswer = {
      aid: `a${data.answers.length + 1}`,
      text,
      ansBy,
      ansDate: new Date(),
    };

    // ✅ 存入 `data.answers`
    data.answers.push(newAnswer);

    // ✅ 关联答案到问题
    const question = data.questions.find((q) => q.qid === qid);
    if (question) {
      question.ansIds.push(newAnswer.aid);
    }

    // ✅ 触发 `handleAnswer` 并跳转回 `AnswerPage.tsx`
    if (handleAnswer) handleAnswer(qid);
    navigate(`/question/${qid}`, { state: { newAnswer } });
  };

  return (
    <div className="new-answer-form-container">
      <h2 className="header-title">Answer the Question</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">Your Answer:</label>
          <textarea 
            className="form-textarea"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          {errors.text && <p className="error-message">{errors.text}</p>}

          <label className="form-label">Your Name:</label>
          <input 
            type="text" 
            className="form-input"
            value={ansBy} 
            onChange={(e) => setAnsBy(e.target.value)} 
          />
          {errors.ansBy && <p className="error-message">{errors.ansBy}</p>}

          <div className="mandatory-text">* All fields are required</div>

          <div className="button-group">
            <button type="submit" className="submit-button">Submit Answer</button>
            <button type="button" className="submit-button" onClick={() => navigate(`/question/${qid}`)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAnswer;
