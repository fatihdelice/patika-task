import { useSelector, useDispatch } from "react-redux";
import { changeIsShowingHelp } from "../redux/markdownSlice";
import TextPanel from "./TextPanel";

function Content() {
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp);
  const dispatch = useDispatch();

  const showHelp = () => {
    dispatch(changeIsShowingHelp(!isShowingHelp));
  };

  return (
    <div className="main-context">
      <header>
        <h1 className="app-title">Markdown Previewer</h1>
        <div
          className={`help-button ${isShowingHelp ? "active" : ""}`}
          onClick={showHelp}
        >
          <i className="fa fa-question" aria-hidden="true"></i>
        </div>
      </header>
      <TextPanel />
    </div>
  );
}

export default Content;
