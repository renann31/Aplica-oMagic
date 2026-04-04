import Image from "next/image";
import Titulo from "./titulo.jsx";

const Background = ({ data }) => {
    return (
        <div className="bg-[#320A27]" id="inicio">
            <div className="w-full min-h-[80vh] md:min-h-screen relative flex items-end overflow-hidden">

                <Titulo data={data} />

                <div className="w-full h-full flex absolute opacity-60 justify-end object-bottom">
                    <Image
                        src={data.bg1}
                        alt="Imagem do fundo"
                        fill
                        className="object-cover"
                    />
                    <div className="w-full h-full absolute top-[35%] md:top-[30%] md:opacity-80 z-10">
                        <Image
                            src={data.bg2}
                            alt="Imagem do fundo camada 2"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="w-full h-40 md:h-64 relative z-40 bg-gradient-to-b from-transparent to-[#320A27]" />
            </div>
        </div>
    )
};

export default Background