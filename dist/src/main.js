"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["debug", "error", "log", "fatal", "warn", "verbose"]
    });
    app.enableCors({
        origin: [
            `https://${process.env.DOMAIN}`,
            `https://${process.env.FRONTEND_DOMAIN}`,
            'https://admingarage-i7rs.vercel.app',
        ],
        allowedHeaders: ["Telegram-Id", "User-Id", "Content-Type"],
        credentials: true,
        methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE", "PATCH"],
    });
    app.setGlobalPrefix('api');
    app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map