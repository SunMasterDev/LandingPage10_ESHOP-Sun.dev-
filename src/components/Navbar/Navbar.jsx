import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks=[
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Shop",
        link:"/#shop"
    },
    {
        id:3,
        name:"About",
        link:"/#about"
    },
    {
        id:4,
        name:"Blog",
        link:"/#blog"
    },
]

const DropdownLinks=[
    {
        id:1,
        name:"Trending Products",
        links:"/#",
    },
    {
        id:2,
        name:"Best Selling",
        links:"/#",
    },
    {
        id:3,
        name:"Top Rated",
        links:"/#",
    },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    // กล่องหลัก
    <div className="bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40">
{/* คลอบคอนเทนเนอร์ */}
        <div className="py-4">
{/* div container คลอบเมนูและค้นหาและโหมดมืด  group div*/}
            <div className="container flex justify-between
            items-center"> 

                {/* Logo and Links Section */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-primary font-semibold
                    tracking-widest text-2xl uppercase sm:text-3xl">
                        Eshop
                    </a>
                    {/* Menu Items */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-4">
                            {
                                MenuLinks.map((item,index)=>(
                                    <li key={index}>
                                        <a href={item.link} className="inline-block
                                        px-4 font-semibold text-gray-500 hover:text-black
                                        dark:hover:text-white duration-200">
                                            {" "}
                                            {item.name}</a>
                                    </li>
                                ))}
                            {/* Dropdown */}
                            <li className="relative cursor-pointer group">
                                <a href="#" className="flex items-center gap-[2px]
                                font-semibold text-gray-500
                                dark:hover:text-white py-2">
                                    Quick Links
                                    {/* span อยู่ใน a */}
                                    <span> 
                                    <FaCaretDown className="group-hover:rotate-180
                                    duration-300"/>
                                    </span>
                                </a>
                             
                                {/* Dropdowns Links */}
                                <div className="absolute z-[9999] hidden group
                                group-hover:block w-[200px] rounded-md bg-white
                                shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                    <ul className="space-y-2">
                                        {
                                            DropdownLinks.map((data,index)=>(
                                                <li key={index}>
                                                    <a href={data.links}
                                                    className="text-gray-500
                                                    dark:hover:text-white
                                                    duration-200 inline-block w-full
                                                    p-2 hover:bg-primary/20
                                                    rounded-md font-semibold">{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Navbar Right section */}
                <div className="flex justify-between
                items-center gap-4">
                    {/* Search Bar Section */}
                    <div className="relative group hidden
                    sm:block">
                        <input type="text"
                        placeholder="Search" 
                        className="search-bar"/>
                        <IoMdSearch className="text-xl
                        text-gray-600 group-hover:text-primary
                        dark:text-gray-400 absolute top-1/2 
                        -translate-y-1/2 right-3 duration-200"/>
                    </div>
                    {/* order-button section */}
                    <button className="relative p-3" onClick={handleOrderPopup}>
                        <FaCartShopping className="text-xl text-gray-600
                        dark:text-gray-400"/>
                        <div className="w-4 h-4 bg-red-500 text-white
                        rounded-full absolute top-0 right-0 flex items-center
                        justify-center text-xs">
                            4
                        </div>
                    </button>
                    {/* Dark Mode section */}
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar