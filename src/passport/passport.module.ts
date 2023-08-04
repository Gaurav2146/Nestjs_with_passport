import { Module } from '@nestjs/common';
import { PassportService } from './passport.service';
import { PassportController } from './passport.controller';


@Module({
    providers: [PassportService],
    controllers: [PassportController]
})
export class PassportModule { }
