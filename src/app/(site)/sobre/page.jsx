import Background from "@/components/background.jsx"
import dados from "@/data/data.json"

export default async function SobreNos () {
    const conteudo = dados["sobre"];

    const textos = [
{
    id: "1",
    titulo: "Quem Somos?",
    texto: [
        "A Magic Eventos nasceu com o propósito de transformar eventos em experiências memoráveis. Especializada em entretenimento e guest experience, a emprescria atrações interativas, criativas e surpreendentes que elevam o nível de qualquer celebração.",
        "A missão da Magic é encantar pessoas e criar momentos únicos por meio de soluções inovadoras, equipes preparadas e experiências que geram emoçãodiversão e conexão entre os convidados."
    ]
},
{
    id: "2",
    titulo: "Nossa História",
    texto: [
        "A Magic surgiu com a ideia de levar mais criatividade e interação para eventos sociais e corporativos. Desde o início, o objetivo sempre foi tirar afestas do   comum e proporcionar experiências que realmente surpreendessem os convidados.",
        "Ao longo dos anos, a empresa se consolidou como referência em entretenimento para eventos em Uberlândia e região, acumulando milhares de eventorealizados e impactando mais de um milhão de pessoas com atrações criativas, profissionais apaixonados pelo que fazem e uma constante busca por inovação."
    ]
},
{
    id: "3",
    titulo: "Grupo Daniella Borraz (GDB)",
    texto: [
        "A Magic Eventos faz parte do Grupo Daniella Borraz (GDB), uma holding que reúne empresas especializadas em eventos, marketing, tecnologia experiências de marca",
        "Dentro dessa estrutura, a Magic representa a vertente de entretenimento do grupo, responsável por criar atrações, interações e experiências quencantam os convidados e tornam cada evento mais envolvente. Integrada às demais empresas do GDB, a Magic contribui para oferecer soluções completas experiências cada vez mais memoráveis."
    ]
}]
    return (
        <>
        <Background data={conteudo}/>
        <div className="justify center text-white w-1/2 mx-auto space-y-50">
            {textos.map((t) => (

            <div key={t.id} className="space-y-4">
                    <h1 className="font-serif font-normal text-[34px]">
                        {t.titulo}
                    </h1>

                {t.texto.map((paragrafo, i) => (

                    <p key={i} className="font-sans font-light text-[18px]">
                        {paragrafo}
                    </p>
                ))}
            </div>
            ))}
        </div>
        </>
    )
};