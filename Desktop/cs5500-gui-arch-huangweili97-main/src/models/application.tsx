import Question from "./question";
import Tag from "./tag";
import Answer from "./answer";
import { ApplicationInterface, ApplicationProps, QuestionsFilterType } from "../types/types";

// /**
//  * The class encapsulate the application data
//  * and operations to manipulate the data.
//  * The class is a singleton class.
//  * All the data is stored in memory.
//  * While this is an obvious limitation for large datasets
//  * it is sufficient for a prototype such as this one.
//  * @implements ApplicationInterface
//  */

// export default class Application implements ApplicationInterface {
//     private static instance: Application;
//     questions: Question[];
//     tags: Tag[];
//     answers: Answer[];

//     /**
//      * private constructor to create a singleton instance of the Application
//      * @param data - the questions, tags, and answers to be stored in the application 
//      * @returns the singleton instance of the Application class
//      */
//     private constructor({ questions, tags, answers }: ApplicationProps) {
//         this.questions = [];
//         this.tags = [];
//         this.answers = [];

//         questions.forEach((q) => {
//             this.questions.push(new Question(q));
//         });
        
//         tags.forEach((t) => {
//             this.tags.push(new Tag(t));
//         });

//         answers.forEach((a) => {
//             this.answers.push(new Answer(a));
//         });
//     }

//     /**
//      * getInstance method to get the singleton instance of the Application
//      * @param data - the questions, tags, and answers 
//      * to be stored in the application
//      * @returns a singleton instance of the Application
//      */
//     public static getInstance(data: ApplicationProps): Application {
//         if (!Application.instance) {
//             Application.instance = new Application(data);
//         }
//         return Application.instance;
//     }

//     /**
//      * saves a new answer for a selected question
//      * @param qid an existing question id to add the answer to
//      * @param answer answer to be added
//      * @returns a unique id for the answer added
//      */
//     addAnswer = (qid: string, answer: { text: string; ansBy: string }) => {
//         return "aid";
//     };

//     /**
//      * saves a new question to the application
//      * @param question - the question to be added
//      * @returns a unique id for the question added
//      */
//     addQuestion = (question: {
//         title: string;
//         text: string;
//         askedBy: string;
//         tags: string[];
//     }) => {
//         return "qid";
//     };

//     /**
//      * adds a tag to a question if it does not exist
//      * otherwise returns the tag id of an existing tagname
//      * @param tagname - the name of the tag to be added
//      * @returns existing tag or a new tag id
//      */
//     addTag = (tagname: string) => {
//         return "tid";
//     };

//     /**
//      * retrieves the number of questions associated with an existing tag
//      * @param tid an existing tag id in the application
//      * @returns the number of questions associated with the tag
//      */
//     getQuestionCountByTag = (tid: string) => {
//         return 0;
//     };

//     /**
//      * retrieves a slice of questions in the application
//      * of length 5, starting from a given index that match a search criteria
//      * in an order selected by the user
//      * @param startIndex the index to start retrieving questions from
//      * @param order the display order of the questions, 
//      * allowed values are "newest", "active", "unanswered"
//      * @param search the search string entered by the user
//      * @returns a object containing the slice of questions 
//      * and the total number of questions matching the criteria and the order
//      */
//     getQuestionsByFilter = (startIndex = 0, order = "newest", search = "") => {
//         const filteredQuestions: Question[] = [];
//         return {
//             qSlice: filteredQuestions,
//             qLength: filteredQuestions.length
//         };
//     };

//     /**
//      * retrieve a question object by its id
//      * @param qid 
//      * @returns a question object if the question id exists in the application
//      * otherwise returns undefined
//      */
//     getQuestionById = (qid: string | undefined) : Question | undefined => {
//         return this.questions[0];
//     };

//     /**
//      * retrieves the answers to a question
//      * @param question a question object or null
//      * @returns an array of answer objects to the question
//      * the answers are sorted by the date they were added,
//      * that is, the newest answer is the first in the array
//      */
//     getQuestionAnswer = (question: Question | null) => {
//         return this.answers;
//     };

//     /**
//      * 
//      * @returns the number of tags in the application
//      */
//     getTagCount = () => {
//         return this.tags.length;
//     };

//     /**
//      * 
//      * @returns an array of tag objects in the application
//      */
//     getTags = () => {
//         return this.tags;
//     };

//     /**
//      * retrieves a tag object by its id
//      * @param id an existing tag id in the application
//      * @returns a tag object if the tag id exists in the application
//      * otherwise returns null
//      */
//     getTagById = (id: string): Tag | null => {
//         return null;
//     };
// }


/**
 * The Application class manages the application's data.
 * It follows the singleton pattern to ensure only one instance exists.
 * All data is stored in memory.
 * 
 * Application 类管理应用数据，使用单例模式，所有数据存储在内存中。
 * @implements ApplicationInterface
 */
