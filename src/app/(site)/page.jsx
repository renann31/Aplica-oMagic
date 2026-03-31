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

        <div className="w-[72.4%] ml-[11%] mt-30" >
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
};

