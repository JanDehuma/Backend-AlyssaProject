import { Arg, ID, Mutation, Query } from 'type-graphql';
import { UserRepository } from './repositories/usuario.repository';
import { Usuario } from './models/usuario.model';
import { ResolverService } from '@tsed/typegraphql';
import { UsuarioInputCreate } from './inputs/usuario.input';
import { UpdateUsuarioInput } from './inputs/usuario.update.input';

@ResolverService(Usuario)
export class UsuarioResolver {
    constructor(private readonly UserRepository: UserRepository){}

    @Query((returns) => Usuario)
    usuario(@Arg("id", (type) => ID) id: number){
        return this.UserRepository.getUsuario(id);
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
    deleteUser(@Arg("delete", (type) => ID) id: number) {
        return this.UserRepository.deleteUsuario(id);
      }
}