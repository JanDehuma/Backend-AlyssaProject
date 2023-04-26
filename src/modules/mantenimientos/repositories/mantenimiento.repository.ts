import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { MantenimientoInput } from "../inputs/mantenimientocreate.input";
import { UpdateMantenimientoInput } from "../inputs/mantenimientos.update.input";
import { MantenimientoInputBorrar } from "../inputs/mantenimientoBorrado.input";

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

    deleteMantenimiento(id: number, update: MantenimientoInputBorrar){
        return this.prisma.mantenimientos.update({
            where: {
                idMantenimiento: Number(id)
            },
            data: {
                ...update
            }
        });
    }

    updateMantenimiento(id: number, input: UpdateMantenimientoInput){
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