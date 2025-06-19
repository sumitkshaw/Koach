import tcs from '../assets/tcs2.png';
import airbus from '../assets/airbus.png';
import ebay from '../assets/ebay.png';
import pwc from '../assets/PWC.png';

function MetricSection() {
  const companies = [
    {
      id: 1,
      image: ebay,
      alt: "eBay",
      h: 40,
      w: 110,
    },
    {
      id: 2,
      image: pwc,
      alt: "PwC",
      h: 70,
      w: 100,
      marginTop: -40, // Fixed: camelCase
    },
    {
      id: 3,
      image: airbus,
      alt: "Airbus",
      h: 30,
      w: 150,
    },
    {
      id: 4,
      image: tcs,
      alt: "TCS",
      h: 38,
      w: 60,
      marginTop: -8, // Fixed: camelCase
    },
  ];

  return (
    <div className="bg-white py-8">
      {/* Custom CSS for marquee animation */}
      <style>{`
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

      <div className="max-w-7xl mx-auto px-4"> {/* Fixed: changed from max-w-9xl to max-w-7xl */}
        <div className="font-bold text-[22px] text-gray-800 text-center mb-12"> {/* Fixed: text-black-800 to text-gray-800 */}
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
        
        <div className="font-bold text-[24px] text-gray-800 text-center mb-8"> {/* Fixed: text-black-800 to text-gray-800 */}
          Learn from the founders/operators of top brands
        </div>
        
        <div className="flex items-center justify-center">
          <div className="w-full md:w-[600px] h-[80px] pt-10 overflow-hidden relative">
            <div className="flex min-w-max gap-12 animate-marquee">
              {/* Fixed: Proper key generation for duplicated array */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.id}-${index}`} // Fixed: unique keys for duplicated items
                  className="flex-shrink-0" // Fixed: prevent shrinking
                  style={{
                    height: `${company.h}px`, // Fixed: added px unit
                    width: `${company.w}px`,  // Fixed: added px unit
                    marginTop: company.marginTop ? `${company.marginTop}px` : '0px', // Fixed: camelCase and px unit
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
        {/* Stats section */}
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
    </div>
  );
}

export default MetricSection;