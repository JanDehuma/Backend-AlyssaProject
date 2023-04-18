import { Field, InputType, Int } from "type-graphql";
import { IsEmail, MaxLength } from "class-validator";

@InputType({
    description: "Input para creacion de propietario."
})
export class PropietarioInputCreate {

    @Field((type) => String, {description: "Nombre del propietario", nullable: true})
    @MaxLength(20)
    nombre: string;

    @Field((type) => String, {description: "Apellido paterno del propietario", nullable: true})
    @MaxLength(20)
    apaterno: string;

    @Field((type) => String, {description: "Apellido materno del propietario", nullable: true})
    @MaxLength(20)
    amaterno: string;
    
    @Field((type) => String, {description: "Correo electronico del propietario", nullable: true})
    @MaxLength(30)
    @IsEmail(undefined, {
        message: "Verifica que el formato del correo sea el correcto."
    })
    email: string;

    @Field((type) => String, {description: "Numero de telefono del propietario", nullable: true})
    @MaxLength(13)
    telefono: string;

    @Field((type) => String, {description: "Dirección del propietario", nullable: true})
    @MaxLength(45)
    direccion: string;

    @Field((type) => String, {description: "RFC del propietario", nullable: true})
    @MaxLength(13)
    rfc: string;

    @Field((type) => Int, {description: "Tipo de propietario al que pertenece", nullable: true})
    tipoPropietario: number;
}