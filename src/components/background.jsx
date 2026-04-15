"use client";
import Image from "next/image";
import Titulo from "./titulo.jsx";
import { motion, useScroll, useTransform } from "framer-motion";

const Background = ({ data }) => {
    const estilo_bg2mh = data.estilo_bg2mh;
    const estilo_bg2m = data.estilo_bg2m;

    const { scrollY } = useScroll();

    // BG mais lento (fundo)
    const yBg1 = useTransform(scrollY, [0, 500], [0, 500]);

    // BG mais rápido (frente)
    const yBg2 = useTransform(scrollY, [0, 500], [0, 240]);

    return (
        <div className="bg-[#320A27]" id="inicio">
            {/* <div className="items-center w-full">
                
            </div> */}
            <div className="w-full min-h-screen md:min-h-[130vh] relative flex items-end overflow-hidden">

                <Titulo data={data} />

                <div className="w-full h-full absolute inset-0">

                    {/* BG1 desktop */}
                    <motion.div
                        style={{ y: yBg1 }}
                        className="hidden sm:block absolute inset-0 will-change-transform"
                    >
                        <Image
                            src={data.bg1}
                            alt="Imagem do fundo"
                            fill
                            className="object-cover opacity-50"
                        />
                    </motion.div>

                    {/* BG1 mobile */}
                    <motion.div
                        style={{ y: yBg1 }}
                        className="block sm:hidden absolute inset-0 will-change-transform"
                    >
                        <Image
                            src={data.bg1m}
                            alt="Imagem do fundo"
                            fill
                            className="object-cover opacity-50"
                        />
                    </motion.div>

                    {/* BG2 Desktop */}
                    <motion.div style={{ y: yBg2 }} className="hidden sm:block absolute inset-0 z-20 will-change-transform">
                        <Image
                            src={data.bg2}
                            alt="Imagem do fundo camada 2"
                            fill
                            className="object-contain object-bottom"
                        />
                    </motion.div>

                    {/* BG2 Mobile */}
                    <motion.div style={{ y: yBg2 }} className={`block sm:hidden absolute bottom-0 w-full z-20 ${estilo_bg2mh} will-change-transform`}>
                        <Image
                            src={data.bg2m}
                            alt="Imagem do fundo camada 2 mobile"
                            fill
                            className={`${estilo_bg2m} object-bottom`}
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