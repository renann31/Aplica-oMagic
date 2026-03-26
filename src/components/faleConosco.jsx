const FaleConosco = () => {
    return (
        <div className="w-[869px] h-[576px] relative left-[172px]">
            <div className="w-[47.6%] h-[30.6%] flex flex-col items-start justify-start gap-6">
            <h1 className="text-white text-[64px] font-normal leading-[1.05] tracking-tight font-serif">
                Fale Conosco
            </h1>
            <p className="text-[12px] text-white font-light font-montserrat">
                Quer transformar seu evento em uma experiência inesquecível? Mande uma mensagem para a gente!
            </p>
            </div>
            <form>
                <input type="text" placeholder="Nome" className="border border-gray-300 rounded-2xl p-2 px-4 w-full text-white" />
                <input type="email" placeholder="Email" className="border border-gray-300 rounded-full p-2 px-4 w-full text-white mt-2" />
                <textarea placeholder="Mensagem" className="border border-gray-300 rounded-2xl p-4 w-full h-[218px] text-white mt-2" />
            </form>
        </div>
    )
};

export default FaleConosco;