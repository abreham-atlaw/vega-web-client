import Field, { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";



export class RawInputForm extends Form{

    query = new TextField();

    getFields(): Field<any>[] {
        return [
            this.query
        ];
    }

}