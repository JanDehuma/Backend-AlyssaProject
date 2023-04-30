import { Injectable } from '@tsed/di';
import { Prisma, PrismaClient } from "@prisma/client";
import { UpdateUsuarioInput } from 'src/modules/usuarios/inputs/usuario.update.input';
import { PropiedadBorradoInput } from '../inputs/propiedad.input.borrado';
import { PropiedadInput } from '../inputs/propiedad.input';
import { PropiedadInputUpdate } from '../inputs/propiedad.update';

@Injectable()
export class PropiedadRepository{
    constructor(private readonly prisma: PrismaClient){}

    getPropiedades(id:number){
        return this.prisma.propiedades.findUnique({
            where: {
                idPropiedad: Number(id)
            }
        })
    }

    getAllPropiedades(){
        return this.prisma.propiedades.findMany();
    }

    async createPropiedades(input: Prisma.PropiedadesCreateInput, idPropietario: number){
        return await this.prisma.propiedades.create({
            data:{
                ...input,
                propietario: {
                    connect:{
                        idPropietario:idPropietario
                    }
                }
            }
        })
    }

    async updatePropiedad(id: number, update: PropiedadInputUpdate){
        return await this.prisma.propiedades.update({
            where:{
                idPropiedad: Number(id)
            },
            data:{
                ...update
            }
        })
    }

    async deletePropiedades(id: number, update: PropiedadBorradoInput){
        return  this.prisma.propiedades.update({
            where: {
                idPropiedad: Number(id)
            },
            data: {
                ...update
            }
        })
    }

    getPropiedadPropietario(id: number){
        return this.prisma.propiedades.findUnique({
            where:{
                idPropiedad: Number(id)
            }
        })
    }
}