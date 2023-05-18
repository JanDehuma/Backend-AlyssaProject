import { Field, InputType, Int } from "type-graphql";


@InputType({description: "Borrado logico de un contrato."})
export class ContratoDelete {
    @Field((type) => Int, {description: "Campo para borrar unn usuario"})
    borrado: number;
        
}