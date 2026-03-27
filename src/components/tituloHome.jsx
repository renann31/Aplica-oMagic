import Image from "next/image";
const arrowDown = "/assets/arrow_downward_24px.png";

const tituloHome = () => {
    return (
        <div className="absolute z-10 top-[25%] left-1/4 max-w-[400px] w-full flex flex-col items-start justify-start gap-6">

            <div className="h-[18px] md:h-[22px] w-full flex items-center gap-3">
                <div className="h-[1px] w-[35px]  bg-[#F5C069]"></div>
                <p className="text-[#F5C069]  tracking-widest font-black text-[11px]">
                    MAGIC EVENTOS
                </p>
            </div>

            <h1 className="text-white text-[39px] font-semibold leading-[1.05] tracking-tight text-left font-serif">
                Crie Memórias Inesquecíveis com a Magic
            </h1>
            <div className="flex items-center gap-2">
                <p className="text-[9px] text-white font-bold">
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

export default tituloHome;