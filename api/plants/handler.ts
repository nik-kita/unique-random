import { Context, Hono } from "hono/mod.ts";
import { get_data } from "./loader.ts";

const plants = new Hono();

plants.get("/", async (c: Context) => {
  if (c.req.query().prev) {
    // TODO
  }

  const {
    done,
    tiny_db,
  } = await get_data();
  const total = tiny_db.data_index.size;
  const res = c.text(
    tiny_db
      .index_data
      .get(Math.floor(total - Math.random() * total))!,
  );

  done();

  return res;
});

export default plants;
