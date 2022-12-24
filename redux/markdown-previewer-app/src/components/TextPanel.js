// REDUX
import { useSelector, useDispatch } from "react-redux";
import { changeTextCurrent } from "../redux/markdownSlice";

// REACT MARKDOWN
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function TextPanel() {
  const textHelp = useSelector((state) => state.markdown.textHelp);
  const textUser = useSelector((state) => state.markdown.textUser);
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp);

  const dispatch = useDispatch();

  return (
    <div className="text-panels">
      <textarea
        className="text-panel-left"
        value={`${isShowingHelp ? textHelp : textUser}`}
        onChange={(e) => dispatch(changeTextCurrent(e.target.value))}
        disabled={isShowingHelp}
      />
      <div className="text-panel-right">
        <ReactMarkdown
          children={isShowingHelp ? textHelp : textUser}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
}

export default TextPanel;
