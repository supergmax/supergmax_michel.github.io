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

export function FixedPlugin() {
  return (
    <a href="mailto:michels@ceeplus.fr" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" 
        placeholder={undefined} 
        onPointerEnterCapture={undefined} 
        onPointerLeaveCapture={undefined}>
        Contact Us
      </Button>
    </a>
  );
}
