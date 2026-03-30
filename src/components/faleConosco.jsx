const FaleConosco = () => {
    return (
        <div 
          className="w-[869px] h-[576px] relative left-[172px] justify-end"
          
        >
            <div className="w-[47.6%] h-[30.6%] flex flex-col items-start justify-start gap-6">
            <h1 className="text-white text-[64px] font-normal leading-[1.05] tracking-tight font-serif">
                Fale Conosco
            </h1>
            <p className="text-[12px] text-white font-light font-montserrat">
                Quer transformar seu evento em uma experiência inesquecível? Mande uma mensagem para a gente!
            </p>
            </div>
            <form className="flex flex-col">
  <input 
    type="text" 
    placeholder="Nome" 
    className="border border-gray-300 rounded-[19px] p-2 px-6 w-full text-white text-[15px]" 
  />

  <div className="grid grid-cols-2 gap-4"> 
    <input 
      type="email" 
      placeholder="Email" 
      className="border border-gray-300 rounded-[19px] p-2 px-6 w-full text-white mt-2" 
    />
    <input 
      type="tel" 
      placeholder="Telefone" 
      className="border border-gray-300 rounded-[19px] p-2 px-6 w-full text-white mt-2" 
    />
  </div>

  <textarea 
    placeholder="Mensagem" 
    className="border border-gray-300 rounded-[19px] p-4 w-full h-[218px] text-white mt-2" 
  />

  <div className="flex justify-end">
    <button className="bg-white text-black font-bold rounded-[19px] px-6 py-3 mt-4 w-[22%] opacity-75">
      ENVIAR
    </button>
  </div>
</form>
        </div>
    )
};

export default FaleConosco;