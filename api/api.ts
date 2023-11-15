import { Hono } from "hono/mod.ts";
import plants from "./plants/handler.ts";

const api = new Hono();

api.route("/plants", plants);

export default api;
