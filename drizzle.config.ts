import "dotenv/config";
import{defineConfig} from "drizzle-kit";
export default defineConfig({
    schema:"./src/drizzle/schema.ts",
    out:"src/drizzle/migrations",
    dialect:"postgresql",
    dbCredentials:{
        url: process.env.Database_URL as string,
    },
    verbose:true,
    strict:true,
})