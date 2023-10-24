import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import type InputState from "../states/inputState";
import { InputStage } from "../states/inputState";




export default class InputViewModel extends AsyncViewModel<InputState>{


    async selectMode(){
        await this.asyncCall(
            async () => {
                await this.state.form.validate(true);
                this.state.stage = InputStage.input;
            }
        )
    }

}