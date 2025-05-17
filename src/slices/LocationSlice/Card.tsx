import React from "react";
import { HiClock, HiCalendar } from "react-icons/hi";

const Card = () => {
  return (
    <div className="p-4 rounded-lg bg-white min-w-[220px] max-w-xs ">
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-bold text-primary-600">
          Tannlæknaþjónustan Reykjavík
        </h4>
        <div className="flex items-center gap-2 text-primary-500">
          <HiClock className="w-5 h-5" />
          <span className="font-medium">Opnunartímar</span>
        </div>
        <div className="flex flex-col gap-1 text-gray-700">
          <div className="flex justify-between">
            <span>Mánudagur - Fimmtudagur:</span>
            <span className="font-semibold">8:00 - 16:00</span>
          </div>
          <div className="flex justify-between">
            <span>Föstudagur:</span>
            <span className="font-semibold">8:00 - 14:00</span>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-200 text-sm text-gray-500">
          Háaleitisbraut 1, 105 Reykjavík
          <br />
          Sími:{" "}
          <a
            href="tel:+3545551234"
            className="text-primary-500 hover:underline"
          >
            +354 555-1234
          </a>
        </div>
        <button
          type="button"
          className="mt-3 flex items-center justify-center gap-2 bg-secondary-700 hover:bg-secondary-500 cursor-pointer text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          <HiCalendar className="w-5 h-5" />
          Bóka tíma
        </button>
      </div>
    </div>
  );
};

export default Card;
