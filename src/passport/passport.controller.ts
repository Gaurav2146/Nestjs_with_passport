import { BadGatewayException, Controller } from '@nestjs/common';
import { Body, Get, Injectable, Req, Res, Next, Post, ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { RegisterDTO } from 'src/DTO/Register.dto';

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
}
