import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
	  logger: ["debug", "error", "log", "fatal", "warn", "verbose"]
  });
  app.enableCors({
	origin: [
		`https://${process.env.DOMAIN}`,
		`https://${process.env.FRONTEND_DOMAIN}`,


	],
	allowedHeaders: ["Telegram-Id", "User-Id"],
	credentials: true,
	methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE", "PATCH"],
  })
  app.setGlobalPrefix('api')
  app.listen(3000);
}
bootstrap();
