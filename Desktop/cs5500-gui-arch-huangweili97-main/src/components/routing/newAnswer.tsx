import React from "react";
import PageClass from ".";
import NewAnswer from "../Main/newAnswer";
import { useParams } from "react-router-dom";
import { StringHandler, ApplicationInterface } from "../../types/types";

export default class NewAnswerPageClass extends PageClass {
    private handleAnswer?: StringHandler;

    private constructor(app: ApplicationInterface) {
        super(app);
    }

    public static NewAnswerPageClassBuilder(app: ApplicationInterface): NewAnswerPageClass {
        return new NewAnswerPageClass(app);
    }

    public setHandleAnswerFunc(handleAnswer: StringHandler): NewAnswerPageClass {
        this.handleAnswer = handleAnswer;
        return this;
    }

    public build(): NewAnswerPageClass {
        return this;
    }

    public getContent() {
        const { qid } = useParams<{ qid: string }>(); // ✅ 从 URL 获取 `qid`

        if (!qid) {
            console.error("Error: No valid question selected.");
            return <p>Error: No valid question selected.</p>;
        }

        return <NewAnswer qid={qid} addAnswer={this.getApp().addAnswer} handleAnswer={this.handleAnswer} />;
    }

    public getSelected() {
        return "";
    }
}
