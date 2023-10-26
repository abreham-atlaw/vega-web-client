import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type RawInputState from "../states/rawInputState";



export default class RawInputViewModel extends AsyncViewModel<RawInputState>{


    async submit(){
        await this.asyncCall(
            async () => {
                await this.state.form.validate(true);
            }
        )
    }

}