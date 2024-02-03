import { useWallet } from "../../context"
import { IMAGES } from "../../data"

export const WalletList = ()  => {

    const { handleChange } = useWallet();

    return(
        <div className="md:w-[85%] mx-auto grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-14">
            {
                IMAGES.map(({ image, title }, idx) => (
                    <button className="flex flex-col items-center text-center focus:ring-2 focus:ring-opacity-60 transition-all duration-700 focus:ring-blue-700  h-[10rem] justify-center rounded-lg px-3" key={idx}
                    onClick={() => {
                        handleChange({ title, image, modal_type: "wallet"  })
                    }}
                    >
                       <div className="w-[2.5rem] h-[2.5rem] md:w-[4rem] md:h-[4rem] mb-3">
                       <img src={image} alt={title} className="w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-150" />
                       </div>
                       <p className="text-[10px] md:text-xs font-semibold text-gray-100">{title}</p>
                    </button>
                ))
            }
        </div>
    )
}