import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Coin from "./Components/Coin";
import Coins from "./Components/Coins";
import Navbar from "./Components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />

        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;