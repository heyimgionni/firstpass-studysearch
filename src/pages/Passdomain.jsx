import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { Link } from "react-router-dom";
import arrowLeft from "../assets/arrow.svg";

function Passdomain() {
  const [masterPassword, setMasterPassword] = useState("");
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [convertedPassword, setConvertedPassword] = useState("");

  const isValidDomain = (domain) => {
    const reDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reDomain.test(domain);
  };

  const handleConvertedPassword = () => {
    let cleanDomain = domain.trim();
    try {
      let url = new URL(cleanDomain);
      cleanDomain = url.hostname;
    } catch (error) {
      if (!isValidDomain(cleanDomain)) {
        setError("❌ Insert a valid domain (e.g., netflix.com)");
        return;
      }
    }

    setError("");
    const encodedDomain = btoa(cleanDomain);
    let key = CryptoJS.PBKDF2(masterPassword, encodedDomain, {
      keySize: 256 / 32,
      iterations: 10000,
    });

    const finalPassword = key
      .toString(CryptoJS.enc.Hex)
      .toUpperCase()
      .slice(0, 16);

    setConvertedPassword(finalPassword);
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
      <h1 className="text-4xl font-bold mb-6">Password Domain</h1>

      {/* Input Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        {/* Master Password */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Master Password</label>
          <input
            type="text"
            className="w-full px-4 py-2 text-black rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter master password..."
            value={masterPassword}
            onChange={(e) => setMasterPassword(e.target.value)}
          />
        </div>

        {/* Domain Input */}
        <div className="mb-4">
          <label className="block text-lg mb-2">
            Domain (e.g., netflix.com)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 text-black rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter domain..."
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>

        {/* Generate Button */}
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg font-semibold transition w-full"
          onClick={handleConvertedPassword}
        >
          Convert
        </button>
      </div>

      {/* Output Section */}
      <div className="bg-gray-800 p-4 rounded-lg mt-6 w-full max-w-lg text-center shadow-md">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-lg font-mono">
            {convertedPassword || "Your secure password will appear here"}
          </p>
        )}
      </div>
    </div>
  );
}

export default Passdomain;
