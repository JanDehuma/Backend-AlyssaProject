import { Arg, ID, Mutation, Query } from 'type-graphql';
import { UserRepository } from './repositories/mantenimiento.repository';
import { Mantenimiento } from './models/mantenimiento.model';
import { ResolverService } from '@tsed/typegraphql';
import { MantenimientoInput } from './inputs/mantenimientocreate.input';

@ResolverService(Mantenimiento)
export class MantenimientoResolover {
    constructor(private readonly UserRepository: UserRepository){}

    @Query((returns) => Mantenimiento)
    mantenimiento(@Arg("id", (type) => ID) id: number){
        return this.UserRepository.getMantenimiento(id);
    }

    @Query((returns) => [Mantenimiento])
    mantenimientos(){
        return this.UserRepository.getAllMantenimientos;
    }

    @Mutation((returns) => Mantenimiento, {
        description: "Mutacion para eliminar un mantenimiento."
    })
    async deleteMantenimiento(@Arg("id") id: number) {
        return this.UserRepository.deleteMantenimiento(id);
    }

    @Mutation((returns) => Mantenimiento, {
        description: "Mutacion para crear un mantenimiento"
    })
    registerMantenimiento(@Arg("create", (type) => MantenimientoInput) create: MantenimientoInput){
        return this.UserRepository.createMantenimiento({
            ...create
        });
    }

}