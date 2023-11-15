import { Hono } from "hono/mod.ts";
import api from "./api/api.ts";
import ui from "./ui/home.ui.tsx";

const app = new Hono();

app
  .route("/api", api)
  .route("/", ui);

Deno.serve({
  port: 3000,
}, app.fetch);
