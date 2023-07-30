import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { NotFoundCustomException } from '../exceptions/not-found.exception';

@Catch(NotFoundCustomException)
export class NotFoundCustomExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundCustomException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request<Request>>();

    const status = HttpStatus.NOT_FOUND;
    const message = exception.message || 'Not Found';

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
