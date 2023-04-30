
import { Usuario } from "src/modules/usuarios/models/usuario.model";
import { Field, ObjectType } from "type-graphql";

@ObjectType({
  description: " Tokens de acceso para la autenticacion por API"
})
export class Auth{
  @Field((type) => String, {description: "Token de acceso del ususario"})
  accestoken: string;

  @Field((type) => String,{description: "Tipo del token"})
  tokenType: string;

}
