import { Arg, ID, Mutation, Query } from 'type-graphql';
import { UserRepository } from './repositories/propietario.repository';
import { Propietario } from './models/propietario.model';
import { ResolverService } from '@tsed/typegraphql';
import { PropietarioInput } from './inputs/propietariocreate.input';

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
    registerPropietario(@Arg("create", (type) => PropietarioInput) create: PropietarioInput){
        return this.UserRepository.createPropietario({
            ...create
        });
    }

    @Mutation((returns) => Propietario, {
        description: "Mutacion para eliminar un propietario."
    })
    async deletePropietario(@Arg("id") id: number) {
        try {
          return this.UserRepository.deletePropietario(id);
        } catch {
          return false;
        }
    }

    
}