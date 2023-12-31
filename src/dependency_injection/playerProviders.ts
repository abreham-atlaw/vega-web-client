import PlayerState from "@/features/player/application/states/playerState";
import PlayerViewModel from "@/features/player/application/viewModels/playerViewModel";



export default class PlayerProviders{

    private static player: PlayerViewModel | null = null;

    public static providePlayer(): PlayerViewModel{
        if(PlayerProviders.player === null){
            throw Error("Player not initialized");
        }
        return PlayerProviders.player;
    }

    public static setPlayer(player: PlayerViewModel){
        PlayerProviders.player = player;
    }

}