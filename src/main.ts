import 'reflect-metadata';

import {
  ClassSerializerInterceptor,
  HttpStatus,
  Logger,
  UnprocessableEntityException,
  ValidationPipe
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import fastifyCors from 'fastify-cors';
import { ErrorExceptionFilter } from 'filters/error.filter';

import { AppModule } from './app.module';
import config from './config';

export async function bootstrap(): Promise<NestFastifyApplication> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  await app.register(fastifyCors, {
    origin: ['http://localhost:3000', 'https://traihe-su2022.vercel.app', 'traihe-su2022.vercel.app'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization'
    ],
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE']
  });

  app.use(compression());

  const reflector = app.get(Reflector);

  app.useGlobalFilters(new ErrorExceptionFilter());

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => new UnprocessableEntityException(errors)
    })
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('spchinhhang APIs')
    .setDescription('spchinhhang APIs')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(config.PORT, '0.0.0.0', (err: Error, address: string) => {
    if (!err) {
      Logger.log(`\n\n\nServer started at ${address}\n\n`);

      return;
    }

    Logger.log(err);
  });

  console.info(`server running on port ${config.PORT}`);

  return app;
}

void bootstrap();
