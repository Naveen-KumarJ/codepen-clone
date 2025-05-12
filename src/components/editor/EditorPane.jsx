import React from "react";
import { FcSettings } from "react-icons/fc";
import { FaChevronDown } from "react-icons/fa";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

const getExtension = (language) => {
  switch (language) {
    case "html":
      return html();
    case "css":
      return css();
    case "js":
      return javascript();
    default:
      return [];
  }
};

const EditorPane = ({ icon, label, iconColor, language, value, onChange }) => {
  return (
    <div className="w-full h-full flex flex-col bg-zinc-900 border-r border-zinc-700">
      <div className="w-full flex items-center justify-between bg-zinc-800 text-white">
        <div className={`px-4 py-2 border-t-4 flex items-center gap-3 ${iconColor}`}>
          {icon}
          <p className="font-semibold">{label}</p>
        </div>
        <div className="cursor-pointer flex items-center gap-4 px-4">
          <FcSettings className="text-xl" />
          <FaChevronDown className="text-xl" />
        </div>
      </div>
      <div className="flex-1 overflow-auto p-1">
        <CodeMirror
          height="100%"
          theme="dark"
          value={value}
          extensions={[getExtension(language)]}
          onChange={(value) => onChange(value)}
        />
      </div>
    </div>
  );
};

export default EditorPane;
