import React from "react";
import { useNavigate } from "react-router-dom";
import NewQuestion from "./newQuestion";
import data from "../../models/model";

/**
 * `AskQuestionPage` 组件：
 * - 让用户填写新问题的表单
 * - 提交后，问题会被添加到 `data.questions`
 * - 提交后，页面跳回 `QuestionPage`
 */
const AskQuestionPage = () => {
    const navigate = useNavigate(); // ✅ 用于跳转回 `QuestionPage`

    const addQuestion = (newQ: { title: string; text: string; tags: string[]; askedBy: string }) => {
        const newQuestion = {
            qid: `q${data.questions.length + 1}`,
            title: newQ.title,
            text: newQ.text,
            tagIds: newQ.tags,
            askedBy: newQ.askedBy,
            askDate: new Date(),
            ansIds: [],
            views: 0,
        };

        data.questions.push(newQuestion);
        console.log("New Question Added:", newQuestion);
        navigate("/"); // ✅ 提交后，跳转回 `QuestionPage`
    };

    return (
        <div className="askQuestionContainer">
            <h2>Ask a New Question</h2>
            <NewQuestion addQuestion={addQuestion} handleQuestions={() => navigate("/")} />
        </div>
    );
};

export default AskQuestionPage;
