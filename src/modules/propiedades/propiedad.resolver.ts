import { Forbidden } from "@tsed/exceptions";
import { ResolverService } from "@tsed/typegraphql";
import { Arg, Ctx, ID, Mutation, Query } from "type-graphql";
import { PropiedadInput } from "./inputs/propiedad.input";
import { PropiedadBorradoInput } from "./inputs/propiedad.input.borrado";
import { PropiedadInputUpdate } from "./inputs/propiedad.update";
import { Propiedades } from "./models/propiedad";
import { PropiedadRepository } from "./repositories/propiedad.repository";
import { ToDoContext } from "../usuarios/models/context.model";

@ResolverService(Propiedades)
export class PropiedadesResolver {
  constructor(private readonly PropiedadRepository: PropiedadRepository) {}

  @Query((returns) => Propiedades, {
    description: "Query para obtener una propiedad."
  })
  obtenerPropiedad(@Arg("id", (type) => ID) id: number) {
    return this.PropiedadRepository.getPropiedades(id);
  }

  @Query((returns) => [Propiedades], {
    description: "Query para obtener todas las propiedades."
  })
  obtenerPropiedades() {
    return this.PropiedadRepository.getAllPropiedades();
  }

  @Mutation((returns) => Propiedades, {
    description: "Mutacion para crear una propiedad."
  })
  registerPropiedad(@Arg("create", (type) => PropiedadInput) create: PropiedadInput, @Ctx() ctx: ToDoContext) {
    if (ctx.usuario) {
      return this.PropiedadRepository.createPropiedades(
        {
          ...create,
          propietario: {
            create: undefined,
            connectOrCreate: undefined,
            connect: undefined
          }
        },
        ctx.usuario.idUsuario
      );
    }
    throw new Forbidden("Usuario no encontrado");
  }

  @Mutation((returns) => Propiedades, {
    description: "Mutacion para eliminar una propiedad"
  })
  deletePropiedad(@Arg("id") id: number, @Arg("delete", (type) => PropiedadBorradoInput)update: PropiedadBorradoInput, @Ctx() ctx: ToDoContext){
    if(ctx.usuario)
      return this.PropiedadRepository.deletePropiedades(id, update);

    throw new Forbidden("Usuario no encontrado");
  }

  @Mutation((returns) => Propiedades, {
    description: "Mutacion para actualizar una propiedad"
  })
  upadtePropiedad(@Arg("id") id: number, @Arg("update", (type) => PropiedadInputUpdate) update: PropiedadInputUpdate, @Ctx() ctx: ToDoContext){
    if(ctx.usuario)
      return this.PropiedadRepository.updatePropiedad(id, update);

    throw new Forbidden("Usuario no encontrado");
  }
}
