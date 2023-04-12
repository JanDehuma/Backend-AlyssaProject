// class Auth {
//   token: string;
//   tokenType: string;
// }
//
import { Field, ObjectType } from "type-graphql";
@ObjectType({
  description: " Resultado de autorizacion del usuario"
})
export class Auth{
  @Field((type) => String, {
    description: "Identificador del token"
  })
  token: string;

  @Field((type) => String,{
    description: "Tipo del token"
  })
  tokenType: string;
}
