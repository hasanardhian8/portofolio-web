import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        class="bg-white h-screen flex items-center justify-center"
      >
        <div class=" text-center">
          <div class="text-7xl text-blue-300 leading-5">”</div>
          <div class="font-medium max-w-xl text-xl">
            I am Achmad Hasan Ardhian, bachelor of informatics UPN "VETERAN" Yogyakarta. I have a passion in web development equipped with full stack knowledge and skills. Have good skills in using Nodejs and Reactjs to build a web. I have an interest in a career as a web developer.
          </div>
          <div class="mt-5">
            <span class="font-bold">Hasan Ardhian</span>
            <span class="text-gray-500 font-medium">
              {" "}
              — 2022
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
