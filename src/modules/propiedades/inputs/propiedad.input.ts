import { MaxLength } from "class-validator";
import { Field, Float, ID, InputType, Int } from "type-graphql";

@InputType({description: "Input para agregar los campos de la propiedad"})
export class PropiedadInput {
    @Field((type) => ID, {description: "Input para el nombre de la propiedad"})
    @MaxLength(45)
    nombre: string;

    @Field((type) => Int, {description: "Input para el tipo de propiedad"})
    tipoPropiedad: number;

    @MaxLength(200)
    @Field((type) => String, {description: "Input para la descripcion"})
    descripcion: string;

    @MaxLength(50)
    @Field((type) => String, {description: "Input para la ubicacion de la propiedad"})
    ubicacion: string;

    @Field((type) => Float,{description: "Input para el precio de la propiedad"})
    costo: number;

    @Field((type) => Float,{description: "Input para el anticipo minimo de la propiedad"})
    anticipioMinimo: number | null;

    @Field((type) => Int, {description: "Input para los meses minimos de la propiedad"})
    mesesMinimo: number | null;

    @Field((type) => ID, {description: "Input para el propietario de la propiedad"})
    idPropietario: number;

    @Field((type) => Boolean, {description: "Input para ver el estado de la propiedad"})
    estado: boolean;

}