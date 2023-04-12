import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";


@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaClient){}

    getAllUsuarios(id: number){
        return this.prisma.usuarios.findMany();
    }

    getUsuario(id: number){
        return this.prisma.usuarios.findUnique({
            where: {
              idUsuario: Number(id)
            }
          });
    }

    async createUsuario(input: Prisma.UsuariosCreateInput){
        return this.prisma.usuarios.create({
            data: {
                ...input
            }
        });
    }

    deleteUsuario(id: number) {
        return this.prisma.usuarios.delete({
            where: {
                idUsuario: Number(id)
            }
        });
    }

    updateUsuario(id: number, input: Prisma.UsuariosUpdateInput){
        return this.prisma.usuarios.update({
            where: {
                idUsuario: Number(id)
            },
            data: input
        });
    }
}