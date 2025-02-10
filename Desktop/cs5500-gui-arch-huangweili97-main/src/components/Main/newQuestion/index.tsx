
import React, { useState } from "react";
import "./index.css";
import { NewQuestionProps } from "../../../types/types";

/**
 * The NewQuestion component directly renders a form for submitting a new question.
 */
const NewQuestion: React.FC<NewQuestionProps> = ({ addQuestion, handleQuestions }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [tags, setTags] = useState("");
    const [askedBy, setAskedBy] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    /**
     * Validates form input fields.
     */
    const validateForm = () => {
        let errors: { [key: string]: string } = {};

        if (!title.trim()) {
            errors.title = "Title cannot be empty.";
        } else if (title.length > 100) {
            errors.title = "Title cannot exceed 100 characters.";
        }

        if (!text.trim()) {
            errors.text = "Question description cannot be empty.";
        }

        if (!tags.trim()) {
            errors.tags = "At least one tag is required.";
        } else {
            const tagList = tags.split(/\s+/).filter(tag => tag.length > 0);
            if (tagList.length > 5) {
                errors.tags = "A maximum of 5 tags are allowed.";
            }
            if (tagList.some(tag => tag.length > 20)) {
                errors.tags = "Each tag cannot exceed 20 characters.";
            }
        }

        if (!askedBy.trim()) {
            errors.askedBy = "Username cannot be empty.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    /**
     * Handles form submission.
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        addQuestion({ title, text, tags: tags.split(/\s+/), askedBy });

        // ✅ 清空输入框
        setTitle("");
        setText("");
        setTags("");
        setAskedBy("");

        if (handleQuestions) {
            handleQuestions();
        }
    };

    return (
        <div className="new-question-form">
            <h2>Ask a New Question</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                {errors.title && <p className="error-message">{errors.title}</p>}

                <label>Description:</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
                {errors.text && <p className="error-message">{errors.text}</p>}

                <label>Tags (separated by spaces):</label>
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                {errors.tags && <p className="error-message">{errors.tags}</p>}

                <label>Your Name:</label>
                <input type="text" value={askedBy} onChange={(e) => setAskedBy(e.target.value)} />
                {errors.askedBy && <p className="error-message">{errors.askedBy}</p>}

                <div className="button-group">
                    <button type="submit">Submit Question</button>
                    <button type="button" onClick={handleQuestions}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default NewQuestion;
