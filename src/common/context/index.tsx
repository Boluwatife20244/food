import { useState, useContext, createContext  } from "react";
 



interface StateType {
    title: string;
    image: string;
    modal_type: "wallet" | "wallet_submit"
}

interface ContextType {
    state: StateType | null;
    handleChange(data: StateType | null): void
}

interface WalletProviderProps {
    children: React.ReactNode;
}


const WalletContext = createContext({} as ContextType);


const WalletProvider = ({ children }: WalletProviderProps) => {
    
    const [state, setState] = useState<StateType | null>(null)
    
    const handleChange = (data: StateType | null) => {
        setState(data);
    }

    return(
        <WalletContext.Provider value={{ state, handleChange }} >
          {children}
        </WalletContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useWallet = () => useContext(WalletContext);


export default WalletProvider;