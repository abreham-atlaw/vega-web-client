import Field from "@/common/forms/fields";
import Form from "@/common/forms/form";
import type { InputMode } from "../states/inputState";


export default class InputForm extends Form{

    mode = new Field<InputMode>();

    getFields(): Field<any>[] {
        return [
            this.mode
        ];
    }

}