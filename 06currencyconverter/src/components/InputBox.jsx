import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

// const InputBox = (props) => {
//   const { currencyOptions } = props;
//   return (
//     <div>
//       <input
//         className="border-2 border-gray-400 rounded-md p-1 w-40"
//         type="number"
//       />
//       <select className="ml-4">
//         {currencyOptions.map((currency) => (
//           <option key={currency} value={currency}>
//             {currency}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default InputBox;
