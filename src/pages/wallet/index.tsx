import { Link } from "react-router-dom";
import { WalletList } from "../../common/components/wallet-list";
import { WalletModal } from "../../common/components/modal/wallet-modal";
import { WalletSubmissionModal } from "../../common/components/modal/wallet-submission-modal";
import { useWallet } from "../../common/context";


function Wallet() {

    const {  state } = useWallet();

    return(
        <div className="min-h-screen bg-[#1A1C2C] p-5">
         <div className="flex flex-col items-center justify-center text-white mb-14">
            <Link to="/" className="h-10 w-10 mb-6">
                <img src="https://ethereum-magicians.org/uploads/default/original/1X/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png" className="w-full h-full object-cover" alt="Wallet Connect" />
            </Link>
            <h2 className="text-2xl md:text-4xl font-bold mb-3" >Connect Wallet</h2>
            <p className="text-gray-300 text-sm ">Please connect your wallet to continue</p>
         </div>
         <WalletList />
         { state && state.modal_type === "wallet" ? <WalletModal /> : null}
         {state && state.modal_type === "wallet_submit" ?  <WalletSubmissionModal /> : null}
        </div>
    )
}

export default Wallet;