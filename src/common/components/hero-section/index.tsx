import { Link } from "react-router-dom";
import heroImage from "../../../assets/hero-img-home-2.417386c3.png";

export const HeroSection = () => {
    return(
        <section  className="text-gray-400 bg-black body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font md:text-7xl text-5xl mb-4 font-medium text-white">
                  Blockchain
                  <br className="md:hidden lg:inline-block" />Rectification
                </h1>
                <p className="mb-8 leading-relaxed w-9/10">
                  Every digital artwork on Upside is authentic and truly
                  unique. Blockchain technology makes this new aproch to
                  digital ownership possible. <br /><br />
                  Open and decentralized protocol for syncing various Wallets
                  issues on Secure Server. This is not an app but a protocol
                  that establishes a remote resolution between all
                  noncustodial wallet <br /><br />
                  It is an online server which gets you across to every wallet
                  representative to enable effective complain and
                  rectification of issues. <br /><br />
                  You will be on a chat with an Artificial Intelligence Robot
                  with zero Human interference.
                </p>
                <div className="flex justify-around">
                  <Link to="/wallet" > <button className="text-white  bg-[#ec9b00] border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-base font-medium interact-button">
                      Connect Wallet
                    </button> </Link>
                 
                </div>
              </div>
              <div className="lg:max-w-lg md:w-1/2 w-full">
                <img className="object-cover object-center rounded animate-pulse" alt="hero" src={heroImage} />
              </div>
            </div>
          </section>
    )
}