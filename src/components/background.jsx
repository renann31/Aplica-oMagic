"use client";

import Image from "next/image";
import Titulo from "./titulo.jsx";
import { motion, useScroll, useTransform } from "framer-motion";

const Background = ({ data }) => {
    const estilo = data.estilo;

    const { scrollY } = useScroll();

    // BG mais lento (fundo)
    const yBg1 = useTransform(scrollY, [0, 500], [0, 500]);

    // BG mais rápido (frente)
    const yBg2 = useTransform(scrollY, [0, 500], [0, 240]);

    return (
        <div className="bg-[#320A27]" id="inicio">
            <div className="w-full min-h-screen md:min-h-[130vh] relative flex items-end overflow-hidden">

                <Titulo data={data} />

                <div className="w-full h-full absolute inset-0">

                    {/* BG1 (fundo) */}
                    <motion.div 
                        style={{ y: yBg1 }}
                        className="absolute inset-0 will-change-transform"
                    >
                        <Image
                            src={data.bg1}
                            alt="Imagem do fundo"
                            fill
                            className="object-cover opacity-50"
                        />
                    </motion.div>

                    {/* BG2 Desktop */}
                    <motion.div style={{ y: yBg2 }} className="hidden md:block top-[25%] absolute inset-0 z-20 will-change-transform">
                        <Image
                            src={data.bg2}
                            alt="Imagem do fundo camada 2"
                            fill
                            className="object-contain object-bottom"
                        />
                    </motion.div>

                    {/* BG2 Mobile */}
                    <motion.div style={{ y: yBg2 }} className={`block md:hidden absolute bottom-0 w-full z-20 ${estilo} will-change-transform`}>
                        <Image
                            src={data.bg2m}
                            alt="Imagem do fundo camada 2 mobile"
                            fill
                            className="object-cover object-bottom"
                        />
                    </motion.div>

                </div>

                {/* Fade elegante */}
                <div className="w-full h-20 md:h-40 relative z-30 bg-gradient-to-b from-transparent via-[#320A27]/80 to-[#320A27]" />
            </div>
        </div>
    );
};

export default Background;