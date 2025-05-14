import tcs from '../assets/tcs2.png';
import airbus from '../assets/airbus.png';
import ebay from '../assets/ebay.png';
import pwc from '../assets/PWC.png';

function MetricSection() {
  const companies = [
    {
      id: 1,
      image: ebay,
      alt: "ebay",
      h: 40,
      w: 110,
    },
    {
      id: 2,
      image: pwc,
      alt: "pwc",
      h: 70,
      w: 100,
      margintop: -40,
    },
    {
      id: 3,
      image: airbus,
      alt: "airbus",
      h: 30,
      w: 150,
    },
    {
      id: 4,
      image: tcs,
      alt: "tcs",
      h: 38,
      w: 60,
      margintop: -8,
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-9xl mx-auto px-4">
        <div className="font-bold text-[22px] text-black-800 text-center mb-12 justify-center items-center">
          A{' '}
          <a
            href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#2D488F] hover:text-[#1d2f5e] transition-colors"
          >
            McKinsey
          </a>{' '}
          report states that employees spend 1.8 hours every day—9.3 hours per week, on average searching.
        </div>
        <div className="font-bold text-[24px] text-black-800 text-center mb-8">
          Learn from the founders/operators of top brands
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full md:w-[600px] h-[80px] pt-10 overflow-hidden relative">
            <div className="flex min-w-max gap-12 animate-marquee">
              {/* eBay Logo */}
              {[...companies, ...companies].map((company) => (
                <div
                  key={company.id}
                  className="object-cover"
                  style={{
                    height: company.h,
                    width: company.w,
                    marginTop: company.margintop,
                  }}
                >
                  <img
                    src={company.image}
                    alt={company.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto mt-16">
        {/* Right section - Stats */}
        <div className="w-full">
          <div className="bg-[#2D488F] p-8">
            <div className="flex flex-wrap justify-center gap-12 md:gap-80 items-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">200</div>
                <p className="text-[16px]">Mentors</p>
              </div>

              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">40+</div>
                <p className="text-[16px]">Sessions booked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Animation for Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MetricSection;
