import { Ctx, On, Start, Update } from "nestjs-telegraf";
import { Context } from "node:vm";

@Update()
export class BotUpdate {
  @Start()
  async onStart(@Ctx() ctx: Context) {
    ctx.reply("Salom");
  }

  @On("text")
  async onText(@Ctx() ctx: Context) {
    console.log(ctx);
    if ("text" in ctx.message!) {
      if (ctx.message.text == "hi") {
        await ctx.replyWithHTML("<b>Hello</b>");
      } else {
        await ctx.replyWithHTML(ctx.message.text);
      }
    }
  }

  @On("message")
  async onMessage(@Ctx() ctx: Context) {
    console.log(ctx.botInfo);
    console.log(ctx.chat);
    console.log(ctx.chat!.id);
    console.log(ctx.from);
    console.log(ctx.from.id);
  }
}
