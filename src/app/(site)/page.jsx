import Background from "@/components/background.jsx";
import dados from "@/data/data.json";
import SliderLateral from "@/components/sliderLateral.jsx"
import CardServicoHome from "@/components/cardServicos.jsx";
import servicosData from "@/data/servicosHomeData.jsx";
import Rodape from "@/components/rodape";
import FaleConosco from "@/components/faleConosco";

export default function Home() {
  const conteudo = dados["home"];

  return (
    <>
      <Background data={conteudo} />

      <div className="bg-[#320A27] min-h-screen flex flex-col">
          <SliderLateral />

        <div className="flex-1">

          <div className="w-full px-5 mt-16 flex flex-col gap-16 mx-auto md:mt-30 md:gap-24 sm:px-8 md:w-[72.4%] md:ml-[11%]">
            {servicosData.map((item, index) => (
              <CardServicoHome
                key={item.id}
                {...item}
                invertido={index % 2 !== 0}
              />
            ))}
          </div>
          <FaleConosco id="contato" />

        </div>
      </div>
    </>
  );
}
