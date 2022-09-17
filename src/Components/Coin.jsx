import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const Coin = () => {
  const { coinId } = useParams();

  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <p className="flex items-center justify-center mt-11">loading ....</p>
    );
  }

  return (
    <div className="">
      <div className=" max-w-screen-md my-4 mx-auto py-3 px-4 flex flex-col bg-[#26272b] shadow-2xl rounded-lg">
        {/* name */}
        <div className="flex items-center justify-center mt-5 font-bold text-2xl bg-[#26272b] shadow-xl my-8 mx-4 py-3 px-4">
          <h1 className="">{coin.name}</h1>
        </div>

        <div className="mx-auto py-3 px-4 w-full flex flex-col bg-[#26272b] shadow-2xl rounded-lg">
          {/* rank */}
          <div className="m-2 ">
            <span className="bg-[#6900ff] rounded-lg p-1">
              Rank # {coin.market_cap_rank}
            </span>
          </div>

          {/* info */}
          <div className="flex items-center justify-between mt-3">
            {/* coin-heading */}
            <div className="flex items-center gap-2 my-1">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p className="">{coin.name}</p>
              <p className="">
                {coin.symbol ? coin.symbol.toUpperCase() : null}
              </p>
            </div>

            {/* coin-price */}
            <div className="">
              {coin.market_data?.current_price ? (
                <h1 className="font-bold text-lg sm:text-2xl">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </div>

        {/* table */}
        <div className=" py-3 w-full flex flex-col justify-center bg-[#26272b] shadow-2xl overflow-x-auto">
          <table className="my-2">
            <thead>
              <tr className="bg-[#333] rounded overflow-hidden">
                <th className="p-2 text-center ">1h</th>
                <th className="p-2 text-center ">24h</th>
                <th className="p-2 text-center ">7d</th>
                <th className="p-2 text-center ">14d</th>
                <th className="p-2 text-center ">30d</th>
                <th className="p-2 text-center ">1yr</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>

                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>

                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>

                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>

                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>

                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mx-auto py-3 px-4 w-full flex flex-col bg-[#26272b] shadow-2xl rounded-lg">
          <div className="flex items-center justify-between gap-8">
            <div className="left">
              <div className="flex flex-col gap-1 mb-3">
                <h4 className="font-semibold text-sm sm:text-base">24 Hour Low</h4>

                {coin.market_data?.low_24h ? (
                  <p className="">${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1 mb-3">
                <h4 className="font-semibold text-sm sm:text-base">24 Hour High</h4>

                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
            </div>

            <div className="right">
              <div className="flex flex-col gap-1 mb-3">
                <h4 className="font-semibold text-sm sm:text-base">Market Cap</h4>

                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-1 mb-3">
                <h4 className="font-semibold text-sm sm:text-base">Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto py-3 px-4 w-full flex flex-col bg-[#26272b] shadow-2xl rounded-lg">
          <div className="about">
            <h3 className="my-4 font-semibold">About</h3>
            <p
            className="text-[#d3d3d3]"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description?.en ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
