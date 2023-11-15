/** @jsx jsx */
import { jsx } from "hono/middleware.ts";
import { Context, Hono, LinearRouter, TrieRouter } from "hono/mod.ts";

const ui = new Hono({ router: new LinearRouter() });

ui.get("/", (c: Context) => {
  return c.html(
    <div>
      <main>
        <h1>About:</h1>
        <p>
          This is simple API server to generate random data with optional
          uniqueness feature.
        </p>
        <hr />
        <h4>Short documentation:</h4>
        <ul>
          <li>
            use <span>/api</span> route to start use service
          </li>
          <li>
            use <span>/api/target</span>{" "}
            path to concrete your random expectations
            <br />
            explore full documentation to see all available categories
            <br />
            in any case - communication with any category is established in the
            same way - explore full documentation for details
            <br />
            to be sure that next random will be unique - you should provide
            previous value - explore full documentation for details
          </li>
        </ul>
        <hr />
        <h3>
          <a href="/todo">See full documentation</a>
        </h3>
      </main>
    </div>,
  );
});

export default ui;
