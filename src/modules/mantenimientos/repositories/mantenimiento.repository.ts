import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { MantenimientoInput } from "../inputs/mantenimientocreate.input";

@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaClient){}

    getAllMantenimientos(){
        return this.prisma.mantenimientos.findMany();
    }

    getMantenimiento(id: number){
        return this.prisma.mantenimientos.findUnique({
            where: {
                idMantenimiento: Number(id)
            }
        });
    }

    deleteMantenimiento(id: number){
        return this.prisma.mantenimientos.delete({
            where: {
                idMantenimiento: Number(id)
            }
        });
    }

    updateMantenimiento(id: number, input: Prisma.MantenimientosUpdateInput){
        return this.prisma.mantenimientos.update({
            where: {
                idMantenimiento: Number(id)
            },
            data: input
        });
    }

    async createMantenimiento(input: MantenimientoInput){
        return this.prisma.mantenimientos.create({
            data: {
                ...input
            }
        });
    }
}