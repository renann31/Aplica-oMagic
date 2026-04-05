import Background from "@/components/background.jsx";
import CarrosselMobile from "@/components/carrosselMobile"
import dados from "@/data/data.json";
import Image from "next/image";

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

      <div className=" w-[70%] relative mt-10 md:mt-15 px-5 sm:px-8 mx-auto md:ml-45 flex flex-col">

        {/* IMAGEM */}
        <div className="hidden relative md:absolute md:right-0 z-10 md:translate-y-[-100px] mb-10 md:mb-0 justify-center md:block">
          <Image src={imagem} alt="" width={700} height={1000} className="object-contain w-[80%] md:w-auto" />
        </div>

        {/* TEXTO */}
        <div className="w-full md:max-w-[70%] space-y-4 z-30 relative">
          {conteudo.paragrafo.map((texto, index) => (
            <p
              key={index}
              className="opacity-0 translate-y-4 animate-fadeUp font-sans font-light text-white text-[10px] md:text-[18px]"
              style={{ animationDelay: `${4 + index * 0.2}s`, animationFillMode: "forwards" }}
            >
              {texto}
            </p>
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
          <CarrosselMobile />
        {/* VIDEO */}
        <div>
        <iframe
          className="w-[80%] mx-auto md:w-[70%] aspect-video rounded-sm mt-16 md:mt-25"
          src="https://www.youtube.com/embed/iVWGUAQf12c?si=egKwgfTHK7v8IKQz"
          title="YouTube video">
        </iframe>
        </div>
    </>
  );
}
