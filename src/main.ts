import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  console.log(process.env.DATABASE_URL);
  await app.listen(3005);
}
bootstrap();
