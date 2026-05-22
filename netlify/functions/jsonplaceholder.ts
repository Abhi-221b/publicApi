import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );

    const todo = await response.json();

    return Response.json(todo);

  } catch {
    return new Response(
      "Failed to fetch todo",
      { status: 500 }
    );
  }
};