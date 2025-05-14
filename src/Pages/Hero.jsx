import heropic1 from '../assets/heropic1.jpg';
import heropic2 from '../assets/heropic2.jpg';
import heropic3 from '../assets/heropic3.jpg';

function Hero() {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D488F] text-left max-w-full sm:max-w-xl">
              From Good to <span className="text-black">Great</span>.<br />
              Accelerate Your Trajectory with Modern-Agile Coaching & Community For The Next Gen.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-800 text-left max-w-xl">
              Aspiring to lead in your industry? Start with Koach. Harness the power of expert coaching and engaged peer networks to fast-track your journey to where you want to be.
            </p>

            <div className="mt-10 text-left">
              <button className="text-[#2D488F] font-bold bg-[#F5E649] px-4 py-2 hover:bg-[#f3e338] transition-colors text-lg rounded-md">
                Search for Koach
              </button>
            </div>

            <p className="mt-4 text-gray-800 text-left underline text-base">
              Not ready? Join our community and move your goals forward together.
            </p>
          </div>

          {/* Right Images */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2D488F]/30 to-[#F5E649]/30 rounded-3xl filter blur-3xl z-0" />
            <div className="relative grid grid-cols-3 gap-2 sm:gap-4 justify-center sm:ml-0 ml-10 z-10">
              <div className="h-40 sm:h-[473px] rounded-[60px] overflow-hidden w-[90px] sm:w-[160px]">
                <img src={heropic1} alt="Professional 1" className="h-full w-full object-cover" />
              </div>
              <div className="h-40 sm:h-[473px] mt-8 sm:mt-32 rounded-[60px] overflow-hidden w-[90px] sm:w-[160px]">
                <img src={heropic2} alt="Professional 2" className="h-full w-full object-cover" />
              </div>
              <div className="h-40 sm:h-[473px] rounded-[60px] overflow-hidden w-[90px] sm:w-[160px]">
                <img src={heropic3} alt="Professional 3" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
