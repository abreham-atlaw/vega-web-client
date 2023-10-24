import Field from "@/lib/forms/fields";
import Form from "@/lib/forms/form";
import type { InputMode } from "../states/inputState";


export default class InputForm extends Form{

    mode = new Field<InputMode>();

    getFields(): Field<any>[] {
        return [
            this.mode
        ];
    }

}