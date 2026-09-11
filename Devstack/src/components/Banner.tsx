import Logo2 from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-7">
      <div className="hero min-h-100 rounded-2xl bg-base-100">
        <div className="hero-content w-full flex-col justify-between gap-10 md:flex-row">

          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl text-base-content">
              Build Your Ideal
            </h1>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </h1>

            <p className="mt-5 text-base-content/70 leading-7">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">
              <button className="btn border-none bg-linear-to-r from-orange-500 to-pink-500 text-white">
                Explore Technologies
              </button>

              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={Logo2}
              alt="Development Stack"
              className="w-64 md:w-80"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;