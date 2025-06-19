import heroBG from "../../assets/heroBG.png"
import HeroSmall from '../../assets/HeroSmall';
const CircleHero = () => {
  return (
    <div className='w-5/6 mb-10 mx-auto' >
    <h1 className='font-bold text-3xl lg:mt-20 my-5 text-[#001F54]' >Circles</h1>
    <div className="w-full mx-auto h-[130px] md:h-[220px] flex bg-cover bg-center flex justify-between lg:px-20 md:px-10 px-3 items-center " 
         style={{ backgroundImage: `url(${heroBG})` }}>
      <div className="">
        <h1 className="text-xs md:text-3xl font-bold text-[#2D488F] mb-2">
          Explore and Connect: Discover Your Circles
        </h1>
        <p className="text-[0.6rem] md:text-lg font-bold text-[#001F54]">
          Engage with like-minded people!
        </p>
      </div>
      <div className="relative top-5 ">
        <HeroSmall />
      </div> 

    </div>
    </div>

  );
};

export default CircleHero;