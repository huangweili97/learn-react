

import React, { useState } from "react";
import Application from "../../../models/application";
import Question from "../../../models/question";
import { TagPageProps } from "../../../types/types";


/**
 * The TagPage component displays a list of tags.
 * Users can click on a tag to filter related questions.
 * 
 * @param {TagPageProps} props - The properties passed to the TagPage component.
 * @returns The TagPage component rendering all tags.
 */
const TagPage: React.FC<TagPageProps> = ({ tlist, getQuestionCountByTag, clickTag, handleNewQuestion }) => {
    return (
        <div>
            <h2>Tags</h2>

            {/* Display all tags 显示所有标签 */}
            <div>
                {tlist.map(tag => (
                    <button key={tag.tid} onClick={() => clickTag?.(tag.name)}>
                        {tag.name} ({getQuestionCountByTag(tag.tid)} questions)
                    </button>
                ))}
            </div>

            {/* Ask a Question Button 提问按钮 */}
            <button onClick={handleNewQuestion}>Ask a Question</button>
        </div>
    );
};

export default TagPage;
