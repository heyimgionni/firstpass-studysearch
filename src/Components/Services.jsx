import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="py-16 bg-gray-900 text-white" id="services">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Security Tools
      </h2>

      <div className="card__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {/** Card 1 */}
        <div className="card bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold mb-3">Passphrase Generator</h2>
          <p className="text-gray-400 mb-4">
            🔒 Generate passphrases like a crypto meta-mask to keep your
            security strong.
          </p>
          <Link
            to="/passphrase"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            Go To PassPhrase Generator
          </Link>
        </div>

        {/** Card 2 */}
        <div className="card bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold mb-3">Password Generator</h2>
          <p className="text-gray-400 mb-4">
            🔒 Choose how many characters and how strong you want your password
            to be!
          </p>
          <Link
            to="/passgenerator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            Go To Password Generator
          </Link>
        </div>

        {/** Card 3 */}
        <div className="card bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold mb-3">Password Domain</h2>
          <p className="text-gray-400 mb-4">
            🔐 Get unique passwords for every website to avoid reusing weak
            ones.
          </p>
          <Link
            to="/passworddomain"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            Go To Password Domain
          </Link>
        </div>

        {/** Card 4 */}
        <div className="card bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-xl font-semibold mb-3">Password Checker</h2>
          <p className="text-gray-400 mb-4">
            🔒 Test your password strength and see if it’s safe from hackers!
          </p>
          <Link
            to="/passwordchecker"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            Go To Password Checker
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
