import { useState, useEffect } from "react";
import getPage from "../components/routing/pageFactory";
import { ApplicationInterface } from "../types/types";

export const useFakeStackOverflow = (app: ApplicationInterface) => {
    const [search, setSearch] = useState("");
    const [mainTitle, setMainTitle] = useState("All Questions");
    const [questionOrder, setQuestionOrder] = useState("newest");
    const [qid, setQid] = useState("");
    const [pageIndex, setPageIndex] = useState(0);
    const [selectedPage, setSelectedPage] = useState("q"); 

    function setQuestionPage(pageIndex = 0, search = "", title = "All Questions") {
        setPageIndex(pageIndex);
        setSearch(search);
        setMainTitle(title);
    }

    function handleQuestions() {
        console.log("Switching to Questions Page");
        setSelectedPage("q");
        setPageInstance(getPage({ pageName: "home", params }));
    }
    
    function handleTags() {
        console.log("Switching to Tags Page");
        setSelectedPage("t");
        setPageInstance(getPage({ pageName: "tag", params }));
    }
    
    function handleAnswer(qid: string) {
        setQid(qid);
        setPageInstance(getPage({ pageName: "answer", params: { ...params, qid } }));
    }


    function clickTag(tagName: string) {
        console.log(`Navigating to tag: ${tagName}`);
        setSearch(tagName);
        setSelectedPage("q"); // ✅ 确保 useEffect 触发
    }
    

    function handleNewQuestion() {
        setPageInstance(getPage({ pageName: "newQuestion", params }));
    }

    function handleNewAnswer() {
        setPageInstance(getPage({ pageName: "newAnswer", params }));
    }

    const params = {
        app,
        search,
        title: mainTitle,
        pageIndex,
        setQuestionPage,
        questionOrder,
        setQuestionOrder,
        qid,
        handleQuestions,
        handleTags,
        handleAnswer,
        clickTag,
        handleNewQuestion,
        handleNewAnswer,
    };

    const [pageInstance, setPageInstance] = useState(getPage({ pageName: "home", params }));

    useEffect(() => {
        const updatedParams = { 
            ...params,
            search, 
            title: mainTitle, 
            questionOrder, 
            pageIndex 
        };
        setPageInstance(getPage({ pageName: selectedPage === "q" ? "home" : "tag", params: updatedParams }));
    }, [selectedPage, search, questionOrder, pageIndex]);

    return {
        search,
        setQuestionPage,
        pageInstance,
        handleQuestions,
        handleTags,
    };
};
