import React from "react";
import RecentIrr from "../components/RecentIrr";

export default function RecentIrrigations() {
  return (
    <>
      <h1 dir="rtl" className="my-5 mx-2 text-3xl font-bold">
        آبیاری های اخیر
      </h1>
      <RecentIrr />
      <RecentIrr />
    </>
  );
}
