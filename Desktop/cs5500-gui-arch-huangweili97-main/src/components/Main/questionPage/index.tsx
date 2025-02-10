// import React from "react";
// import { useNavigate } from "react-router-dom";
// import QuestionHeader from "./header";
// import Question from "./question";
// import { QuestionPageProps, QuestionProps } from "../../../types/types";
// import { getMetaData } from "../../../util/dateFormatter";
// import data from "../../../models/model";

// const convertToQuestionProps = (q: any): QuestionProps => ({
//     ...q,
//     getAnswerCount: () => q.ansIds.length,  
//     getQuestionViews: () => q.views,        
//     getTagsId: () => q.tagIds,              
//     calculateTimeElapsed: () => "",        
// });

// const QuestionPage = ({ title_text = "All Questions" }: QuestionPageProps) => {
//     const navigate = useNavigate(); // ✅ 用于页面跳转

//     return (
//         <div className="questionPageContainer">
//             {/* ✅ 问题标题 + 按钮 */}
//             <QuestionHeader title_text={title_text} qcnt={data.questions.length} />
            
//             {/* ✅ `Ask a Question` 按钮，点击后跳转到 `AskQuestionPage.tsx` */}
//             <button className="bluebtn" onClick={() => navigate("/ask")}>Ask a Question</button>

//             {/* ✅ 渲染问题列表 */}
//             <div id="question_list" className="question_list">
//                 {data.questions.map((q) => {
//                     const convertedQ = convertToQuestionProps(q);
//                     return (
//                         <div className="question_row" key={q.qid}>
//                             <Question q={convertedQ} />
//                             <div className="lastActivity">
//                                 <span className="question_author">{q.askedBy}</span>
//                                 <span>{getMetaData(new Date(q.askDate))}</span>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* ✅ 无问题时显示 */}
//             {data.questions.length === 0 && (
//                 <div className="bold_title right_padding">No Questions Found</div>
//             )}
//         </div>
//     );
// };

// export default QuestionPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import QuestionHeader from "./header";
// import Question from "./question";
// import { QuestionPageProps, QuestionProps } from "../../../types/types";
// import { getMetaData } from "../../../util/dateFormatter";
// import data from "../../../models/model";

// const convertToQuestionProps = (q: any): QuestionProps => ({
//     ...q,
//     getAnswerCount: () => q.ansIds.length,
//     getQuestionViews: () => q.views,
//     getTagsId: () => q.tagIds,
//     calculateTimeElapsed: () => "",
// });

// const QuestionPage = ({ title_text = "All Questions" }: QuestionPageProps) => {
//     const navigate = useNavigate();
//     const [orderType, setOrderType] = useState("Newest");  // ✅ 存储排序方式

//     // ✅ 处理排序逻辑
//     const sortedQuestions = () => {
//         let sorted = [...data.questions];

//         if (orderType === "Newest") {
//             sorted.sort((a, b) => new Date(b.askDate).getTime() - new Date(a.askDate).getTime());
//         } else if (orderType === "Active") {
//             sorted.sort((a, b) => {
//                 const aLastActivity = a.ansIds.length
//                     ? Math.max(...a.ansIds.map(aid => new Date(data.answers.find(ans => ans.aid === aid)?.ansDate || a.askDate).getTime()))
//                     : new Date(a.askDate).getTime();

//                 const bLastActivity = b.ansIds.length
//                     ? Math.max(...b.ansIds.map(aid => new Date(data.answers.find(ans => ans.aid === aid)?.ansDate || b.askDate).getTime()))
//                     : new Date(b.askDate).getTime();

//                 return bLastActivity - aLastActivity;
//             });
//         } else if (orderType === "Unanswered") {
//             sorted = sorted.filter(q => q.ansIds.length === 0);
//             sorted.sort((a, b) => new Date(b.askDate).getTime() - new Date(a.askDate).getTime());
//         }

//         return sorted;
//     };

//     return (
//         <div className="questionPageContainer">
//             {/* ✅ 问题标题 + 按钮 */}
//             <QuestionHeader title_text={title_text} qcnt={data.questions.length} />

//             {/* ✅ 排序按钮 */}
//             <div className="filter-buttons">
//                 <button className={orderType === "Newest" ? "active" : ""} onClick={() => setOrderType("Newest")}>Newest</button>
//                 <button className={orderType === "Active" ? "active" : ""} onClick={() => setOrderType("Active")}>Active</button>
//                 <button className={orderType === "Unanswered" ? "active" : ""} onClick={() => setOrderType("Unanswered")}>Unanswered</button>
//             </div>

//             {/* ✅ `Ask a Question` 按钮 */}
//             <button className="bluebtn" onClick={() => navigate("/ask")}>Ask a Question</button>

