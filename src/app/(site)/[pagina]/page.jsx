"use client";
import Background from "@/components/background.jsx";
import CarrosselMobile from "@/components/carrosselMobile"
import FaleConosco from "@/components/faleConosco";
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

  return (
    <>
      <Background data={conteudo} />

      <div className=" w-[70%] md:w-auto relative mt-10 md:mt-15 px-5 sm:px-8 ml-10 md:ml-45 flex flex-col">

        {/* IMAGEM */}
        <div className="hidden relative md:absolute md:right-0 z-10 md:translate-y-[-60px] mb-10 md:mb-0 justify-center md:block">
          <Image
            src={imagem}
            alt="prancheta"
            width={500}
            height={700}
            className="object-contain w-[80%] md:w-auto" />
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

      </div>
      <CarrosselMobile data={conteudo} />
      {/* VIDEO */}
      <iframe
        className="w-[80%] md:w-[80%] aspect-video rounded-sm ml-10 md:ml-30 mb-30 mt-16 md:mt-25 z-40"
        src="https://www.youtube.com/embed/iVWGUAQf12c?si=egKwgfTHK7v8IKQz"
        title="YouTube video">
      </iframe>
      <FaleConosco id="contato" data={conteudo} />
    </>
  );
}
