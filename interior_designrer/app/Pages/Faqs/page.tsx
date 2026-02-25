"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "How do I start a project with Form ?",
    answer:
      "To begin, please contact us by email or our site form. We’ll set up an intro call to learn your needs and vision.",
  },
  {
    id: 2,
    question: "Can I meet the team online?",
    answer:
      "Yes, our team is happy to meet you virtually, making it simple to connect and share ideas from anywhere.",
  },
  {
    id: 3,
    question: "What types of spaces do you design?",
    answer:
      "We design homes, offices, and hotels, always custom-made to fit your goals, needs, and unique brand values.",
  },
  {
    id: 4,
    question: "Does Form  work with startups too?",
    answer:
      "We enjoy helping new firms thrive! Our team crafts designs to launch your vision and support your growth.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-30" id="faqs">
        <div className="text-center">
          <span className="text-(--text-light) text-lg uppercase rethink">
            Looking for answers?
          </span>
          <h2 className="lg:text-6xl text-4xl text-white rethink font-bold mt-5">
            Frequently asked questions
          </h2>
          <p className="dmSans mt-8 text-gray-300">
            Form is here to shape spaces you love, guiding every project with
            care, skill, and open client support for lasting design excellence.
          </p>
        </div>

        <div className=" space-y-6 pt-15 w-full">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden border-b border-gray-500 transition-all
                    duration-300 ${openIndex === index ? "" : ""}`}
            >
              <button
                className="w-full flex justify-between items-center
                        py-4 text-left focus:outline-none cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-2xl font-bold rethink text-white">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <i
                    className="bi bi-dash bg-(--prim) rounded-full px-2 py-1 
                    text-black text-3xl transition-all duration-300"
                  ></i>
                ) : (
                  <i
                    className="bi bi-plus bg-(--prim) rounded-full px-2 py-1 
                    text-black text-3xl transition-all duration-300"
                  ></i>
                )}
              </button>

              <div
                className={` transition-all duration-500 ease-in-out overflow-hidden
                 ${openIndex === index ? " max-h-75 opacity-100 py-3" : " max-h-0 opacity-0 py-0"}`}
              >
                <p className="text-lg font-medium w-[70%] dmSans text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;
