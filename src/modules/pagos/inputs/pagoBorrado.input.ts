import { IsDefined } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType({
    description: "Input para borrar un pago."
})
export class PagoInputBorrar {
    @IsDefined()
    @Field((type) => Int, {description: "Capo que se actualiza para hacer el borrado."})
    borrado: number;
}