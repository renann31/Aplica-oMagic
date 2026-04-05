import Image from "next/image";
const arrowDown = "/assets/arrow_downward_24px.png";

const Titulo = ({ data }) => {
    return (
        <div className=" absolute z-40 top-[35%] md:top-[20%] left-[50%] md:left-1/4 -translate-x-1/2 md:translate-x-0 w-[70%] md:max-w-[400px] flex flex-col items-center md:items-start text-left md:text-left gap-4 md:gap-6">

            <div className="h-[18px] md:h-[22px] w-full flex items-center justify-start md:justify-start gap-3">
                <div className="h-[1px] w-[25px] md:w-[35px] bg-[#F5C069]"></div>
                <p className="text-[#F5C069] tracking-[2px] text-[7px] md:text-[11px] font-sans font-extrabold">
                    {data.categoria}
                </p>
            </div>

            <h1 className="font-serif text-white text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-tight">
                {data.titulo}
            </h1>

            <div className="hidden md:flex items-center gap-2 justify-center md:justify-start">
                <p className="font-sans text-[9px] text-white font-bold">
                    Role para baixo
                </p>
                <div className="relative w-3 h-3">
                    <Image
                        src={arrowDown}
                        alt="Seta para baixo"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

        </div>
    )
};

export default Titulo
