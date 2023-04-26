import { Prisma, PrismaClient } from "@prisma/client";
import { ToDoContext } from './models/context.model';
import { Arg, Ctx, FieldResolver, ID, Mutation, Query, Root } from 'type-graphql';
import { UserRepository } from './repositories/usuario.repository';
import { Usuario } from './models/usuario.model';
import { ResolverService } from '@tsed/typegraphql';
import { UsuarioInputCreate } from './inputs/usuario.input';
import { UpdateUsuarioInput } from './inputs/usuario.update.input';
import { Forbidden } from '@tsed/exceptions';
import { UsuarioInputBorrado } from "./inputs/usuario.borrado.input";

@ResolverService(Usuario)
export class UsuarioResolver {
    constructor(private readonly UserRepository: UserRepository){}

    /*@Query((returns) => Usuario)
    currentUsuario(@Ctx() context: ToDoContext){
        if(context.user){
            return this.UserRepository.getUsuario(context.user?.idUsuario)
        }
    }*/

    @Query((returns) => Usuario)
    obtenerUsuarios(){
        return this.UserRepository.getAllUsuarios();
    }

    @Query((returns) => [Usuario])
    usuarios(){
        return this.UserRepository.getAllUsuarios();
    }

    @Mutation((retruns) => Usuario, {
        description: "Mutacion para crear un ususario"
    })
    registerUsuario(@Arg("create", (type) => UsuarioInputCreate) create: UsuarioInputCreate){
        return this.UserRepository.createUsuario({
            ...create
        });
    }

    @Mutation((returns) => Usuario,{
        description: "Mutacion para eliminar un usuario"})
    deleteUsuario(@Arg("id") id: number,@Arg("update", (type) => UsuarioInputBorrado)input: UsuarioInputBorrado) {
        return this.UserRepository.deleteUsuario(id,input);
    }

    @Mutation((returns) => Usuario, { description: "Mutación para actualizar un usuario" })
    updateUser(@Arg("id", (type) => ID)id: number,@Arg("update", (type) => UpdateUsuarioInput) update: UpdateUsuarioInput) {
        return this.UserRepository.updateUsuario(id, update)
  }



    /*@FieldResolver((returns) => [Propietarios], {
        description: "FielResolver para mostrar los propietarios que tiene un usuario"
    })
    propietarios(@Root() parent: Usuario){
        return this.UserRepository.getUsuarioPropietario(parent.idUsuario);
    }*/
}