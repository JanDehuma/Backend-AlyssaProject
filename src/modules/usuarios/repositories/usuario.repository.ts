import  bcrypt  from 'bcrypt';
import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import { UsuarioInputCreate } from "../inputs/usuario.input";
import { UpdateUsuarioInput } from '../inputs/usuario.update.input';
import { UsuarioInputBorrado } from '../inputs/usuario.borrado.input';


@Injectable()
export class UserRepository{
    constructor(private readonly prisma: PrismaClient){}

    getAllUsuarios(){
        return this.prisma.usuarios.findMany();
    }

    getUsuario(id: number){
        return this.prisma.usuarios.findUnique({
            where: {
              idUsuario: Number(id)
            }
          });
    }

    async createUsuario(input: UsuarioInputCreate){
        const salt = await bcrypt.genSalt(8)
        return this.prisma.usuarios.create({
            data: {
                ...input,
                password: await bcrypt.hash(input.password, salt)
            }
        });
    }

    deleteUsuario(id: number, update: UsuarioInputBorrado) {
        return this.prisma.usuarios.update({
            where: {
                idUsuario: Number(id)
            },
            data: {
                ...update
            }
        });
    }

    updateUsuario(id: number, input: UpdateUsuarioInput){
        return this.prisma.usuarios.update({
            where: {
                idUsuario: Number(id)
            },
            data: input
        });
    }

    getUsuarioPropietario(id: number){
        return this.prisma.usuarios.findUnique({
            where:{
                idUsuario: Number(id)
            }
        });
    }
}