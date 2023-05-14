import { PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { PagoInputBorrar } from "../inputs/pagoBorrado.input";
import { PagoInputCreate } from "../inputs/pago.input";

@Injectable()
export class PagoRepository{
    constructor(private readonly prisma:PrismaClient){}

    getAllPagos(){
        return this.prisma.pagos.findMany();
    }

    getPago(id: number){
        return this.prisma.pagos.findUnique({
            where: {
                idPago: Number(id)
            }
        });
    }

    async createPago(input: PagoInputCreate, idContrato: number){
        return await this.prisma.pagos.create({
            data:{
                ... input,
                contrato: {
                    connect: {
                        idContrato: idContrato
                    }
                }
            }
        })
    }

    deletePago(id: number, update: PagoInputBorrar){
        return this.prisma.pagos.update({
            where: {
                idPago: Number(id)
            },
            data: {
                ...update
            }
        });
    }
}