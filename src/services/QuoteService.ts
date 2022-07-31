export const getQuote = async () => {
  try {
    //Quote API call
    const quoteRes = await fetch("https://animechan.vercel.app/api/random");
    const quote = await quoteRes.json();

    //Character API call using quote character
    const characterRes = await fetch(`https://api.jikan.moe/v4/characters?q=${encodeURIComponent(quote.character)}`);
    const character = await characterRes.json();

    return {
      quote: quote.quote,
      anime: quote.anime,
      character: quote.character,
      characterUrl: character.data[0].url,
      characterImage: character.data[0].images.jpg.image_url
    }

  } catch(err) {
    throw new Error(err.message);
  }
};
