import { Propietarios as PropietarioClass } from "@prisma/client"
import { Authorized, Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType(
    {description: "Credenciales del propietario"
})
export class Propietario implements PropietarioClass {
    @Authorized()
    @Field((type) => ID, {description: "Id del propietario"})
    idPropietario: number;

    @Authorized()
    @Field((type) => String, {description: "Nombre del propietario"})
    nombre: string;

    @Authorized()
    @Field((type) => String, {description: "Apellido paterno del propietario"})
    apaterno: string;

    @Authorized()
    @Field((type) => String, {nullable: true, description: "Apellido materno del propietario"})
    amaterno: string | null;

    @Authorized()
    @Field((type) => String, {description: "Correo electronico del propietario"})
    email: string;

    @Authorized()
    @Field((type) => String, {description: "Numero de telefono del propietario"})
    telefono: string;

    @Authorized()
    @Field((type) => String, {description: "Dirección del propietario"})
    direccion: string;

    @Authorized()
    @Field((type) => String, {description: "RFC del propietario"})
    rfc: string;

    @Authorized()
    @Field((type) => Int, {description: "Tipo de propietario al que pertenece"})
    tipoPropietario: number;

    @Authorized()
    @Field((type) => ID, {description: "Identificador del usuario al que pertenece."})
    idUsuario: number;
    
    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}