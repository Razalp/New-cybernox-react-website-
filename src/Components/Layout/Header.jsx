import { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
        setIsScrolledUp(false);
      } else {
        setShowHeader(true);
        setIsScrolledUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`${
          isScrolledUp ? "bg-black" : "bg-transparent"
        } text-white fixed w-full z-50 transition-all duration-300 ease-in-out ${
          showHeader ? "transform-none" : "-translate-y-full"
        }`}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="text-lg font-bold">
                CYBER <span className="text-[#FE7837]">NOX</span>
              </h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="text-sm font-semibold leading-6">HOME</div>
            </Link>

            <button
              onClick={() => scrollToSection("who-we-are")}
              className="text-sm font-semibold leading-6"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-semibold leading-6"
            >
              <div className="text-sm font-semibold leading-6">SERVICES</div>
            </button>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://wa.me/+917907224281?text=Hello! I would like to contact you."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 bg-[#00E57E] p-4 rounded-2xl text-black"
            >
              CONTACT US <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 mt-20 right-0 z-50 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5"></Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 "
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    <button className="-mx-3 w-full block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#01E47E]">
                      HOME
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection("who-we-are");
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 w-full block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#01E47E]"
                  >
                    ABOUT US
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 w-full block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#01E47E]"
                  >
                    SERVICES
                  </button>
                </div>
                <div className="py-6">
                  <a
                    href="https://wa.me/+917907224281?text=Hello! I would like to contact you."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="-mx-3 w-full block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-[#01E47E]">
                      CONTACT US
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
