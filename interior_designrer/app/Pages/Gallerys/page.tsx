import gallery1 from "@/public/Images/gallery-1.jpg";
import gallery2 from "@/public/Images/gallery-2.jpg";
import gallery3 from "@/public/Images/gallery-3.jpg";
import gallery4 from "@/public/Images/gallery-4.jpg";
import gallery5 from "@/public/Images/gallery-5.jpg";
import gallery6 from "@/public/Images/gallery-6.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="pt-20 pb-20">
        <h2 className="text-center pb-5 rethink text-2xl font-bold">
          Follow us on{" "}
          <span className=" underline text-(--prim-dark)">instagram</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="gallery-item">
            <Image src={gallery1} alt="galleryImg" />
          </div>
          <div className="gallery-item">
            <Image src={gallery2} alt="galleryImg" />
          </div>{" "}
          <div className="gallery-item">
            <Image src={gallery3} alt="galleryImg" />
          </div>{" "}
          <div className="gallery-item">
            <Image src={gallery4} alt="galleryImg" />
          </div>{" "}
          <div className="gallery-item">
            <Image src={gallery5} alt="galleryImg" />
          </div>{" "}
          <div className="gallery-item">
            <Image src={gallery6} alt="galleryImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
