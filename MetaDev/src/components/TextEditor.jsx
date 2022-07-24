import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const TextEditor = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["code-block"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],

      ["clean"],
    ],
  };
  const { quill, quillRef } = useQuill(modules);
  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default TextEditor;
