import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";

// https://youtu.be/3F7cqnZrzA8?si=ZyrOEJZsogMnFgmG&t=916

// this will be a database
let counter = 0;

const app = new Elysia()
  .use(html())
  .get("/", () => {
    return (
      <html lang="en">
        <head>
          <title>Hello World</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <script
            src="https://unpkg.com/htmx.org@2.0.3"
            integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <div class="container mx-auto">
            <h1 class="text-3xl font-bold underline">HTMX Counter Example</h1>
            <div class="mt-10 flex gap-5 items-center">
              <button
                class="p-5 rounded bg-gray-300"
                hx-post="/dec"
                hx-swap="outerHTML"
                hx-target="#counter"
              >
                -
              </button>
              <div id="counter">{counter}</div>
              <button
                class="p-5 rounded bg-gray-300"
                hx-post="/inc"
                hx-swap="outerHTML"
                hx-target="#counter"
              >
                +
              </button>
            </div>
          </div>
        </body>
      </html>
    );
  })
  .post("/dec", () => {
    counter--;
    return <div id="counter">{counter}</div>;
  })
  .post("/inc", () => {
    counter++;
    return <div id="counter">{counter}</div>;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
