import Image from "next/image";
import Link from "next/link";

const CardServicoHome = ({
  id,
  numero,
  categoria,
  titulo,
  descricao,
  imagem,
  invertido,
  rota,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col-reverse md:flex-row items-center mb-20 md:mb-[7%] md:gap-30
        ${invertido ? "md:flex-row-reverse xl:translate-x-[-80px]" : ""}
      `}
    >
      {/* TEXTO */}
        <div className="w-full md:w-[42.8%] flex flex-col gap-[13px] relative">

        {/* Número */}
          <h1 className=" text-[70px] md:text-[120px] text-white opacity-10 font-extrabold font-sans md:absolute left-0 md:left-[-20%] top-[-20%] md:top-[-35%]">
            {numero}
          </h1>

        {/* categoria */}
          <div className="h-[18px] md:h-[22px] w-full flex items-center gap-3 z-10">
            <div className="h-[1px] w-[36px] bg-[#F5C069]"></div>
            <p className="text-[#F5C069] tracking-[4px] md:tracking-[6px] font-extrabold text-[10px] md:text-[60%] font-sans">
              {categoria}
            </p>
          </div>

        {/* título */}
            <h2 className="text-white text-[25px] sm:text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-tight text-left font-serif">
            {titulo}
            </h2>

        {/* descrição */}
            <p className="text-[10px] md:text-[12px] text-white font-extralight text-left font-sans">
            {descricao}
            </p>

        {/* CTA */}
          <div className="w-full flex items-center text-[6px] md:text-[9px]">
            <Link href={`${rota}`} className="text-[#F5C069] tracking-widest font-black">
              Saiba mais
            </Link>
          </div>
        </div>

      {/* IMAGEM */}
        <div className="w-full md:w-[38.7%] rounded-lg overflow-hidden">
          <Image
            src={imagem}
            alt="Imagem do serviço"
            width={600}
            height={400}
            className="w-full h-auto object-cover md:object-contain rounded-lg"
          />
        </div>
    </div>
  );
};

export default CardServicoHome;