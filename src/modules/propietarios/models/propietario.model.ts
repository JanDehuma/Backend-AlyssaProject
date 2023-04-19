
import { Propietarios as UserClass } from "@prisma/client"
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType(
    {description: "Credenciales del propietario"
})
export class Propietario implements UserClass {
    @Field((type) => ID, {description: "Id del propietario"})
    idPropietario: number;

    @Field((type) => String, {description: "Nombre del propietario"})
    nombre: string;

    @Field((type) => String, {description: "Apellido paterno del propietario"})
    apaterno: string;

    @Field((type) => String, {description: "Apellido materno del propietario"})
    amaterno: string;
    
    @Field((type) => String, {description: "Correo electronico del propietario"})
    email: string;

    @Field((type) => String, {description: "Numero de telefono del propietario"})
    telefono: string;

    @Field((type) => String, {description: "Dirección del propietario"})
    direccion: string;

    @Field((type) => String, {description: "RFC del propietario"})
    rfc: string;

    @Field((type) => Int, {description: "Tipo de propietario al que pertenece"})
    tipoPropietario: number;

    @Field((type) => Int, {description: "Id usuario al que pertenece"})
    idUsuario: number;
    
    fechaCreacion: Date;
    fechaModificacion: Date;
    borrado: number;
}