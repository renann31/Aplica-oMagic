import { Montserrat, Noto_Serif } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });

const CardServicoHome = ({ numero, categoria, titulo, descricao, imagem, invertido }) => {
  return (
    <div
      className={`w-[78.8%] m-auto flex items-center justify-between ${
        invertido ? "flex-row-reverse" : ""
      }`}
    >
      {/* texto */}
      <div className="w-[42.8%] flex flex-col gap-[13px] relative">
        
        {/* Número */}
        <h1 className="text-[120px] text-white opacity-10 font-extrabold font-montserrat absolute left-[-70px] top-[15px]">
          {numero}
        </h1>
        
        {/* categoria */}
        <div className="h-[18px] md:h-[22px] w-full flex items-center gap-3 z-10">
          <div className="h-[1px] w-[36px] bg-primary"></div>
          <p className="text-primary tracking-widest font-black text-[11px]">
            {categoria}
          </p>
        </div>

        {/* título */}
        <h2 className="text-white text-[39px] font-semibold leading-[1.05] tracking-tight text-left font-serif">
          {titulo}
        </h2>

        {/* descrição */}
        <p className="text-[10px] leading-[16px] text-white font-montserrat font-light text-left">
          {descricao}
        </p>

        {/* cta */}
        <div className="h-[5%] w-full flex items-center gap-3 text-[11px]">
          <p className="text-primary tracking-widest font-black">
            Saiba mais
          </p>
        </div>
      </div>

      {/* imagem */}
      <div className="max-w-[38.7%] rounded-lg object-cover overflow-hidden absolute">
        <Image
          src={imagem}
          alt={titulo}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CardServicoHome;