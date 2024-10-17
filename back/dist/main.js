"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const corsOptions = {
        origin: 'http://localhost:4200',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    };
    app.enableCors(corsOptions);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map