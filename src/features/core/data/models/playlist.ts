import type Song from "./song";



export default class Playlist{

    id: string;
    songs: Song[];
    title: string;
    cover: string;

    constructor({
        id,
        songs,
        title,
        cover
    }:{
        id: string,
        songs: Song[],
        title: string,
        cover: string
    }){
        this.id = id;
        this.songs = songs;
        this.title = title;
        this.cover = cover;
    }

}