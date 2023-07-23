import { Router } from "https://deno.land/x/oak/mod.ts";
import { fileHandler } from "./fileHandler.ts";

export const oakRoutes: Router = new Router();

oakRoutes
  .get("/", (ctx) => {
    if (fileHandler()) {
      console.log("file exists");
    }
  })
  .get("/weekly", (ctx) => {})
  .get("/:path*", (ctx) => {})
  .get("/", (ctx) => {});
