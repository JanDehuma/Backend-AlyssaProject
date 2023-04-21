import { Arg, ID, Mutation, Query } from 'type-graphql';
import { UserRepository } from './repositories/arrendatario.repository';
import { Arrendatario } from './models/arrendatario.model';
import { ResolverService } from '@tsed/typegraphql';
import { ArrendatarioInput } from './inputs/arrendatariocreate.input'; 
import { ArrendatarioInputBorrar } from './inputs/arrendatarioBorrado.input';
import { UpdateArrendatarioInput } from './inputs/arrendatario.input';

@ResolverService(Arrendatario)
export class ArrendatarioResolver {
    constructor(private readonly UserRepository: UserRepository){}

    @Query((returns) => Arrendatario)
    Arrendatario(@Arg("id", (type) => ID) id: number){
        return this.UserRepository.getArrendatario(id);
    }

    @Query((returns) => Arrendatario)
    Arrendatarios(){
        return this.UserRepository.getAllArrendatario;
    }

    @Mutation((returns) => Arrendatario, {
        description: "Mutacion para eliminar un Arrendatario"
    })
    async deleteArrendatario(@Arg("id") id: number, @Arg("update", (type) => ArrendatarioInputBorrar) update: ArrendatarioInputBorrar){
        return this.UserRepository.deleteArrendatario(id, update);
    }
    
    @Mutation((returns) => Arrendatario, {
        description: "Mutacion para crear un arrendatario"
    })
    registerArrendatario(@Arg("create", (type) => ArrendatarioInput) create: ArrendatarioInput){
        return this.UserRepository.createArrendatario({
            ...create
        });
    }

    @Mutation((returns) => Arrendatario, {
        description: "Mutacion para actualizar un Arrendatario."
    })
    updateArrendatario(@Arg("id") id: number, @Arg("update", (type) => UpdateArrendatarioInput) update: UpdateArrendatarioInput){
        return this.UserRepository.updateArrendatario(id,update)
    }

}