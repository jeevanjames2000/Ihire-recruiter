"use client";
import React, { useCallback } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { TRANSFORMERS } from "@lexical/markdown";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const format = useCallback(
    (type) => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
    },
    [editor]
  );
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-300 pb-2 mb-2">
      <button
      type="button"
        onClick={() => format("bold")}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        Bold
      </button>
      <button
      type="button"
        onClick={() => format("italic")}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        Italic
      </button>
      <button
      type="button"
        onClick={() => format("underline")}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        Underline
      </button>
      <button
      type="button"
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        Left
      </button>
      <button
      type="button"
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        Center
      </button>
      <button
      type="button"
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        Right
      </button>
    </div>
  );
}
const editorTheme = {
  paragraph: "mb-2",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
  },
};
export default function LexicalEditor({ onChange,title }) {
  const initialConfig = {
    namespace: "LexicalEditor",
    theme: editorTheme,
    onError(error) {
      console.error("Lexical error:", error);
    },
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      LinkNode,
      AutoLinkNode,
      CodeNode,
      CodeHighlightNode,
    ],
  };
  const handleChange = (editorState) => {
    editorState.read(() => {
      const json = editorState.toJSON();
      onChange?.(json);
    });
  };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border border-gray-300 rounded-lg p-2">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="min-h-[200px] outline-none p-2" />
          }
          placeholder={
            <div className="text-gray-400 p-2">
             {title}
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={handleChange} />
        <HistoryPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </LexicalComposer>
  );
}
