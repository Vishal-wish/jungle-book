import React from "react";
import Image from '../assets/Fire2.webp'
import Image2 from '../assets/Fire3.webp'

const Absorption = () => {
  return (
    <div>
      <div className="flex pt-16   h-60 justify-center items-center bg-[url('assets/Absorption.jpeg')]">
        <h1 className="text-4xl sm:text-6xl  hover:backdrop-blur-sm text-green-200 font-bold font-serif backdrop-blur-sm sm:mt-0   text-center w-full">
          Deforestration!!!
        </h1>
      </div>
      <section className="flex justify-between flex-col lg:flex-row bg-green-200 my-3">
        <iframe
          className="w-screen  h-96 min-w-10px"
          src="https://www.youtube.com/embed/E_091pd_KHM?si=F_sHwAlcS4I4oXVm&autoplay=1&mute=1&loop=1"
        ></iframe>
        <div className="lg:w-3/4 p-3  ">
          <h1 className="text-center h-auto  text-3xl md:text-4xl py-6">
            What does deforestation mean?
          </h1>
          <p className="text-lg md:text-xl text-justify italic">
            Deforestation is the intentional clearing of forested land. Trees
            are cut down for timber, waiting to be transported and sold.
            Deforestation is the purposeful clearing of forested land. <br />
            <br />
            Deforestation or forest clearance is the removal and destruction of
            a forest or stand of trees from land that is then converted to
            non-forest use. Deforestation can involve conversion of forest land
            to farms, ranches, or urban use. About 31% of Earth's land surface
            is covered by forests at present.
          </p>
        </div>
      </section>
      <section>
      <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-5xl font-serif  ">Fire in Jungle...</h1>
        <div className="bg-[url('assets/Fire.jpeg')] p-12">
          <p className="lg:text-2xl hover:backdrop-blur-xl p-2 lg:p-4">
            Forest fires can be defined as any uncontrolled and non-prescribed
            combustion or burning of plants in a natural setting such as a
            forest, grassland, brushland, or tundra, which consumes the natural
            fuels and spreads based on environmental conditions (e.g., wind,
            topography). <br /> <br />
          </p>
          <p className="lg:text-2xl   hover:backdrop-blur-xl p-2 lg:p-4">
            Fuel, Oxygen, and heat sources help the spreading of wildfires: <br />
            Fuelis any flammable material surrounding a fire, including trees,
            grasses, brush, and even homes. The greater an area’s fuel load, the
            more intense the fire. <br />
            Air supplies the oxygen a fire needs to burn.
            Heat sources help spark the wildfire and bring fuel to temperatures
            hot enough to ignite. <br />
            In nature, especially in higher latitude
            forests, fires help maintain a healthy forest ecosystem by releasing
            important nutrients into the soil and aiding seed dispersal.
          </p>
        </div>
        <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-4xl font-serif ">Cause of Wildfires</h1>
        <div className="lg:text-2xl bg-green-100 p-6  text-justify">
          <img src={Image} alt="" className="h-80 w-1/1 md:float-left  mx-5"  />
        <li className="list-none">* Natural causes like lightning can set fires on trees which may be spread by wind. Sometimes, High atmospheric temperatures and dryness (low humidity) offer favorable circumstances for a fire to start.</li>
        <li className="list-none">* Man-made causes are usually the ones that become dangerous. Fire is caused when a source of fire like naked flame, cigarette, electric spark, or any source of ignition comes into contact with inflammable material.</li>
        <li className="list-none">* Other human-led causes are land clearing and other agricultural activities, maintenance of grasslands for livestock management, extraction of non-wood forest products, industrial development, resettlement, hunting, negligence, and arson.</li>
        </div>
        <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-4xl font-serif ">Consequences of Wildfires</h1>
        <div className="lg:text-2xl bg-green-100 p-6  text-justify">
          <img src={Image2} alt="" className="h-72 md:float-right m-5" />
        <li>Wildfires emit billions of tonnes of carbon dioxide into the atmosphere which causes harm to climate and living organisms.</li>
        <li>This can also impact the carbon cycle due to excess CO2 and loss of vegetation.</li>
        <li>High-intensity forest fires destroy flora and fauna.</li>
        <li>Wildfires can impact the economy as many families and communities depend on the forest for food, fodder, and fuel.</li>
        <li>It burns down the small shrubs and grasses, leading to landslides and soil erosion.</li>
        <li>It can change the microclimate of the area with unhealthy living conditions</li>
        </div>
        
      </section>
    </div>
  );
};

export default Absorption;
