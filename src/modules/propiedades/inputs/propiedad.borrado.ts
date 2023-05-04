import { Field, InputType, Int } from "type-graphql";


@InputType({description: "Inputs para la propiedad"})
export class PropiedadInputBorrado {
    @Field((type)=> Int, {description: "Nombre de la propiedad"})
    borrado: number;
}

