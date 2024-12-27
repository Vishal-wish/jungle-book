import React from "react";
import "./Navigation.css";

import Card1 from '../assets/Card1.webp'
import Card2 from '../assets/Card2.webp'
import Card3 from '../assets/Card3.jpeg'
import Card4 from '../assets/Card4.jpeg'
import jungle1 from '../assets/Junglemean1.jpeg'
import jungle2 from '../assets/Junglemean2.jpeg'

const Home = () => {


  
  return (
    <>
      <header className="h-screen flex flex-col justify-center items-center bg-[url('assets/Front.webp')] ">
        <h1 className="text-4xl md:text-7xl text-green-50 sm:text-green-100">
          𝓙𝓤𝓝𝓖𝓛𝓔-𝓑𝓞𝓞𝓚
        </h1>
        <p className="text-2xl md:text-3xl text-center py-4  text-green-200 font-serif">
          "IF you are hurtig the Jungle. Then wait & watch ! Jungle will
          payback"
        </p>
      </header>
      <main className="bg-green-200 my-2">
        <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-3xl font-serif ">
          Understanding the Tree Life Cycle and Their Needs Over Time
        </h1>
        <section className="bg-green-200 grid gap-6 p-8 lg:p-20 grid-cols-1 md:grid-cols-2 font-serif my-2 cursor-pointer">
          <div className="hover:bg-green-300 p-2">
            
            <img
            
              className="md:h-96 w-full overflow-y-auto"
              src={Card1}
              alt=""
            />
            <h1 className="text-center py-3 text-xl md:text-2xl hover:text-green-900">
              From Seed to Sprout
            </h1>
            <p className="text-lg text-justify">
              Every great oak was once a tiny acorn. Trees begin their journeys
              by sprouting from seeds planted by nature or by nurture, depending
              on whether they’re growing in the forest or in a nursery. During
              this stage, these tender shoots require ample sunlight, water, and
              nutrients from the soil to develop strong roots, stems, and
              leaves. They depend on us, their caretakers, to shield them from
              harsh elements and provide protection from nibbling critters.
              Early sprouts are very vulnerable to climate issues and weather
              fluctuations during germination.
            </p>
          </div>
          <div className="hover:bg-green-300 p-2">
            <img
              className="md:h-96 w-full"
              src={Card2}
              alt=""
            />
            <h1 className="text-center py-3 text-xl md:text-2xl hover:text-green-900">
              Seedling to Sapling: The Adolescence Stage
            </h1>
            <p>
              As a seedling grows, it begins to transform into an adolescent
              tree, marked by increased strength. But early in their growth,
              they still need protection from animals once the young tree has
              emerged above the ground. Once a tree is about 1 m high, it is
              considered a sapling. These adolescent trees are differentiated
              from adult trees because they don’t yet produce fruit, seeds, or
              flowers. These young trees begin to spread their branches wide and
              reach for the sky. These trees have smooth bark and flexible
              trunks, and they become increasingly robust as they grow.
            </p>
          </div>
          <div className="hover:bg-green-300 p-2" data-aos="flip-left">
            <img
              className="md:h-96 w-full"
              src={Card3}
              alt=""
            />
            <h1 className="text-center py-3 text-xl md:text-2xl hover:text-green-900">
              Mature Trees: Strength and Stability
            </h1>
            <p>
              When trees reach full maturity, they are strong and stable,
              producing fruit, seeds, and flowers (depending on their variety).
              This is the longest phase of a tree’s life, and it is also the
              most robust and stable part of the tree life cycle. At this stage,
              their needs shift towards maintaining strength and stability.
              Branches of mature trees provide shade and refuge to countless
              creatures, while their lush foliage helps cleanse the air we
              breathe.
            </p>
          </div>
          <div className="hover:bg-green-300 p-2">
            <img
              className="md:h-96 w-full"
              src={Card4}
              alt=""
            />
            <h1 className="text-center text-xl md:text-2xl hover:text-green-900 py-3 ">
              Decay: Providing for the Future
            </h1>
            <p>
              Like all living things, trees eventually enter the last phase of
              their existence. As trees begin to decline, die, and eventually
              decay, they will nourish future life as they break down and their
              bark and leaves are returned to the soil. A variety of life, from
              animals, to mold, to fungus, to more trees can grow from the
              remains of a once-grand tree on the forest floor.
            </p>
          </div>
        </section>
        <h1 className="h-auto w-full text-center py-4 my-3 bg-green-300 text-xl md:text-3xl font-serif ">
          What does the Jungle Mean ...?
        </h1>
        <section className="flex flex-col lg:flex-row justify-evenly bg-green-200 p-8">
          <section className="w-full lg:w-1/2 flex justify-center items-center p-3 text-lg sm:text-2xl text-center">
            <p>
              𝑨 𝒋𝒖𝒏𝒈𝒍𝒆 𝒊𝒔 𝒍𝒂𝒏𝒅 𝒄𝒐𝒗𝒆𝒓𝒆𝒅 𝒘𝒊𝒕𝒉 𝒅𝒆𝒏𝒔𝒆 𝒇𝒐𝒓𝒆𝒔𝒕 𝒂𝒏𝒅 𝒕𝒂𝒏𝒈𝒍𝒆𝒅 𝒗𝒆𝒈𝒆𝒕𝒂𝒕𝒊𝒐𝒏,
              𝒖𝒔𝒖𝒂𝒍𝒍𝒚 𝒊𝒏 𝒕𝒓𝒐𝒑𝒊𝒄𝒂𝒍 𝒄𝒍𝒊𝒎𝒂𝒕𝒆𝒔. <br />
              <br />
              The word jungle originates from the Sanskrit word jaṅgala (जङ्गल),
              meaning rough and arid. It came into the English language in the
              18th century via the Hindustani word for forest (Urdu/Hindi: جنگل
              / जङ्गल) (Jangal).Jāṅgala has also been variously transcribed in
              English as jangal, jangla, jungal, and juṅgala.
            </p>
          </section>
          <img
            src={jungle1}
            alt="Picture of jungle"
            className="shadow-inner w-full lg:w-1/2 p-4 "
          />
        </section>
        <section className="flex flex-col lg:flex-row justify-evenly bg-green-200 p-8">
          <img
            src={jungle2}
            alt="Picture of jungle"
            className=" shadow-inner w-full lg:w-7/12 p-4 "
          />

          <section className="w-full lg:w-1/3 flex justify-center items-center p-3 text-lg sm:text-2xl text-center">
            <p className="font-serif">
              <i>
                <br />
                <br />
                Forests cover around one-third of all land on Earth and breathe
                life into our world, but it’s not just the planet that suffers
                when they are destroyed. <br />
                <br />
                Forests are important for people's lives, homes and livelihoods
                and have a crucial role to play in tackling the biodiversity and
                climate crises.
              </i>
            </p>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
