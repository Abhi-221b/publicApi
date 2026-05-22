import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const url = "https://icanhazdadjoke.com/";
    const response = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    });

    const joke = await response.json();

    return Response.json(joke);

  } catch {
    return new Response(
      "Failed to fetch todo",
      { status: 500 }
    );
  }
};