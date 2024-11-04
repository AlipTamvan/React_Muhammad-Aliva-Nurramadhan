import React, { useState } from "react";
import generateContent from "../../service/GoogleGenerativeAiService";

export default function Component() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isQuizRequest =
      input.toLowerCase().includes("quiz") ||
      input.toLowerCase().includes("soal");

    if (isQuizRequest) {
      const quizPrompt = `Buatkan 10 soal pilihan ganda yang SANGAT BERBEDA dari topik "${input}". 
      Fokus pada aspek-aspek yang tidak langsung terkait dengan input, tetapi masih memiliki hubungan konseptual atau kontekstual.
      Format JSON dengan struktur berikut:
      {
        "questions": [
          {
            "question": "pertanyaan yang mendalam dan tidak langsung terkait dengan input",
            "options": ["pilihan1", "pilihan2", "pilihan3", "pilihan4"],
            "correctIndex": 0
          }
        ]
      }
      Pastikan soal-soal bersifat analitis, kontekstual, atau membutuhkan pemikiran kritis.`;

      try {
        const result = await generateContent(quizPrompt);
        console.log("API Response:", result);

        const cleanedResult = result
          .replace(/```json/, "")
          .replace(/```/, "")
          .trim();

        const parsedQuestions = JSON.parse(cleanedResult);

        setQuestions(parsedQuestions.questions);
        setHistory([
          ...history,
          {
            prompt: input,
            response: "Soal quiz telah dibuat dengan perspektif unik!",
          },
        ]);
        setShowQuiz(true);
      } catch (error) {
        console.error("Error generating quiz:", error);
        setHistory([
          ...history,
          {
            prompt: input,
            response: "Maaf, terjadi kesalahan dalam membuat soal.",
          },
        ]);
      }
    } else {
      try {
        const answer = await generateContent(`Jawab pertanyaan: "${input}"`);
        setHistory([
          ...history,
          {
            prompt: input,
            response: answer || "Maaf, tidak dapat memberikan jawaban.",
          },
        ]);
      } catch (error) {
        console.error("Error answering question:", error);
        setHistory([
          ...history,
          {
            prompt: input,
            response: "Maaf, terjadi kesalahan dalam menjawab pertanyaan.",
          },
        ]);
      }
    }

    setLoading(false);
    setInput("");
  };

  const handleAnswer = (questionIndex, value) => {
    setAnswers({ ...answers, [questionIndex]: parseInt(value) });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctIndex) {
        correct++;
      }
    });
    setScore((correct / questions.length) * 100);
  };

  const resetQuiz = () => {
    setShowQuiz(false);
    setQuestions([]);
    setAnswers({});
    setScore(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {!showQuiz ? (
        <>
          <h1 className="text-2xl font-semibold mb-4">
            Generate Quiz Perspektif Unik
          </h1>
          <form onSubmit={handleSubmit} className="flex mb-4">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Masukkan topik untuk soal haurs memasukan keyword 'quiz'"
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Buat Soal Unik
            </button>
          </form>

          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">History:</h3>
            {history.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-end mb-2">
                  <div className="p-4 bg-blue-100 rounded-lg max-w-xs shadow-sm">
                    <p className="text-gray-800">{item.prompt}</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="p-4 bg-gray-100 rounded-lg max-w-xs shadow-sm">
                    <p className="text-gray-800">{item.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold mb-4">
            Quiz Perspektif Unik: {history[history.length - 1]?.prompt}
          </h1>

          {questions.map((question, qIndex) => (
            <div key={qIndex} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium mb-3">
                {qIndex + 1}. {question.question}
              </p>
              <div className="space-y-2">
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center">
                    <input
                      type="radio"
                      id={`q${qIndex}-o${oIndex}`}
                      name={`question-${qIndex}`}
                      value={oIndex}
                      checked={answers[qIndex] === oIndex}
                      onChange={() => handleAnswer(qIndex, oIndex)}
                      className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label
                      htmlFor={`q${qIndex}-o${oIndex}`}
                      className="text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-end space-x-4">
            {score === null ? (
              <button
                onClick={calculateScore}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Selesai
              </button>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Skor:</span>
                  <span className="text-lg">{score.toFixed(0)}%</span>
                </div>
                <button
                  onClick={resetQuiz}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Mulai Baru
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg shadow-sm">
          <p className="text-gray-800">
            Sedang membuat soal perspektif unik...
          </p>
        </div>
      )}
    </div>
  );
}
