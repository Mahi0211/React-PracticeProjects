import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    // Swap the values of 'from' and 'to'
    setFrom(to);
    setTo(from);
    // Swap the values of 'amount' and 'convertedAmount'
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    // Convert the amount to the target currency
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { InputBox } from "./components/index.js";

// const Base_URL =
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";

// const App = () => {
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   console.log(currencyOptions);

//   useEffect(() => {
//     fetch(Base_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         const ratesKeys = Object.keys(data.inr);
//         setCurrencyOptions([data.base, ...ratesKeys]);
//       });
//   }, []);

//   return (
//     <>
//       <body className="m-0 flex justify-center items-center min-h-screen text-center">
//         <div>
//           <h1 className="mb-4 text-4xl">Convert</h1>
//           <InputBox
//           currencyOptions = {currencyOptions}/>
//           <div className="font-bold text-4xl">=</div>
//           <InputBox />
//         </div>
//       </body>
//     </>
//   );
// };

// export default App;
