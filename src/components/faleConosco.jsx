"use client";
import Swal from "sweetalert2";
import { useState } from "react";

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

  return (
    <div id="contato" className="w-full max-w-200 px-8  h-auto relative flex flex-col   lg:max-w-[67%] sm:px-8 md:ml-15 lg:ml-30 xl:ml-50 md:px-0 md:h-[576px] md:mt-20"
    >
      <div className="w-full md:w-1/2 flex flex-col mb-8">
        <h1 className="text-white text-[36px] md:text-[64px] font-serif font-normal">
          Fale Conosco
        </h1>
        <p className="font-sans text-[10px] md:text-[12px] text-white font-light ">
          Quer transformar seu evento em uma experiência inesquecível? Mande uma mensagem para a gente!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-white/50 md:border-white rounded-md md:rounded-[19px] pb-[2px] px-3 md:px-6 w-full h-3.5 md:h-10 text-white text-[12px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white/50 md:border-white rounded-md md:rounded-[19px] pb-[2px] px-3 md:px-6 w-full h-3.5 md:h-10 text-white text-[12px]"
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="border border-white/50 md:border-white rounded-md md:rounded-[19px] pb-[2px] px-3 md:px-6 w-full h-3.5 md:h-10 text-white text-[12px]"
          />
        </div>

        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="border border-white/50 md:border-white rounded-md md:rounded-[19px] p-1 md:p-4 w-full h-[100px] md:h-[218px] text-white mt-2 text-[12px]"
        />

        <div className="flex items-center justify-center md:justify-end gap-4">
          {enviado && (
            <div className="hidden md:block w-[12%] text-center">
              <span className="text-white font-bold text-[12px] md:text-[16px] font-sans">
                Mensagem enviada!
              </span>
            </div>
          )}

          <button className="bg-white text-black font-bold rounded-2xl md:rounded-[19px] px-12 py-1 mt-4 md:w-[22%] opacity-75 font-sans text-[12px]">
            {enviado ? "ENVIAR OUTRA MENSAGEM" : "ENVIAR"}
          </button>
        </div>
      </form>
    </div>
  )
};

export default FaleConosco;