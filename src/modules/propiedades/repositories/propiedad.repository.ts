import { Injectable } from '@tsed/di';
import { PrismaClient } from "@prisma/client";
import { PropiedadInput } from '../inputs/propiedad.input';
import { UpdateUsuarioInput } from 'src/modules/usuarios/inputs/usuario.update.input';
import { PropiedadBorradoInput } from '../inputs/propiedad.input.borrado';

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

    async createPropiedades(input: PropiedadInput){
        return await this.prisma.propiedades.create({
            data: {
                ...input
            }
        })
    }

    async updatePropiedad(id: number, update: UpdateUsuarioInput){
        return await this.prisma.propiedades.update({
            where:{
                idPropiedad: Number(id)
            },
            data:{
                ...update
            }
        })
    }

    async deletePropiedades(id: number, upadte: PropiedadBorradoInput){
        return  this.prisma.propiedades.update({
            where: {
                idPropiedad: Number(id)
            },
            data: {
                ...upadte
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