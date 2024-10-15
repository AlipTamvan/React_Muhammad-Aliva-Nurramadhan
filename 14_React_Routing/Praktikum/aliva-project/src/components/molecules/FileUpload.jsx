import { useState, useEffect } from "react";

import { ErrorText } from "../atoms/ErrorText";
export const FileUpload = ({
  onFileChange,
  error,
  resetFileName,
  initialFileName,
}) => {
  const [fileName, setFileName] = useState(initialFileName || "Choose File");

  useEffect(() => {
    if (resetFileName) {
      setFileName("Choose File");
    }
  }, [resetFileName]);

  useEffect(() => {
    if (initialFileName) {
      setFileName(initialFileName);
    }
  }, [initialFileName]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileChange(file);
    } else {
      onFileChange(null);
      setFileName("Choose File");
    }
  };

  return (
    <div className="relative mb-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-[202px]">
        {fileName}
      </button>
      <ErrorText show={error}>{error}</ErrorText>
    </div>
  );
};
