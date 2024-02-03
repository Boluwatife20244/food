import { IoMdCheckmarkCircleOutline, IoMdCalculator } from "react-icons/io";
import { AiOutlineBank } from "react-icons/ai";
import { FaOilWell } from "react-icons/fa6";
import { SiApacheecharts } from "react-icons/si";
import { LuCloudLightning } from "react-icons/lu";
import { Link } from "react-router-dom";

export const SelectionSection = () => {
    return(
        <section className="text-gray-400 body-font bg-[#3c3c3c] py-20">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap w-full mb-8">
                <div className="lg:w-1/2 w-full lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                    Make Your Selection Below
                  </h1>
                  <div  className="bg-[#ec9b00] h-1 w-20  rounded"></div>
                </div>
              </div>
            </div>
            <div className="container px-5 py-8 mx-auto flex flex-wrap">
              <div className="flex flex-wrap">
                {
                  SELECTION_DATA.map((item) => (
                    <div className="md:pr-4 pb-4 md:w-1/3 w-full" key={item.id} >
                    <div className="flex border-2 rounded-xl bg-gray border-gray-600 p-4 sm:flex-row flex-col interact-button cursor-pointer">
                      <Link to="/wallet">  <div className="flex-grow">
                        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#5b5b5b] text-[#ec9b00] flex-shrink-0">
                          <item.icon className="stm-check text-[1.8rem]" />
                        </div>
                        <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                         {item.title}
                        </h2>
                        <p className="leading-relaxed text-sm">
                          {item.body}
                        </p>
                      </div> </Link>
                    </div>
                  </div>
                  ))
                }
               
              </div>
            </div>
          </section>
    )
}


const SELECTION_DATA = [
  {
    id: 1,
    title: "Validation",
    body: "Click here for token migration",
    icon: IoMdCheckmarkCircleOutline
  },
  {
    id: 2,
    title: "Rectification",
    body: "Click here for Rectify Issues",
    icon: IoMdCalculator
  },
  {
    id: 3,
    title: "Claim Reflection Reward",
    body: "Click here for token reflection reward",
    icon: AiOutlineBank

  },
  {
    id: 9,
    title: "Slippage Error",
    body: "Click here for slippage related issues",
    icon: AiOutlineBank
  },
  {
    id: 4,
    title: "Swapping Error",
    body: "Click here for swapping error",
    icon: FaOilWell 
  },
  {
    id: 5,
    title: "Asset Recovery",
    body: "Click here for asset issuses",
    icon: SiApacheecharts
  },
  {
    id: 6,
    title: "High Gas Fee",
    body: "Click here for gas fee related issuses",
    icon: IoMdCheckmarkCircleOutline
  },
  {
    id: 7,
    title: "Missing/ Irregular Balance",
    body: "Click here to recover lost / missing funds",
    icon: LuCloudLightning
  },
  {
    id: 8,
    title: "Other Issues Not Listed",
    body: "If you can't find the issue you are experiencing click here",
    icon: AiOutlineBank 
  },
]