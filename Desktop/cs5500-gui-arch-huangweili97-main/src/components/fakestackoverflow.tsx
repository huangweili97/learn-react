import Header from "./Header";
import Main from "./Main";
import SideBarNav from "./Main/sideBarNav";
import { FakeStackOverflowProps } from "../types/types";
import { useFakeStackOverflow } from "../hooks/useFakeStackOverflow";

const FakeStackOverflow: React.FC<FakeStackOverflowProps> = ({ app }) => {
    const { search, setQuestionPage, pageInstance, handleQuestions, handleTags } = useFakeStackOverflow(app);

    return (
        <div className="fake-stack-container">
            {/* ✅ 头部 */}
            <Header search={search} setQuestionPage={setQuestionPage} />

            {/* ✅ `flex` 容器：侧边栏 + 主内容 */}
            <div className="main-layout">
                {/* ✅ 侧边栏 */}
                <SideBarNav 
                    selected={pageInstance?.getSelected() || "q"} 
                    handleQuestions={handleQuestions} 
                    handleTags={handleTags} 
                />
                
                {/* ✅ 主页面内容 */}
                <Main search={search} setQuestionPage={setQuestionPage} pageInstance={pageInstance} />
            </div>
        </div>
    );
};

export default FakeStackOverflow;
