import { BadGatewayException, Controller, UseGuards } from '@nestjs/common';
import { Body, Get, Injectable, Req, Res, Next, Post, ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { RegisterDTO } from 'src/DTO/Register.dto';
import { AuthGuard } from '@nestjs/passport';
import { getUser } from 'src/Decorator/getUser';
import { User } from 'src/Model/User.model';
import { RequestWithUser } from 'src/DTO/Request.dto';

@Controller('passport')
export class PassportController {
    constructor(private jwtService: JwtService) {
    }
    @Post('/register')
    signIn(
        @Req() req: Request,
        @Res() res: Response,
        @Next() next: NextFunction,
        @Body(ValidationPipe) registerUser: RegisterDTO
    ) {
        try {
            let jwt = this.jwtService.sign(registerUser);
            res.status(200).json({ success: true, accessToken: jwt });
        } catch (error) {
            new BadGatewayException();
        }
    }

    @Get('/test')
    @UseGuards(AuthGuard())
    test(@Req() req: RequestWithUser) {
        return req.user;
    }
}
