import React, { useState } from 'react'
import {P1,P2,P3,P4,P5,jordanLogo} from "../assets/images";
import { Button } from "./index";
import {Link} from 'react-router-dom';

const ShopPage = () => {

    const [Img,setImg]=useState({
        img1:P1,
        img2:P2,
        img3:P3,
        img4:P4,
        img5:P5,
    })
    const [activeImg,setActiveImg]=useState(Img.img4)
  
    const [amount,setAmount]=useState(1)

    return (
    <div>
        <div className="flex justify-center mb-10">
            <img 
                src={jordanLogo} 
                alt="LOGO"
                width={85}
                height={30} />
        </div>
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className='flex flex-col gap-14 lg:W-2/4'>
        <img src={activeImg} alt="" className='w-full h-full  aspect-square object-cover rounded-xl'/>
        <div className="flex flex-row justify-between space-x-2 h-24">
            <img src={Img.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer hover:scale-110 hover:border-2 hover:border-[#ff1900f7] 'onClick={()=>setActiveImg(Img.img1)}/>
            <img src={Img.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer hover:scale-110 hover:border-2 hover:border-[#ff1900f7]'onClick={()=>setActiveImg(Img.img2)}/>
            <img src={Img.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer hover:scale-110 hover:border-2 hover:border-[#ff1900f7]'onClick={()=>setActiveImg(Img.img3)}/>
            <img src={Img.img5} alt="" className='w-24 h-24 rounded-md cursor-pointer hover:scale-110 hover:border-2 hover:border-[#ff1900f7]'onClick={()=>setActiveImg(Img.img5)}/>
        </div>
        <div className="flex justify-center"><button className="flex justify-center items-center gap-2 px-7 py-4 outline  outline-[#908f8fe4] text-[#ff0000f0] outline-offset-2 transition  hover:outline-none hover:scale-105 font-bold font-montserrat text-lg leading-none rounded-full" onClick={()=>setActiveImg(Img.img4)}
        >View Pair</button></div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
            <span className='text-[#ff0000] font-semibold'>Special Spidey Jordans</span>
            <h1 className='text-3xl font-bold'>Nike Air Jordans</h1>
           <p className='text-gray-700'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.Our dedication to detail and excellence ensures your satisfaction</p>
        </div>
        <h6 className="text-2xl font-semibold">$ 919.89</h6>
        <div className='flex flex-col gap-8' >
            <div >
                <button className="bg-gray-200 py-2 px-7 rounded-lg text-[#ff0000] text-3xl" onClick={()=>setAmount((prev) => prev>1?prev-1:1)}>-</button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button className="bg-gray-200 py-2 px-6 rounded-lg text-[#ff0000] text-3xl" onClick={()=>setAmount((prev)=>prev+1)}>+</button>
                
            </div>
            <div className="flex gap-10">
                <div><Button label="Add to Cart"></Button></div>
                <Link to="/"><Button label="Home"></Button></Link>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShopPage
