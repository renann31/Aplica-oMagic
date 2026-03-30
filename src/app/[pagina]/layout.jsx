import dados from "@/data/titulos.json";
import Image from "next/image";

async function PaginaLayout({ params }) {
  const { pagina } = await params;

  const conteudo = dados[pagina];

  const imagem = conteudo.prancheta
  const estiloImagem = conteudo.estilo_prancheta

  return (
    <div className="mt-15 ml-45 relative items-center">

      <div className="absolute right-0 z-10">
        <Image
          src={imagem}
          alt=""
          width={600}
          height={1060}
          className="object-contain"
        />
      </div>

      <div className="max-w-[70%] space-y-4">
      {conteudo.paragrafo.map((texto, index) => (
        <p
          key={index}
          className="opacity-0 translate-y-4 animate-fadeUp font-sans font-light text-white text-[18px]"
          style={{
            animationDelay: `${index * 0.2}s`,
            animationFillMode: "forwards",
          }}>
          {texto}
        </p>
      ))}
      </div>

      <div className="space-y-4 pt-20">

        <h1 className="font-sans font-semibold text-white text-[18px] tracking-[2%]">PERSONAGENS</h1>
        <ul>
          {conteudo.lista.personagens.map((item, index) => (
            <li key={index} className="text-white font-sans font-light text-[18px] tracking-[2%] flex items-center gap-2">
              <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>

        <h1 className="font-sans font-semibold text-white text-[18px]">FOTOS E VIDEOS</h1>
        <ul>
          {conteudo.lista.fotos_e_videos.map((item, index) => (
            <li key={index} className="text-white font-sans font-light text-[18px] tracking-[2%] flex items-center gap-2">
              <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>

        <h1 className="font-sans font-semibold text-white text-[18px] tracking-[2%]">EXPERIENCIAS</h1>
        <ul>
          {conteudo.lista.experiencias.map((item, index) => (
            <li key={index} className="text-white font-sans font-light text-[18px] tracking-[2%] flex items-center gap-2">
              <span className="w-[2px] h-[2px] bg-white rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaginaLayout