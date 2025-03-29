const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-wrap-reverse font-semibold gap-y-2">
        <h1 className="text-xl sm:text-2xl text-gray-100 mr-6">{title}</h1>
        <div className="tracking-wider font-sans">
          Developed By <a className="text-indigo-600 transition hover:text-indigo-700 whitespace-nowrap " href="https://github.com/NN-Bayat">{"<NN-Bayat />"}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
