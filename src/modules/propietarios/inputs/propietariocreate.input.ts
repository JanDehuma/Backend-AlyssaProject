import { Propietarios } from "@prisma/client";
import { IsEmail, MaxLength } from "class-validator";
import { Field, ID, InputType, Int } from "type-graphql";


@InputType({
    description: "Input para creacion de propietario."
})
export class PropietarioInput {

    @Field((type) => String, {description: "Nombre del propietario"})
    @MaxLength(20)
    nombre: string;

    @Field((type) => String, {description: "Apellido paterno del propietario"})
    @MaxLength(20)
    apaterno: string;

    @Field((type) => String, {description: "Apellido materno del propietario"})
    @MaxLength(20)
    amaterno: string;
    
    @Field((type) => String, {description: "Correo electronico del propietario"})
    @MaxLength(30)
    @IsEmail(undefined, {
        message: "Verifica que el formato del correo sea el correcto."
    })
    email: string;

    @Field((type) => String, {description: "Numero de telefono del propietario"})
    @MaxLength(13)
    telefono: string;

    @Field((type) => String, {description: "Dirección del propietario"})
    @MaxLength(45)
    direccion: string;

    @Field((type) => String, {description: "RFC del propietario"})
    @MaxLength(13)
    rfc: string;

    @Field((type) => Int, {description: "Tipo de propietario al que pertenece"})
    tipoPropietario: number;

    @Field((type) => ID, {description: "Id usuario al que pertenece"})
    idUsuario: number;
}