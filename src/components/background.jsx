import Image from "next/image"; 
import Titulo from "./titulo.jsx";
// const corFundo = "hsl(var(--color-background))"

const Background = ({ data }) => {

    return (
        <div className="bg-[#320A27]" id="inicio">
            <div className="w-full min-h-screen relative items-end flex overflow-hidden">
                <Titulo data={data}/>
               <div className="w-full h-full object-cover opacity-60 absolute">
                <Image
                    src={data.bg1}
                    alt="Imagem do fundo"
                    fill
                    className="object-cover"
                />
                </div>
                <div className="w-full h-full top-[30%] object-contain absolute opacity-80">
                <Image
                    src={data.bg2}
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

export default Background;