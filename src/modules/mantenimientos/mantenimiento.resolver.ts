import { Arg, Ctx, ID, Mutation, Query } from 'type-graphql';
import { ToDoContext } from "../usuarios/models/context.model";
import { Forbidden } from "@tsed/exceptions";
import { UserRepository } from './repositories/mantenimiento.repository';
import { Mantenimiento } from './models/mantenimiento.model';
import { ResolverService } from '@tsed/typegraphql';
import { MantenimientoInput } from './inputs/mantenimientocreate.input';
import { UpdateMantenimientoInput } from './inputs/mantenimientos.update.input';

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
    async deleteMantenimiento(@Arg("id") id: number, @Ctx() ctx: ToDoContext) {
        if (ctx.usuario) 
        return this.UserRepository.deleteMantenimiento(id);

        throw new Forbidden("Usuario no encontrado");
    }

    @Mutation((returns) => Mantenimiento, {
        description: "Mutacion para crear un mantenimiento"
    })
    registerMantenimiento(@Arg("create", (type) => MantenimientoInput) create: MantenimientoInput, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) return this.UserRepository.createMantenimiento({
            ...create
        });

        throw new Forbidden("Usuario no encontrado");
    }

    @Mutation((returns) => Mantenimiento, {
        description: "Mutacion para actualizar un Mantenimiento."
    })
    updateMantenimiento(@Arg("id") id: number, @Arg("update", (type) => UpdateMantenimientoInput) update: UpdateMantenimientoInput, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) return this.UserRepository.updateMantenimiento(id,update)

        throw new Forbidden("Usuario no encontrado");
    }

}