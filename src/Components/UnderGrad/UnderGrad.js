import React from "react";

const UnderGrad = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <main id="top">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://humanities-web.s3.us-east-2.amazonaws.com/college-prod/s3fs-public/styles/max_width_full/public/2020-01/niceweather_cropped.jpg?itok=xFSPg8tu')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    UNDERGRADUATE
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-xl pr-16 mx-auto mb-10">
              <h5 className="mb-6 text-3xl font-extrabold leading-none">
                The quick, brown fox jumps over a lazy dog
              </h5>
              <p className="mb-6 text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
                omnis iste natus.
              </p>
              <div className="flex items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
              <div className="max-w-md">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
                <p className="text-sm text-gray-700">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never stopped old Big Bear. I didn't even know we were calling
                  him Big Bear.
                </p>
              </div>
              <div className="max-w-md">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  When has justice
                </h6>
                <p className="text-sm text-gray-700">
                  Rough pomfret lemon shark plownose chimaera southern sandfish
                  kokanee northern sea robin Antarctic cod. Yellow-and-black
                  triplefin.
                </p>
              </div>
              <div className="max-w-md">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Organically grow
                </h6>
                <p className="text-sm text-gray-700">
                  A slice of heaven. O for awesome, this chocka full cuzzie is
                  as rip-off as a cracker. Meanwhile, in behind the bicycle
                  shed, Hercules.
                </p>
              </div>
              <div className="max-w-md">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  A slice of heaven
                </h6>
                <p className="text-sm text-gray-700">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling. Inspiring, invest
                  synergy capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UnderGrad;
