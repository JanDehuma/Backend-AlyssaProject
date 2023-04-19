import { Field, InputType, Int } from "type-graphql";
import { Arrendatario } from "../models/arrendatario.model";
import { IsEmail, MaxLength } from "class-validator";

@InputType({
    description: "Input para creacion de un arrendatario"
})
export class ArrendatarioInputCreate {

    @Field((type) => String, {description: "Nombre del propietario", nullable: true})
    @MaxLength(150)
    nombre: string;

    @Field((type) => String, {description: "Correo electronico del propietario", nullable: true})
    @MaxLength(30)
    @IsEmail(undefined, {
        message: "Verifica que el formato del correo sea el correcto."
    })
    email: string;

    @Field((type) => String, {description: "Numero de telefono del propietario", nullable: true})
    @MaxLength(13)
    telefono: string;

    @Field((type) => String, {description: "RFC del propietario", nullable: true})
    @MaxLength(13)
    rfc: string;
    
    @Field((type) => String, {description: "Dirección del propietario", nullable: true})
    @MaxLength(50)
    direccion: string;
}