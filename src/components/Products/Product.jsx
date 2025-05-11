import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"

import Img1 from "../../assets/product/p-1.jpg"
import Img2 from "../../assets/product/p-2.jpg"
import Img3 from "../../assets/product/p-3.jpg"
import Img4 from "../../assets/product/p-4.jpg"

const productsData =[
    {
        id:1,
        img:Img1,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
]
const productsData2 =[
    {
        id:1,
        img:Img1,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"0"
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200"
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        price:"320",
        aosDelay:"400"
    },
    {
        id:4,
        img:Img4,
        title:"Printed",
        price:"220",
        aosDelay:"600"
    },
]

const Product = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <Heading title="Our Products"
            subtitle="Explore Our Products"/>
            {/* Body section */}
            <ProductCard data={productsData}/>
            <ProductCard data={productsData2}/>
        </div>
    </div>
  )
}
export default Product