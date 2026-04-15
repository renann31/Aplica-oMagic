"use client";

import Swal from "sweetalert2";
import { useState } from "react";
import { motion } from "framer-motion";


const FaleConosco = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [telefone, setTelefone] = useState("");

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      mensagem,
      telefone,
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Recebemos sua mensagem e entraremos em contato em breve.",
          confirmButtonText: "OK",
        });

        setNome("");
        setEmail("");
        setMensagem("");
        setTelefone("");

        setEnviado(true);

      } else {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Não foi possível enviar sua mensagem.",
        });
      }

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Erro de conexão",
        text: "Tente novamente mais tarde.",
      });
    }
  };


  const animation = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.6, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.whileInView}
      transition={animation.transition}
      viewport={animation.viewport}
      id="contato"
      className="w-full mx-auto h-auto relative flex flex-col   md:h-[576px] md:mt-20">

      <div className="full w-[260px] md:w-1/2 flex flex-col mb-4 md:mb-10">
        <h1 className="text-white text-[36px] md:text-[64px] font-serif font-normal">
          Fale Conosco
        </h1>
        <p className="font-sans text-[10px] md:text-[12px] text-white font-light">
          Quer transformar seu evento em uma experiência inesquecível? Mande uma mensagem para a gente!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-white/50 md:border-white 
            rounded-md md:rounded-[19px] 
            px-3 md:px-6 w-full h-3.5 md:h-10 
            text-white text-[12px] md:text-[14px] 
            bg-transparent

            placeholder:text-white/50

            focus:outline-none 
           focus:border-[#F5C069] 
            focus:ring-2 focus:ring-[#F5C069]/40

           transition-all duration-200"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white/50 md:border-white 
              rounded-md md:rounded-[19px] 
              px-3 md:px-6 w-full h-3.5 md:h-10 
              text-white text-[12px] md:text-[14px] 
              bg-transparent
 
             placeholder:text-white/50
 
              focus:outline-none 
             focus:border-[#F5C069] 
              focus:ring-2 focus:ring-[#F5C069]/40

              transition-all duration-200"
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="border border-white/50 md:border-white 
              rounded-md md:rounded-[19px] 
              px-3 md:px-6 w-full h-3.5 md:h-10 
              text-white text-[12px] md:text-[14px] 
              bg-transparent
 
              placeholder:text-white/50

              focus:outline-none 
               focus:border-[#F5C069] 
               focus:ring-2 focus:ring-[#F5C069]/40
  
             transition-all duration-200"
          />
        </div>

         <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="border border-white/50 md:border-white 
            rounded-md md:rounded-[19px] 
            p-2 md:p-4 w-full h-[100px] md:h-[218px] 
           text-white mt-2 text-[12px] md:text-[14px] 
            bg-transparent
  
            placeholder:text-white/50

            focus:outline-none 
            focus:border-[#F5C069] 
            focus:ring-2 focus:ring-[#F5C069]/40

          transition-all duration-200"
        />

        <div className="flex items-center justify-center md:justify-end gap-4">
          {enviado && (
            <div className="hidden md:block w-[12%] text-center">
              <span className="text-white font-bold text-[12px] md:text-[16px] font-sans">
                Mensagem enviada!
              </span>
            </div>
          )}

          <button className="bg-white text-black font-bold rounded-2xl md:rounded-[19px] 
          px-12 py-1 mt-4 md:w-[22%] 
          opacity-80 hover:opacity-100 
          hover:scale-105 transition-all duration-200 
          font-sans text-[12px]">
            {enviado ? "ENVIAR OUTRA MENSAGEM" : "ENVIAR"}
          </button>
        </div>
      </form>
    </motion.div>
  )
};

export default FaleConosco;