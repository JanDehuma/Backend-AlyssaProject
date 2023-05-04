import { Injectable } from '@tsed/di';
import { PrismaClient } from '@prisma/client';
import { PropiedadInput } from '../inputs/propiedad.input';
import { PropiedadInputUpdate } from '../inputs/propiedad.update';
import { PropiedadInputBorrado } from '../inputs/propiedad.borrado';

@Injectable()
export class PropiedadRepository {
    constructor(private readonly prisma: PrismaClient){}
    

    obtenerPropiedad(id:number){
        return this.prisma.propiedades.findUnique({
            where: {
                idPropiedad: Number(id)
            }
        });
    }

    obtenerTodasPropiedades(){
        return this.prisma.propiedades.findMany();
    }

    async createPropiedad(input: PropiedadInput, idPropietario:number){
        return await this.prisma.propiedades.create({
            data:{
                ...input,
                propietario:{
                    connect:{
                        idPropietario:idPropietario
                    }
                }
            }
        }); 
    }

    async borrarPropiedad(id: number, update: PropiedadInputBorrado){
        return await this.prisma.propiedades.update({
            where:{
                idPropiedad: Number(id)
            },
            data: update
        });
    }

    async actualizarPropiedad(id: number, update: PropiedadInputUpdate){
        return await this.prisma.propiedades.update({
            where:{
                idPropiedad: Number(id)
            },
            data: update
        });
    }

    obtenerMantenimientosPropiedad(){
        return this.prisma.propiedades.findMany();
    }


}