import Image from "next/image";
import Titulo from "./titulo.jsx";


const Background = ({ data }) => {
    const estilo = data.estilo
    return (
        <div className="bg-[#320A27]" id="inicio">
            <div className="w-full min-h-screen relative flex items-end overflow-hidden">

                <Titulo data={data} />

                <div className="w-full h-full flex absolute justify-end object-bottom">
                    <Image
                        src={data.bg1}
                        alt="Imagem do fundo"
                        fill
                        className="object-cover opacity-60"
                    />
                    {/* Desktop */}
                    <div className="hidden md:block w-full h-full top-[25%] absolute bottom-0 z-20">
                        <Image
                            src={data.bg2}
                            alt="Imagem do fundo camada 2"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>

                    {/* Mobile */}
                    <div className={`block md:hidden w-full  absolute bottom-0 z-20 ${estilo}`}>
                        <Image
                            src={data.bg2m}
                            alt="Imagem do fundo camada 2 mobile"
                            fill
                            className="object-cover object-bottom"
                        />
                    </div>
                </div>

                <div className="w-full h-10 md:h-30 relative z-30 bg-gradient-to-b from-transparent to-[#320A27]" />
            </div>
        </div>
    )
};

export default Background
