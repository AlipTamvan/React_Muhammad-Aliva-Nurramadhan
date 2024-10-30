import React, { useState } from "react";
import generateContent from "../../service/GoogleGenerativeAiService";
import ChatForm from "../molecules/ChatForm";

const ChatComponent = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentContext = history
      .map((item) => `Prompt: ${item.prompt} Response: ${item.response}`)
      .join(" ");
    setContext(currentContext);

    const modifiedInput = `${currentContext} Prompt: ${input}`;

    setLoading(true);

    const result = await generateContent(modifiedInput);
    setLoading(false);

    setHistory([...history, { prompt: input, response: result }]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Chat with AI</h1>
      <ChatForm
        inputValue={input}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium">Chat History:</h3>
        {history.map((item, index) => (
          <div key={index}>
            <div className="flex justify-end mb-4">
              <div className="p-4 bg-blue-100 rounded-lg max-w-xs shadow-sm text-right">
                <h4 className="font-medium">Prompt:</h4>
                <p className="text-gray-800">{item.prompt}</p>
              </div>
            </div>
            <div className="flex justify-start mb-4">
              <div className="p-4 bg-gray-100 rounded-lg max-w-xs shadow-sm">
                <h4 className="font-medium">Response:</h4>
                <p className="text-gray-800">{item.response}</p>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="mt-4 p-4 bg-yellow-100 rounded-lg shadow-sm">
            <p className="text-gray-800">Processing your prompt...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
