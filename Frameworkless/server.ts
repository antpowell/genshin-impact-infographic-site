import { Handler, serve } from "std/http/server.ts";
import { serveFile } from "std/http/file_server.ts";
import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const serverOptions = {
  hostname: "localhost",
  port: 8181,
};

const fileExists = async (path: string) => {
  try {
    const stat = await Deno.lstat(path);
    return stat && stat.isFile;
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw e;
    }
  }
};

const handler: Handler = async (_req) => {
  const url = new URL(_req.url).pathname;
  const corePath = `${Deno.cwd()}/Frameworkless/src`;
  if (await fileExists(`${corePath}${url}`)) {
    console.log(`${corePath}${url} exists`);
    serveFile(_req, `${corePath}${url}`);
  }
  // else {
  //   console.log(`${corePath}${url} does not exist`);
  //   return new Response(`<h1>404</h1><p>${corePath}${url} not found</p>`, {
  //     headers: {
  //       "content-type": "text/html",
  //     },
  //   });
  // }
  switch (url) {
    case "/":
      return serveFile(_req, `${corePath}/pages/home/home.html`);
    case "/weekly":
      return new Response("weekly", {
        status: 200,
        headers: { "content-type": "text/html" },
      });
    case "/weekly/:boss":
      return serveFile(_req, `${corePath}/pages/weekly/weekly.html`);
    default:
      return serveFile(_req, `${corePath}/${url}`);
  }
};

const router = new Router();

serve(handler, {
  ...serverOptions,
  onListen: ({ hostname, port }) => {
    console.log(`Listening on http://${hostname}:${port}/`);
  },
});
