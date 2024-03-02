"use client";
import React, { useState } from "react";
import Pendingallocationtable from "./partials/pendingallocationtable";

const Page = () => {


  return (
    <div className=" container mx-auto p-5">
      <div className=" w-full mb-2 flex flex-col gap-2  md:flex-row p-5  items-center justify-between py-2">
        <h1 className=" text-gray-500 font-medium text-lg flex items-center">
          Pending Allocations
        </h1>
      </div>
      <Pendingallocationtable />
    </div>
  );
};

export default Page;
