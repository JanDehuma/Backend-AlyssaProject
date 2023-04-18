import { IsEmail, IsStrongPassword, MaxLength } from "class-validator";
import { Field, ID, InputType, Int, ObjectType } from "type-graphql";

@InputType({
    description: "Input para actualizar un usuario"
})
export class UpdateUsuarioInput {

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
    password?: String;

    @Field((type) => Int, {description: "Tipo de usuario al que pertenece", nullable: true})
    tipoUsuario: number;

    @Field((type) => String, {description: "Numero de telefono del usuario", nullable: true})
    @MaxLength(13)
    telefono: string;

}