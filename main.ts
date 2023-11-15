import { Hono } from "hono/mod.ts";
import ui from "./src/home.ui.tsx";
import todo from "./src/todo.ui.tsx";

const app = new Hono();

app.route("/", ui).route("/todo", todo);

Deno.serve({
  port: 3000,
}, app.fetch);
