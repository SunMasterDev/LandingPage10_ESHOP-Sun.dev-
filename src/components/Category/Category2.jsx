import Image1 from "../../assets/category/gaming.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/speaker.png"
import Button from "../Shared/Button"

const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1
            sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {/* Third col */}
                 <div className="col-span-2 py-10 pl-5 bg-gradient-to-br
                from-gray-300/90 to-gray-100 text-white rounded-3xl relative h-[320px]
                flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className=" text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">with</p>
                            <p className="text-4xl xl:text-5xl font-bold
                            opacity-60 mb-2">CONSOLE</p>
                            <Button text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}/>
                        </div>
                    </div>
                    <img src={Image1} alt="Image2" 
                    className="w-[250px] absolute
                    top-1/2 -translate-y-1/2 -right-0"/>
                </div>
                {/* First col */}
                <div className="py-10 pl-5 bg-gradient-to-br
                from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px]
                flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">with</p>
                            <p className="text-4xl xl:text-5xl font-bold
                            opacity-40 mb-2">Oculus</p>
                            <Button text="Browse"
                            bgColor={"bg-white"}
                            textColor={"text-brandGreen"}/>
                        </div>
                    </div>
                    <img src={Image2} alt="Image2" 
                    className="w-[320px] absolute
                    bottom-0"/>
                </div>
                {/* second col */}
                <div className="py-10 pl-5 bg-gradient-to-br
                from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px]
                flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-300">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">with</p>
                            <p className="text-4xl xl:text-5xl font-bold
                            opacity-20 mb-2">Gadget</p>
                            <Button text="Browse"
                            bgColor={"bg-white"}
                            textColor={"text-brandBlue"}/>
                        </div>
                    </div>
                    <img src={Image3} alt="Image2" 
                    className="w-[200px] absolute
                    bottom-0 right-0"/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Category