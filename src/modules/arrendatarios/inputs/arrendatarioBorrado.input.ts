import { IsDefined, IsEmail, MaxLength } from "class-validator";
import { Field, ID, InputType, Int } from "type-graphql";


@InputType({
    description: "Input para borrar un Arrendatario"
})
export class ArrendatarioInputBorrar {
    @IsDefined()
    @Field((type) => Int, {description: "Campo que se actualiza para hacer el borado."})
    borrado: number;
}