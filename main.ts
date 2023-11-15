import { Context, Hono } from "hono/mod.ts";

const app = new Hono();

app.get(
  "/",
  (c: Context) => c.render(`<h1>// TODO add documentation</h1></hr>`),
);

Deno.serve({
  port: 3000,
}, app.fetch);
