import React from "react";
import CardComponent from "./CardComponent";
const CardContainer = () => {
  const cardContent = [
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
    {
      heading: "Protein",
      desc: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima enim possimus nam et veniam ut? Exercitationem ducimus quae laudantium necessitatibus!",
    },
  ];

  return (
    <div className="flex mt-4 flex-wrap gap-2">
      {cardContent.map((e, index) => (
        <CardComponent heading={e.heading} desc={e.desc} />
      ))}
      ;
    </div>
  );
};

export default CardContainer;
//  <div className="w-1/3 m-auto mb-4">
//           <div className="w-full">
//             <img className="image-calc h-60 rounded-lg" src={image} alt="" />
//           </div>
//           <h1 className="text-xl font-bold text-left p-3">{e.heading}</h1>
//           <p className="text-justify text-base px-3">{e.desc}</p>
//         </div>
