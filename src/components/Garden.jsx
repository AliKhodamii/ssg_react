import React from "react";
import openValve from "../pics/openValve2.gif";

export default function Garden() {
  return (
    <div
      dir="rtl"
      className="rounded-lg bg-gray-100 grid grid-cols-2 grid-rows-2 gap-2 px-2 py-5"
    >
      <div className="flex flex-col flex-1 border-4 border-indigo-500 rounded-lg p-2 bg-white">
        <h2 dir="rtl" className="font-bold">
          وضعیت رطوبت الان
        </h2>
        <h1 dir="rtl" className="py-8 text-6xl">
          60%
        </h1>
        <h3 dir="rtl">متوسط</h3>
      </div>
      <div className="flex flex-col flex-1 border-4 border-indigo-500 rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold">
          وضعیت شیر
        </h3>

        <img src={openValve} alt="openValve" className="w-[100px] m-auto"></img>

        <p dir="rtl">باز</p>
      </div>
      <div className="flex flex-col justify-between flex-1 border-4 border-indigo-500 rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold">
          آبیاری خودکار بعدی
        </h3>
        <p dir="rtl">سه روز دیگه</p>
        <table className="text-sm">
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
      <div className="flex flex-col justify-between flex-1 border-4 border-indigo-500 rounded-lg p-2 bg-white">
        <h3 dir="rtl" className="font-bold">
          کنترل دستی شیر
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
              type="number"
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
            <h1 className="inline">:</h1>
            <input
              type="number"
              min={1}
              max={60}
              className="border-2 border-black m-2 w-[40px] h-[30px] text-center"
            />
            <button
              type="submit"
              min={1}
              max={60}
              className="border-2 border-black px-10 py-2 rounded-md "
            >
              باز کردن
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
