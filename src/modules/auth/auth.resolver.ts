//import { email, string } from "@tsed/schema/lib/types/utils/from";
import { Forbidden } from "@tsed/exceptions";
import { ResolverService } from "@tsed/typegraphql";
import { sign } from "jsonwebtoken";
import { Arg, Mutation } from "type-graphql";
import { LoginInput } from "./inputs/login.input";
import { Auth } from "./models/auth";
import { AuthRepository } from "./repositories/auth.repository";

@ResolverService()
export class AuthResolver {
  constructor(private authRepository: AuthRepository) {}

  @Mutation((returns) => Auth, {
    description: "Mutación de login."
  }) // agregar descripción
  async login(@Arg("input", (type) => LoginInput) input: LoginInput): Promise<Auth> {
    const user = await this.authRepository.login(input.email, input.password);
    if (user) {
      const { password, ...input } = user;
      const token = sign(input, process.env.SECRET ?? "ben");
      return {
        token,
        tokenType: "bearer"
      };
    }
    throw new Forbidden("Tus datos son incorrectos");
  }
}
