/**  @jsx jsx */
import { jsx } from "hono/middleware.ts";
import { Context, Hono, LinearRouter } from "hono/mod.ts";

const todo = new Hono({ router: new LinearRouter() });

todo.get("/", (c: Context) => {
  return c.html(<h1>// TODO</h1>);
});

export default todo;
