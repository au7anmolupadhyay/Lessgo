import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';  
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';  
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70vh',
        opacity: '1',
      })
      gsap.to(panelCloseRef.current, {
        opacity: '1',
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0vh',
        opacity: '0',
      })
      gsap.to(panelCloseRef.current, {
        opacity: '0',
      })
    }
  },[panelOpen])


  useGSAP(()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
        opacity: '1',
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        opacity: '0',
      })
    }
  },[vehiclePanelOpen]);

  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
        opacity: '1',
      })
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
        opacity: '0',
      })
    }
  },[confirmRidePanel]);

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
        opacity: '1',
      })
    }else{
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        opacity: '0',
      })
    }
  },[vehicleFound]);

  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
        opacity: '1',
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
        opacity: '0',
      })
    }
  },[waitingForDriver]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute top-2 left-2" src='logo.png' alt='logo' ></img>
      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
      </div>
      <div className='absolute bottom-0 w-full'>
        <div className='bg-white'>
          <div className='p-5'>
            <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute top-0 right-0 p-5'>
              <i className="ri-arrow-down-wide-line text-2xl"></i>
            </h5>
            <h4 className='text-2xl font-semibold'>Find a ride</h4>
            <form onSubmit={(e)=>{submitHandler(e)}}>
              <div className="relative mt-3">
                <div className="absolute h-12 w-0.5 top-[47%] left-5 -translate-y-1/2 border-l-2 border-dashed border-gray-300"></div>
                <div className="relative flex items-center">
                  <i className="ri-user-location-fill absolute left-4 text-green-500 text-xl"></i>
                  <input 
                    onClick={()=>{setPanelOpen(true)}}
                    className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full' 
                    type='text' 
                    value={pickup}  
                    onChange={(e)=>{setPickup(e.target.value)}} 
                    placeholder='Enter your pickup location' 
                  />
                </div>
                <div className="relative flex items-center mt-2">
                  <i className="ri-map-pin-2-fill absolute left-4 text-red-500 text-xl"></i>
                  <input 
                    onClick={()=>{setPanelOpen(true)}}
                    className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full' 
                    type='text' 
                    value={destination}
                    onChange={(e)=>{setDestination(e.target.value)}}
                    placeholder='Enter your destination' 
                  />
                </div>
              </div>
            </form>
          </div>
          <div ref={panelRef} className='h-0 overflow-hidden bg-white'>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
          </div>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-8 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-8 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-8 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 p-3 bg-white px-3 py-8 pt-12'>
        <WaitingForDriver waitingForDriver ={waitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;