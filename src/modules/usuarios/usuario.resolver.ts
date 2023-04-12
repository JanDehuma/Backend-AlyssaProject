import { Arg, ID, Query } from 'type-graphql';
import { UserRepository } from './repositories/usuario.repository';
import { Usuario } from './models/usuario.model';
import { ResolverService } from '@tsed/typegraphql';

@ResolverService(Usuario)
export class UsuarioResolver {
    constructor(private readonly UserRepository: UserRepository){}

    @Query((returns) => Usuario)
    usuario(@Arg("id", (type) => ID) id: number){
        return this.UserRepository.getUsuario(id);
    }
}