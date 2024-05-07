import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';

@Injectable()
export class UserIdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        req['userId'] = req.headers.userId;
        next();
    }
}
