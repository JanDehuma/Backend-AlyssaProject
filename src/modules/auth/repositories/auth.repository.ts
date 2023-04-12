import { PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import bcrypt from "bcrypt";
@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaClient) {}
  // get, getAll, create, update y delete, en auth no.
  async login(correo: string, password: string) {
    const usuario = await this.prisma.usuarios.findUniqueOrThrow({
      where: {
        correo //email: email
      }
    });
    if (await bcrypt.compare(password, usuario.password)) {
      return usuario;
    }
  }
}
