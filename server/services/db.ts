import postgres, { Sql } from 'postgres';

const SB_POSTGRES_URL:string = process.env.SB_POSTGRES_URL || 'postgresql://postgres:postgres@127.0.0.1:54322/postgres'; //npx supabase start en dan bij DB URL
const sql: Sql = postgres(SB_POSTGRES_URL);

export default sql;