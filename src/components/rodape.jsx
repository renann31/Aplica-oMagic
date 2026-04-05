import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Rodape = () => {
    return (
        <div className="h-full p-10 flex items-center justify-between relative md:px-[12.7%] md:py-10 md:pr-[19%]"
            
            >
            {/* lado esquerdo */}
            <div className="flex-col">
                <div className="relative w-[110px] h-[97px] md:w-[168px] md:h-[148px]">
                    <Image
                        src="/assets/logo02.png"
                        alt="Logo do Rodapé"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="px-3 py-2 flex gap-4">
                    <a href="" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#F2C94C] text-[#F2C94C]">
                        <FaWhatsapp size={20} />
                    </a>

                    <a href="" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#F2C94C] text-[#F2C94C]">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>

            {/* lado direito */}
            <div className="grid grid-cols-2 gap-3 md:gap-50">

                {/* Coluna esquerda */}
                <div className="flex flex-col">
                    <h3 className="font-extrabold font-sans text-[#FBD784] text-[9px] md:text-[12px] mb-3">Sobre nós</h3>
                    <p className="font-sans font-bold text-[7px] md:text-[9px] text-white mb-3">Quem é a Magic?</p>
                    <p className="font-sans font-bold text-[7px] md:text-[9px] text-white mb-3">Nossa história</p>
                    <p className="font-sans font-bold text-[7px] md:text-[9px] text-white">CDB</p>
                </div>

                {/* Coluna direita */}
                <div className="flex flex-col">
                    <h3 className="font-extrabold font-sans text-[#FBD784] text-[9px] md:text-[12px] mb-3">Serviços</h3>
                    <p className="font-sans font-bold text-[7px] md:text-[9px] text-white mb-3">Social</p>
                    <p className="font-sans font-bold text-[7px] md:text-[9px] text-white mb-3">Corporativo</p>
                    <p className="font-sans font-bold text-[7px] md:text-[9px] text-white mb-3">Produtos</p>
                </div>

            </div>
        </div>
    )
};

export default Rodape;