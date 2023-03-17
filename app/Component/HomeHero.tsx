import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section>
        {/* left start */}
        <div className="p-5">

      <h1>i am a full stack developer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam
        iste dolores optio iusto error voluptate praesentium? Aperiam dolorum
        cupiditate animi, nisi odio quis laudantium incidunt in perspiciatis
        labore ducimus?
      </p>
    

      <button className=" px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."> Profile</button>
        </div>
        {/* left End */}
        {/* Right statr */}
        <div>
            {/* <Image src={} alt={} height={} width={}/> */}
        </div>
    </section>
  );
};

export default HomeHero;
