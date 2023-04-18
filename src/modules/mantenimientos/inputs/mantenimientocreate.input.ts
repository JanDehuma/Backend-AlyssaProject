import { Mantenimientos } from "@prisma/client";
import { datetime } from "@tsed/schema";
import { MaxLength } from "class-validator";
import { Field, Float, InputType, Int } from "type-graphql";

@InputType({
    description: "Input para actualizar un mantenimiento."
})
export class MantenimientoInput{
    @Field((type) => Int, {description: "Tipo de mantenimiento que se va a hacer."})
    tipoMantenimiento: number;

    @Field((type) => String, {description: "Descripción del mantenimiento."})
    @MaxLength(100)
    descripcion: string;

    @Field((type) => String, {description: "Proveedor del mantenimiento."})
    @MaxLength(45)
    proveedor: string;

    @Field((type) => Float, {description: "Precio del mantenimiento."})
    precio: number;

    @Field((type) => String, {description: "Fecha del mantenimiento."})
    fechaMantenimiento: string;

    @Field((type) => Int, {description: "Id de la propiedad que se le va a hacer el mantenimiento."})
    idPropiedad: number;

}