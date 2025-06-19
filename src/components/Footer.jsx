import logoWhite from "../assets/logoWhite.png"

import { FaLinkedinIn,FaInstagram,FaXTwitter, FaTiktok, FaSpotify, FaYoutube} from "react-icons/fa6";
export default function Footer() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn size={30} />,
            href: 'https://www.linkedin.com/company/koachoff/',
          },
        {
          name: 'Instagram',
          icon: <FaInstagram size={30} />,
          href: 'https://www.instagram.com/koachoff/',
        },
        {
          name: 'Twitter',
          icon: <FaXTwitter size={30} />,
          href: 'https://x.com/KoachOff',
        },
        { 
          name: 'TikTok', 
          icon: <FaTiktok size={30} />, 
          href: 'https://www.tiktok.com/@koachofficial' 
        },
        { 
          name: 'Spotify', 
          icon: <FaSpotify size={30} />, 
          href: 'https://open.spotify.com/show/6tOQkn4VJDV6jHuIqlcEE3?si=PoePsxcORfuWOISqOOx6cA' 
        },
        { 
          name: 'YouTube', 
          icon: <FaYoutube size={30} />, 
          href: 'https://youtube.com/@koachliveusa?si=K8cy6Aod_qs2IU3o' 
        },
        // 
      ];
  return (
    <div className='w-full bg-[#050A30] py-14 mt-20 '>
      <div className='max-w-[1200px] mx-auto px-10 lg:px-0 mb-20'>
        <img src={logoWhite} className='mb-5' />
        <div className='flex md:flex-row flex-col  justify-between items-center'>
            <div className='text-[#F5E649] text-left mt-2 md:text-[26px] text-xl mb-2 font-bold'>Where <span className='text-white'>Clarity</span> Meets <span className='text-white'>Action</span></div>
            <div className='flex gap-5'>
                {socialLinks.map((link) => (
                    <a
                     key={link.name}
                     href={link.href}
                     className="hover:text-blue-400 text-white transition-colors duration-200"
                     aria-label={`Follow us on ${link.name}`}
                    >
                    {link.icon}
                    </a>
                ))}
            </div>
        </div>
        <hr className='border-[#F5E649] mt-6 border '></hr>
        <div className='flex text-white text-left lg:gap-x-40 lg:justify-start justify-evenly mt-14 '>
            <div>
                <span className='md:text-[20px] text-sm font-bold'>PLATFORM</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer">Browse mentors</li>
                    <li className= "my-3 hover:underline cursor-pointer">Book a Session</li>
                    <li className= "my-3 hover:underline cursor-pointer">Become a Mentor</li>
                </ul>
            </div>
            <div>
                <span className='md:text-[20px] text-sm font-bold'>RESOURCES</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer">Newsletter</li>
                    <li className= "my-3 hover:underline cursor-pointer">Blogs</li>
                </ul>
            </div>
            <div>
                <span className='md:text-[20px] text-sm font-bold'> COMPANY</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer">About</li>
                    <li className= "my-3 hover:underline cursor-pointer">Partner Program</li>
                    <li className= "my-3 hover:underline cursor-pointer">Privacy Policy</li>
                </ul>
            </div>
            <div>
                <span className='md:text-[20px] text-sm font-bold'>SUPPORT</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer">FAQ</li>
                    <li className= "my-3 hover:underline cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
