import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { PropietariosInput } from "../inputs/propietario.input";

@Injectable()
export class PropietarioRepository {
  constructor(private readonly prisma: PrismaClient) {}

  getAllPropietarios() {
    return this.prisma.propietarios.findMany();
  }

  getPropietario(id: number) {
    return this.prisma.propietarios.findUnique({
      where: {
        idPropietario: Number(id)
      }
    });
  }

  async createPropietario(input: PropietariosInput, idUsuario: number) {
    return await this.prisma.propietarios.create({
      data: {
        ...input,
        usuario: {
          connect: {
            idUsuario: idUsuario
          }
        }
      }
    });
  }

  async deletePropietario(id: number) {
    return await this.prisma.propietarios.update({
      where: {
        idPropietario: Number(id)
      },
      data: {
        borrado: 1
      }
    });
  }

  async updatePropietario(id: number, input: Prisma.PropietariosUpdateInput) {
    return await this.prisma.propietarios.update({
      where: {
        idPropietario: Number(id)
      },
      data: input
    });
  }
}
