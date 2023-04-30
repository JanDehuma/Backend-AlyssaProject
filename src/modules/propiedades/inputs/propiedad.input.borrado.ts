import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType({description: "Input para actualizar el campo eliminado de la propiedad"})
export class PropiedadBorradoInput {
    @Field({description: "Input para actualizar en la base de datos"})
    @MaxLength(1)
    borrado: number;
}