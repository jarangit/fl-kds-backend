import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // ✅ ใส่ origin ของ frontend
    credentials: true, // ถ้ามี cookie/session
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
