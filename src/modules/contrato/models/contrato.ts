import { Contrato } from "@prisma/client";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";


@ObjectType({description: "Modelo del contrato."})
export class ContratoModel implements Contrato{

    @Field((type) => ID, {description: "Identificador del contrato."})
    idContrato: number;

    @Field((type) => String, {description: "Nombre del contrato."})
    contrato: string;

    @Field((type) => Int, {description: "Tipo de contrato"})
    tipoContrato: number;

    @Field((type) => Date, {description: "Fecha de inicio del contrato."})
    fechaInicio: Date;

    @Field((type) => Date, {description: "Fecha de fin del contrato."})
    fechaFin: Date;

    @Field((type) => Float, {description: "Deposito inicial del contrato"})
    deposito: number | null;

    @Field((type) => Int, {description: "Duracion del contrato"})
    duracion: number;

    @Field((type) => Boolean, {description: "Estado activo/inactivo del contrato."})
    estado: boolean;

    @Field((type) => ID, {description: "Identificador de la propiedad."})
    idPropiedad: number;

    @Field((type) => ID, {description: "Identificador del arrendatario."})
    idArrendatario: number;

    @Field((type) => ID, {description: "Identificador del propietario."})
    idPropietario: number;

    borrado: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    
}