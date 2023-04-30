import { Arg, Ctx, ID, Mutation, Query } from 'type-graphql';
import { UserRepository } from './repositories/arrendatario.repository';
import { Arrendatario } from './models/arrendatario.model';
import { ResolverService } from '@tsed/typegraphql';
import { ToDoContext } from "../usuarios/models/context.model";
import { ArrendatarioInput } from './inputs/arrendatariocreate.input'; 
import { ArrendatarioInputBorrar } from './inputs/arrendatarioBorrado.input';
import { UpdateArrendatarioInput } from './inputs/arrendatario.input';
import { Forbidden } from '@tsed/exceptions';

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
    async deleteArrendatario(@Arg("id") id: number, @Arg("update", (type) => ArrendatarioInputBorrar) update: ArrendatarioInputBorrar, @Ctx() ctx:ToDoContext){
        if (ctx.usuario) return this.UserRepository.deleteArrendatario(id, update);

        throw new Forbidden("Usuario no encontrado");
    }
    
    @Mutation((returns) => Arrendatario, {
        description: "Mutacion para crear un arrendatario"
    })
    registerArrendatario(@Arg("create", (type) => ArrendatarioInput) create: ArrendatarioInput, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) return this.UserRepository.createArrendatario({
            ...create
        });

        throw new Forbidden("Usuario no encontrado");
    }

    @Mutation((returns) => Arrendatario, {
        description: "Mutacion para actualizar un Arrendatario."
    })
    updateArrendatario(@Arg("id") id: number, @Arg("update", (type) => UpdateArrendatarioInput) update: UpdateArrendatarioInput, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) return this.UserRepository.updateArrendatario(id,update)

        throw new Forbidden("Usuario no encontrado");
    }

}