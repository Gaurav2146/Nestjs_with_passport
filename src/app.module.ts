import { Module } from '@nestjs/common';
import { PassportImplementationModule } from './passport/passport.module';

@Module({
  imports: [PassportImplementationModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
