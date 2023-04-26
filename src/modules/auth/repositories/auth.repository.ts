import { PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import bcrypt from "bcrypt";


@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaClient) {}
  async login(correo: string, password: string) {
    const usuario = await this.prisma.usuarios.findUniqueOrThrow({
      where: {
        correo
      }
    });
    if (await bcrypt.compare(password, usuario.password)) {
      return usuario;
    }
  }
}
