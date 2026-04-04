import Background from "@/components/background.jsx";
import dados from "@/data/data.json";
import SliderLateral from "@/components/sliderLateral.jsx"
import CardServicoHome from "@/components/cardServicos.jsx";
import servicosData from "@/data/servicosHomeData.jsx";

export default function Home() {
  const conteudo = dados["home"];

  return (
    <>
      <Background data={conteudo} />

      <div className="bg-[#320A27] min-h-screen flex flex-col">
          <SliderLateral />

        <div className="flex-1">

          <div className="w-full px-5 sm:px-8 md:w-[72.4%] md:ml-[11%] mt-16 md:mt-30 flex flex-col gap-16 md:gap-24 mx-auto">
            {servicosData.map((item, index) => (
              <CardServicoHome
                key={item.id}
                {...item}
                invertido={index % 2 !== 0}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}