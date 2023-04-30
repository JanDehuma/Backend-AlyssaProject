import { Forbidden } from "@tsed/exceptions";
import { ResolverService } from "@tsed/typegraphql";
import { Arg, Ctx, FieldResolver, ID, Mutation, Query, Root } from "type-graphql";
import { Propietario } from "../propietarios/models/propietario";
import { UsuarioInputBorrado } from "./inputs/usuario.borrado.input";
import { UsuarioInputCreate } from "./inputs/usuario.input";
import { UpdateUsuarioInput } from "./inputs/usuario.update.input";
import { ToDoContext } from "./models/context.model";
import { Usuario } from "./models/usuario.model";
import { UserRepository } from "./repositories/usuario.repository";

@ResolverService(Usuario)
export class UsuarioResolver {
  constructor(private readonly UserRepository: UserRepository) {}
  /* ***************************************************
    QUERY DEL USUARIO
***************************************************** */
  @Query((returns) => Usuario)
  currentUsuario(@Ctx() context: ToDoContext) {
    if (context.usuario) {
      return this.UserRepository.getUsuario(context.usuario?.idUsuario);
    }
  }

  @Query((returns) => [Usuario])
  obtenerUsuarios() {
    return this.UserRepository.getAllUsuarios();
  }

  /* ***************************************************
    MUTACION DEL USUARIO
***************************************************** */
  @Mutation((retruns) => Usuario, {
    description: "Mutacion para crear un ususario"
  })
  registerUsuario(@Arg("create", (type) => UsuarioInputCreate) create: UsuarioInputCreate, @Ctx() ctx: ToDoContext) {
    if (ctx.usuario)
      return this.UserRepository.createUsuario({
        ...create
      });

    throw new Forbidden("Usuario no encontrado");
  }

  @Mutation((returns) => Usuario, {
    description: "Mutacion para eliminar un usuario"
  })
  deleteUsuario(@Arg("id") id: number, @Arg("update", (type) => UsuarioInputBorrado) input: UsuarioInputBorrado, @Ctx() ctx: ToDoContext) {
    if (ctx.usuario) return this.UserRepository.deleteUsuario(id, input);

    throw new Forbidden("Usuario no encontrado");
  }

  @Mutation((returns) => Usuario, { description: "Mutación para actualizar un usuario" })
  updateUser(
    @Arg("id", (type) => ID) id: number,
    @Arg("update", (type) => UpdateUsuarioInput) update: UpdateUsuarioInput,
    @Ctx() ctx: ToDoContext
  ) {
    if (ctx.usuario) return this.UserRepository.updateUsuario(id, update);

    throw new Forbidden("Usuario no encontrado");
  }

  @FieldResolver((returns) => [Propietario], {
    description: "FielResolver para mostrar los propietarios que tiene un usuario"
  })
  propietarios(@Root() parent: Usuario) {
    return this.UserRepository.getUsuarioPropietario(parent.idUsuario);
  }
}
