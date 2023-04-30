import { Propiedades as PropiedadClass } from "@prisma/client"
import { Field, Float, ID, Int, ObjectType } from "type-graphql";

@ObjectType({
    description: "Modelo para la propiedad"
})
export class Propiedades implements PropiedadClass{
    @Field((type) => ID)
    idPropiedad: number;

    @Field((type) => String)
    nombre: string;

    @Field((type) => Int)
    tipoPropiedad: number;

    @Field((type) => String)
    descripcion: string;

    @Field((type) => String)
    ubicacion: string;

    @Field((type) => Float)
    costo: number;

    @Field((type) => Int)
    anticipioMinimo: number | null;

    @Field((type) => Int)
    mesesMinimo: number | null;

    @Field((type) => ID)
    idPropietario: number;
    
    @Field((type) => Boolean)
    estado: boolean;

    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}