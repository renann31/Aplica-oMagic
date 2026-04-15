"use client";
import Background from "@/components/background.jsx";
import CarrosselMobile from "@/components/carrosselMobile"
import dados from "@/data/data.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function PaginaLayout({ params }) {
  const { pagina } = await params;
  const conteudo = dados[pagina];

  if (!conteudo) {
    return <div className="text-white p-10">Página não encontrada</div>;
  }

  const imagem = conteudo.prancheta;

  const animation = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.6, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <>
      <Background data={conteudo} />
      {/* IMAGEM */}
      <div className="w-full max-w-[300px] md:max-w-[1000px] mx-auto relative mt-10 md:mt-15  sm:px-0  flex flex-col">
        <div className="hidden relative md:absolute z-10 right-0 mb-10 md:mb-0 justify-center md:block">
          <Image
            src={imagem}
            alt="prancheta"
            width={400}
            height={700}
            className="object-contain md:w-auto" />
        </div>


        {/* TEXTO */}
        <div className="w-full md:max-w-[70%] space-y-4 z-30 relative">
          {conteudo.paragrafo.map((texto, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="font-sans font-light text-white text-[10px] md:text-[16px]"
            >
              {texto}
            </motion.p>
          ))}
        </div>

        {/* LISTAS */}
        <div className="space-y-2 md:space-y-4 pt-8 md:pt-20">

          <h1 className="font-sans font-semibold text-white text-[12px] md:text-[18px]">PERSONAGENS</h1>
          <ul className="">
            {conteudo.lista?.personagens.map((item, index) => (
              <li key={index} className="text-white font-sans font-light text-[10px] md:text-[18px] flex items-center gap-2">
                <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <h1 className="font-sans font-semibold text-white text-[12px] md:text-[18px]">FOTOS E VIDEOS</h1>
          <ul className="">
            {conteudo.lista?.fotos_e_videos.map((item, index) => (
              <li key={index} className="text-white font-sans font-light text-[10px] md:text-[18px] flex items-center gap-2">
                <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <h1 className="font-sans font-semibold text-white text-[12px] md:text-[18px]">EXPERIENCIAS</h1>
          <ul className="">
            {conteudo.lista?.experiencias.map((item, index) => (
              <li key={index} className="text-white font-sans font-light text-[10px] md:text-[18px] flex items-center gap-2">
                <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>


        </div>
        <CarrosselMobile data={conteudo} />
        {/* VIDEO */}
        {/* <motion.iframe
          initial={animation.initial}
          whileInView={animation.whileInView}
          transition={animation.transition}
          viewport={animation.viewport}
          className="w-full aspect-video rounded-sm mb-30 mt-16 md:mt-25 z-40"
          src="https://www.youtube.com/embed/iVWGUAQf12c?si=egKwgfTHK7v8IKQz"
          title="YouTube video">
        </motion.iframe> */}
      </div>
    </>
  );
}
