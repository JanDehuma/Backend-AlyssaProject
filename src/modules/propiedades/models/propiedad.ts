import { Propiedades } from "@prisma/client";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";


@ObjectType({description: "Modelo para la propiedad"})
export class Propiedad implements Propiedades{

    @Field((type) => ID,{description: "Identificador del usuario"})
    idPropiedad: number;

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

    @Field((type) => ID, {description: "Identificador del propietario"})
    idPropietario: number;

    @Field((type) => Boolean, {description: "Estado para la proiedad"} )
    estado: boolean;

    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}