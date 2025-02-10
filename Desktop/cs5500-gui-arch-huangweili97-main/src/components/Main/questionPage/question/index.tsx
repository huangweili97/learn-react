// import React, { useCallback, useState, useEffect } from "react";
// import { QuestionProps, TagParamType } from "../../../../types/types";
// import "./index.css";
// import { getMetaData } from "../../../../util/dateFormatter";
// import Application from "../../../../models/application"; // ✅ 确保获取 `Application` 以更新 `views`

// interface qComponentProps {
//     q: QuestionProps;
//     getTagById: (tid: string) => TagParamType | null;
//     clickTag?: (tagName: string) => void;
//     handleAnswer?: (qid: string) => void;
// }

// const Question = ({ q, getTagById, clickTag, handleAnswer }: qComponentProps) => {
//     const app = Application.getInstance(); // ✅ 获取 `Application`
//     const [views, setViews] = useState(q.getQuestionViews()); // ✅ 本地存储 `views`

//     const handleQuestionClick = useCallback(() => {
//         if (handleAnswer) {
//             app.getQuestionById(q.qid);  // ✅ 让 `Application.ts` 自动增加 `views`
//             setViews(q.getQuestionViews()); // ✅ 立即更新 `views`
//             handleAnswer(q.qid);
//         }
//     }, [handleAnswer, q, app]);

//     useEffect(() => {
//         setViews(q.getQuestionViews()); // ✅ 监听 `views` 变化
//     }, [q]);

//     return (
//         <div
//             className="question right_padding"
//             onClick={handleQuestionClick}
//             role="button"
//             tabIndex={0}
//         >
//             <div className="postStats">
//                 <div>{q.getAnswerCount()} answers</div>
//                 <div>{views} views</div> {/* ✅ 确保 `views` 正确更新 */}
//             </div>
//             <div className="question_mid">
//                 <div className="postTitle">{q.title}</div>
//                 <div className="question_tags">
//                     {q.getTagsId().map((tid) => {
//                         const tag = getTagById(tid);
//                         return (
//                             <button 
//                                 key={tid} 
//                                 className="question_tag_button"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     if (clickTag && tag) clickTag(tag.name);
//                                 }}
//                             >
//                                 {tag ? tag.name : tid}
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//             <div className="lastActivity">
//                 <div className="question_author">{q.askedBy}</div>
//                 <div className="question_meta">
//                     asked {getMetaData(new Date(q.askDate))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Question;



// import React, { useCallback } from "react";
// import { QuestionProps, TagParamType } from "../../../../types/types";
// import "./index.css";
// import { getMetaData } from "../../../../util/dateFormatter";
// import { useNavigate } from "react-router-dom";

// interface qComponentProps {
//     q: QuestionProps;
//     getTagById: (tid: string) => TagParamType | null;
//     clickTag?: (tagName: string) => void;
// }

// /**
//  * A component to display a question in the question list
//  * @param param0 the props for the component -- data for the question 
//  * @returns a question item in the list
//  */
// const Question = ({ q, getTagById, clickTag }: qComponentProps) => {
//     const navigate = useNavigate();

//     const handleQuestionClick = useCallback(() => {
//         q.views += 1;  // ✅ 增加 views 计数
//         navigate(`/question/${q.qid}`); // ✅ 跳转到 `AnswerPage`
//     }, [q, navigate]);

//     return (
//         <div
//             className="question right_padding"
//             onClick={handleQuestionClick}
//             role="button"
//             tabIndex={0}
//         >
//             <div className="postStats">
//                 <div>{q.getAnswerCount()} answers</div>
//                 <div>{q.views} views</div> {/* ✅ 显示 views */}
//             </div>
//             <div className="question_mid">
//                 <div className="postTitle">{q.title}</div>
//                 <div className="question_tags">
//                     {q.getTagsId().map((tid) => {
//                         const tag = getTagById(tid);
//                         return (
//                             <button 
//                                 key={tid} 
//                                 className="question_tag_button"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     if (clickTag && tag) clickTag(tag.name);
//                                 }}
//                             >
//                                 {tag ? tag.name : tid}
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//             <div className="lastActivity">
//                 <div className="question_author">{q.askedBy}</div>
//                 <div className="question_meta">
//                     asked {getMetaData(new Date(q.askDate))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Question;


// import React, { useCallback } from "react";
// import { QuestionProps, TagParamType } from "../../../../types/types";
// import "./index.css";
// import { getMetaData } from "../../../../util/dateFormatter";
// import { useNavigate } from "react-router-dom";

