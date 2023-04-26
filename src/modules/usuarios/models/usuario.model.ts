
import { Propietarios, Usuarios as UserClass } from "@prisma/client"
import { Propiedades } from "src/modules/propiedades/models/propiedad.model";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType(
    {description: "Credenciales del ususario"
})
export class Usuario implements UserClass {
    @Field((type) => ID, {description: "Id del ususario"})
    idUsuario: number;

    @Field((type) => String, {description: "Nombre del usuario"})
    nombre: string;
    
    @Field((type) => String, {description: "Correo electronico del usuario"})
    correo: string;

    @Field((type) => Int, {description: "Tipo de usuario al que pertenece"})
    tipoUsuario: number;

    @Field((type) => String, {description: "Numero de telefono del usuario"})
    telefono: string;

    @Field((type) => String, {description: "Contraseña del usuario."})
    password: string;

    @Field((type) => Int, {description: "Verifica si esta borrado."})
    borrado: number;

    @Field((type) => [Propiedades], {description: "Lista de propiedades"})
    propietarios: Propietarios[];

    //No llevan un campo Field para no mostrarlo en la API
    fechaCreacion: Date;
    fechaModificacion: Date;

}