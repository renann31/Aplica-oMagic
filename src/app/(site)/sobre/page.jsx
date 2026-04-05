import Background from "@/components/background.jsx"
import FaleConosco from "@/components/faleConosco";
import dados from "@/data/data.json"
import Image from "next/image";

export default async function SobreNos() {
    const conteudo = dados["sobre"];
    const logoGDB = "/assets/logoGDB.png"
    const logoMagic = "/assets/logo02.png"
    const textos = conteudo.textos;

    return (
        <>
            <Background data={conteudo} />

            <div className="flex flex-col w-full px-5 sm:px-8 md:w-[80%] md:ml-50 gap-12 md:gap-20">

                {/* TEXTOS */}
                <div className="text-white space-y-20 md:space-y-50">

                    {textos.map((t) => (
                        <div key={t.id} className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                            {/* TEXTO */}
                            <div className="space-y-4 md:max-w-[500px] order-2 md:order-1">
                                <h1 className="font-serif font-normal text-[24px] md:text-[34px]">
                                    {t.titulo}
                                </h1>

                                {t.texto.map((paragrafo, i) => (
                                    <p key={i} className="font-sans font-light text-[14px] md:text-[18px]">
                                        {paragrafo}
                                    </p>
                                ))}
                            </div>

                            {/* IMAGEM */}
                            <div className="flex justify-center order-1 md:order-2">
                                {t.id === "1" && (
                                    <Image src={logoMagic} alt="logo magic" width={160} height={40} className="md:w-[200px]" />
                                )}

                                {t.id === "3" && (
                                    <Image src={logoGDB} alt="logo GDB" width={160} height={40} className="md:w-[200px]" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <FaleConosco id="contato" />
            </div>
        </>
    )
};