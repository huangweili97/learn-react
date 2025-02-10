
import React from "react";
import { SideBarNavProps } from "../../../types/types";

/**
 * The SideBarNav component for navigation.
 * Users can switch between "Questions" and "Tags".
 */
const SideBarNav: React.FC<SideBarNavProps> = ({ selected, handleQuestions, handleTags }) => {
    return (
        <nav className="sideBarNav">
            <div 
                className={`menu_item ${selected === "q" ? "menu_selected" : ""}`} 
                onClick={handleQuestions}
            >
                Questions
            </div>
            <div 
                className={`menu_item ${selected === "t" ? "menu_selected" : ""}`} 
                onClick={handleTags}
            >
                Tags
            </div>
        </nav>
    );
};

export default SideBarNav;
