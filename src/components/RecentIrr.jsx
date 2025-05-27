import React from "react";

const RecentIrr = () => {
  return (
    <div dir="rtl" className="rounded-lg bg-gray-300  px-2 py-5 m-2 shadow-lg">
      <table className="w-full text-sm text-center border-collapse border border-gray-400">
        <caption className="text-lg font-bold  mb-2">باغچه 1</caption>
        <thead className="bg-gray-200">
          <tr className="border-b border-gray-400">
            <th className="px-2 py-1">ردیف</th>
            <th className="px-2 py-1">روز</th>
            <th className="px-2 py-1">تاریخ</th>
            <th className="px-2 py-1">زمان</th>
            <th className="px-2 py-1">مدت</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-400 ">
            <td className="px-2 py-1">1</td>
            <td className="px-2 py-1">شنبه</td>
            <td className="px-2 py-1">1402/02/01</td>
            <td className="px-2 py-1">22:00</td>
            <td className="px-2 py-1">20 دقیقه</td>
          </tr>
          <tr className="border-b border-gray-400 bg-gray-100">
            <td className="px-2 py-1">2</td>
            <td className="px-2 py-1">یکشنبه</td>
            <td className="px-2 py-1">1402/02/02</td>
            <td className="px-2 py-1">23:00</td>
            <td className="px-2 py-1">25 دقیقه</td>
          </tr>
          <tr className="border-b border-gray-400 ">
            <td className="px-2 py-1">3</td>
            <td className="px-2 py-1">دوشنبه</td>
            <td className="px-2 py-1">1402/02/03</td>
            <td className="px-2 py-1">21:30</td>
            <td className="px-2 py-1">15 دقیقه</td>
          </tr>
          <tr className="border-b border-gray-400 bg-gray-100">
            <td className="px-2 py-1">4</td>
            <td className="px-2 py-1">سه‌شنبه</td>
            <td className="px-2 py-1">1402/02/04</td>
            <td className="px-2 py-1">20:45</td>
            <td className="px-2 py-1">30 دقیقه</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="px-2 py-1">5</td>
            <td className="px-2 py-1">چهارشنبه</td>
            <td className="px-2 py-1">1402/02/05</td>
            <td className="px-2 py-1">19:15</td>
            <td className="px-2 py-1">10 دقیقه</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentIrr;
