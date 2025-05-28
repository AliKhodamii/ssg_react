import React from "react";
import Garden from "../components/Garden";

export default function Home({ data }) {
  console.log("Data from Home:", data);

  const valves = data?.valves || [];

  return (
    <>
      <h1 dir="rtl" className="my-5 mx-2 text-3xl font-bold">
        باغچه ها
      </h1>

      {valves.map((valve, index) => (
        <Garden key={index} />
      ))}
    </>
  );
}
