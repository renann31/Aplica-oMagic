import Image from "next/image";

const CardServicoHome = ({ id, numero, categoria, titulo, descricao, imagem, invertido }) => {
  return (
    <div
      id={id}
      className={`flex min-h-0 h-[27.2%] items-center justify-between mb-[7%] px-28 ${
        invertido ? "flex-row-reverse" : ""
      }`}>
      {/* texto */}
      <div className="w-[42.8%] flex flex-col gap-[13px] relative">
        
        {/* Número */}
        <h1 className="text-[120px] text-white opacity-10 font-extrabold font-sans absolute left-[-20%] top-[-35%]">
          {numero}
        </h1>
        
        {/* categoria */}
        <div className="h-[18px] md:h-[22px] w-full flex items-center gap-3 z-10">
          <div className="h-[1px] w-[36px] bg-[#F5C069]"></div>
          <p className="text-[#F5C069] tracking-widest font-black text-[60%]">
            {categoria}
          </p>
        </div>

        {/* título */}
        <h2 className="text-white text-[34px] font-semibold leading-[1.05] tracking-tight text-left font-serif">
          {titulo}
        </h2>

        {/* descrição */}
        <p className="text-[10px] leading-[16px] text-white font-montserrat font-light text-left">
          {descricao}
        </p>

        {/* cta */}
        <div className="h-[5%] w-full flex items-center text-[9px]">
          <p className="text-[#F5C069] tracking-widest font-black">
            Saiba mais 
          </p>

        </div>
      </div>

      {/* imagem */}
      <div className="w-[38.7%] rounded-lg overflow-hidden h-full">
        <Image
          src={imagem}
          alt="Imagem do serviço"
          width={600}
          height={400}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default CardServicoHome;