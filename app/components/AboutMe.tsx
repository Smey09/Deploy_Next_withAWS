const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="dark:bg-gray-800 w-full max-w-4xl p-4 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 border border-red-400 bg-white">
        <img
          className="w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full shadow-lg"
          src="https://avatars.githubusercontent.com/u/149933218?v=4"
          alt="Smey image"
        />
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <div>
            <h5 className="text-2xl md:text-xl font-medium text-gray-900 dark:text-white">
              Hi! I'm Smey...
            </h5>
            <span className="text-lg md:text-sm text-blue-600 dark:text-gray-400">
              Software Student
            </span>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <a
              href="https://github.com/Smey09"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add friend
            </a>
            <a
              href="https://t.me/Smey_Advance"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-400 bg-white border-4 border-indigo-600 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
            <a
              href="https://smey09.github.io/roemreaksmey.github.io"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-400 bg-white border-double border-4 border-indigo-600 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Visit Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
