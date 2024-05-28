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
		'https://admingarage-i7rs.vercel.app',
		'http://localhost:5173',
		'https://mygarage-webapp.vercel.app/',
	],
	allowedHeaders: ["Telegram-Id", "User-Id", "Content-Type"],
	credentials: true,
	methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE", "PATCH"],
  })
  app.setGlobalPrefix('api')
  app.listen(3000);
}
bootstrap();
