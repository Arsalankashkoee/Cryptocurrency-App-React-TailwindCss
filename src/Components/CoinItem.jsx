import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <div className="flex justify-between items-center bg-[#26272b] shadow-xl my-8 mx-4 py-3 px-4 font-bold hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
      <p>{coin.market_cap_rank}</p>

      <div className="flex items-center">
        <img className="h-10 w-auto mr-2" src={coin.image} alt={coin.name} />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>

      <p>${coin.current_price.toLocaleString()}</p>

      <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>

      <p className="hidden md:block">${coin.total_volume.toLocaleString()}</p>

      <p className="hidden md:block">${coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
