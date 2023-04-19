import { Mantenimientos as UserClass } from "@prisma/client";
import { date, datetime } from "@tsed/schema";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";

@ObjectType({
    description: "Credencial del mantenimiento."
})
export class Mantenimiento implements UserClass {

    @Field((type) => ID, {description: "Id del mantenimiento."})
    idMantenimiento: number;

    @Field((type) => Int, {description: "Tipo de mantenimiento que se va a hacer."})
    tipoMantenimiento: number;

    @Field((type) => String, {description: "Descripción del mantenimiento."})
    descripcion: string;

    @Field((type) => String, {description: "Proveedor del mantenimiento."})
    proveedor: string;

    @Field((type) => Float, {description: "Precio del mantenimiento."})
    precio: number;

    // @Field((type) => date, {description: "Fecha del mantenimiento."})
    fechaMantenimiento: Date;

    @Field((type) => Int, {description: "Id de la propiedad que se le va a hacer el mantenimiento."})
    idPropiedad: number;

    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}