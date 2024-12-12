import React, { useState } from 'react'
import MovieTime from "../Images/Movie-Time.png";
// import Talkspace from "../Images/TalkSpace.png";
import Cryptofx from "../Images/CryptoFx.png";
import SolarSystem from "../Images/SolarSystem.png";
import { Link } from 'react-router-dom';
import { GrAchievement } from "react-icons/gr";
import "./Extra.css"



function Projects() {

    const [showProjects, setShowProjects] = useState(false);

    return (
        <div className='mt-20' id='projects'>
            <div className="text-center font-[700] text-white text-[4rem]">Projects</div>
            <div className="text-center text-gray-200 tracking-wider px-4 w-fit mx-auto py-2 rounded-full bg-gray-500 flex items-center justify-center gap-1"><GrAchievement className='text-[1.5rem]' />Achievement </div>
            <div className={`w-[1200px] ${showProjects ? "h-fit" : "h-[500px] overflow-y-hidden"} py-10 mx-auto max-w-full mt-10 flex items-center justify-center flex-wrap gap-10 Projects-box `}>
                <Link to={'https://movie-time-gamma.vercel.app/'} target='_blank' className=" p-3 md:hover:translate-y-[-20px] duration-300 transition-all rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project  ">
                    <img src={MovieTime} alt="" className='w-[350px] h-[190px] rounded-xl object-cover hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 text-center">Movie Time</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                    Movies, Tv Series, Entertainment Recomandation App, Users can enjoy their favorite Genres Entertainment
                    </div>
                </Link>
                {/* <Link to={'https://chat-app-sooty-omega.vercel.app/login'} target='_blank' className=" p-3 rounded-2xl md:hover:translate-y-[-20px] duration-300 transition-all bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Talkspace} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Real Time chat App</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                    A real-time chat application with features for user authentication, one-on-one and group messaging, and file sharing using React and Firebase.
                    </div>
                </Link> */}
                <Link to={'https://cryptofx.vercel.app/'} target='_blank' className=" p-3 md:hover:translate-y-[-20px] duration-300 transition-all rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Cryptofx} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">CryptoFX</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                    A responsive cryptocurrency price tracking application that displays real-time prices for selected coins using the CoinGecko API.
                    </div>
                </Link>
                <Link to={'https://solarsystem-tau.vercel.app/'} target='_blank' className="md:hover:translate-y-[-20px] duration-300 transition-all p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={SolarSystem} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Solar System</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A Demo Model of Solar System, Implemented with Html, Css, Only. No Images Designed with only CSS.
                    </div>
                </Link>
            </div>
            <div className={`text-center ${showProjects ? "translate-y-[0px] mt-5" : "bg-gradient-to-t from-black via-[#00000084] to-transparent py-10 translate-y-[-98px]"} w-[1200px] mx-auto max-w-full rounded-xl `}>
                <button className='text-gray-300 px-3 py-1 rounded-full bg-red-600' onClick={() => setShowProjects(!showProjects)}>{showProjects ? "Show Off":"See All Project"}</button>
            </div>
        </div>
    )
}

export default Projects