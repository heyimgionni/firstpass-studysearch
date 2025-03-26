import { useState, useEffect } from "react";
import { googleSignIn } from "./utils/services";
import { auth } from "./utils/firebase";
import Homepage from "./pages/Homepage";
import Passphrase from "./pages/Passphrase";
import Passdomain from "./pages/Passdomain";
import PasswordGenerator from "./pages/PasswordGenerator";
import PasswordChecker from "./pages/PasswordChecker";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Si avvia quando il componente si monta
  useEffect(() => {
    // Funzione che si attiva ogni qual volta che lo stato dell'autenticazione cambia
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/homepage" replace />
              ) : (
                <div className="flex justify-center items-center h-screen">
                  <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96 text-center">
                    <h1 className="text-4xl font-bold mb-6">
                      Welcome To <br /> First Pass
                    </h1>
                    <button
                      onClick={googleSignIn}
                      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                      Sign In With Google
                    </button>
                  </div>
                </div>
              )
            }
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/passphrase" element={<Passphrase />}></Route>
          <Route path="/passworddomain" element={<Passdomain />}></Route>
          <Route path="/passgenerator" element={<PasswordGenerator />}></Route>
          <Route path="/passwordchecker" element={<PasswordChecker />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
