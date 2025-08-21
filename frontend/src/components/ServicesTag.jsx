import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

const services=[
    {
        id:1,
        img:<TbTruckDelivery />,
        title: "Free Delivery",
        description:"Free shipping on all order"
    },
    {
        id:2,
        img:<GiReturnArrow />,
        title:"Returns",
        description:"Back Garantee Under 5 days"
    },
    {
        id:3,
        img:<BiSupport />,
        title: "Support24/7 ",
        description:"Online Support 24 hour a day"
    },
    {
        id:1,
        img:<RiSecurePaymentLine />,
        title: "Payments",
        description:"100% secured payments"
    }

]

const ServicesTag = () => {
  return (
    <div className='bg-primary/40 p-4'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center md:place-items-start'>
                {
                services?.map((item,index)=>(
                    <div key={index} className='flex items-center gap-3'>
                        <span className='text-5xl text-orange-600'>{item?.img}</span>
                        <div className=''>
                            <h4 className='text-base uppercase font-bold'>{item?.title}</h4>
                            <p className='text-sm font-medium max-w[160px] tracking-wide'>{item?.description}</p>
                        </div>

                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default ServicesTag