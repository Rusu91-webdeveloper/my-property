import Image from "next/image";

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-orange-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="object-cover h-[400px] rounded-xl mx-auto"
            width={1800}
            height={400}
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className={`${
                  images.length === 3 && i === 2 ? "col-span-2" : "col-span-1"
                }`}
              >
                {" "}
                <Image
                  src={image}
                  alt=""
                  className="object-cover w-full h-[400px] rounded-xl"
                  width={1800}
                  height={400}
                  priority={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
