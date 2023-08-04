import { createParamDecorator } from '@nestjs/common';
import { User } from 'src/Model/User.model';

export const getUser = createParamDecorator((data, req): User => {
    return req.user;
})