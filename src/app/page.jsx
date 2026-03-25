import BackgroundHome from "../components/backgroundHome.jsx";
import CardServicoHome from "../components/cardServicosHome.jsx";
import servicosData from "../components/servicosData.jsx";
import TituloHome from "../components/tituloHome.jsx";

const Home = () => {
    return (
        <div className="bg-[#320A27] h-844.25 w-full">
            <BackgroundHome />
            <TituloHome />
            <div className="w-[78.8%] left-[11%] flex flex-col">
            {servicosData.map((item, index) => (
                    <CardServicoHome
                        key={item.id}
                        {...item}
                        invertido={index % 2 !== 0}
                    />
                ))
            };
            </div>
        </div>
    )
};
export default Home;