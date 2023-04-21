import { Arg, Ctx, ID, Mutation, Query } from 'type-graphql';
import { UserRepository } from './repositories/propietario.repository';
import { Propietario } from './models/propietario.model';
import { ResolverService } from '@tsed/typegraphql';
import { PropietarioInput } from './inputs/propietariocreate.input';
import { ToDoContext } from '../usuarios/models/context.model';
import { type } from 'os';
import { PropietarioInputBorrar } from './inputs/propietarioBorrado.input';
import { UpdatePropietarioInput } from './inputs/propietarios.update.input';

@ResolverService(Propietario)
export class PropietarioResolver {
    constructor(private readonly UserRepository: UserRepository){}

    @Query((returns) => Propietario)
    Propietario(@Arg("id", (type) => ID) id: number){
        return this.UserRepository.getPropietario(id);
    }

    @Query((returns) => [Propietario])
    propietarios(){
        return this.UserRepository.getAllPropietarios;
    }

    @Mutation((returns) => Propietario, {
        description: "Mutacion para crear un propietario"
    })
    registerPropietario(@Arg("create", (type) => PropietarioInput) create: PropietarioInput, @Ctx() ctx: ToDoContext){
        return this.UserRepository.createPropietario({
            ...create,
        });
    }

    @Mutation((returns) => Propietario, {
        description: "Mutacion para eliminar un propietario."
    })
    async deletePropietario(@Arg("id") id: number, @Arg("update", (type) => PropietarioInputBorrar) update: PropietarioInputBorrar) {
        return this.UserRepository.deletePropietario(id,update);
    }

    @Mutation((returns) => Propietario, {
        description: "Mutacion para actualizar un propietario."
    })
    updatePropietario(@Arg("id") id: number, @Arg("update", (type) => UpdatePropietarioInput) update: UpdatePropietarioInput){
        return this.UserRepository.updatePropietario(id,update)
    }
}