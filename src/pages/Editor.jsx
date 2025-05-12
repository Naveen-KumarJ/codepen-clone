import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import SplitPane from "react-split-pane";
import EditorPane from "../components/editor/EditorPane";

const Editor = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024); // lg breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head><style>${css}</style></head>
          <body>${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  if (isSmallScreen) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black text-white text-center px-4">
        <p className="text-xl">
          ⚠️ This editor works best on a laptop or larger screen. <br />
          Please use a larger device for the best experience.
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      <div className="flex-1">
        <SplitPane split="horizontal" defaultSize="40%" minSize={100}>
          <SplitPane split="vertical" defaultSize="33%" minSize={200}>
            <EditorPane
              icon={<FaHtml5 className="text-xl text-red-500" />}
              label="HTML"
              iconColor="border-t-red-500"
              language="html"
              value={html}
              onChange={setHtml}
            />
            <SplitPane split="vertical" defaultSize="50%" minSize={200}>
              <EditorPane
                icon={<FaCss3Alt className="text-xl text-blue-500" />}
                label="CSS"
                iconColor="border-t-blue-500"
                language="css"
                value={css}
                onChange={setCss}
              />
              <EditorPane
                icon={<FaJs className="text-xl text-yellow-400" />}
                label="JavaScript"
                iconColor="border-t-yellow-400"
                language="js"
                value={js}
                onChange={setJs}
              />
            </SplitPane>
          </SplitPane>
          <div className="bg-zinc-800 p-4 text-white h-full">
            <h2 className="text-lg font-semibold mb-2">Output</h2>
            <div className="bg-white w-full h-full text-black rounded-md overflow-hidden">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default Editor;