//             {/* ✅ 渲染排序后的问题 */}
//             <div id="question_list" className="question_list">
//                 {sortedQuestions().map((q) => {
//                     const convertedQ = convertToQuestionProps(q);
//                     return (
//                         <div className="question_row" key={q.qid}>
//                             <Question q={convertedQ} />
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* ✅ 无问题时显示 */}
//             {sortedQuestions().length === 0 && (
//                 <div className="bold_title right_padding">No Questions Found</div>
//             )}
//         </div>
//     );
// };

// export default QuestionPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionHeader from "./header";
import Question from "./question";
import { QuestionPageProps, QuestionProps } from "../../../types/types";
import { getMetaData } from "../../../util/dateFormatter";
import data from "../../../models/model";

const convertToQuestionProps = (q: any): QuestionProps => ({
    ...q,
    getAnswerCount: () => q.ansIds.length,
    getQuestionViews: () => q.views,
    getTagsId: () => q.tagIds,
    calculateTimeElapsed: () => "",
});

const QuestionPage = ({ title_text, qlist, qSize, pageNum, search }: QuestionPageProps) => {
    const navigate = useNavigate();
    const [orderType, setOrderType] = useState("Newest");
    const [searchQuery, setSearchQuery] = useState(search || "");

    // ✅ 处理搜索和排序逻辑
    const filteredAndSortedQuestions = () => {
        let filteredQuestions = [...qlist];

        // ✅ 处理搜索逻辑
        if (searchQuery.startsWith("[") && searchQuery.endsWith("]")) {
            // 🔍 标签搜索 `[tag1][tag2]`
            const tagNames = searchQuery.match(/\[(.*?)\]/g)?.map(tag => tag.replace(/\[|\]/g, "")) || [];
            filteredQuestions = filteredQuestions.filter(q =>
                tagNames.every(tag => q.tagIds.includes(tag))
            );
        } else if (searchQuery) {
            // 🔍 关键字搜索
            const lowerQuery = searchQuery.toLowerCase();
            filteredQuestions = filteredQuestions.filter(q =>
                q.title.toLowerCase().includes(lowerQuery) ||
                q.text.toLowerCase().includes(lowerQuery)
            );
        }

        // ✅ 处理排序逻辑
        if (orderType === "Newest") {
            filteredQuestions.sort((a, b) => new Date(b.askDate).getTime() - new Date(a.askDate).getTime());
        } else if (orderType === "Active") {
            filteredQuestions.sort((a, b) => {
                const aLastActivity = a.ansIds.length
                    ? Math.max(...a.ansIds.map(aid => new Date(data.answers.find(ans => ans.aid === aid)?.ansDate || a.askDate).getTime()))
                    : new Date(a.askDate).getTime();

                const bLastActivity = b.ansIds.length
                    ? Math.max(...b.ansIds.map(aid => new Date(data.answers.find(ans => ans.aid === aid)?.ansDate || b.askDate).getTime()))
                    : new Date(b.askDate).getTime();

                return bLastActivity - aLastActivity;
            });
        } else if (orderType === "Unanswered") {
            filteredQuestions = filteredQuestions.filter(q => q.ansIds.length === 0);
            filteredQuestions.sort((a, b) => new Date(b.askDate).getTime() - new Date(a.askDate).getTime());
        }

        return filteredQuestions;
    };

    return (
        <div className="questionPageContainer">
            {/* ✅ 问题标题 + 按钮 */}
            <QuestionHeader title_text={title_text} qcnt={qSize} />

            {/* ✅ 排序按钮 */}
            <div className="filter-buttons">
                <button className={orderType === "Newest" ? "active" : ""} onClick={() => setOrderType("Newest")}>Newest</button>
                <button className={orderType === "Active" ? "active" : ""} onClick={() => setOrderType("Active")}>Active</button>
                <button className={orderType === "Unanswered" ? "active" : ""} onClick={() => setOrderType("Unanswered")}>Unanswered</button>
            </div>

            {/* ✅ 搜索栏 */}
            <input
                id="searchBar"
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setSearchQuery(e.currentTarget.value)}
            />

            {/* ✅ `Ask a Question` 按钮 */}
            <button className="bluebtn" onClick={() => navigate("/ask")}>Ask a Question</button>

            {/* ✅ 渲染筛选后的问题 */}
            <div id="question_list" className="question_list">
                {filteredAndSortedQuestions().map((q) => {
                    const convertedQ = convertToQuestionProps(q);
                    return (
                        <div className="question_row" key={q.qid}>
                            <Question q={convertedQ} />
                        </div>
                    );
                })}
            </div>

            {/* ✅ 无问题时显示 */}
            {filteredAndSortedQuestions().length === 0 && (
                <div className="bold_title right_padding">No Questions Found</div>
            )}
        </div>
    );
};

export default QuestionPage;
