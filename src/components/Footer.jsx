import logoWhite from "../assets/logowhite.png"
import { FaLinkedinIn,FaInstagram,FaXTwitter} from "react-icons/fa6";
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
        // 
      ];
  return (
    <div className='w-full bg-[#001F54] py-14 mt-20 '>
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
                    <li className= "my-3 hover:underline cursor-pointer"><a href="#">Browse mentors</a></li>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="#">Become a Mentor</a></li>
                </ul>
            </div>
            <div>
                <span className='md:text-[20px] text-sm font-bold'>RESOURCES</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="#">Newsletter</a></li>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="#">Blogs</a></li>
                </ul>
            </div>
            <div>
                <span className='md:text-[20px] text-sm font-bold'> COMPANY</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="/about">About</a></li>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <span className='md:text-[20px] text-sm font-bold'>SUPPORT</span>
                <ul>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="/faq">FAQ</a></li>
                    <li className= "my-3 hover:underline cursor-pointer"><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}