import { randomUUID } from "crypto";

export class DatabaseMemory {
    #videos = new Map();


    list(search){
        return Array.from(this.#videos.entries())
        .map((videoArray)=>{
            const id = videoArray[0];
            const data = videoArray[1];

            return{
                id,
                ...data,
            }
        })
        .filter(video => {
            //filtra os videos
            if(search){
                return video.title.includes(search)
            }
            // Caso contratio retorna todos os videos 
            return true;
        });
    }

    create(video){
        //ID unico universal
        const videoId = randomUUID();
        this.#videos.set(videoId, video)
    }

    update(id,video){
        this.#videos.set(id, video);
    }

    delete(id){
        this.#videos.delete(id);
    }

}