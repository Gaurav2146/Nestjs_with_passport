import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/Model/User.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'Mysecret'
        });
    }

    //Passport.js will first validate the JWT using secret and if it is a valid jwt then payload 
    //will be extracted from JWT and validate() method will be called by Passport and payload  
    //will be passed as an argument. whatever returned by this method will set the user property
    //in request object.
    async validate(payload: any): Promise<User> {
        let { userName, password, email } = payload;
        return new User(userName, email, password);
    }
}
