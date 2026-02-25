import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-8">
        <div className=" flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <Link
              href="#home"
              className={`text-4xl lg:text-5xl font-bold audiowide text-white`}
            >
              Liv
              <span className="text-(--prim-dark)">ora</span>
            </Link>
            <p className="text-(--text-light) dmSans my-5">
              Form  is an architecture and design studio crafting inspired
              spaces. We create sustainable, bespoke environments that reflect
              client values and vision.
            </p>

            <div className=" flex gap-2">
              <i
                className="bi bi-facebook border border-gray-500 rounded-full 
                px-2 py-1 text-lg transition-all duration-300 
                    text-white hover:-translate-y-1 cursor-pointer"
              ></i>
              <i
                className="bi bi-behance border border-gray-500 rounded-full 
                px-2 py-1 text-lg transition-all duration-300 
                    text-white hover:-translate-y-1 cursor-pointer"
              ></i>{" "}
              <i
                className="bi bi-instagram border border-gray-500 rounded-full 
                px-2 py-1 text-lg transition-all duration-300 
                    text-white hover:-translate-y-1 cursor-pointer"
              ></i>{" "}
              <i
                className="bi bi-dribbble border border-gray-500 rounded-full 
                px-2 py-1 text-lg transition-all duration-300 
                    text-white hover:-translate-y-1 cursor-pointer"
              ></i>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-white font-bold rethink text-2xl mb-5">
                  Links
                </h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="#home"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    About
                  </Link>
                  <Link
                    href="#expertise"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Expertise{" "}
                  </Link>
                  <Link
                    href="#testimonial"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Testimonial
                  </Link>
                  <Link
                    href="#contactus"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold rethink text-2xl mb-5">
                  Top Products
                </h3>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="#home"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Chairs
                  </Link>
                  <Link
                    href="#home"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Dresser
                  </Link>
                  <Link
                    href="#home"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Sofas{" "}
                  </Link>
                  <Link
                    href="#home"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Storage
                  </Link>
                  <Link
                    href="#home"
                    className="text-(--text-light) dmSans transition-all duration-300
                  hover:text-white hover:ml-2"
                  >
                    Tables
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold rethink text-2xl mb-5">
                  Contact
                </h3>
                <div className="flex flex-col">
                  <Link
                    href=""
                    className="text-(--text-light) dmSans transition-all 
                  duration-300 hover:text-white"
                  >
                    info@Example.com
                  </Link>
                  <p className="text-(--text-light) mt-5 dmSans">
                    New York — 245 West 29th Street, Suite 1201, NY 1000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t text-center border-gray-500 mt-10">
          <p className="rethink text-lg text-(--text-light) mt-8 cursor-pointer">
            © {currentYear}. All Rights Reserved by{" "}
            <Link
              href="https://github.com/Fred120-code"
              target="_blank"
              className="font-bold text-white hover:text-(--prim-dark) transition-all duration-300"
            >
              Joran Fred
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
