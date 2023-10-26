export default class GenerateQuery{


    genre?: string;
    era?: string;
    mood?: string;
    instruments?: string[];
    lyricsType?: string[];


    constructor(
        genre?: string,
        era?: string,
        mood?: string,
        instruments?: string[],
        lyricsType?: string[]
    ){
        this.genre = genre;
        this.era = era;
        this.mood = mood;
        this.instruments = instruments;
        this.lyricsType = lyricsType;
    }

}