// interface qComponentProps {
//     q: QuestionProps;
//     getTagById: (tid: string) => TagParamType | null;
//     clickTag?: (tagName: string) => void;
//     handleAnswer?: (qid: string) => void;  // ✅ 添加 `handleAnswer`
// }

// const Question = ({ q, getTagById, clickTag, handleAnswer }: qComponentProps) => {
//     const navigate = useNavigate();

//     const handleQuestionClick = useCallback(() => {
//         q.views += 1; // ✅ 增加 views 计数
//         navigate(`/question/${q.qid}`);
//         if (handleAnswer) handleAnswer(q.qid);
//     }, [q, navigate, handleAnswer]);

//     return (
//         <div
//             className="question right_padding"
//             onClick={handleQuestionClick}
//             role="button"
//             tabIndex={0}
//         >
//             <div className="postStats">
//                 <div>{q.getAnswerCount()} answers</div>
//                 <div>{q.views} views</div> {/* ✅ 显示 views */}
//             </div>
//             <div className="question_mid">
//                 <div className="postTitle">{q.title}</div>
//                 <div className="question_tags">
//                     {q.getTagsId().map((tid) => {
//                         const tag = getTagById(tid);
//                         return (
//                             <button 
//                                 key={tid} 
//                                 className="question_tag_button"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     if (clickTag && tag) clickTag(tag.name);
//                                 }}
//                             >
//                                 {tag ? tag.name : tid}
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//             <div className="lastActivity">
//                 <div className="question_author">{q.askedBy}</div>
//                 <div className="question_meta">
//                     asked {getMetaData(new Date(q.askDate))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Question;

// import React, { useCallback } from "react";
// import { QuestionProps } from "../../../../types/types";
// import "./index.css";
// import { getMetaData } from "../../../../util/dateFormatter";
// import { useNavigate } from "react-router-dom";

// const Question = ({ q }: { q: QuestionProps }) => {
//     const navigate = useNavigate();

//     const handleQuestionClick = useCallback(() => {
//         navigate(`/question/${q.qid}`); // ✅ 跳转到 `AnswerPage` 并传递 `qid`
//     }, [q, navigate]);

//     return (
//         <div className="question right_padding">
//             <div className="postStats">
//                 <div>{q.getAnswerCount()} answers</div>
//                 <div>{q.views} views</div> 
//             </div>
//             <div className="question_mid">
//                 <div className="postTitle" onClick={handleQuestionClick} style={{ cursor: "pointer", fontWeight: "bold", color: "blue" }}>
//                     {q.title} {/* ✅ 确保标题可点击 */}
//                 </div>
//                 <div className="question_tags">
//                     {q.getTagsId().map((tid) => (
//                         <span key={tid} className="question_tag">{tid}</span>
//                     ))}
//                 </div>
//             </div>
//             <div className="lastActivity">
//                 <div className="question_author">{q.askedBy}</div>
//                 <div className="question_meta">
//                     asked {getMetaData(new Date(q.askDate))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Question;

import React, { useCallback } from "react";
import { QuestionProps } from "../../../../types/types";
import "./index.css";
import { getMetaData } from "../../../../util/dateFormatter";
import { useNavigate } from "react-router-dom";

const Question = ({ q }: { q: QuestionProps }) => {
    const navigate = useNavigate();

    const handleQuestionClick = useCallback(() => {
        navigate(`/question/${q.qid}`); // ✅ 跳转到 `AnswerPage` 并传递 `qid`
    }, [q, navigate]);

    return (
        <div className="question right_padding">
            <div className="postStats">
                <div>{q.getAnswerCount()} answers</div>
                <div>{q.views} views</div> 
            </div>
            <div className="question_mid">
                <div 
                    className="postTitle" 
                    onClick={handleQuestionClick} 
                    style={{ cursor: "pointer", fontWeight: "bold", color: "blue" }}
                >
                    {q.title} {/* ✅ 确保标题可点击 */}
                </div>

                {/* ✅ 添加 `tags` 以符合 UI 要求 */}
                <div className="question_tags">
                    {q.getTagsId().map((tid) => (
                        <span key={tid} className="question_tag">{tid}</span>
                    ))}
                </div>
            </div>
            <div className="lastActivity">
                <div className="question_author">{q.askedBy}</div>
                <div className="question_meta">
                    asked {getMetaData(new Date(q.askDate))}
                </div>
            </div>
        </div>
    );
};

export default Question;
