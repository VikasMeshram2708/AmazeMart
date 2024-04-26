import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 p-4 font-Poppins mt-5">
      <div className="w-full max-w-[90rem] mx-auto flex flex-wrap gap-5 items-center justify-between">
        <h1 className="font-semibold text-2xl italic">
          Amaze<span className="text-orange-500">Mart</span>
        </h1>
        <p className="text-lg">Copyright &copy; amazemart@gmail.com</p>
        {/* Social Media Buttons */}
        <div className="flex items-center gap-4">
          <FaXTwitter  className="cursor-pointer" size={20}/>
          <FaLinkedin  className="cursor-pointer" size={20}/>
          <FaInstagram className="cursor-pointer" size={20} />
          <FaFacebookF className="cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  );
}
