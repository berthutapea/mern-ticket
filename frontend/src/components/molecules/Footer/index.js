import React from "react";

const Footer = () => {

  return (
    <>
      <footer className="w-full text-center p-6 bg-white mx-auto">
        <div className="px-10 py-6 text-sm text-center text-base-100 border-base-300">
          <div className="w-full h-[2px] bg-gray-600"></div>
          <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-primary">
            <p>&copy; Copyright 2023, TiKons</p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
