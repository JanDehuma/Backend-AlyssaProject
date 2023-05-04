import { Forbidden } from "@tsed/exceptions";
import { ResolverService } from "@tsed/typegraphql";
import { Arg, Ctx, ID, Mutation, Query } from "type-graphql";
import { ToDoContext } from "../usuarios/models/context.model";
import { PropietarioInputBorrar } from "./inputs/propietarioBorrado.input";
import { PropietariosInput } from "./inputs/propietario.input";
import { Propietario } from "./models/propietario";
import { PropietarioRepository } from "./repositories/propietario.repository";
import { UpdatePropietarioInput } from "./inputs/propietarios.update.input";

@ResolverService(Propietario)
export class PropietarioResolver {
    constructor(private readonly PropietarioRepository: PropietarioRepository){}

    @Query((returns) => Propietario)
    Propietario(@Arg("id", (type) => ID) id: number){
        return this.PropietarioRepository.getPropietario(id);
    }

    @Query((returns) => [Propietario])
    propietarios(){
        return this.PropietarioRepository.getAllPropietarios;
    }

    //Esta mutacion debe de tener la relacion con el ususario ID para decirle a quien le pertenece
    @Mutation((returns) => Propietario, {
        description: "Mutacion para crear un propietario"
    })
    registerPropietario(@Arg("create", (type) => PropietariosInput) create: PropietariosInput, @Ctx() ctx: ToDoContext) {
        if (ctx.usuario) {
        return this.PropietarioRepository.createPropietario(
            {
            ...create
            },
            ctx.usuario.idUsuario
        );
        }
        throw new Forbidden("Usuario no encontrado");
    }

    @Mutation((returns) => Propietario, {
        description: "Mutacion para eliminar un propietario."
    })
    async deletePropietario(@Arg("id") id: number, @Arg("update", (type) => PropietarioInputBorrar) update: PropietarioInputBorrar, @Ctx() ctx: ToDoContext) {
        if (ctx.usuario) return this.PropietarioRepository.deletePropietario(id,update);

        throw new Forbidden("Usuario no encontrado");
    }

    @Mutation((returns) => Propietario, {
        description: "Mutacion para actualizar un propietario."
    })
    updatePropietario(@Arg("id") id: number, @Arg("update", (type) => UpdatePropietarioInput) update: UpdatePropietarioInput, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) return this.PropietarioRepository.updatePropietario(id,update)
        
        throw new Forbidden("Usuario no encontrado");
    }
}
