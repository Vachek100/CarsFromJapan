const LikedCarsSidebar = () => {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[500px] origin-right bg-indigo-200 shadow-md drop-shadow-xl">
      <div className="flex items-center justify-between p-3 shadow-md">
        <h1 className="text-xl font-bold">Liked Cars</h1>
        <button className="rounded-full bg-indigo-700 p-3 hover:bg-indigo-900"></button>
      </div>
      <div></div>
      <div className="flex justify-end ">
        <div className="mr-8 text-lg font-bold"></div>
      </div>
    </div>
  );
};

export default LikedCarsSidebar;
