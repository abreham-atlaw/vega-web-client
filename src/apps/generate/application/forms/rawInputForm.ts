import Field, { TextField } from "@/lib/forms/fields";
import Form from "@/lib/forms/form";



export class RawInputForm extends Form{

    query = new TextField();

    getFields(): Field<any>[] {
        return [
            this.query
        ];
    }

}