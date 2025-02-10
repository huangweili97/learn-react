
import React, { useEffect, useState } from "react";
import { MainProps } from "../../types/types";
import Application from "../../models/application";
import NewQuestionForm from "./newQuestion";
import QuestionPage from "./questionPage";
import TagPage from "./tagPage";
import Tag from "../../models/tag";

/**
 * Main component: Renders the main content area
 */
const Main: React.FC<MainProps> = ({ search, pageInstance }) => { 
    const app = Application.getInstance();
    
    const [selected, setSelected] = useState(pageInstance?.getSelected() || "q");
    const [showNewQuestionForm, setShowNewQuestionForm] = useState(false);
    const [questions, setQuestions] = useState(app.getQuestionsByFilter(0, "newest", search).qSlice);

    useEffect(() => {
        if (selected === "q") {
            setQuestions(app.getQuestionsByFilter(0, "newest", search).qSlice);
        }
    }, [search, selected]);

    function handleAskQuestion() {
        setShowNewQuestionForm(true);
    }

    return (
        <div className="right_main">
            {selected === "q" ? (
                <QuestionPage
                    title_text="All Questions"
                    qlist={questions}
                    qSize={questions.length}
                    pageNum={0}
                    handleNewQuestion={handleAskQuestion}
                    getTagById={(id: string): Tag | null => null}
                    search={search}
                />
            ) : (
                <TagPage
                    tlist={app.getAllTags()}
                    getQuestionCountByTag={(tid: string) => app.getQuestionCountByTag(tid)}
                    clickTag={(tagName: string) => {
                        console.log(`Clicked tag: ${tagName}`);
                    }}
                    handleNewQuestion={handleAskQuestion}
                />
            )}

            {showNewQuestionForm && (
                <NewQuestionForm addQuestion={(question) => app.addQuestion(question)} />
            )}
        </div>
    );
};

export default Main;
