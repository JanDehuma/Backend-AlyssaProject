import { Arrendatarios } from "@prisma/client";
import { IsEmail, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType({
    description: "Input para actualizar un arrendatario"
})
export class ArrendatarioInput{
    @Field((type) => String, {description: "Nombre del arrendatario"})
    @MaxLength(150)
    nombre: string;

    @Field((type) => String, {description: "Correo electronico del propietario", nullable: true})
    @MaxLength(30)
    @IsEmail(undefined, {
        message: "Verifica que el formato del correo sea el correcto."
    })
    email: string;

    @Field((type) => String, {description: "Numero de telefono del arrendatario"})
    @MaxLength(13)
    telefono: string;

    @Field((type) => String, {description: "RFC del arrendatario"})
    @MaxLength(13)
    rfc: string;

    @Field((type) => String, {description: "Dirección del arrendatario"})
    @MaxLength(50)
    direccion: string;
}