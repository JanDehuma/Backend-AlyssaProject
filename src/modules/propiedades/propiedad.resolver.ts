import { Forbidden } from "@tsed/exceptions";
import { ResolverService } from "@tsed/typegraphql";
import { Arg, Ctx, ID, Mutation, Query } from "type-graphql";
import { PropiedadInput } from "./inputs/propiedad.input";
import { PropiedadRepository } from "./repositories/propiedad.repository";
import { ToDoContext } from "../usuarios/models/context.model";
import { Propiedad } from "./models/propiedad";
import { PropiedadInputBorrado } from "./inputs/propiedad.borrado";
import { PropiedadInputUpdate } from "./inputs/propiedad.update";

@ResolverService(Propiedad)
export class PropiedadesResolver {
  constructor(private readonly PropiedadRepository: PropiedadRepository) {}

  @Query((returns) => Propiedad, {
    description: "Query para obtener una propiedad."
  })
  obtenerPropiedad(@Arg("id", (type) => ID) id: number, @Ctx() ctx: ToDoContext) {
    if(ctx.usuario){
        return this.PropiedadRepository.obtenerPropiedad(id);
    }
    throw new Forbidden("Usuario no encontrado")
  }

  @Query((returns) => [Propiedad], {
    description: "Query para obtener todas las propiedades."
  })
  obtenerPropiedades(@Ctx() ctx: ToDoContext) {
    if(ctx.usuario){
        return this.PropiedadRepository.obtenerTodasPropiedades();
    }
    throw new Forbidden("Usuario no encontrado");
  }

   @Mutation((returns) => Propiedad, {
     description: "Mutacion para crear una propiedad."
   })
   registerPropiedad(@Arg("create", (type) => PropiedadInput) create: PropiedadInput, @Ctx() ctx: ToDoContext) {
     if (ctx.usuario) {
       return this.PropiedadRepository.createPropiedad({
        ...create
       },
       ctx.usuario.idUsuario);
     }
     throw new Forbidden("Usuario no encontrado");
   }

  @Mutation((returns) => Propiedad, {
    description: "Mutacion para eliminar una propiedad"
  })
  deletePropiedad(@Arg("id") id: number, @Arg("delete", (type) => PropiedadInputBorrado)update: PropiedadInputBorrado, @Ctx() ctx: ToDoContext){
    if(ctx.usuario)
      return this.PropiedadRepository.borrarPropiedad(id, update);

    throw new Forbidden("Usuario no encontrado");
  }

   @Mutation((returns) => Propiedad, {
     description: "Mutacion para actualizar una propiedad"
   })
   upadtePropiedad(@Arg("id") id: number, @Arg("update", (type) => PropiedadInputUpdate) update: PropiedadInputUpdate, @Ctx() ctx: ToDoContext){
     if(ctx.usuario)
       return this.PropiedadRepository.actualizarPropiedad(id, update);

     throw new Forbidden("Usuario no encontrado");
   }
}
