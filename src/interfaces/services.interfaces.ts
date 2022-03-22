import { User, EditUserProfilePayload } from './../schema/user.schema';
import { SignUserPayload } from './jwt.interfaces';

export interface IAuthService {
  userExistence: (type: string, email: string) => Promise<void>;
  verify: (email: string) => Promise<User>;
  verifyCode: (email: string, code: string) => Promise<User>;
}

export interface IUserService {
  storeUser: (body: EditUserProfilePayload, userId: number) => Promise<void>;
}

export interface IJwtService {
  signUserToken(payload: SignUserPayload): string;
}

export interface IEmailService {
  sendVerifyCode(email: string, code: string): Promise<any>;
}
