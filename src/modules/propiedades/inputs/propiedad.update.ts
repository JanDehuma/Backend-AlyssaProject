import { MaxLength } from "class-validator";
import { Field, Float, ID, Int } from "type-graphql";


export class PropiedadInputUpdate {
    @Field((type) => ID, {description: "Campo para el nombre de la propiedad"})
    @MaxLength(45)
    nombre: string;

    @Field((type) => Int, {description: "Campo para el tipo de propiedad"})
    tipoPropiedad: number;

    @MaxLength(200)
    @Field((type) => String, {description: "Campo para la descripcion"})
    descripcion: string;

    @MaxLength(50)
    @Field((type) => String, {description: "Campo para la ubicacion de la propiedad"})
    ubicacion: string;

    @Field((type) => Float, {description: "Campo para el precio de la propiedad"})
    costo: number;

    @Field((type) => Float, {description: "Campo para el anticipo minimo de la propiedad"})
    anticipioMinimo: number | null;

    @Field((type) => Int, {description: "Campo para los meses minimos de la propiedad"})
    mesesMinimo: number | null;

    @Field((type) => ID, {description: "Campo para el propietario de la propiedad"})
    idPropietario: number;

    @Field((type) => Boolean, {description: "Campo para ver el estado de la propiedad"})
    estado: boolean;
}