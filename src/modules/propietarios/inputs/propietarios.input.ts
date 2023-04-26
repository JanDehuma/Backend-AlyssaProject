import { Propietarios } from "@prisma/client";
import { IsEmail } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType({description: "Input para crear un propiteario"})
export class PropietariosInput {

    @Field((type) => String, {description: "Input para el nombre del propietario."})
    nombre: string;

    @Field((type) => String, {description: "Input para el apellido paterno del propietario."})
    apaterno: string;

    @Field((type) => String, {nullable:true ,description: "Input para el apellido materno del propietario."})
    amaterno: string | null;

    @IsEmail(undefined, {message: "Verifica el formato del correo"})
    @Field((type) => String, {description: "Input para el correo del propietario."})
    email: string;

    @Field((type) => String, {description: "Input para el telefono del propietario."})
    telefono: string;

    @Field((type) => String, {description: "Input para el domicilio del propietario."})
    direccion: string;

    @Field((type) => String, {description: "Input para el RFC del propietario."})
    rfc: string;

    @Field((type) => Int, {description: "Input para el tipo de propietario."})
    tipoPropietario: number;
}