import { rest } from "msw";
import quotes from "./quotes.json";

export const handlers = [
  rest.get("https://animechan.vercel.app/api/random", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        anime: quotes[0].anime,
        character: quotes[0].character,
        quote: quotes[0].quote,
      })
    );
  }),
  rest.get("/https:\/\/api.jikan.moe\/v4\/characters.*/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        characterImage: quotes[0].characterImage,
        characterUrl: quotes[0].characterUrl,
      })
    );
  }),
];
