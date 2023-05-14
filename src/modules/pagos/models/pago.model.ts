import { Pagos as UserClass } from "@prisma/client";
import { Field, Float, ID, Int, ObjectType } from "type-graphql";

@ObjectType({
    description: "credencial del pago."
})
export class Pago implements UserClass{

    @Field((type) => ID, {description: "Id del pago."})
    idPago: number;

    @Field((type) => Date, {description: "Fecha del vencimiento."})
    fechaVencimiento: Date;

    @Field((type) => Date, {description: "Fecha del pago."})
    fechaPago: Date;

    @Field((type) => Float, {description: "cantidad del pago."})
    pago: number;

    @Field((type) => Int, {description: "Numero del pago."})
    numPago: number;

    @Field((type) => Int, {description: "Mes que se va a pagar."})
    mes: number;

    @Field((type) => Int, {description: "año que se va a pagar."})
    anio: number;

    @Field((type) => Int, {description: "Id del contrato que se va a pagar."})
    idContrato: number;

    fechaCracion: Date;
    fechaModificacion: Date;
    borrado: number;

}