import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchHYBP";
import handleTime from "../utils/handleTime.js";
import levels from "../utils/level";
import { motion } from "framer-motion";
import arrowLeft from "../assets/arrow.svg";
import { Link } from "react-router-dom";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [entropy, setEntropy] = useState(0);
  const [securityLevel, setSecurityLevel] = useState(levels[0]);
  const [dataBreachMessage, setDataBreachMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [bruteForceTime, setBruteForceTime] = useState(""); // State for brute force time
  const inputRef = useRef(null);

  /** Calcola l'entropia della password */
  const calculateEntropy = (password) => {
    let charSet = 0;
    if (/[a-z]/.test(password)) charSet += 26;
    if (/[A-Z]/.test(password)) charSet += 26;
    if (/[0-9]/.test(password)) charSet += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charSet += 32;
    return charSet === 0 ? 0 : Math.floor(password.length * Math.log2(charSet));
  };

  /** Controlla il livello di sicurezza */
  useEffect(() => {
    const entropyValue = calculateEntropy(password);
    setEntropy(entropyValue);
    setSecurityLevel(
      levels.find((l) => entropyValue <= l.max) || levels[levels.length - 1]
    );
  }, [password]);

  /** Controlla se la password è stata violata */
  const checkPasswordBreach = async () => {
    if (!password) return;
    const found = await fetchData(password);
    setDataBreachMessage(
      found ? "⚠️ Password trovata nei data breach!" : "✅ Password sicura."
    );
  };

  const calculateBruteForceTime = () => {
    const entropyValue = calculateEntropy(password);
    let estimatedTime = "";

    // Determina la forza della password in base all'entropia
    if (entropyValue < 40) {
      estimatedTime = "Crackabile in pochi minuti"; // Debole
    } else if (entropyValue >= 40 && entropyValue < 60) {
      estimatedTime = "Crackabile in ore/giorni"; // Media
    } else if (entropyValue >= 60 && entropyValue < 80) {
      estimatedTime = "Crackabile in mesi/anni"; // Forte
    } else {
      estimatedTime = "Praticamente irrecuperabile"; // Molto forte
    }

    // Visualizza il risultato
    setBruteForceTime(estimatedTime);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <Link to="/homepage" className="absolute top-6 left-6">
        <img
          src={arrowLeft}
          alt="Back"
          className="w-8 h-8 opacity-75 hover:opacity-100 transition"
        />
      </Link>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Controlla la Sicurezza della Password
        </h2>

        {/* Input Zone */}
        <div className="relative">
          <input
            ref={inputRef}
            type={showPassword ? "text" : "password"}
            placeholder="Inserisci la tua password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 pr-10 bg-gray-700 text-white rounded-md outline-none"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
          >
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
        </div>

        {/* Security Bar */}
        <motion.div
          className="mt-4 h-2 rounded-full transition-all"
          style={{
            width: securityLevel.width,
            backgroundColor: securityLevel.color,
          }}
          initial={{ width: "0%" }}
          animate={{ width: securityLevel.width }}
        ></motion.div>
        <p
          className="text-sm mt-2 text-center"
          style={{ color: securityLevel.color }}
        >
          {securityLevel.text}
        </p>

        {/* Buttons */}
        <button
          onClick={checkPasswordBreach}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-all"
        >
          Verifica Password
        </button>

        {/* Brute Force Time Button */}
        <button
          onClick={calculateBruteForceTime}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md transition-all"
        >
          Calcola Tempo di Brute Force
        </button>

        {/* Brute Force Time */}
        {bruteForceTime && (
          <motion.p
            className="mt-3 text-center font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tempo stimato per il brute force: {bruteForceTime}
          </motion.p>
        )}

        {/* Data Breach Message */}
        {dataBreachMessage && (
          <motion.p
            className="mt-3 text-center font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {dataBreachMessage}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default PasswordChecker;
