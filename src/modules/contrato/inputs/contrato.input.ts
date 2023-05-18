import { Field, Float, InputType, Int } from "type-graphql";

@InputType({ description: "Input para crear un contrato" })
export class ContratoInput {

  @Field((type) => String, { description: "Input para el nombre del contrato." })
  contrato: string;

  @Field((type) => Int, { description: "Input para el tipo de contrato." })
  tipoContrato: number;

  @Field((type) => Date, { description: "Input para la fecha de inicio del contrato." })
  fechaInicio: Date;

  @Field((type) => Date, { description: "Input para la fecha de fin del contrato." })
  fechaFin: Date;

  @Field((type) => Float, { description: "Input para el deposito del contrato." })
  deposito: number | null;

  @Field((type) => Int, { description: "Input para la duracion del contrato." })
  duracion: number;
}
