"use client"
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const estilo = "text-white text-[24px] hover:text-[#F5C069] transition font-sans font-normal"

    return (
        <div className="absolute flex items-center w-full z-30 mt-10">
        <div className="ml-20">
                <Image 
                    src={"/assets/logo.png"}
                    alt="logo da magic"
                    width={200}
                    height={50}
                />
            </div>
        <div className="flex gap-20 justify-center translate-y-[-15px] w-full absolute">
            <Link href="/" className="">
            </Link>
            <Link href="/sobre" className={`${estilo}`}>Sobre Nós</Link>
            <Link href="/produtos" className={`${estilo}`}>Serviços</Link>
            <Link href="#contato" className={`${estilo}`}>Contato</Link>    
        </div>
        </div>
    );
};

export default Navbar;  