/**  @jsx jsx */
import { jsx } from "hono/middleware.ts";
import { Context, Hono, LinearRouter } from "hono/mod.ts";

const todo = new Hono({ router: new LinearRouter() });

todo.get("/", (c: Context) => {
  return c.html(
    <div>
      <main>
        <h1>// TODO</h1>
        <hr />
        <h2>
          <a href="/">Go home</a>
        </h2>
      </main>
    </div>,
  );
});

export default todo;
