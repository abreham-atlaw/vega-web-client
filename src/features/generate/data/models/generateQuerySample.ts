import GenerateQuery from "./generateQuery";

export default class GenerateQuerySample extends GenerateQuery {
  title: string;
  coverImage: string;

  constructor({
    title,
    coverImage,
    era,
    genre,
    instruments,
    lyricsType,
    mood
  }: {
    title: string;
    coverImage: string;
    era: any;
    genre: any;
    instruments: any;
    lyricsType: any;
    mood: any;
  }) {
    super(era, genre, mood, instruments, lyricsType);
    this.title = title;
    this.coverImage = coverImage;
  }
}
