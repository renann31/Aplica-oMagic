import FaleConosco from "@/components/faleConosco.jsx";
import BackgroundHome from "../components/background.jsx";
import CardServicoHome from "../components/cardServicos.jsx";
import servicosData from "../data/servicosHomeData.jsx";
import Rodape from "@/components/rodape.jsx";
import SliderLateral from "@/components/sliderLateral.jsx";

const Home = () => {
  return (
    <div className="bg-[#320A27] min-h-screen flex flex-col">
      <SliderLateral />
      <div className="flex-1">

        <div className="w-[72.4%] ml-[11%] mt-30 max-h-[1323px]" >
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
  );
};

export default Home;