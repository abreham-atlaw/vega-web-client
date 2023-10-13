export default class Song {
    id: string;
    audioUrl: string;
    coverImageUrl: string;
    title: string;
    lyrics: string;
  
    constructor(id: string, audioUrl: string, coverImageUrl: string, title: string, lyrics: string) {
      this.id = id;
      this.audioUrl = audioUrl;
      this.coverImageUrl = coverImageUrl;
      this.title = title;
      this.lyrics = lyrics;
    }
  }
  