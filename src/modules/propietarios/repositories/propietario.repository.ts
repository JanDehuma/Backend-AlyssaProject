import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { PropietarioInputBorrar } from "../inputs/propietarioBorrado.input";
import { UpdatePropietarioInput } from "../inputs/propietarios.update.input";
import { PropietariosInput } from '../inputs/propietario.input';

@Injectable()
export class PropietarioRepository{
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

    async createPropietario(input: PropietariosInput, idUsuario: number){
        return await this.prisma.propietarios.create({
            data: {
                ... input,
                usuario: {
                    connect: {
                        idUsuario: idUsuario
                    }
                }
            }
        });
    }

    deletePropietario(id: number, update: PropietarioInputBorrar) {
        return this.prisma.propietarios.update({
            where: {
                idPropietario: Number(id)
            },
            data: {
                ...update
            }
        });
    }

    updatePropietario(id: number, input: UpdatePropietarioInput){
        return this.prisma.propietarios.update({
            where: {
                idPropietario: Number(id)
            },
            data: input
        });
    }
}