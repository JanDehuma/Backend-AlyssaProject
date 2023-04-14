import { Field, InputType, Int } from "type-graphql";
import { Usuario } from "../models/usuario.model";
import { IsEmail, MaxLength } from "class-validator";

@InputType({
    description: "Input para creacion de usuario."
})
export class UsuarioInputCreate {
    @Field((type) => String, {description: "Nombre del usuario", nullable: true})
    @MaxLength(45)
    nombre: string;
    
    @Field((type) => String, {description: "Correo electronico del usuario", nullable: true})
    @MaxLength(45)
    @IsEmail(undefined, {
        message: "Verifica que el formato del correo sea el correcto."
    })
    correo: string;

    @Field((type) => String, {description: "Contraseña del ususario, se necesitan al menos entre 6 y 15 caracteres, 1 mayuscula y un numero.",
    nullable: true})
    @MaxLength(15)
    password: string;

    @Field((type) => Int, {description: "Tipo de usuario al que pertenece", nullable: true})
    tipoUsuario: number;

    @Field((type) => String, {description: "Numero de telefono del usuario", nullable: true})
    @MaxLength(13)
    telefono: string;

}