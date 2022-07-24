import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function QuillEditor({ value, setValue }) {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  console.log(value, "this is quill editor");
  return (
    <div>
      <div style={{ width: "500px", height: "150px" }}>
        <div ref={quillRef} />
      </div>
    </div>
  );
}
export default QuillEditor;
