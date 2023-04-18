import { ToDoContext } from './models/propiedad.context';
import { Ctx } from 'type-graphql';
import { Arg, ID, Mutation, Query } from 'type-graphql';
import { PropiedadRepository } from './repositories/propiedad.repository';
import { ResolverService } from '@tsed/typegraphql';
import { Propiedades } from './models/propiedad.model';
import { PropiedadInputUpdate } from './inputs/propiedad.update';
import { PropiedadInput } from './inputs/propiedad.input';
import { PropiedadBorradoInput } from './inputs/propiedad.input.borrado';
import { Forbidden } from '@tsed/exceptions';


@ResolverService(Propiedades)
export class PropiedadesResolver{
    constructor(private readonly PropiedadRepository: PropiedadRepository){}

    @Query((returns) => Propiedades, {
        description: "Query para obtener una propiedad."
    })
    obtenerPropiedad(@Arg("id", (type) => ID) id:number){
        return this.PropiedadRepository.getPropiedades(id);
    }

    @Query((returns) => [Propiedades], {
        description: "Query para obtener todas las propiedades." })
    obtenerPropiedades(){
        return this.PropiedadRepository.getAllPropiedades();
    }

    @Mutation((returns) => Propiedades, {
        description: "Mutacion para crear una propiedad."
    })
    createPropiedad(@Arg("create", (type) => PropiedadInput) create: PropiedadInput){
        return this.PropiedadRepository.createPropiedades({
            ...create
        })
    }

    @Mutation((returns) => Propiedades, {
        description: "Mutacion para eliminar una propiedad"
    })
    deletePropiedad(@Arg("delete", (type) => PropiedadBorradoInput) update:PropiedadBorradoInput, @Ctx() context: ToDoContext){
        if(context.propiedad){
            return this.PropiedadRepository.deletePropiedades(context.propiedad?.idPropiedad, update);
        }
        throw new Forbidden("Propiedad no encontrada")
    }

    updatePropiedad(@Arg("update", (type) => PropiedadInputUpdate) update: PropiedadInputUpdate){

    }
}