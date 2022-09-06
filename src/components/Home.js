import React from "react";


function Home() {

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Galenka Cinema
          </h1>
          <p className="mb-8 leading-relaxed">
            Galenka Cinema is a movie database website. You can find information about movies, actors, directors, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
