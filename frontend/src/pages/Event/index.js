import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import "./Event.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, Footer } from "../../components";
import { HiShoppingCart } from "react-icons/hi";

const Event = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="parent pt-16 my-16">
        <div className="">
          <motion.div
            className="mb-10"
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, type: "spring" },
            }}
          >
            <h3 className="text-neutral text-center">Something Event Myself</h3>
            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent">
              Event <span className="text-primary">Big</span>
            </h1>
            <BottomLine />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.25 },
              }}
            >
              <img
                src="https://res.cloudinary.com/du541igfh/image/upload/v1686241499/Blog%20Portfolio%20Gilbert/Project/mern-ticket/eventImg_nt6div.png"
                alt="Event Raisa Live Concert"
                className="p-10 w-50 h-50 transform translate-y-[-12%]"
                title="Event Raisa Live Concert"
              />

            </motion.div>
            <motion.div
              className=""
              initial={{ x: 200, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.25 },
              }}
            >
              <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Gilbert Hutapea</h1>
              <div className="my-8">
                <TypeAnimation
                  className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                  cursor={true}
                  sequence={[
                    "Raisa Live Concert",
                    2000,
                    "GBK Main Stadium",
                    2000,
                    "June 18, 2023, 19:00 WIB",
                    2000,
                  ]}
                  wrapper="div"
                  repeat={Infinity}
                />
              </div>
              <p className="text-primary font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
                Raisa event will take place at the Gelora Bung Karno Main Stadium on June 18 2023.
                Raisa invited a number of collaborators & special guests to participate & be part of this concert.
              </p>
              <br />
              <p className="text-primary font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
                History in the making for having the most eminent locals in their fields of expertise,
                from building stunning stage productions to cutting-edge visuals.
                Not only the first concert by a local solo artist but the most advanced by global standards
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
                <Link to={'/dashboard'}
                >
                  <div className="grid justify-center sm:flex sm:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                    <button className="primary-button">
                      <span>Buy Ticket</span>
                      <span>
                        <HiShoppingCart />
                      </span>
                    </button>
                  </div>

                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {!isHomePage && <Footer />}
    </>
  );
};

export default Event;
