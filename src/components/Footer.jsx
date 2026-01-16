import React, { useState } from "react";
import EmailFooter from "./EmailFooter";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(second);

  const sections = [
    {
      title: "About Us",
      links: [
        "Our Company",
        "Our Coffee",
        "About Starbucks",
        "Customer Service",
      ],
    },
    {
      title: "Careers",
      links: [
        "Culture and Values",
        "Alumni Community",
        "U.S. Careers",
        "College Achievement Plan",
      ],
    },
    {
      title: "Social Impact",
      links: ["Community", "Environment", "Ethical Sourcing", "Giving Back"],
    },
    {
      title: "For Business Partners",
      links: [
        "Partner Directory",
        "Wholesale",
        "Supply Chain",
        "Partner Resources",
      ],
    },
  ];

  return (
    <>
      <div className="py-5 md:py-5 lg:py-0">
        <EmailFooter />
      </div>

      <footer className="flex flex-col lg:flex-row lg:hidden">
        <div className="p-4  ">
          <button
            onClick={() => setOpen(!open)}
            className="w-full  flex justify-between items-center text-lg font-medium "
          >
            <span>About Us</span>
            <span
              className={`transform transition-transform duration-300 lg:hidden ${
                open ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
                `}
          >
            <nav className="pl-2 space-y-2">
              <a className="block text-sm text-gray-700 hover:underline">
                Our Company
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Our Story
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Careers
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={() => setThird(!third)}
            className="w-full flex justify-between items-center text-lg font-medium"
          >
            <span>Careers</span>
            <span
              className={`transform transition-transform duration-300 ${
                third ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${third ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
                `}
          >
            <nav className="pl-2 space-y-2">
              <a className="block text-sm text-gray-700 hover:underline">
                Culture and Values
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Alumni Community
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                U.S. Careers
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                College Achievement Plan
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={() => setFourth(!fourth)}
            className="w-full flex justify-between items-center text-lg font-medium"
          >
            <span>Social Impact</span>
            <span
              className={`transform transition-transform duration-300 ${
                fourth ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      fourth ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }
                `}
          >
            <nav className="pl-2 space-y-2">
              <a className="block text-sm text-gray-700 hover:underline">
                Community
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Environment
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Ethical Sourcing
              </a>
              <a className="block text-sm text-gray-700 hover:underline">
                Giving Back
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={() => setSecond(!second)}
            className="w-full flex justify-between items-center text-lg font-medium"
          >
            <span>For Business Partners</span>
            <span
              className={`transform transition-transform duration-300 ${
                second ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      second ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }
                `}
          >
            <nav className="pl-2 space-y-2">
              <a className="block text-sm text-gray-700 hover:underline">
  Partner Directory
</a>
<a className="block text-sm text-gray-700 hover:underline">
  Wholesale
</a>
<a className="block text-sm text-gray-700 hover:underline">
  Supply Chain
</a>
<a className="block text-sm text-gray-700 hover:underline">
  Partner Resources
</a>

            </nav>
          </div>
        </div>
      </footer>

      <footer className="hidden lg:flex lg:gap-x-10 lg:border-t-2 ">
        {sections.map((sec) => (
          <div key={sec.title} className="flex flex-col p-4 ">
            <h1 className="font-semibold mb-2">{sec.title}</h1>
            {sec.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-700 hover:underline "
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </footer>
      <footer className="border-t-2 md:py-2 lg:py-4  w-[60%]">
        <div className="flex max-h-10 py-2 justify-center items-center gap-4 lg:justify-start lg:pl-10 xl:gap-6 xl:pl-20 overflow-hidden">
          <a className="max-h-40 active:scale-80 " href="">
            <i>
              <Facebook className="lg:hover:size-8" />
            </i>
          </a>
          <a className="max-h-40 active:scale-80" href="">
            <i>
              <Twitter color="#ece4e4" className="lg:hover:size-8" />
            </i>
          </a>
          <a className="max-h-40 active:scale-80" href="">
            <i>
              <Instagram color="#ece4e4" className="lg:hover:size-8" />
            </i>
          </a>
          <a className="max-h-40 active:scale-80" href="">
            <i>
              <Youtube color="#ece4e4" className="lg:hover:size-8" />
            </i>
          </a>
          <a className="max-h-40 active:scale-80" href="">
            <i>
              <Linkedin color="#ece4e4" className="lg:hover:size-8" />
            </i>
          </a>
        </div>
      </footer>
      <div className="flex justify-center items-center pb-4 md:pb-8 lg:pb-10">
        <p className="text-sm md:text-lg lg:text-lg">
          © 2026 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
