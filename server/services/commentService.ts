import sql from "./db";

export interface Comments {
    id?: number;          
    news_id?: number;
    author?: string;
    comment: string;
    created_at?: string;
  }

export async function getAllComments(): Promise<Comments[]> {
    try {
        const data : Comments[] = await sql`select * from comments`;        
        return data;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error('Could not fetch news: ' + error);
    }
}

export async function getCommentByNewsID(newsId:number): Promise<Comments[]> {
    try {
      const data : Comments[] = await sql`SELECT * FROM comments WHERE news_id = ${newsId}`;
      return data;
      
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw new Error('Could not fetch comments: ' + error);
    }
  };