import { Module } from '@nestjs/common';
import { PassportModule } from './passport/passport.module';

@Module({
  imports: [PassportModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
