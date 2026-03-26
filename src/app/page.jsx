import FaleConosco from "@/components/faleConosco.jsx";
import BackgroundHome from "../components/backgroundHome.jsx";
import CardServicoHome from "../components/cardServicosHome.jsx";
import servicosData from "../components/servicosData.jsx";
import TituloHome from "../components/tituloHome.jsx";

const Home = () => {
    return (
        <div className="bg-[#320A27] h-844.25 w-full relative">
            <BackgroundHome />
            <TituloHome />
            <div className="relative w-[78.8%] top-30 left-[9%] h-[1320px]">
            {servicosData.map((item, index) => (
                    <CardServicoHome
                        key={item.id}
                        {...item}
                        invertido={index % 2 !== 0}
                    />
                ))
            };
            </div>
            <div className="bg-[#320A27] relative top-[5%]">
            <FaleConosco />
            </div>
        </div>
    )
};
export default Home;