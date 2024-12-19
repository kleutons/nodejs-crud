import { randomUUID } from "crypto";
import sql from "./db.js";

export class DatabasePostgres {

    async list(search = ''){

        let query = sql`SELECT * FROM videos`;

        if (search) {
            query = sql`${query} WHERE title ILIKE ${'%' + search + '%'}`;
        }
    
        const videos = await query;

        return videos;
    }

    async create(video){  
        const videoId = randomUUID();
        const { title, description, duration } = video;

        await sql`
            insert into videos (id, title, description, duration) 
            VALUES (${videoId}, ${title}, ${description}, ${duration})
        `;

    }

    async update(id, video) {
        const { title, description, duration } = video;
    
        await sql`
            UPDATE videos
            SET 
                title = ${title},
                description = ${description},
                duration = ${duration}
            WHERE id = ${id}
        `;
    }    

    async delete(id){

        await sql`
            DELETE FROM videos
            WHERE id = ${id}
        `;
    }

}