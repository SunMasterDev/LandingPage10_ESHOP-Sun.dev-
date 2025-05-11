import Heading from "../Shared/Heading"

import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData =[
    {
        title:"How to Choose perfect smartwatch",
        subtitle:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dignissimos aut iste, quam explicabo tenetur odio corporis itaque vel provident?",
        published:"Jan 20,2025 by batman",
        image:Img1,
        aosDelay:0
    },
    {
        title:"How to Choose perfect perfect gadget",
        subtitle:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dignissimos aut iste, quam explicabo tenetur odio corporis itaque vel provident?",
        published:"Mar 14,2025 by superman",
        image:Img2,
        aosDelay:"200"
    },
    {
        title:"How to Choose perfect VR Headset",
        subtitle:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dignissimos aut iste, quam explicabo tenetur odio corporis itaque vel provident?",
        published:"Oct 6,2025 by the flash",
        image:Img3,
        aosDelay:"400"
    },
]

const Blogs = () => {
  return (
    <div className="my-12">
        <div className="container">
        <Heading title="Recent News"
            subtitle="Explore Our Blogs"/>
            {/* Blog section */}
            <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {/* BlogCard */}
                {
                    BlogData.map((item,index)=>(
                        <div key={item.title} 
                         data-aos="fade-up"
                        data-aos-delay={item.aosDelay} 
                        className="bg-white
                        dark:bg-gray-900">
                            {/* img section */}
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img src={item.image} alt={`IMG-${index}`}
                                className="w-full h-[220px] object-cover
                                rounded-2xl hover:scale-105 duration-500" />
                            </div>
                            {/* content section */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{item.published}</p>
                                <p className="font-bold line-clamp-1">{item.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600
                                dark:text-gray-400">{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
export default Blogs