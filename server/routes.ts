import express, { Request, Response } from "express";
import path from "path";
import { title } from "process";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */

router.get("/", (req: Request, res: Response): void => {
  const news = getNews();
  res.render("index", { title: "Alle nieuwsberichten", news: news});
});

router.get("/detail/:slug", (req: Request, res: Response): void => {
  const slug: string = req.params.slug;
  const article = getNewsBySlug(slug);

  res.render("detail", { title: "Gekozen nieuwsbericht", article: article });

});

export default router;
