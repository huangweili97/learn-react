// import React from 'react';
// import PageClass from './index';
// import QuestionPage from '../Main/questionPage';
// import { ApplicationInterface, SetQuestionPage, StringHandler, NoParamHandler } from '../../types/types';

// export default class HomePageClass extends PageClass {
//     private setQuestionPage?: SetQuestionPage;
//     private setQuestionOrder?: StringHandler;
//     public handleAnswer?: StringHandler;
//     public clickTag?: StringHandler;
//     public handleNewQuestion?: NoParamHandler;

//     private constructor(app: ApplicationInterface) {
//         super(app);
//     }

//     public static HomePageClassBuilder(app: ApplicationInterface): HomePageClass {
//         return new HomePageClass(app);
//     }

//     public setSetQuestionPageFunc(setQuestionPage: SetQuestionPage): HomePageClass {
//         this.setQuestionPage = setQuestionPage;
//         return this;
//     }

//     public setSetQuestionOrderFunc(setQuestionOrder: StringHandler): HomePageClass {
//         this.setQuestionOrder = setQuestionOrder;
//         return this;
//     }

//     public setHandleAnswerFunc(handleAnswer: StringHandler): HomePageClass {
//         this.handleAnswer = handleAnswer;
//         return this;
//     }

//     public setClickTagFunc(clickTag: StringHandler): HomePageClass {
//         this.clickTag = clickTag;
//         return this;
//     }

//     public setHandleNewQuestionFunc(handleNewQuestion: NoParamHandler): HomePageClass {
//         this.handleNewQuestion = handleNewQuestion;
//         return this;
//     }

//     public build(): HomePageClass {
//         return this;
//     }

//     public getContent() {
//         try {
//             const qFilterResult = this.getApp().getQuestionsByFilter(this.pageIndex, this.questionOrder?.toLowerCase(), this.search);
//             return (
//                 <QuestionPage
//                     title_text={this.title}
//                     qlist={qFilterResult.qSlice}
//                     qSize ={qFilterResult.qLength}
//                     search={this.search}
//                     pageNum={this.pageIndex}
//                     getTagById={this.getApp().getTagById}
//                     setQuestionOrder={this.setQuestionOrder}
//                     clickTag={this.clickTag}
//                     handleAnswer={this.handleAnswer}
//                     handleNewQuestion={this.handleNewQuestion}
//                     setQuestionPage={this.setQuestionPage}
//                 />
//             );
//         }
//         catch (e) {
//             console.error(`Failed to set QuestionPage props: ${e}`);
//             return null;
//         }
//     }

//     public getSelected() {
//         return "q";
//     }
// }
import React from 'react';
import PageClass from './index';
import Main from '../Main';
import { ApplicationInterface, SetQuestionPage, StringHandler, NoParamHandler } from '../../types/types';


/**
 * HomePageClass represents the homepage of the application.
 * It extends PageClass and provides methods to configure behavior.
 */
export default class HomePageClass extends PageClass {
    private setQuestionPage?: SetQuestionPage;
    private setQuestionOrder?: StringHandler;
    public handleAnswer?: StringHandler;
    public clickTag?: StringHandler;
    public handleNewQuestion?: NoParamHandler;

    private constructor(app: ApplicationInterface) {
        super(app);
    }

    public static HomePageClassBuilder(app: ApplicationInterface): HomePageClass {
        return new HomePageClass(app);
    }

    public setSetQuestionPageFunc(setQuestionPage: SetQuestionPage): HomePageClass {
        this.setQuestionPage = setQuestionPage;
        return this;
    }

    public setSetQuestionOrderFunc(setQuestionOrder: StringHandler): HomePageClass {
        this.setQuestionOrder = setQuestionOrder;
        return this;
    }

    public setHandleAnswerFunc(handleAnswer: StringHandler): HomePageClass {
        this.handleAnswer = handleAnswer;
        return this;
    }

    public setClickTagFunc(clickTag: StringHandler): HomePageClass {
        this.clickTag = clickTag;
        return this;
    }

    public setHandleNewQuestionFunc(handleNewQuestion: NoParamHandler): HomePageClass {
        this.handleNewQuestion = handleNewQuestion;
        return this;
    }

    public build(): HomePageClass {
        return this;
    }

    /**
     * Retrieves the homepage content.
     * Uses Main.tsx and correctly passes required props.
     * 
     * 获取主页内容，并正确传递 `MainProps`。
     * @returns 返回主页的 JSX 内容。
     */
    public getContent() {
        return (
            <Main
                search={this.search ?? ""} 
                setQuestionPage={this.setQuestionPage!} 
                pageInstance={this}
                //handleQuestions={() => console.log("handleQuestions")}
                //handleTags={() => console.log("handleTags")}
            />
        );
    }

    /**
     * Retrieves the selected page identifier.
     * @returns The identifier of the selected page.
     */
    public getSelected() {
        return "q";
    }
}
