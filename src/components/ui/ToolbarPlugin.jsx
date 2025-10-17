"use client";
import React, { useCallback, useState } from "react";
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createTextNode,
   UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_TABLE_COMMAND } from "@lexical/table";
import { $createLinkNode } from "@lexical/link";
import { Button } from "./button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Input } from "./input";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  console.log("editor: ", editor);
  const [fontFamily, setFontFamily] = useState("arial");
  const [fontSize, setFontSize] = useState("15");
  const [textColor, setTextColor] = useState("#000000");

  const formatText = useCallback(
    (format) => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
    },
    [editor]
  );

  const formatElement = useCallback(
    (format) => {
      editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
    },
    [editor]
  );

  const applyFont = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        selection.formatText("font", fontFamily);
        selection.formatText("size", `${fontSize}px`);
        selection.formatText("color", textColor);
      }
    });
  }, [editor, fontFamily, fontSize, textColor]);

  const insertLink = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const url = prompt("Enter URL");
        if (url) {
          const linkNode = $createLinkNode(url);
          selection.insertNodes([linkNode]);
          linkNode.append($createTextNode(url));
        }
      }
    });
  }, [editor]);

  const insertTable = useCallback(() => {
    editor.dispatchCommand(INSERT_TABLE_COMMAND, { rows: 3, columns: 3 });
  }, [editor]);

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-2 mb-2">
      {/* Undo / Redo */}
      <Button
        variant="ghost"
        type="button"
        size="sm"
        onClick={() => editor.dispatchCommand(UNDO_COMMAND)}
      >
        ↶
      </Button>
      <Button
        variant="ghost"
        type="button"
        size="sm"
        onClick={() => editor.dispatchCommand(REDO_COMMAND)}
      >
        ↷
      </Button>

      {/* Heading */}
      <Select
        onValueChange={formatElement}
        defaultValue="left"
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="left">Normal</SelectItem>
          <SelectItem value="h1">Heading 1</SelectItem>
          <SelectItem value="h2">Heading 2</SelectItem>
          <SelectItem value="h3">Heading 3</SelectItem>
        </SelectContent>
      </Select>

      {/* Font Family */}
      <Select
        onValueChange={(value) => {
          setFontFamily(value);
          applyFont();
        }}
        defaultValue="arial"
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Font" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="arial">Arial</SelectItem>
          <SelectItem value="times">Times New Roman</SelectItem>
          <SelectItem value="roboto">Roboto</SelectItem>
        </SelectContent>
      </Select>

      {/* Font Size */}
      <Select
        onValueChange={(value) => {
          setFontSize(value);
          applyFont();
        }}
        defaultValue="15"
      >
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="12">12px</SelectItem>
          <SelectItem value="15">15px</SelectItem>
          <SelectItem value="18">18px</SelectItem>
          <SelectItem value="24">24px</SelectItem>
        </SelectContent>
      </Select>

      {/* Text Color */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" type="button" size="sm">
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: textColor }} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <Input
            type="color"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value);
              applyFont();
            }}
            className="w-full"
          />
        </PopoverContent>
      </Popover>

      {/* Text Formatting */}
      <Button variant="ghost" type="button" size="sm" onClick={() => formatText("bold")}>
        B
      </Button>
      <Button variant="ghost" type="button" size="sm" onClick={() => formatText("italic")}>
        I
      </Button>
      <Button variant="ghost" type="button" size="sm" onClick={() => formatText("underline")}>
        U
      </Button>
      <Button variant="ghost" type="button" size="sm" onClick={() => formatText("strikethrough")}>
        S
      </Button>
      <Button variant="ghost" type="button" size="sm" onClick={() => formatText("code")}>
        </Button>

      {/* Alignment */}
      <Select onValueChange={formatElement} defaultValue="left">
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Align" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="left">Left</SelectItem>
          <SelectItem value="center">Center</SelectItem>
          <SelectItem value="right">Right</SelectItem>
        </SelectContent>
      </Select>

      {/* Insert Options */}
      <Button variant="ghost" type="button" size="sm" onClick={insertLink}>
        Link
      </Button>
      <Button variant="ghost" type="button" size="sm" onClick={insertTable}>
        Table
      </Button>
    </div>
  );
}