import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  UnprocessableEntityException,
  Type,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new UnprocessableEntityException(
        errors
          .map((error) => {
            return Object.values(error.constraints);
          })
          .flat(1),
      );
    }
    return value;
  }

  private toValidate(metatype: Type<any>): boolean {
    const types: Array<any> = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
