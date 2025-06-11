import Profile from "../assets/images/profile.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-[#171717] w-full min-h-screen pt-32 pb-16 text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 w-full px-6 gap-10">
        <div className="flex items-center justify-center">
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 p-1 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="font-bold tracking-wide text-3xl sm:text-4xl md:text-5xl">
            FRONTEND DEVELOPER
          </p>
          <p className="text-[#818181] font-medium text-base sm:text-lg md:text-xl my-6">
            I develop high-end web experiences for design-driven companies that
            value attention to detail.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#e85b2a] text-white font-bold px-5 py-3 rounded-lg hover:scale-110 transition-transform duration-200 ease-in cursor-pointer">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
