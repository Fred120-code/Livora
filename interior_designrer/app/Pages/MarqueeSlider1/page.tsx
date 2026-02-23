import Image from "next/image";
import startShape from "@/public/Images/star-shapp.png";

const MarqueeSlider1 = () => {
  return (
    <div className="marquee bg-white py-6 overflow-hidden">
      <div className="marquee_text flex items-center gap-10">
        <MarqueeItem text="Comfort crafted for living" />
        <MarqueeItem text="Designed for lifelong comfort" />
        <MarqueeItem text="Spaces that grow with you" />
        <MarqueeItem text="Homes built for life" />

        <MarqueeItem text="Comfort crafted for living" />
        <MarqueeItem text="Designed for lifelong comfort" />
        <MarqueeItem text="Spaces that grow with you" />
        <MarqueeItem text="Homes built for life" />
      </div>
    </div>
  );
};

export default MarqueeSlider1;

function MarqueeItem({ text }: { text: string }) {
  return (
    <div className=" flex items-center gap-8 whitespace-nowrap">
      <h2 className="marquee-text text-5xl font-bold">{text}</h2>
      <Image src={startShape} alt="startShape" width={40} height={40} />
    </div>
  );
}
