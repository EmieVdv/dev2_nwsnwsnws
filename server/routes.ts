import express, { Request, Response } from "express";
import path from "path";
import { title } from "process";
import { News, getAllNews, getNewsBySlug } from "./services/newsService";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */

router.get("/", async (req: Request, res: Response) => {
  const news: News[] = await getAllNews();

  res.render("index", { news, title: "Recent nieuws" });
});

router.get("/detail/:slug", async (req: Request, res: Response) => {
  const slug: string = req.params.slug;
  const articlesWithSlug = await getNewsBySlug(slug);
  const article = articlesWithSlug[0]

  res.render("detail", { title: "Gekozen nieuwsbericht", article });

});

export default router;
