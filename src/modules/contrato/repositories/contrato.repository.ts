import { PrismaClient } from "@prisma/client";
import { ContratoInput } from "../inputs/contrato.input";
import { ContratoUpdate } from "../inputs/contrato.update";

export class ContratoRepository {
  constructor(private readonly prisma: PrismaClient) {}

  obtenerContrato(id: number) {
    return this.prisma.contrato.findUnique({
      where: {
        idContrato: Number(id)
      }
    });
  }

  obtenerContratos() {
    return this.prisma.contrato.findMany();
  }

  async createContrato(input: ContratoInput, idPropietario: number, idPropiedad: number, idArrendatario: number) {
    return await this.prisma.contrato.create({
      data: {
        ...input,

        propietario: {
          connect: {
            idPropietario: idPropietario
          }
        },
        propiedad: {
          connect: {
            idPropiedad: idPropiedad
          }
        },
        arrendatario: {
          connect: {
            idArrendatario: idArrendatario
          }
        }
      }
    });
  }
  

  async deleteContrato(id: number) {
    return await this.prisma.contrato.update({
      where: {
        idContrato: Number(id)
      },
      data: {
        borrado: 1
      }
    });
  }

  async updateContrato(id: number, update: ContratoUpdate) {
    return await this.prisma.contrato.update({
      where: {
        idContrato: Number(id)
      },
      data: {
        ...update
      }
    });
  }
}
