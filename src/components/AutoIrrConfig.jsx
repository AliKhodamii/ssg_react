import React from "react";
import closeVlave from "../pics/closeValve.png";

export default function Garden() {
  return (
    <div
      dir="rtl"
      className="rounded-lg bg-gray-300 grid grid-cols-2 grid-rows-[20px_1fr_1fr] gap-3 px-2 py-5 m-2 shadow-lg"
    >
      <h3 className="col-span-2 text-lg">شیر آب 1</h3>
      <div className="flex flex-col flex-1  rounded-lg p-2 bg-white">
        <h2 dir="rtl" className="font-bold text-lg">
          تکرار آبیاری
        </h2>
        <input
          type="number"
          min={0}
          max={100}
          className="border-2 border-gray-500 h-[100px] w-[100px] text-center m-auto text-6xl"
          style={{ direction: "ltr" }}
          value={3}
        />
        <h3 dir="rtl" className=" text-l text-center">
          روز یک بار
        </h3>
      </div>
      <div className=" flex flex-col flex-1   rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold text-lg ">
          زمان آبیاری
        </h3>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="flex justify-center">
            <div className="mx-3">
              <label>دقیقه</label>
            </div>
            <div className="mx-3">
              <label>ساعت</label>
            </div>
          </div>
          <div>
            <input
              id="min"
              type="number"
              min={1}
              max={60}
              value={"02"}
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
            <h1 className="inline text-2xl">:</h1>
            <input
              id="hour"
              value={"01"}
              type="number"
              min={1}
              max={60}
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  flex-1  rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold text-lg mb-auto">
          آبیاری خودکار بعدی
        </h3>
        <p dir="rtl" className="text-lg">
          سه روز دیگه !
        </p>
        <table className="text-sm ">
          <tr>
            <td>سه شنبه</td>
            <td>1/ خرداد</td>
          </tr>
          <tr>
            <td>ساعت 22:00</td>
            <td>مدت 20 دقیقه</td>
          </tr>
        </table>
      </div>
      <div className=" flex flex-col flex-1 rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold text-lg">
          مدت آبیاری
        </h3>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="flex justify-center">
            <div className="mx-3">
              <label>دقیقه</label>
            </div>
            <div className="mx-3">
              <label>ساعت</label>
            </div>
          </div>
          <div>
            <input
              id="min"
              type="number"
              min={1}
              max={60}
              value={"02"}
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
            <h1 className="inline text-2xl">:</h1>
            <input
              id="hour"
              value={"01"}
              type="number"
              min={1}
              max={60}
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