export default class Application implements ApplicationInterface {
  getAllTags(): Tag[] {
    throw new Error("Method not implemented.");
  }
    private static instance: Application;
    questions: Question[];
    tags: Tag[];
    answers: Answer[];

    /**
     * Private constructor to create a singleton instance.
     * @param data - An object containing questions, tags, and answers.
     * 
     * 私有构造函数，创建一个单例实例。
     */
    private constructor({ questions, tags, answers }: ApplicationProps) {
        this.questions = questions.map(q => new Question(q));
        this.tags = tags.map(t => new Tag(t));
        this.answers = answers.map(a => new Answer(a));
    }
    setPageInstance(arg0: any): unknown {
        throw new Error("Method not implemented.");
    }

    /**
     * Returns the singleton instance of the Application class.
     * @param data Optional initialization data.
     * @returns The single Application instance.
     */
    static getInstance(data?: ApplicationProps): Application {
        if (!Application.instance) {
            if (!data) {
                throw new Error("Application must be initialized with data.");
            }
            Application.instance = new Application(data);
        }
        return Application.instance;
    }

    /**
 * Retrieves filtered questions based on search keyword.
 */
getQuestionsByFilter(startIndex: number, order = "newest", search = ""): QuestionsFilterType {
    let filteredQuestions = this.questions;

    if (search) {
        const searchLower = search.toLowerCase();
        filteredQuestions = filteredQuestions.filter(q =>
            q.title.toLowerCase().includes(searchLower) ||
            q.text.toLowerCase().includes(searchLower)
        );
    }

    return {
        qSlice: filteredQuestions.slice(startIndex, startIndex + 5),
        qLength: filteredQuestions.length,
    };
}


    /**
     * Adds a new question to the application.
     */
    addQuestion(question: { title: string; text: string; askedBy: string; tags: string[] }): string {
        const tagIds = question.tags.map(tagname => this.addTag(tagname));

        const newQuestion = new Question({
            qid: `q${this.questions.length + 1}`,
            title: question.title,
            text: question.text,
            tagIds,
            askedBy: question.askedBy,
            askDate: new Date(),
            ansIds: [],
            views: 0,
        });

        this.questions.push(newQuestion);
        return newQuestion.qid;
    }

    /**
     * Adds a new answer to a question.
     */
    addAnswer(qid: string, answer: { text: string; ansBy: string }): string {
        const question = this.getQuestionById(qid);
        if (!question) throw new Error("Question not found");

        const newAid = `a${this.answers.length + 1}`;
        const newAnswer = new Answer({ aid: newAid, text: answer.text, ansBy: answer.ansBy, ansDate: new Date() });

        question.ansIds.push(newAid);
        question.newAnsDate = new Date();
        this.answers.push(newAnswer);
        return newAid;
    }

    /**
     * Retrieves a question by its ID.
     */
    getQuestionById(qid: string | undefined): Question | undefined {
        if (!qid) return undefined;
        const question = this.questions.find(q => q.qid === qid);
        if (question) {
            question.views += 1;  // ✅ 这里增加 views 计数
        }
        return question;
    }

    /**
     * Retrieves all answers associated with a question.
     */
    getQuestionAnswer(question: Question | null): Answer[] {
        if (!question) return [];
        return this.answers.filter(a => question.ansIds.includes(a.aid));
    }

    /**
     * Retrieves all tags in the application.
     */
    getTags(): Tag[] {
        return this.tags;
    }

    /**
     * Retrieves a tag object by its ID.
     */
    getTagById(id: string): Tag | null {
        return this.tags.find(tag => tag.tid === id) || null;
    }

    /**
     * Adds a tag to the application if it does not exist.
     */
    addTag(tagname: string): string {
        const existingTag = this.tags.find(tag => tag.name === tagname);
        if (existingTag) {
            return existingTag.tid;
        }

        const newTid = `t${this.tags.length + 1}`;
        const newTag = new Tag({ tid: newTid, name: tagname });
        this.tags.push(newTag);
        return newTid;
    }

    /**
     * Retrieves the number of questions associated with a given tag.
     */
    getQuestionCountByTag(tid: string): number {
        return this.questions.filter(q => q.tagIds.includes(tid)).length;
    }

    /**
     * Retrieves the total number of tags.
     */
    getTagCount(): number {
        return this.tags.length;
    }

    /**
 * Retrieves all questions that contain **all** specified tags.
 * 
 * @param tagNames An array of tag names to filter questions by.
 * @returns An array of questions that contain **all** the specified tags.
 */
getQuestionsByTags(tagNames: string[]): Question[] {
    if (tagNames.length === 0) {
        return this.questions;
    }

    return this.questions.filter(q => 
        tagNames.every(tagName => {
            const tag = this.tags.find(t => t.name.toLowerCase() === tagName.toLowerCase());
            return tag && q.tagIds.includes(tag.tid);
        })
    );
}


    
}
