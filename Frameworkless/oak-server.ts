/**
 * @fileoverview Deno server using oak framework.
 * @version 0.0.1
 *
 * @requires deno
 * @requires oak
 *
 * Documentation
 * - Deno: https://deno.land/manual
 * - Oak: https://deno.land/x/oak
 */

import { Application, helpers, Router } from "https://deno.land/x/oak/mod.ts";
import { fileHandler } from "./fileHandler.ts";

const router = new Router();

const BASE_PATH = `${Deno.cwd()}/Frameworkless`;
const routesPath = `${BASE_PATH}/src/routes`;

router
  .get("/:route/*", async (ctx) => {
    const { route } = ctx.params;
    const homePage = await Deno.readTextFile(
      `${routesPath}${route}`,
      // "",
    );
    // await ctx.send({
    //   root: `${rou}/src/pages/home`,
    //   index: 'home.html'
    // });
    ctx.response.body = `${BASE_PATH}/src/pages/home/home.html`;
    ctx.response.headers.set("Content-Type", "text/html");
    console.log(`navigating to ${BASE_PATH}/src/pages/home/home.html`)
    ctx.response.body = homePage;
    ctx.response.headers.set("Content-Type", "text/html");
  })
  .get("/weekly", (ctx) => {
    ctx.response.body = "Weekly";
  })
  .get("/weekly/:boss", (ctx) => {
    const { boss } = ctx.params;
    console.log(ctx.params);
    ctx.response.body = `Weekly ${boss}\n${JSON.stringify(ctx.params)}}`;
  });

// create oak router that serves static sites from the src/pages folder
const app = new Application();
app.use(fileHandler);
app.use(router.routes());
app.use(router.allowedMethods());

// Page not found
// app.use(async (ctx, next) => {
//   ctx.response.body = `<h1>404</h1><br><h2>Page not found</h2>`;
//   ctx.response.headers.set("Content-Type", "text/html");
//   ctx.response.status = 404;
//   await next();
// });

// Response time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.listen({ port: 8080 });
