import { useGSAP } from "@gsap/react";
import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
        opacity: "1",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
        opacity: "0",
      });
    }
  }, [finishRidePanel]);


  return (
    <div className="h-screen relative flex flex-col">
      <img
        className="w-16 absolute top-2 left-2"
        src="logo.png"
        alt="logo"
      ></img>
      <Link
        to="/captain-home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>

      <div className="h-1/5 p-6 flex items-center justify-between relative bg-amber-300"
      onClick={()=>setFinishRidePanel(true)}>
        <h5 className="p-3 text-center absolute inset-x-0 top-0">
          <i className="ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button className="w-1/2 bg-green-500 text-white font-semibold p-2 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 p-3 translate-y-full bg-white px-3 py-8 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
}

export default CaptainRiding;
