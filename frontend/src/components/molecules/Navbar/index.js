import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../pages/shared/Shared.css";

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "Event", link: "/event", icon: <RiFolderInfoFill /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#6b7280",
    };
  };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`visible ${show && "nav-hidden"} shadow-lg bg-white 
     z-50`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">TiKons</h1>
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-primary hover:text-accent duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}

            {user ? (
              <li>
                <button className='primary-button' onClick={onLogout}>
                  <span>
                    Logout
                  </span>
                </button>
              </li>
            ) : (
              <>

                <li className="text-center m-4">
                  <Link to='/login'
                    className="primary-button ">
                    <span>Login</span>
                    <span>

                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="block lg:hidden">
            <button onClick={toggleDrawer} className=" text-black hover:text-accent">
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="bla bla bla flex flex-col justify-between pb-4"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <GiCrossMark
                    className="cursor-pointer hover:text-accent text-primary duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                  ></GiCrossMark>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4 text-primary"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center text-primary hover:text-accent duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                {user ? (
                  <li className="text-center m-4">
                    <button className='primary-button w-full text-center text-white' onClick={onLogout}>
                      <span>
                        Logout
                      </span>
                    </button>
                  </li>
                ) : (
                  <>

                    <li className="text-center m-4">
                      <Link to='/login'
                        className="primary-button w-full text-white">
                        <span>Login</span>
                        <span>

                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <div className="text-center">
                <p className="text-primary">
                  &copy; Copyright 2023, TiKons
                </p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Navbar;
