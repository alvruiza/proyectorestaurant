import { Fragment } from "react"
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Footer from "../components/Footer"
import DishCard from "../components/DishCard"

const Carta = () => {

    const platos = [{
        title: "Carpaccio de Salmón Austral",
        id: "1",
        description:"Finas láminas de salmón austral acompañado de rucula, parmesano, alcaparras y tostadas.",
        img: "https://i.postimg.cc/4yGRwFNT/1.png",
        price:"7.990"
    },
    {
        title: "Paté de hongos y aceite de oliva",
        id: "2",
        description:"Pasta de hongos nacionales con congnac, tomillo y aceite de oliva de Husaco prensado en frío.",
        img: "https://i.postimg.cc/pXtL1q1r/2-2.png",
        price:"8.990"
    },
    {
        title: "Chanfaina de cordero chilote",
        id: "3",
        description:"Tradicional guiso español en base a cebolla, tomate, cordero de chiloé, papas michuñe y camote.",
        img: "https://i.postimg.cc/SKm8FmTX/Dise-o-sin-t-tulo-2022-09-30-T123928-064.png",
        price:"11.990"
    },
    {
        title: "Socarrat de abanda con Carabinero",
        id: "4",
        description:"Arroz valenciano chamuscado con camarón carabinero ibérico.",
        img: "https://i.postimg.cc/7ZqHVhtW/4.png",
        price:"15.990"
    },
    {
        title: "Ceviche de Digüeñes Primavera",
        id: "5",
        description:"Fresca receta de digüeñes recién recolectados con mandarinas, palta, ají verde, cebolla y jugo de limón.",
        img: "https://i.postimg.cc/8znCzDwX/5.png",
        price:"7.990"
    },
    {
        title: "Colmenillas en foie y salsa de oporto",
        id: "6",
        description:"Hongo Colmenilla de la patagonia chilena relleno con foie de trufa sobre salsa de oporto. ",
        img: "https://i.postimg.cc/SN9sNHHm/6-2.png",
        price:"13.990"
    },
    {
        title: "Porchetta de cerdo horneada",
        id: "7",
        description:"Rollo de panceta de cerdo con piel rellena con aceite de oliva, hierbas y salsa de naranjas.",
        img: "https://i.postimg.cc/P5h65p2K/7.png",
        price:"12.990"
    },
    {
        title: "Atún Wellington portobello",
        id: "8",
        description:"Filete de atún aleta azul sobre masa de hojaldre con salsa de vino y hongos portobello.",
        img: "https://i.postimg.cc/8z6r9th0/8.png",
        price:"18.990"
    },
    {
        title: "Ostiones a la pasta Amalfi",
        id: "9",
        description:"Ostiones gratinados en aceite de oliva sobre pasta fresca de la casa, tomates asados y albahaca.",
        img: "https://i.postimg.cc/1z1MjgND/9.png",
        price:"10.990"
    },
    {
        title: "Langostinos en mantequilla negra",
        id: "10",
        description:"Langostinos, sobre ghee de mantequilla india y aceite de oliva de Huasco prensado en frío. ",
        img: "https://i.postimg.cc/ry5h5N0M/10.png",
        price:"17.990"
    }


]

    return(
        <Fragment>
            <Navbar />
            <Jumbotron />
                <h1 className="dishesh1">Carta</h1>
                <div className="container-fluid dishcontainer">
                    <div className="row">
                        {platos.map(platos => <DishCard  platos={platos} key={platos.id}/>)}
                    </div>
                </div>
            <Footer />
        </Fragment>
    )
}

export default Carta