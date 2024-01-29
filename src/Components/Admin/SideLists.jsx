import React from "react";
import image from "../../assets/main1.jpg";
const SideLists = () => {
  const sidelists = [
    {
      first_name: "Udall",
      last_name: "Emeline",
      title: "Björk: Volumen",
    },
    {
      first_name: "Chas",
      last_name: "Gluyas",
      title: "Mister Lonely",
    },
    {
      first_name: "Susi",
      last_name: "Lethibridge",
      title: "Evidence of Blood",
    },
    {
      first_name: "Ardra",
      last_name: "Sollitt",
      title: "Conception",
    },
    {
      first_name: "Odette",
      last_name: "Severy",
      title: "These Girls",
    },
    {
      first_name: "Robers",
      last_name: "Heinish",
      title: "If It's Tuesday, This Must Be Belgium",
    },
    {
      first_name: "Alejandro",
      last_name: "Berisford",
      title: "Milk",
    },
    {
      first_name: "Say",
      last_name: "Arlet",
      title: "Miracle Worker, The",
    },
    {
      first_name: "Therese",
      last_name: "Vidgen",
      title: "Toy Story 3",
    },
    {
      first_name: "Shanda",
      last_name: "Linkin",
      title: "Head On",
    },
  ];
  return (
    <div className="w-full">
      <ul className="flex flex-col h-[36rem] mr-10 overflow-y-scroll no-scrollbar">
        {sidelists.map((e, index) => (
          <li className="bg-green-400 rounded-xl mb-2 p-2">
            <div className="flex">
              <div className="w-16">
                <img src={image} className="w-12 h-12 rounded-full" alt="" />
              </div>
              <div className="flex flex-col text-left">
                <h1>
                  {e.first_name} {e.last_name}
                </h1>
                <h3>{e.title}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideLists;
