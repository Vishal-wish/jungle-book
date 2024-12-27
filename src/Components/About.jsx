import React from "react";
import Image1 from "../assets/Wildlife1.webp"
import Image2 from "../assets/Wildlife2.webp"
import Image3 from "../assets/Wildlife3.webp"
import Image4 from "../assets/Wildlife4.webp"
import Image5 from "../assets/Wildimp1.webp"
import Image6 from "../assets/Wildimp2.webp"
import Image7 from "../assets/Wildimp3.jpg"
import Image8 from "../assets/Wildimp4.jpeg"
import Image9 from "../assets/Wildimp5.jpeg"
import Image10 from "../assets/Wildimp6.webp"


function About() {
  return (
    <>
      <section className=" pt-16">
        <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-3xl font-serif ">
          Why trees are important for wildlife...?
        </h1>
        <div className="flex justify-center text-start text-lg md:text-xl w-10/12 p-4  m-auto bg-green-100 rounded-lg ">
          <div className=" mx-4 bg-green-700 w-6"></div>
          <p>
            <b className="font-serif">
              Three main components of wildlife habitat: food, cover, and places
              to raise young, can all be provided by trees. Wherever trees are
              established, wildlife and other plants are sure to follow,
              ensuring a healthier and more biodiverse ecosystem.
            </b>
            <br />
            <br />
            <i className="font-serif">
              Trees help animals and birds to survive as they provide them with
              food and shelter. Some trees can be seen as a home to many birds
              and animals. The branches of the trees provide a place for them to
              rest or nest while they are in the forest. The leaves also serve
              as an excellent food source for some animals that live in forests.
            </i>
          </p>
        </div>
      </section>
      <section className="h-auto  flex max-[640px]:flex-col p-4 ">
        <div className=" md:w-1/3 p-1 h-auto ">
          <img
            src={Image1}
            alt=""
          />
        </div>
        <div className=" md:w-1/3 p-1 h-auto ">
          {" "}
          <img
            src={Image2}
            alt=""
          />
        </div>
        <div className=" md:w-1/3 h-auto p-1">
          <img
            src={Image3}
            alt=" sorry"
            className="object-contain"
          />
        </div>
        <div className=" md:w-1/3 h-auto p-1">
          <img
            src={Image4}
            alt=" sorry"
            className="object-contain"
          />
        </div>
      </section>
      <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-3xl font-serif ">
        Why wild animals are important...?
      </h1>
      <section className="grid lg:grid-cols-3 items-center justify-center p-6 bg-green-200 gap-3 ">
        <div className="p-2 hover:bg-green-100 cursor-pointer">
          <img
            src={Image5}
            alt=""
            className="lg:h-80 w-full"
          />
          <h1 className="text-center text-lg py-2 font-semibold md:text-xl ">
            Animals Maintain Balance in Ecosystem
          </h1>
          <p className="text-justify font-serif lg:h-40 md:text-base">
            All living things are interconnected. If any part is threatened or
            becomes extinct, this has a knock-on effect on the entire ecosystem,
            sending shock waves through the environment.
          </p>
        </div>
        <div className="p-2 hover:bg-green-100 cursor-pointer">
          <img
            src={Image6}
            alt=""
            className="lg:h-80 w-full"
          />
          <h1 className="text-center text-lg py-2 font-semibold md:text-xl ">
            {" "}
            Wildlife Assists Medical - Research
          </h1>
          <p className="text-justify font-serif lg:h-40 md:text-base">
            Human race has always turned to nature for medicine. Many medical
            systems still wholly rely on herbs & spices, but even Western
            pharmaceuticals have made giant strides with wildlife Research
          </p>
        </div>
        <div className="p-2 hover:bg-green-100 cursor-pointer">
          <img
            src={Image7}
            alt=""
            className="lg:h-80 w-full"
          />
          <h1 className="text-center text-lg py-2 font-semibold md:text-xl ">
            They Assist Us to Understand the Past
          </h1>
          <p className="text-justify font-serif lg:h-40 md:text-base">
            A fossil is the physical evidence of the existence of a prehistoric
            plant or wild animal. The fossil is either their preserved remains
            or other traces, like tracks made in the ground when they were still
            alive.
          </p>
        </div>
        <div className="p-2 hover:bg-green-100 cursor-pointer">
          <img
            src={Image8}
            alt=""
            className="lg:h-80 w-full"
          />
          <h1 className="text-center text-lg py-2 font-semibold md:text-xl ">
            {" "}
            People Depend on Wildlife for Income
          </h1>
          <p className="text-justify font-serif lg:h-40 md:text-base">
            For millions of people, wildlife is their primary source of income
            in one way or another. According to the World Economic Forum, U$44
            trillion is tied to nature. In the Global South, one and a half
            billion people depend on forests. As wildlife and their habitats
            shrink, jobs are lost.
          </p>
        </div>
        <div className="p-2 hover:bg-green-100 cursor-pointer">
          <img
            src={Image9}
            alt=""
            className="lg:h-80 w-full"
          />
          <h1 className="text-center text-lg py-2 font-semibold md:text-xl ">
            Wildlife is Vital to the country Economy
          </h1>
          <p className="text-justify font-serif lg:h-40 md:text-base">
            Wildlife conservation parks and reserves are geared up to attract
            visitors from all over the world. Many countries and economies
            depend on wildlife for tourism, which makes up over 10% of the
            world’s GDP.
          </p>
        </div>
        <div className="p-2 hover:bg-green-100 cursor-pointer">
          <img
            src={Image10}
            alt=""
            className="lg:h-80 w-full"
          />
          <h1 className="text-center text-lg py-2 font-semibold md:text-xl ">
            {" "}
            Wildlife Provides Vital Nutrients
          </h1>
          <p className="text-justify font-serif lg:h-40 md:text-base">
            All of the food that we eat originally came from an animal or plant.
            While we don’t eat as much ‘wildlife’ as we used to because the food
            supply chain has become so industrial, it’s pertinent to note that
            all crops and animals were wildlife at one point.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
