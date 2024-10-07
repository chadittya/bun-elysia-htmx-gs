import { Elysia } from "elysia";
import { html, Html } from "@elysiajs/html";

// this will be a database
let counter = 0;

interface CounterButtonComponentProps {
  url: string;
  target: string;
  icon: string;
}

const CounterButtonComponent = ({
  url,
  target,
  icon,
}: CounterButtonComponentProps) => {
  return (
    <button
      class="p-5 rounded bg-gray-300"
      hx-post={url}
      hx-swap="outerHTML"
      hx-target={target}
    >
      {icon}
    </button>
  );
};

const CounterComponent = ({ counter, id }: { counter: number; id: string }) => {
  return (
    <div
      id={id}
      class={counter > 0 ? "bg-green-300" : counter < 0 ? "bg-red-300" : ""}
    >
      {counter}
    </div>
  );
};

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
              <CounterButtonComponent url="/dec" target="#counter" icon="-" />
              <CounterComponent id="counter" counter={counter} />
              <CounterButtonComponent url="/inc" target="#counter" icon="+" />
            </div>
          </div>
        </body>
      </html>
    );
  })
  .post("/dec", () => {
    counter--;
    return <CounterComponent id="counter" counter={counter} />;
  })
  .post("/inc", () => {
    counter++;
    return <CounterComponent id="counter" counter={counter} />;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
