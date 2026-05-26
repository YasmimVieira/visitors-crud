import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
  url: process.env.DATABASE_URL,
});
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Visitors API')
    .setDescription('API para gerenciar visitantes - Documentação completa das operações disponíveis')
    .setVersion('1.0.0')
    .addTag('Visitors', 'Operações relacionadas a visitantes')
    .setContact('Support', '', 'support@example.com')
    .setLicense('MIT', '')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      displayOperationId: true,
      defaultModelsExpandDepth: 2,
    },
    customCss: `
      .swagger-ui .topbar { display: none; }
      .swagger-ui { max-width: 1400px; margin: 0 auto; }
      .scheme-container { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    `,
    customJs: [
      'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3/swagger-ui.js',
    ],
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`\n🚀 Servidor rodando em http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 Documentação Swagger disponível em http://localhost:${process.env.PORT ?? 3000}/swagger\n`);
}
bootstrap();
