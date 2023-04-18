import { Propiedades as PropiedadesClass} from "@prisma/client";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";

@ObjectType({
    description: "Modelo para las propiedades"
})
export class Propiedades implements PropiedadesClass{
    @Field((type) => ID, {description: "Campo del identificador de la propiedad"})
    idPropiedad: number;

    @Field((type) => String,{description: "Campo para el nombre de la propiedad"})
    nombre: string;

    @Field((type) => Int, {description: "Campo para el tipo de propiedad"})
    tipoPropiedad: number;

    @Field((type) => String, {description: "Campo para la descripcion"})
    descripcion: string;

    @Field((type) => String, {description: "Campo para la ubicacion de la propiedad"})
    ubicacion: string;

    @Field((type) => Float, {description: "Campo para el precio de la propiedad"})
    costo: number;

    @Field((type) => Float, {description: "Campo para el anticipo minimo de la propiedad"})
    anticipioMinimo: number;

    @Field((type) => Int, {description: "Campo para los meses minimos de la propiedad"})
    mesesMinimo: number | null;

    @Field((type) => ID, {description: "Campo para el propietario de la propiedad"})
    idPropietario: number;

    @Field((type) => Boolean, {description: "Campo para ver el estado de la propiedad"})
    estado: boolean;

    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}