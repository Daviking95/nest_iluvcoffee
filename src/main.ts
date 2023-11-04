import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Means do not make use of any field that is not defined in the DTO but is passed in the request body. This will not stop the application from running tho
    forbidNonWhitelisted: true, // This works with the whitelist property above, but will throw error on the client side,
    transform: true,
  }))
  await app.listen(3000);
}
bootstrap();
