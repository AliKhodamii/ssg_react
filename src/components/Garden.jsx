import React from "react";
import openValve from "../pics/openValve.gif";
import closeVlave from "../pics/closeValve.png";

export default function Garden() {
  return (
    <div
      dir="rtl"
      className="rounded-lg bg-gray-300 grid grid-cols-2 grid-rows-2 grid-rows-2 gap-2 px-2 py-5 m-2 shadow-lg"
    >
      <div className="flex flex-col flex-1  rounded-lg p-2 bg-white">
        <h2 dir="rtl" className="font-bold text-lg">
          وضعیت رطوبت الان
        </h2>
        <h1 dir="rtl" className="py-8 text-6xl">
          60%
        </h1>
        <h3 dir="rtl" className=" text-xl">
          نسبتا خوبه
        </h3>
      </div>
      <div className="bg-green-100 border-2 border-black flex flex-col flex-1  rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold text-lg">
          وضعیت شیر آب
        </h3>

        <img
          src={closeVlave}
          alt="openValve"
          className="w-[100px] m-auto"
        ></img>

        <p dir="rtl" className=" text-xl ">
          بسته
        </p>
      </div>
      <div className="flex flex-col  flex-1  rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold text-lg mb-auto">
          آبیاری خودکار بعدی
        </h3>
        <p dir="rtl" className="text-lg">
          سه روز دیگه !
        </p>
        <table className="text-sm ">
          <tbody>
            <tr>
              <td>سه شنبه</td>
              <td>1/ خرداد</td>
            </tr>
            <tr>
              <td>ساعت 22:00</td>
              <td>مدت 20 دقیقه</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-between flex-1 rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold text-lg">
          کنترل دستی شیر آب
        </h3>
        <div>
          <form action="" className="text-center">
            <div className="flex justify-center">
              <div className="mx-3">
                <label>دقیقه</label>
              </div>
              <div className="mx-3">
                <label>ساعت</label>
              </div>
            </div>
            <input
              id="min"
              type="number"
              min={1}
              max={60}
              defaultValue="02"
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
            <h1 className="inline">:</h1>
            <input
              id="hour"
              defaultValue="01"
              type="number"
              min={1}
              max={60}
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
            <button
              type="submit"
              min={1}
              max={60}
              className="border-2 border-black px-10 py-2 rounded-md hover:bg-green-500 hover:text-white active-bg-gray-500 prevent-default"
            >
              باز کردن شیر
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
