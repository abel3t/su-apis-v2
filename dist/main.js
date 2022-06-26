"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const swagger_1 = require("@nestjs/swagger");
const compression_1 = __importDefault(require("compression"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const error_filter_1 = require("./filters/error.filter");
const app_module_1 = require("./app.module");
const config_1 = __importDefault(require("./config"));
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
        yield app.register(fastify_cors_1.default, {
            origin: '*',
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Accept',
                'Content-Type',
                'Authorization'
            ],
            methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE']
        });
        app.use((0, compression_1.default)());
        const reflector = app.get(core_1.Reflector);
        app.useGlobalFilters(new error_filter_1.ErrorExceptionFilter());
        app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            transform: true,
            dismissDefaultMessages: true,
            exceptionFactory: (errors) => new common_1.UnprocessableEntityException(errors)
        }));
        const swaggerConfig = new swagger_1.DocumentBuilder()
            .setTitle('spchinhhang APIs')
            .setDescription('spchinhhang APIs')
            .setVersion('0.0.1')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
        swagger_1.SwaggerModule.setup('swagger', app, document);
        yield app.listen(config_1.default.PORT, '0.0.0.0', (err, address) => {
            if (!err) {
                common_1.Logger.log(`\n\n\nServer started at ${address}\n\n`);
                return;
            }
            common_1.Logger.log(err);
        });
        console.info(`server running on port ${config_1.default.PORT}`);
        return app;
    });
}
exports.bootstrap = bootstrap;
void bootstrap();
//# sourceMappingURL=main.js.map