import { Field, Float, ID, InputType, Int } from "type-graphql";

@InputType({
  description: "Imput para crear un pago"
})
export class PagoInputCreate {
  @Field((type) => Date, { description: "Fecha del vencimiento." })
  fechaVencimiento: Date;

  @Field((type) => Date, { description: "Fecha del pago." })
  fechaPago: Date;

  @Field((type) => Float, { description: "cantidad del pago." })
  pago: number;

  @Field((type) => Int, { description: "Numero del pago." })
  numPago: number;

  @Field((type) => Int, { description: "Mes que se va a pagar." })
  mes: number;

  @Field((type) => Int, { description: "año que se va a pagar." })
  anio: number;
}
