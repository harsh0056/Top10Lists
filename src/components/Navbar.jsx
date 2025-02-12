import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import { ThemeContext } from "../App";
import { FaMoon, FaSun } from "react-icons/fa";

// react icons
import { FaBars, FaDribbble, FaMeta, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            localStorage.removeItem('user');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    // const [isActive, setIsActive] = useState(false);

    // menu btn toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // navItems
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ]

    // for modal for login button
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const openLoginModal = () => {
      setIsLoginModalOpen(true);
    };
  
    const closeLoginModal = () => {
      setIsLoginModalOpen(false);
    };

    const openSignupModal = () => {
      setIsSignupModalOpen(true);
    };
  
    const closeSignupModal = () => {
      setIsSignupModalOpen(false);
    };

    return (
        <header className="fixed bg-black top-0 left-0 right-0 text-white">
            <nav className="px-4 max-w-7xl mx-auto flex justify-between items-center py-4">
                <a href="/" className="text-xl font-bold text-white">
                    The Top 10 <span className="text-orange-500"></span>
                </a>

                {/* navitems */}
                <ul className="md:flex gap-12 text-lg hidden ">
                    {
                        navItems.map(({ link, path }) => <li className="text-white" key={path}>
                            <NavLink to={path} className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>{link}</NavLink>
                        </li>)
                    }
                </ul>

                {/* menu icons for large devices */}

                <div className="text-white lg:flex gap-4 items-center hidden">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700">
                        {theme === 'dark' ? <FaSun className="w-5 h-5"/> : <FaMoon className="w-5 h-5"/>}
                    </button>
                    <a href="/" className="hover:text-orange-500"> <FaMeta /></a>
                    <a href="/" className="hover:text-orange-500"><FaDribbble /></a>
                    <a href="/" className="hover:text-orange-500"><FaTwitter /></a>
                    {user ? (
                        <button onClick={handleLogout} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in duration-200 ml-4">Log out</button>
                    ) : (
                        <>
                            <button onClick={openLoginModal} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in duration-200 ml-4">Log in</button>
                            <button onClick={openSignupModal} className="bg-white text-orange-500 px-6 py-2 font-medium rounded hover:bg-orange-500 hover:text-white transition-all ease-in duration-200 ml-4">Sign up</button>
                        </>
                    )}
                </div>
                
                {/* modal components */}
                <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
                <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />

                {/* mobile menu */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="cursor-pointer">
                        {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* moblie menu items only */}
            <div className="">
                <ul className={`md:hidden block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                        navItems.map(({ link, path }) => <li className="text-black" key={path}>
                            <NavLink onClick={toggleMenu} to={path} className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            }>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
