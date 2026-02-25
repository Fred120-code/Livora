import Image from "next/image";
import partner1 from "@/public/Images/partner-1.webp";
import partner2 from "@/public/Images/partner-2.webp";
import partner3 from "@/public/Images/partner-3.webp";
import partner4 from "@/public/Images/partner-4.webp";
import partner5 from "@/public/Images/partner-5.webp";
import partner6 from "@/public/Images/partner-6.webp";

const imgContainer = [
  {
    id: 1,
    name: partner1,
    alt: "partner1",
  },
  {
    id: 2,
    name: partner2,
    alt: "partner2",
  },
  {
    id: 3,
    name: partner3,
    alt: "partner3",
  },
  {
    id: 4,
    name: partner4,
    alt: "partner4",
  },
  {
    id: 5,
    name: partner5,
    alt: "partner5",
  },
  {
    id: 6,
    name: partner6,
    alt: "partner6",
  },
];

const WorkBanner = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 work-banner">
        <div
          className="work-banner-content flex flex-col h-full 
            g:flex-row justify-center items-center text-center"
        >
          <h2 className="text-white rethink text-5xl lg:text-8xl font-bold">
            Transform your vision with Form’s expertise
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        {imgContainer.map((item) => (
          <div
            key={item.id}
            className=" border-r border-b border-gray-500 p-10 flex 
        items-center justify-center"
          >
            <Image
              src={item.name}
              alt={item.alt}
              className=" opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkBanner;
