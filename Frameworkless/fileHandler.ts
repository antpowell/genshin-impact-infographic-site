import { Context, send } from "https://deno.land/x/oak/mod.ts";

const fileExist = async (path: string) => {
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
export const fileHandler = async (ctx: Context, next: Function) => {
  const path =
    `${Deno.cwd()}/Frameworkless/src/pages/home${ctx.request.url.pathname}`;
  console.log(`serving ${path}`);

  if (await fileExist(path)) {
    console.log(`${path} exists`);
    send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/Frameworkless/src/pages/home`,
    });
  } else {
    await next();
  }
};
