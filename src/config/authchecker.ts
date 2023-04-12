import { ToDoContext } from "src/modules/usuarios/models/context.model";
import { AuthChecker } from "type-graphql";

export const customAuthChecker: AuthChecker<ToDoContext> = ({ root, args, context, info }, roles) => {
  if (context.user) {
    return true;
  }
  return false; // or false if access is denied
};
