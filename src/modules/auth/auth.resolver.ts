import { Forbidden } from "@tsed/exceptions";
import { ResolverService } from "@tsed/typegraphql";
import { sign } from "jsonwebtoken";
import { Arg, Mutation } from "type-graphql";
import { LoginInput } from "./inputs/login.input";
import { Auth } from "./models/api_authentication";
import { AuthRepository } from "./repositories/auth.repository";

@ResolverService()
export class AuthResolver {
  constructor(private authRepository: AuthRepository) {}

  @Mutation((returns) => Auth, {
    description: "Mutación de login."
  })
  async login(@Arg("input", (type) => LoginInput) input: LoginInput): Promise<Auth> {
    const usuario = await this.authRepository.login(input.email, input.password);
    if (usuario) {
      const { password, ...input } = usuario;
      const accestoken = sign(input, process.env.SECRET ?? "ben");
      return {
        accestoken,
        tokenType: "bearer"
      };
    }
    throw new Forbidden("Tus datos son incorrectos");
  }
}
