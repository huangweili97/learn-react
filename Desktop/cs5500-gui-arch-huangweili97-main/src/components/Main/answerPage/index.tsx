import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import data from "../../../models/model";
import AnswerHeader from "./header";
import QuestionBody from "./questionBody";
import Answer from "./answer";
import "./index.css";
import { getMetaData } from "../../../util/dateFormatter";

const AnswerPage = () => {
  const { qid } = useParams<{ qid: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const [question, setQuestion] = useState(() => {
    const foundQuestion = data.questions.find((q) => q.qid === qid);
    return foundQuestion ? { ...foundQuestion, askDate: new Date(foundQuestion.askDate) } : null;
  });

  const [answers, setAnswers] = useState(() => {
    return data.answers
      .filter((ans) => question?.ansIds.includes(ans.aid))
      .map((ans) => ({ ...ans, ansDate: new Date(ans.ansDate) }));
  });

  useEffect(() => {
    if (qid) {
      const updatedQuestion = data.questions.find((q) => q.qid === qid);
      if (updatedQuestion) {
        updatedQuestion.views += 1;
        setQuestion({ ...updatedQuestion, askDate: new Date(updatedQuestion.askDate) });
        setAnswers(
          data.answers
            .filter((ans) => updatedQuestion.ansIds.includes(ans.aid))
            .map((ans) => ({ ...ans, ansDate: new Date(ans.ansDate) }))
        );
      } else {
        navigate("/");
      }
    }
  }, [qid]);

  useEffect(() => {
    if (location.state?.newAnswer) {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { ...location.state.newAnswer, ansDate: new Date(location.state.newAnswer.ansDate) },
      ]);
    }
  }, [location.state]);

  return (
    <div className="answer-page">
      {question ? (
        <>
          <div className="button-container">
            <button className="bluebtn" onClick={() => navigate("/ask")}>Ask a Question</button>
            <button className="bluebtn" onClick={() => navigate(`/answer/${qid}/new`)}>
              Answer Question
            </button>
          </div>

          <AnswerHeader ansCount={answers.length} title={question.title} />

          <QuestionBody
            views={question.views}
            text={question.text}
            askby={question.askedBy}
            meta={getMetaData(question.askDate)}
          />

          {answers.length > 0 ? (
            answers.map((ans) => (
              <Answer
                key={ans.aid}
                text={ans.text}
                ansBy={ans.ansBy}
                meta={getMetaData(ans.ansDate)}
              />
            ))
          ) : (
            <p>No answers yet.</p>
          )}
        </>
      ) : (
        <p>Question not found.</p>
      )}
    </div>
  );
};

export default AnswerPage;
