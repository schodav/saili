import React from "react";
import Snake from "./Snake";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function Home() {
  return (
    <div className="items-center justify-center h-full w-full bg-slate-100 text-center p-8">
      <h1 className="font-bold text-3xl">Welcome to SAILI</h1>
      <p className="mt-5">
        This is a students project created in just 48h at the ÖH Hackathon 2024
      </p>
      <p className="mt-5">Please Sign in to leck mich am Arsch.</p>

      <div className="m-4">
        <Snake></Snake>
      </div>

      <h2 className="font-bold text-3xl pt-4 text-center">Q&A</h2>
      <div className="text-center">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg border-b border-black font-bold">
              Verhaltensregeln:
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              voluptatum consectetur velit suscipit? Repudiandae, totam.
              Praesentium sunt ea ipsum odio tempore hic totam voluptates quae,
              voluptatum quibusdam, consequatur, fugiat aut.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg border-b border-black font-bold">
              Wie "Wissen" bereitgestelt werden sollte:
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              consequatur, at quia nostrum blanditiis velit? Officia eos
              temporibus cum similique, suscipit velit cumque excepturi facilis,
              eligendi deleniti, recusandae tempore sunt!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg border-b border-black font-bold">
              Was nicht geteilt werden sollte:
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis provident nostrum consectetur alias. Accusamus,
              veritatis distinctio, libero molestias esse tempore, eligendi
              animi beatae iure voluptatibus deleniti laboriosam atque doloribus
              eaque!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

("flex flex-col items-center justify-center text-center text-white bg-gray-800 h-80% w-full sticky p-4");
