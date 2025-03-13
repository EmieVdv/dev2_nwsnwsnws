import express, { Request, Response } from "express";
import path from "path";
import { title } from "process";
import { News, getAllNews, getNewsBySlug } from "./services/newsService";
import { Comments, getAllComments, getCommentByNewsID } from "./services/commentService";


const router = express.Router();

/*homepagina laden*/
router.get("/", async (req: Request, res: Response) => {
  const news: News[] = await getAllNews();

  res.render("index", { news, title: "Recent nieuws" });
});

/*detailpagina met comments laden*/
router.get("/detail/:slug", async (req: Request, res: Response) => {
  const slug: string = req.params.slug;
  const article : News= await getNewsBySlug(slug);

  const commentsWithID = await getCommentByNewsID(article.id);
  res.render("detail", { title: "Gekozen nieuwsbericht", article, commentsWithID});

});

/*comment pagina laden*/
router.get("/comments", async (req: Request, res: Response) => {
  const comments: Comments[] = await getAllComments();

  res.render("comments", { comments, title: "Alle reacties" });
});

export default router;
