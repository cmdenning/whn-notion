import * as dotenv from "dotenv"
import { Client } from "@notionhq/client"

dotenv.config()

const notion = new Client({ auth: process.env.NOTION_KEY })

const query = async () => {
    const databaseId = process.env.NOTION_DATABASE_ID
    const response = await notion.databases.query({
        database_id: databaseId,
    })
    // console.log(response)
    response.results.map((r) => console.log(r.properties.Name.title))
}

query()
