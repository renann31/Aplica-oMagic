"use client";
import Image from "next/image";

const imagens = [
  "/assets/c1.png",
  "/assets/c2.png",
  "/assets/c3.png",
  "/assets/c4.png",
  "/assets/c5.png"
];

export default function CarrosselMobile() {
  return (
    <div className="w-full mt-10 md:hidden">

      <div className="
        flex gap-4 
        overflow-x-auto 
        px-5 
        scrollbar-hide
      ">

        {imagens.map((src, index) => (
          <div
            key={index}
            className="
              min-w-[75%] 
              h-[250px] 
              relative 
              rounded-lg 
              overflow-hidden
              flex-shrink-0
            "
          >
            <Image
              src={src}
              alt="imagem"
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>
    </div>
  );
}