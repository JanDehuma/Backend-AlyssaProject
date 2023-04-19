import { Arrendatarios as UserClass } from "@prisma/client";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType({
    description: "Credencial del arrendatario"
})
export class Arrendatario implements UserClass {

    @Field((type) => ID, {description: "Id del arrendatario"})
    idArrendatario: number;

    @Field((type) => String, {description: "Nombre del arrendatario"})
    nombre: string;

    @Field((type) => String, {description: "Correo electronico del arrendatario"})
    email: string;

    @Field((type) => String, {description: "Numero de telefono del arrendatario"})
    telefono: string;

    @Field((type) => String, {description: "RFC del arrendatario"})
    rfc: string;

    @Field((type) => String, {description: "Dirección del arrendatario"})
    direccion: string;

    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}