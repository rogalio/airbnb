import React from "react";
import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="t"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p className="font-semibold">{description}</p>
        <button className="text-sm text-white mt-5 bg-gray-900 px-4 py-2 rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
