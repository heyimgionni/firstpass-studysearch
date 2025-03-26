import arrowLeft from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import words from "../utils/word";
import { useState } from "react";

function Passphrase() {
  const [lenght, setLenght] = useState(1);
  const [phrase, setPhrase] = useState("");

  const handleGenerationPassPhrase = () => {
    let arrPhrases = [];
    for (let i = 0; i < lenght; i++) {
      arrPhrases.push(words[Math.floor(Math.random() * words.length)]);
    }
    setPhrase(arrPhrases.join("-"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Back Button */}
      <Link to="/homepage" className="absolute top-6 left-6">
        <img
          src={arrowLeft}
          alt="Back"
          className="w-8 h-8 opacity-75 hover:opacity-100 transition"
        />
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Passphrase Generator</h1>

      {/* Input Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <p className="text-lg mb-4">How many words? (1-12)</p>
        <div className="flex items-center justify-between">
          <input
            type="range"
            className="w-full cursor-pointer accent-blue-500"
            min="1"
            max="12"
            value={lenght}
            onChange={(e) => setLenght(Number(e.target.value))}
          />
          <span className="ml-4 text-lg font-bold">{lenght}</span>
        </div>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold transition w-full"
          onClick={handleGenerationPassPhrase}
        >
          Generate
        </button>
      </div>

      {/* Output Section */}
      <div className="bg-gray-800 p-4 rounded-lg mt-6 w-full max-w-lg text-center shadow-md">
        <p className="text-lg font-mono break-all">
          {phrase || "Your passphrase will appear here"}
        </p>
      </div>
    </div>
  );
}

export default Passphrase;
