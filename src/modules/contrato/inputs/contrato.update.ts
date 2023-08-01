import { Field, Float, InputType, Int } from "type-graphql";

@InputType({ description: "Actualizar un contrato" })
export class ContratoUpdate {

  @Field((type) => String, { description: "Actualizar el nombre del contrato." })
  contrato: string;

  @Field((type) => Int, { description: "Actualizar el tipo de contrato." })
  tipoContrato: number;

  @Field((type) => Date, { description: "Actualizar la fecha de inicio del contrato." })
  fechaInicio: Date;

  @Field((type) => Date, { description: "Actualizar la fecha de fin del contrato." })
  fechaFin: Date;

  @Field((type) => Float, { description: "Actualizar el deposito del contrato." })
  deposito: number | null;

  @Field((type) => Int, { description: "Actualizar la duracion del contrato." })
  duracion: number;
}



