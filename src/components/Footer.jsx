import React from "react";
import github from "../assets/GitHub.svg"
import npm from "../assets/NPM.svg"
const Footer = () => {
  const footerData = [
    {
      title: "Support",
      links: ["Help", "Advisories", "Status", "Contact npm"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Press"],
    },
    {
      title: "Terms & Policies",
      links: ["Policies", "Terms of Use", "Code of Conduct", "Privacy"],
    },
  ];

  return (
    <>
      
      <div className="px-8 py-10 mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-12 items-center ">
       <div className="">
       <img className="h-24"  src={npm} alt=""/>
       <img className="h-24" src={github} alt=""/>
       </div>
        {footerData.map((section, index) => (
          <div key={index}>
            <div className="font-bold text-lg mb-4">{section.title}</div>
            <ul className="space-y-2 text-sm md:text-base">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-red-500 hover:underline hover:underline-offset-4 hover:decoration-red-500"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="h-3 bg-gradient-to-r from-orange-600 to-pink-600"></div>
    </>
  );
};

export default Footer;
