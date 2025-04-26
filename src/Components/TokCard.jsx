import React from "react";
import { Card } from "flowbite-react";


export function TokCard({ content }) {
    console.log(content.img)
  return (
    <Card
      className="w-[320px] sm:w-md"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={content.img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {content.Heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {content.Text1} <br /> {content.Text2}
      </p>
     
    </Card>
  );
}

export default TokCard