const Error = () => {
  return (
    <>
      <section className="relative z-5 bg-primary py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[30px] font-bold leading-none  sm:text-[35px] md:text-[40px]">
                  Failed to fetch
                </h2>
                <p className="mb-8 text-base ">
                  Oops! Somthing went wrong, Please try reloading the page by
                  clicking the button below.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-block rounded-lg border border-black dark:border-white px-8 py-2 text-center text-base font-semibold  transition hover:bg-white hover:text-blue-600"
                >
                  Reload
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
};

export default Error;
