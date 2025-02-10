// import { getMetaData } from "../util/dateFormatter";
// import { AnswerParamType, AnswerPropsInterface } from "../types/types";

// /**
//  * Answer class to represent an answer object
//  * and calculate the time elapsed since the answer was posted
//  */
// export default class Answer implements AnswerPropsInterface {
//     aid: string;
//     text: string;
//     ansBy: string;
//     ansDate: Date;

//     /**
//      * constructor to initialize the properties in an Answer object
//      * @param param0 AnswerParamType object
//      * @returns Answer object
//      */
//     constructor({ aid, text, ansBy, ansDate }: AnswerParamType) {
//         this.aid = aid;
//         this.text = text;
//         this.ansBy = ansBy;
//         this.ansDate = ansDate;
//     }

//     /**
//      * 
//      * @returns the time elapsed since the answer was posted
//      * in a human readable format
//      */
//     calculateTimeElapsed(): string {
//         return getMetaData(this.ansDate);
//     }
// }
import { getMetaData } from "../util/dateFormatter";
import { AnswerParamType, AnswerPropsInterface } from "../types/types";

/**
 * Answer class to represent an answer object
 * and calculate the time elapsed since the answer was posted.
 */
export default class Answer implements AnswerPropsInterface {
    aid: string;
    text: string;
    ansBy: string;
    ansDate: Date;

    /**
     * Constructor to initialize the properties in an Answer object.
     * @param param0 AnswerParamType object.
     * @returns Answer object.
     */
    constructor({ aid, text, ansBy, ansDate }: AnswerParamType) {
        this.aid = aid;
        this.text = text;
        this.ansBy = ansBy;
        this.ansDate = new Date(ansDate); // ✅ 确保 `ansDate` 是 Date 类型
    }

    /**
     * Returns the time elapsed since the answer was posted
     * in a human-readable format.
     */
    calculateTimeElapsed(): string {
        return getMetaData(this.ansDate);
    }
}
