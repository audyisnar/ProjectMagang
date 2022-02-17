import React, { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import QuillEditor from "./components/QuillEditor";
import { Editor } from '@tinymce/tinymce-react';
//import tinymce from "tinymce";

const PostNews = () => {
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);

    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onSubmit = (event) => {
        setContent("");
        console.log("sukses");
    }

    // const editorRef = useRef(null);

    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };

    return (
        <div>
            <Sidebar />
            <div className="md:ml-64">
                <div className="mt-8 px-6 md:px-8 h-auto">
                    <div className="container mt-4 mb-10 mx-auto max-w-full">
                        <button>Kembali</button>
                            <QuillEditor
                                placeholder={"Start Posting Something"}
                                onEditorChange={onEditorChange}
                                onFilesChange={onFilesChange}
                            />
                        <button onSubmit={onSubmit}>Sumbit</button>
                            {/* <Editor
                                apiKey="n9lrubvylwhlonkrak969hi913ctlw4wqyockyuu9me48hsa"
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | link image | code | help',
                                // 
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            <button onClick={log}>Log editor content</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostNews;