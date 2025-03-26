import Services from "../Components/Services";

function Homepage() {
  return (
    <div className="container w-[90vw] mx-auto">
      <header className="header h-[70vh]">
        <div className="wrapper">
          <nav className="navbar flex justify-between mt-5">
            <h3>
              <i className="fa-solid fa-lock pr-3"></i>Password Utility
            </h3>
            <a href="#services" className="menu-link">
              ./services
            </a>
          </nav>
          <div className="hero flex items-center h-[70vh]">
            <h1 className="text-[6vw] font-medium leading-none">
              <span>Create, check, secure </span> <br />
              <span>passwords </span> <br />
              <span>easier than ever.</span>
            </h1>
          </div>
        </div>
      </header>
      <Services />
    </div>
  );
}

export default Homepage;
