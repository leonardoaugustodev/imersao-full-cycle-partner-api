import { NestFactory } from '@nestjs/core';
import { Partner1Module } from './partner1.module';
import { ValidationPipe } from '@app/core/core.pipe';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(Partner1Module);
  app.useGlobalGuards(new AuthGuard(new ConfigService()));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
