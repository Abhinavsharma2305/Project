import { useState } from "react";
import Logo from "../assets/Portfolio_Logo.png";
import { FiMenu } from "react-icons/fi";
// import {OverLayMenu} from "./OverLayMenu";

export default function Navbar() {
    const [visible, setvisible] = useState(true);
    const [MenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}>
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="w-12 h-11" />
                    <div className=" flex text-white font-bold text-2xl">
                        Abhinav Sharma
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="flex items-center gap-8">
                            <a
                            href="#home"
                            className="text-white hover:text-cyan-400">
                                Home
                            </a>

                             <a
                            href="#about"
                            className="text-white hover:text-cyan-400">
                                About
                            </a>

                             <a
                            href="#skills"
                            className="text-white hover:text-cyan-400">
                                Skills
                            </a>

                             <a
                            href="#projects"
                            className="text-white hover:text-cyan-400">
                                Projects
                            </a>

                             <a
                            href="#experience"
                            className="text-white hover:text-cyan-400">
                                Experience
                            </a>

                             <a
                            href="#contact"
                            className="bg-gradient-to-r from-pink-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 ">
                                Contact
                            </a>
                    </div>

                   

                </div>
                
            </nav>

    
        </>
    );
}