import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { ArrendatarioInput } from "../inputs/arrendatariocreate.input";
import { UpdateArrendatarioInput } from "../inputs/arrendatario.input";

@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaClient){}

    getAllArrendatario(){
        return this.prisma.arrendatarios.findMany();
    }

    getArrendatario(id: number){
        return this.prisma.arrendatarios.findUnique({
            where: {
                idArrendatario: Number(id)
            }
        });
    }

    deleteArrendatario(id: number) {
        return this.prisma.arrendatarios.update({
            where: {
                idArrendatario: Number(id)
            },
            data: {
                borrado: 1
            }
        });
    }

    updateArrendatario(id: number, input: UpdateArrendatarioInput){
        return this.prisma.arrendatarios.update({
            where: {
                idArrendatario: Number(id)
            },
            data: input
        })
    }

    async createArrendatario(input: ArrendatarioInput){
        return this.prisma.arrendatarios.create({
            data: {
                ...input
            }
        });
    }
}