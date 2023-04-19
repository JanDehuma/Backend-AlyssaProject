import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { PropietarioInput } from "../inputs/propietariocreate.input";

@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaClient){}

    getAllPropietarios(){
        return this.prisma.propietarios.findMany();
    }

    getPropietario(id: number){
        return this.prisma.propietarios.findUnique({
            where: {
              idPropietario: Number(id)
            }
          });
    }

    async createPropietario(input: PropietarioInput){
        return this.prisma.propietarios.create({
            data: {
                ...input
            }
        });
    }

    deletePropietario(id: number) {
        return this.prisma.propietarios.delete({
            where: {
                idPropietario: Number(id)
            }
        });
    }

    updatePropietario(id: number, input: Prisma.PropietariosUpdateInput){
        return this.prisma.propietarios.update({
            where: {
                idPropietario: Number(id)
            },
            data: input
        });
    }
}