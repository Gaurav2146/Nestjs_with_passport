import { Module } from '@nestjs/common';
import { PassportService } from './passport.service';
import { PassportController } from './passport.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: "Mysecret",
            signOptions: {
                expiresIn: 3600
            }
        })],
    providers: [PassportService],
    controllers: [PassportController],
    exports: []
})
export class PassportImplementationModule { }

//JwtModule exports a service jwtService which we can inject in our controller to sign the jwt token.
