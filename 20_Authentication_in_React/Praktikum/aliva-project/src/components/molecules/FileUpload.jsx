import { useState, useEffect } from "react";
import { ErrorText } from "../atoms/ErrorText";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const FileUpload = ({
  onFileChange,
  error,
  resetFileName,
  initialFileName,
  id,
  disabled = false,
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
      <Label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        Image
      </Label>
      <Input
        type="file"
        id={id}
        onChange={handleFileChange}
        disabled={disabled}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        accept="image/*"
      />
      <Button
        type="button"
        disabled={disabled}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-96 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {fileName}
      </Button>
      <ErrorText show={error}>{error}</ErrorText>
    </div>
  );
};
