import { Field, Float, InputType, Int } from "type-graphql";

@InputType({description: "Inputs para la propiedad"})
export class PropiedadInput {

    @Field((type)=> String, {description: "Nombre de la propiedad"})
    nombre: string;

    @Field((type) => Int, {description: "Tipo de propiedad"})
    tipoPropiedad: number;

    @Field((type) => String, {description: "Descripcion de la propiedad."})
    descripcion: string;

    @Field((type) => String, {description: "Ubicacion de la propiedad"})
    ubicacion: string;

    @Field((type) => Float, {description: "Costo de la propiedad"})
    costo: number;

    @Field((type) => Int, {description: "Anticipo minimo para la propiedad"})
    anticipioMinimo: number | null;

    @Field((type) => Int, {description: "Meses minimo para la propiedad"})
    mesesMinimo: number | null;

}