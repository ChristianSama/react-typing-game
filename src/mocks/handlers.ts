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
  rest.get("https://api.jikan.moe/v4/characters", (req, res, ctx) => {
    const character = req.url.searchParams.get("q");
    if (character === "Naruto Uzumaki") {
      return res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              url: quotes[0].characterImage,
              images: {
                jpg: {
                  image_url: quotes[0].characterUrl,
                },
              },
            },
          ],
        })
      );
    }
  }),
];
