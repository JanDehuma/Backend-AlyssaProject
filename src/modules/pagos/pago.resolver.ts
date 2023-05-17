import { ResolverService } from "@tsed/typegraphql";
import { Pago } from "./models/pago.model";
import { PagoRepository } from "./repositories/pago.repository";
import { ID, Query, Arg, Mutation, Ctx } from "type-graphql";
import { PagoInputBorrar } from "./inputs/pagoBorrado.input";
import { ToDoContext } from "../usuarios/models/context.model";
import { Forbidden } from "@tsed/exceptions";
import { PagoInputCreate } from "./inputs/pago.input";


@ResolverService(Pago)
export class PagoResolver {
    constructor(private readonly PagoRepository: PagoRepository){}

    @Query((returns) => Pago)
    pago(@Arg("id", (type) => ID) id: number){
        return this.PagoRepository.getPago(id);
    }

    @Query((returns) => Pago)
    Pagos(){
        return this.PagoRepository.getAllPagos();
    }

    @Mutation((returns) => Pago, {
        description: "Mutación para eliminar un pago."
    })
    async deletePago(@Arg("id") id: number, @Arg("delete", (type) => PagoInputBorrar) borrar: PagoInputBorrar, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) return this.PagoRepository.deletePago(id,borrar)

        throw new Forbidden("Usuario no encontrado");
    }

    @Mutation((returns) => Pago, {
        description: "Mutación para crear un pago."
    })
    registrarPago(@Arg("create", (type) => PagoInputCreate) create: PagoInputCreate, @Ctx() ctx: ToDoContext){
        if (ctx.usuario) {
            return this.PagoRepository.createPago({
                    ...create
                },
                ctx.usuario.idUsuario
            );
        }
        throw new Forbidden("Usuario no encontrado");
    }


}