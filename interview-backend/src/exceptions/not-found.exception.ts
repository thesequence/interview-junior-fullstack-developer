import { NotFoundException } from '@nestjs/common';

export class NotFoundCustomException extends NotFoundException {
  constructor(message: string) {
    super(message);
  }
}
