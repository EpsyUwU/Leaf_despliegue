import { CardDonation } from "./cards/card";
import Header from "../src/assets/Header.jsx"
import Sobre  from "../src/assets/Footer.jsx"



const text1 =
  "Leef Project es un proyecto enfocado a la recuperación de la flora y fauna de diversas zonas de Chiapas, el objetivo es recuperar la mayor parte de los hábitats el estado.";
const text2 =
  "EcoRescate es un ambicioso proyecto dedicado a la recuperación y preservación de la rica biodiversidad de la selva amazónica en Brasil una región vital para la vida silvestre. ";
const text3 =
  "AquaVida es un proyecto dedicado a la recuperación de los ecosistemas acuáticos en el Delta del Misisipi, una región vital para la vida silvestre y la salud de los ríos y humedales.";

const team1 = "LeefTeam ";
const team2 = "AquaVipe";
const team3 = "CarrotState";

const title1 = "Leef Project ";
const title2 = "EcoRescate";
const title3 = "AquaVida";

const price1 = 500;
const price2 = 1500;
const price3 = 3500;

function App() {
  return (
    
    <section className="bg-gray-900 ">
      <Header/>
      <section>
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
              No reinventamos la rueda
            </h2>
            <p className="mb-8">
              Juntos, creamos un futuro más sostenible. Nuestro equipo de
              expertos en contratos inteligentes y proyectos verdes se
              compromete a ser tu socio en la innovación. Somos lo
              suficientemente pequeños para ser ágiles, pero lo suficientemente
              grandes para impulsar tu visión a la velocidad del cambio que el
              mundo necesita.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 pb-12">
            <img
              alt=""
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              className="w-full rounded-lg"
            />
            <img
              alt=""
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              className="mt-4 w-full rounded-lg lg:mt-10 mb-4"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-800  dark:bg-gray-900 py-12">
        <div className="row">
          <h2 className="text-4xl font-extrabold tracking-tight text-green-500 dark:text-white mb-9 ml-[160px]">
            Proyectos
          </h2>
          <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg  ml-[160px]">
            Tenemos la capacidad de ofrecer apoyo a una variedad de proyectos.{" "}
            <br />A continuación, presentamos algunos de los emocionantes
            proyectos a <br />
            los que podemos brindar nuestro respaldo.
          </p>
        </div>
        <div className="flex space-x-8 items-center justify-center">
          <CardDonation
            team={team1}
            title={title1}
            text={text1}
            price={price1}
          />
          ,
          <CardDonation
            text={text2}
            team={team2}
            title={title2}
            price={price2}
          />
          ,
          <CardDonation
            text={text3}
            team={team3}
            title={title3}
            price={price3}
          />
          ,
        </div>
      </section>
      <section className="bg-gray-900  dark:bg-gray-900 mx-10 max-w-screen-xl">
        <div className="items-center py-8 lg:grid lg:grid-cols-2 lg:mx-11 lg:py-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white mt-[-200px] ml-[70px]">
              La filantropía necesita más innovación.
            </h2>
            <p className="mb-5 ml-[70px]">
              ¿Y si los acuerdos fueran mutuamente beneficiosos y las
              iniciativas sostenibles maximizaran su impacto financiero?
              <br />
              <br />
              Nuestra aplicación está allanando un camino nuevo y emocionante
              con una plataforma basada en contratos inteligentes, impulsada por
              la comunidad , aprovechando la tecnología blockchain para unir
              proyectos verdes con oportunidades de financiamiento regenerativo.
            </p>
          </div>
          <div className="bg-green-500 w-[1224px] h-[131px]  ml-[-530px] mt-[490px] rounded-md">
            <p className="font-extrabold text-gray-800 text-4xl flex  ml-[150px] py-8">
              73M+{" "}
            </p>
            <p className="font-extrabold text-gray-800 text-xl  ml-[150px] mt-[-25px] ">
              Proyectos{" "}
            </p>

            <p className="font-extrabold text-gray-800 text-4xl flex  ml-[490px] mt-[-75px]">
              $8,461,000{" "}
            </p>
            <p className="font-extrabold text-gray-800 text-xl  ml-[490px] mt-[5px] ">
              Donado a proyectos{" "}
            </p>

            <p className="font-extrabold text-gray-800 text-4xl flex  ml-[950px] mt-[-75px]">
              6000+{" "}
            </p>
            <p className="font-extrabold text-gray-800 text-xl  ml-[890px] mt-[5px] ">
              Numero de donadores
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            className="w-full dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            className="hidden w-full dark:block"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
              ¿Qué es LeefProject?.
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
              LeefProject es una plataforma innovadora que conecta proyectos
              sostenibles y contratos inteligentes. Utilizando tecnología
              blockchain, facilitamos el acceso a financiamiento regenerativo de
              manera transparente y eficiente. Nuestra misión es promover la
              colaboración y la inversión en iniciativas sostenibles, impulsando
              un futuro más ecológico y equitativo.
            </p>
          </div>
        </div>
      </section>
    

      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
              Donaciones con recompensas.
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
              Creemos en la armonía entre la filantropía y la sostenibilidad.
              LeefProject es una plataforma de donaciones sin tarifas y un
              ecosistema de comunidades comprometidas con la sostenibilidad.
              Unimos personas, organizaciones y proyectos verdes para maximizar
              el impacto y canalizar recursos hacia las necesidades más
              apremiantes, promoviendo la transparencia en todo momento.
            </p>
          </div>
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            className="w-full dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            className="hidden w-full dark:block"
          />
        </div>
      </section>
      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            className="w-full dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            className="hidden w-full dark:block"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-green-500 dark:text-white">
              Proyectos ecológicos.
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-400 md:text-lg">
              LeefProject lidera la evolución de la filantropía y los proyectos
              ecológicos. Impulsamos un cambio positivo en la sociedad y el
              medio ambiente al permitir que las donaciones generen beneficios
              mutuos. Si deseas formar parte de un movimiento global que impulsa
              la sostenibilidad a través de contratos inteligentes y
              colaboración comunitaria, LeefProject es tu destino.
            </p>
          </div>
        </div>
      </section>
      <Sobre/>
    </section>
  );
}

export default App;
