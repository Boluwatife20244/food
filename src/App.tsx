import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import WalletProvider from "./common/context";

function App() {

  return (
     <WalletProvider>
      <div className="">
      <Routes>
        <Route element={<Wallet />} path="/wallet" />
        <Route element={<Home />} path="/" />
      </Routes>
     </div>
     </WalletProvider>
  )
}

export default App
