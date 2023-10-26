



export enum GenerationStatus {
    none,
    instrumental,
    lyrics,
    vocal,
    mix,
    done
}

export default class StatusResponse{

    status: GenerationStatus;
    songId: string | null;

    constructor(
        status: GenerationStatus,
        songId?: string
    ){
        this.status = status;
        this.songId = songId ?? null;
    }


}