// export class RegisterInput{
//     names: string;
//     lastNames: string;
//     mail: string;
//     password: string;

import { IsEmail, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

// }
@InputType({
  description: "Entradas para el registro de un usuario."
})
export class RegisterInput {
  @Field((type) => String, {
    description: "Nombre(s) del usuario."
  })
  @MaxLength(20)
  names: string;

  @Field((type) => String, {
    description: "Apellido(s) del usuario."
  })
  @MaxLength(20)
  lastNames: string;

  @Field((type) => String, {
    description: "Correo electrónico del usuario."
  })
  @MaxLength(20)
  @IsEmail(undefined, {
    message: "Verifica si el formato de tu correo es el correcto."
  })
  mail: string;

  @Field((type) => String, {
    description: "Contraseña del usuario, se necesitan minimo 6 caracteres, 1 mayuscula y 1 número."
  })
  @MaxLength(15)
  // @IsStrongPassword(
  //   {
  //     minUppercase: 1,
  //     minNumbers: 1,
  //     minLength: 6
  //   },
  //   {
  //     message: "Verifica si el formato de tu contraseña es el correcto."
  //   }
  // )
  password: string;
}
