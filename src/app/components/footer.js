"use client";

import React from "react";
import Image from "next/image";

// Social Media Icons
import Facebook from "@/app/components/images/facebook.png";
import Twitter from "@/app/components/images/tweet.png";
import Github from "@/app/components/images/github.png";
import Linkedin from "@/app/components/images/linkedin.png";
import Instagram from "@/app/components/images/insta.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Danish Mustafa</h2>
            <p className="text-sm text-gray-400">
              Full-Stack Developer | AI Enthusiast | Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-5">
            {[
              { link: "https://www.linkedin.com/in/danishmustafa86/", icon: Linkedin, alt: "LinkedIn" },
              { link: "https://github.com/danishmustafa86", icon: Github, alt: "GitHub" },
              { link: "https://twitter.com/danishmustafa86", icon: Twitter, alt: "Twitter" },
              { link: "https://www.facebook.com/danish.jajja.56", icon: Facebook, alt: "Facebook" },
              { link: "https://www.instagram.com/danishmustafa_786", icon: Instagram, alt: "Instagram" },
            ].map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={30}
                  height={30}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-5"></div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Danish Mustafa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
