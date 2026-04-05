"use client"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const estilo = "text-white text-[12px] md:text-[18px] md:text-[24px] hover:text-[#F5C069] transition font-sans font-normal"

    return (
        <div className="absolute w-full z-30 mt-6 md:mt-10 flex flex-col md:flex-row items-center md:items-center">

            {/* LOGO */}
            <div className="flex justify-center md:justify-start w-full md:w-auto md:ml-20">
                <Link href="/">
                    <Image
                        src={"/assets/logo.png"}
                        alt="logo da magic"
                        width={160}
                        height={40}
                        className="md:w-[200px]"
                    />
                </Link>
            </div>

            {/* LINKS */}
            <div className="flex flex-row items-center gap-6 md:gap-20 w-full justify-center translate-y-[-15px] md:pr-50">
                <Link href="/sobre" className={estilo}>Sobre Nós</Link>
                <Link href="/produtos" className={estilo}>Serviços</Link>
                <Link href="#contato" className={estilo}>Contato</Link>
            </div>
        </div>
    );
};

export default Navbar;
