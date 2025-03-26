import { useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../assets/arrow.svg";
function PasswordGenerator() {
  // states
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isLower, setIsLower] = useState(true);
  const [isUpper, setIsUpper] = useState(false);
  const [isDigit, setIsDigit] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [copy, setCopy] = useState("");

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digit = "0123456789";
  const special = `!@#$%^&()_+-={}|:;"'<>.,?/`;

  const handleGeneratePassword = () => {
    let allCases = "";
    let generatedPassword = [];

    if (isLower) {
      allCases += lower;
      generatedPassword.push(lower[Math.floor(Math.random() * lower.length)]);
    }
    if (isUpper) {
      allCases += upper;
      generatedPassword.push(upper[Math.floor(Math.random() * upper.length)]);
    }
    if (isDigit) {
      allCases += digit;
      generatedPassword.push(digit[Math.floor(Math.random() * digit.length)]);
    }
    if (isSpecial) {
      allCases += special;
      generatedPassword.push(
        special[Math.floor(Math.random() * special.length)]
      );
    }
    if (!allCases) {
      setPassword("⚠️ Choose At Least One Option");
      return;
    }
    for (let i = 0; i < length; i++) {
      generatedPassword.push(
        allCases[Math.floor(Math.random() * allCases.length)]
      );
    }

    setPassword(generatedPassword.sort(() => Math.random() - 0.5).join(""));
  };

  const handleCopy = () => {
    if (password && password !== "⚠️ Choose At Least One Option") {
      navigator.clipboard.writeText(password);
      setCopy("✅ Password Copied!");
      setTimeout(() => setCopy(""), 2000);
    }
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
      <h1 className="text-4xl font-bold mb-6">Password Generator</h1>

      {/* Password Display */}
      <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between w-full max-w-lg shadow-md">
        <p className="text-lg break-all">{password || "Your Password Here"}</p>
        <i
          className="fa-solid fa-copy cursor-pointer text-xl text-blue-400 hover:text-blue-500 transition"
          onClick={handleCopy}
        ></i>
      </div>
      {copy && <p className="text-green-400 mt-2">{copy}</p>}

      {/* Options */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {[
          { label: "Lower Case [a-z]", state: isLower, setState: setIsLower },
          { label: "Upper Case [A-Z]", state: isUpper, setState: setIsUpper },
          { label: "Digits [0-9]", state: isDigit, setState: setIsDigit },
          {
            label: "Special [!@#$%^&*]",
            state: isSpecial,
            setState: setIsSpecial,
          },
        ].map((item, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={item.state}
              onChange={() => item.setState(!item.state)}
              className="w-5 h-5 accent-blue-500"
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>

      {/* Range Slider */}
      <div className="mt-6 flex flex-col items-center w-full max-w-lg">
        <label htmlFor="range" className="text-lg mb-2">
          Length: {length}
        </label>
        <input
          type="range"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="8"
          max="64"
          className="w-full cursor-pointer accent-blue-500"
        />
      </div>

      {/* Generate Button */}
      <button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold transition"
        onClick={handleGeneratePassword}
      >
        Generate
      </button>
    </div>
  );
}

export default PasswordGenerator;
