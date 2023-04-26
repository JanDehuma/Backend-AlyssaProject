import { IsEmail, IsNotEmpty } from "class-validator";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class LoginArgs{
    @IsNotEmpty({message: "El correo electronico es requerido."})
    @IsEmail({}, {message: "El correo electronico no es valido."})
    @Field((type) => String)
    email:string

    @IsNotEmpty({message: "La contraseña es requerida."})
    @Field((type) => String)
    password:string
}