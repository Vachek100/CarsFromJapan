import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
          <span className="text-[#48a2d7]">Oops!</span> Page not found 😔
        </h1>
        <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
          Sorry, we couldn't find the page you're looking for. If you entered a
          web address please check it was correct.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-pink-500 px-8 font-medium text-white shadow-sm transition-colors  hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          to="/"
        >
          Go to the home page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
