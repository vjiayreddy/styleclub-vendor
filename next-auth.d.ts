import { User } from './src/shared/interfaces';
import "next-auth";
declare module "next-auth" {
  interface Session {
    user: User;
  }
}
