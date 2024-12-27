import React from "react";
import Tree from '../assets/tree.png'

function Footer() {
  return (
    <footer className="h-auto md:h-72 bg-green-400 border-2 rounded-b-3xl  border-green-800 p-2 ">
      <section className="h-5/6 gap-4 grid grid-cols-1 items-center  md:grid-cols-3 text-center text-lg md:text-2xl cursor-pointer">
        <div className="flex justify-center hover:shadow-inner hover:text-red-600">
          <img
            src={Tree}
            className="h-8 md:h-12 "
            alt=""
          />
          𝓙𝓤𝓝𝓖𝓛𝓔-𝓑𝓞𝓞𝓚
        </div>
        <div className="hover:shadow-inner  hover:text-red-600 ">ⓕⓐⓒⓔⓑⓞⓞⓚ</div>
        <div className="hover:shadow-inner hover:text-red-600 ">🅸🅽🆂🆃🅰</div>
        <div className="hover:shadow-inner hover:text-red-600 ">
          𝒫𝒽𝑜𝓃𝑒-986543210
        </div>
        <div className="hover:shadow-inner hover:text-red-600 ">
          <i>visit site for more update</i>{" "}
        </div>
        <div className="hover:shadow-inner hover:text-red-600 ">
          <i>Jungle-ban-vibhag Himachal Pradesh India</i>
        </div>
      </section>
      <hr className="border-b-2 border-white" />
      <p className="w-full text-red-700 text-center font-serif  text-sm sm:text-xl">
        &copy;{new Date().getFullYear()} Trees are <b>Valueable</b> for Life either Human or Animal
      </p>
    </footer>
  );
}

export default Footer;
