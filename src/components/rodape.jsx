import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Rodape = () => {
    return (
        <div 
            className="h-full px-[12.7%] py-10 pr-[19%] flex items-center justify-between relative"
            
            >
            {/* lado esquerdo */}
            <div className="flex-col">
                <div className="relative w-[168px] h-[148px]">
                    <Image
                        src="/assets/logo02.png"
                        alt="Logo do Rodapé"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="px-3 py-2 flex gap-4">
                    <a href="" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F2C94C] text-[#F2C94C]">
                        <FaWhatsapp size={27} />
                    </a>

                    <a href="" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F2C94C] text-[#F2C94C]">
                        <FaInstagram size={27} />
                    </a>
                </div>
            </div>

            {/* lado direito */}
            <div className="grid grid-cols-2 gap-50">

                {/* Coluna esquerda */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-extrabold font-sans text-[#FBD784] text-[12px] mb-3">Sobre nós</h3>
                    <p className="font-montserrat font-bold text-[9px] text-white mb-3">Quem é a Magic?</p>
                    <p className="font-montserrat font-bold text-[9px] text-white mb-3">Nossa história</p>
                    <p className="font-montserrat font-bold text-[9px] text-white ">CDB</p>
                </div>

                {/* Coluna direita */}
                <div className="flex flex-col gap-2 ">
                    <h3 className="font-extrabold font-montserrat text-[#FBD784] text-[12px] mb-3">Serviços</h3>
                    <p className="font-montserrat font-bold text-[9px] text-white mb-3">Social</p>
                    <p className="font-montserrat font-bold text-[9px] text-white mb-3">Corporativo</p>
                    <p className="font-montserrat font-bold text-[9px] text-white mb-3">Produtos</p>
                </div>

            </div>
        </div>
    )
};

export default Rodape;