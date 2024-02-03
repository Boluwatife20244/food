import { IoMdClose } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useWallet } from "../../context";


export const WalletModal = () => {

  const { handleChange, state } = useWallet();

  const handleConnectManally = () => {
        if(!state) return;

        handleChange({
          ...state,
          modal_type: "wallet_submit"
        })

  }

  if(!state) return;

    return(
        <div className="h-screen bg-black bg-opacity-30 fixed top-0 left-0 w-full flex justify-center items-center"
        onClick={() => handleChange(null)}
        >
         <div className="w-[80%]  md:w-[30%] min-h-[50%] rounded-xl overflow-hidden bg-white"
         onClick={(e) => e.stopPropagation()}
         >
            <div className="bg-[#E6E6E6] h-[4rem] flex justify-between items-center px-6 mb-6">
              <button  className="text-sm text-gray-800 font-semibold"
              onClick={() => handleChange(null)}
              >
                <IoArrowBackOutline className="text-xl" />
              </button>
              <button className="bg-red-600 text-white h-8 w-8 rounded-full flex justify-center items-center"
              onClick={() => handleChange(null)}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-y-4">

            <div className="border border-red-700 border-opacity-80 flex-col gap-3 items-start md:flex-row cursor-pointer rounded-lg px-4 flex md:justify-between md:items-center py-2 h-[5rem]">
                <p className="text-xs md:text-sm font-semibold text-red-500">Error Connecting...</p>
                <button className="text-xs px-4 py-2 bg-[#2d3748] text-gray-100 rounded font-semibold" onClick={handleConnectManally}>Connect manually</button>
             </div>

             <div className="border border-gray-700 border-opacity-20 cursor-pointer rounded-lg px-4 flex justify-between items-center py-2 h-[4rem]">
                <div className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] ">
                <img src={state.image} alt="" className="object-cover w-full h-full rounded-full" />
                </div>
                <p className="text-xs md:text-sm font-semibold">{state.title}</p>
             </div>
            </div>
         </div>
        </div>
    )

}