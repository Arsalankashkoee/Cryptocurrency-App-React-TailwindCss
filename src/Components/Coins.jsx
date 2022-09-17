import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="flex justify-between items-center bg-[#26272b] shadow-xl my-8 mx-4 py-3 px-4 font-bold">
          <p>#</p>
          <p className="">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hidden md:block">Volume</p>
          <p className="hidden md:block">Mkt Cap</p>
        </div>

        {coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`}  key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
