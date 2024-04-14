"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Typography } from '@mui/material'


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-[#66a5f9] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h2" color="white" className="mb-4">
            CEE+, VOTRE PARTENAIRE DANS LA
            <br /> TRANSITION ÉNERGETIQUE.
            </Typography>
            <Typography
              variant="h1"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Optimisez l’efficacité énergétique de vos bâtiments avec CEE+, votre partenaire spécialisé en rénovation énergétique durable et innovante.
            </Typography>
            
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Image
                  width={256}
                  height={256}
                  src="/logos/onomie_no_bg.png"
                  alt="logo cee+"
                  className="w-8 h-8"
                />
                Contactez nous
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Learning App
          </Typography>
          <Typography
            variant="h3"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
