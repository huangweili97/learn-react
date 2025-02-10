// import "./index.css";
// import { HeaderProps } from "../../types/types";
// import { useHeader } from "../../hooks/useHeader";

// /**
//  * The Header component is the top section of the application.
//  * @param param0 indicates the search term and the function to render
//  * the page after the search term is entered
//  * @returns the header component
//  */
// const Header = ({ search, setQuestionPage: setQuesitonPage }: HeaderProps) => {

//     return (
//         <div id="header" className="header">
//             <div></div>
//             <div className="title">Fake Stack Overflow</div>
//             <input
//                 id="searchBar"
//                 placeholder="Search ..."
//                 type="text"
//             />
//         </div>
//     );
// };

// export default Header;


import React, { useState } from "react";
import { HeaderProps } from "../../types/types";
import './index.css';  

/**
 * Header component with a search bar.
 * 用户可以输入搜索关键字，触发 `setQuestionPage` 以更新问题列表。
 */
const Header: React.FC<HeaderProps> = ({ search, setQuestionPage }) => {
    const [query, setQuery] = useState(search);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setQuestionPage(0, value, "Search Results"); // ✅ 触发 `Main.tsx` 里的 `questions` 更新
    };

    return (
        <div id="header" className="header">
            <div></div>
            <div className="title">Fake Stack Overflow</div>
            <input
                type="text"
                placeholder="Search questions..."
                value={query}
                onChange={handleSearchChange}
            />
        </div>
    );
};


export default Header;
