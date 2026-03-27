import Image from "next/image"; 
import TituloHome from "./tituloHome.jsx";
// const corFundo = "hsl(var(--color-background))"

const BackgroundHome = () => {
    return (
        <div className="bg-[#320A27]">
            <div className="w-full min-h-screen relative items-end flex overflow-hidden">
                <TituloHome />
               <div className="w-full h-full object-cover opacity-60 absolute">
                <Image
                    src="/assets/BGhome01.png"
                    alt="Imagem do fundo"
                    fill
                    className="object-cover"
                />
                </div>
                <div className="w-full h-full top-[30%] object-contain absolute opacity-80">
                <Image
                    src="/assets/BGhome02.png"
                    alt="Imagem do fundo camada 2"
                    fill
                    className="object-contain"
                />
                </div>
                <div className="w-full h-64 relative z-10 bg-gradient-to-b from-transparent to-[#320A27]" />
            </div>
        </div>
    )
};

export default BackgroundHome;