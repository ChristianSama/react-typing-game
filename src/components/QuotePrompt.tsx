import { useEffect, useState } from "react";

export const QuotePrompt = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    console.log("render");
    fetch("https://animechan.vercel.app/api/random")
      .then(response => response.json())
      .then(quote => {
        setQuote(quote.quote);
      })
  }, [])

  return (
    <div className="Quote">{quote}</div>
  );
}