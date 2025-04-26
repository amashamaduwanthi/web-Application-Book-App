
import AOS from "aos";
import  "aos/dist/aos.css"
import * as React from "react";

import Hero from "./components/Hero/Hero.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import BestBooks from "./components/BestBooks/BestBooks.tsx";
import Popup from "./components/popup/Popup.tsx";
function App() {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    }
    React.useEffect(()=>{
        AOS.init({
            offset:100,
            duration:800,
            easing:"ease-in-sine",
            delay:100,
        });
        AOS.refresh();
    },[])
    return (
        <>
            <div className="bg-white duration-200">
                <Navbar handleOrderPopup={handleOrderPopup} />
                <Hero handleOrderPopup={handleOrderPopup}/>
                <BestBooks handleOrderPopup={handleOrderPopup}/>
                <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>

            </div>
        </>
    )
}

export default App
