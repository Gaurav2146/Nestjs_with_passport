import { Request } from 'express';
import { User } from 'src/Model/User.model';
export interface RequestWithUser extends Request {
    user: User;
}