import { IsDefined } from "class-validator";
import { Field, InputType, Int } from "type-graphql";


@InputType({
    description: "Input para borrar un usuario."
})
export class DeletePropietarioInput {
    @IsDefined()
    @Field((type)=>Int,{description: "Campo que se actualiza y borra un usuario"})
    borrado: number;
}