export const getQuote = async () => {
  const response = await fetch("https://animechan.vercel.app/api/random")
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
}
