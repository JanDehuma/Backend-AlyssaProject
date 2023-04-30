import { Field, Float, ID, Int } from "type-graphql";


export class PropiedadInput{
    @Field((type) => ID, {description: "Input del identificador de la propiedad"})
    idPropiedad: number;
    
    @Field((type) => String, {description: "Input del identificador de la propiedad"})
    nombre: string;

    @Field((type) => Int, {description: "Input del identificador de la propiedad"})
    tipoPropiedad: number;

    @Field((type) => String, {description: "Input del identificador de la propiedad"})
    descripcion: string;

    @Field((type) => String, {description: "Input del identificador de la propiedad"})
    ubicacion: string;

    @Field((type) => Float, {description: "Input del identificador de la propiedad"})
    costo: number;

    @Field((type) => Float, {nullable: true, description: "Input del identificador de la propiedad"})
    anticipioMinimo: number | null;

    @Field((type) => Int, {nullable: true, description: "Input del identificador de la propiedad"})
    mesesMinimo: number | null;

    @Field((type) => ID, {description: "Input del identificador de la propiedad"})
    idPropietario: number;

}