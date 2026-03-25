const corTitulo = "[hsl(var(--color-primary))]"

const tituloHome = () => {
    return (
        <div className="absolute z-10 top-[20%] left-1/4 max-w-[400px] w-full flex flex-col items-start justify-start gap-6">

            <div className="h-[18px] md:h-[22px] w-full flex items-center gap-3">
                <div className={`h-[1px] w-[35px]  bg-${corTitulo}`}></div>
                <p className={`text-${corTitulo}  tracking-widest font-black text-[11px]`}>
                    MAGIC EVENTOS
                </p>
            </div>

            <h1 className="text-white text-[39px] font-semibold leading-[1.05] tracking-tight text-left font-serif">
                Crie Memórias Inesquecíveis com a Magic
            </h1>

            <p className="text-[12px] text-white font-bold">
                Role para baixo
            </p>

        </div>
    )
};

export default tituloHome;