import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine, Footer, SecondaryBtn } from "../../components";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6xnj05v",
        "template_exk29f8",
        form.current,
        "kLfLk-o6LKj-L9c77"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="parent py-24 mt-4">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className=""
            ref={ref}
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={contactAnimation}
          >
            <h2 className="text-2xl font-medium">Contact Me</h2>
            <form ref={form} onSubmit={handleSend}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                <input
                  className="input-field"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                className="input-field"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="input-field"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <SecondaryBtn
                type="submit"
                value="Send Message"
                className=""
              >
                <span>Send</span>
                <span><MdSend /></span>
              </SecondaryBtn>
            </form>
          </motion.div>
          <motion.div
            className=""
            initial={{ y: 50, opacity: 0 }}
            animate={viewDiv && "visible"}
            variants={contactAnimation}
          >
            <h2 className="text-2xl font-medium">Contact Info</h2>
            <div className="flex items-center my-6">
              <FaUserAlt className="text-2xl mr-8 text-primary cursor-pointer duration-300"></FaUserAlt>
              <h3 className="font-medium text-primary">TiKons</h3>
            </div>
            <div className="flex items-center my-6">
              <FaPhoneAlt className="text-2xl mr-8 text-primary cursor-pointer duration-300"></FaPhoneAlt>
              <h3 className="font-medium text-primary">02233</h3>
            </div>
            <div className="flex items-center my-6">
              <MdEmail className="text-3xl mr-8 text-primary cursor-pointer duration-300"></MdEmail>
              <h3 className="font-medium text-primary">info@tikons.com</h3>
            </div>
            <div className="flex items-center my-6">
              <FaLocationArrow className="text-2xl mr-8 text-primary cursor-pointer duration-300"></FaLocationArrow>

              <h3 className="font-medium text-primary">
                Karawang, Jawa Barat, Indonesia
              </h3>
            </div>
            <div className="mt-8 flex items-center">
              <h3 className="text-xl text-primary">Social</h3>
              <div className="bg-primary w-10 h-[2px] mx-4"></div>
              <a
                href="/"
                target="blank"
                className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                href="/"
                target="blank"
                className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              >
                <FaTwitterSquare></FaTwitterSquare>
              </a>
              <a
                href="/"
                target="blank"
                className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
              >
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {!isHomePage && <Footer />}
    </>
  );
};

export default Contact;
