import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // 데코레이터에 해당되지 않는 request를 막음

      transform: true,
      //url에서 query, param으로 데이터를 받을때 타입변환을 알아서 해줌(숫자등을 받을때 string => number)
    }),
  );
  await app.listen(3000);
}
bootstrap();
