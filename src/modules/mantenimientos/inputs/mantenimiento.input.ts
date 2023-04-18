import { date, datetime } from "@tsed/schema";
import { IsEmail, MaxLength } from "class-validator";
import { Field, Float, ID, InputType, Int, ObjectType } from "type-graphql";

@InputType({
    description: "Input para actualizar un mantenimiento."
})
export class MantenimientoInputCreate {
    
    @Field((type) => Int, {description: "Tipo de mantenimiento al que pertenece", nullable: true})
    tipoMantenimiento: number;

    @Field((type) => String, {description: "Descripción del mantenimiento", nullable: true})
    @MaxLength(100)
    descripcion: string;

    @Field((type) => String, {description: "proveedor del mantenimiento", nullable: true})
    @MaxLength(45)
    proveedor: string;

    @Field((type) => Float, {description: "Precio del mantenimiento."})
    precio: number;

    @Field((type) => Int, {description: "Id de la propiedad a la que se le hara mantenimiento."})
    idPropiedad: number;

    // @Field((type) => date, {description: "Fecha del mantenimiento."})
    fechaMantenimiento: Date;
}