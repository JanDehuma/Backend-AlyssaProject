import { Forbidden } from '@tsed/exceptions';
import { Arg, Ctx, ID, Mutation, Query } from 'type-graphql';
import { PropietarioRepository } from './repositories/propietario.repository';
import { Propietario } from './models/propiedad.model';
import { ResolverService } from '@tsed/typegraphql';
import { ToDoContext } from '../usuarios/models/context.model';
import { DeletePropietarioInput } from './inputs/propietarios.delete.input';
import { PropietariosInput } from './inputs/propietarios.input';


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
    registerPropietario(@Arg("create", (type) => PropietariosInput) create: PropietariosInput, @Ctx() ctx: ToDoContext){
        if(ctx.usuario){
            return this.PropietarioRepository.createPropietario({
                ...create
            }, ctx.usuario.idUsuario);
        }
        throw new Forbidden("Usuario no encontrado")
    }
    
    @Mutation((returns) => Propietario, {
        description: "Mutacion para eliminar un propietario."
    })
    deleteUsuario(@Arg("id") id: number,@Arg("update", (type) => DeletePropietarioInput)input: DeletePropietarioInput) {
        return this.PropietarioRepository.deletePropietario(id,input);
    }

    
}