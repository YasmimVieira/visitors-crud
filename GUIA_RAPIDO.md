# 🚀 Guia Rápido - API de Visitantes

## ⚡ Início Rápido

```bash
# 1. Instalar dependências (com Swagger)
npm install --legacy-peer-deps

# 2. Iniciar em modo desenvolvimento
npm run start:dev

# 3. Acessar Swagger
http://localhost:3000/swagger
```

---

## 🔥 Endpoints em Um Relance

| Método | Rota | Descrição |
|--------|------|-----------|
| **POST** | `/visitors` | ➕ Criar visitante |
| **GET** | `/visitors` | 📋 Listar todos |
| **GET** | `/visitors/:id` | 🔍 Buscar por ID |
| **DELETE** | `/visitors/:id` | 🗑️ Deletar visitante |

---

## 📌 Exemplo JSON

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "(11) 98765-4321"
}
```

---

## 📊 Visualização da Estrutura

```
API Visitors
├── POST   /visitors          → Criar novo visitante
│   ├── Input:  { name, email, phone }
│   └── Output: { id, name, email, visitDate }
│
├── GET    /visitors          → Listar todos os visitantes
│   └── Output: [{ id, name, email, visitDate }, ...]
│
├── GET    /visitors/:id      → Obter visitante específico
│   ├── Param: id (number)
│   └── Output: { id, name, email, visitDate }
│
└── DELETE /visitors/:id      → Remover visitante
    ├── Param: id (number)
    └── Output: { message: "Sucesso" }
```

---

## 🎯 Fluxo Típico de Uso

```
1. POST /visitors
   └─ Cria visitante
      └─ Retorna dados com ID

2. GET /visitors
   └─ Lista todos
      └─ Verifica visitantes criados

3. GET /visitors/1
   └─ Busca visitante específico
      └─ Visualiza detalhes

4. DELETE /visitors/1
   └─ Remove visitante
      └─ Confirma exclusão
```

---

## 📝 Validações Importantes

| Campo | Validação |
|-------|-----------|
| name | ✓ Obrigatório, min 3 chars |
| email | ✓ Formato email válido |
| phone | ✓ Obrigatório |
| visitDate | ✓ Auto-gerado |

---

## 🎨 Swagger UI

**Acessível em:** `http://localhost:3000/swagger`

**Funcionalidades:**
- 📖 Documentação interativa
- 🧪 Testar endpoints
- 💡 Exemplos de requisição/resposta
- 🔍 Validar schemas

---

## 🛠️ Stack Técnico

- **Framework:** NestJS 11
- **Banco:** PostgreSQL
- **ORM:** TypeORM
- **Validação:** Class-Validator
- **Documentação:** Swagger
- **Linguagem:** TypeScript

---

## ⚠️ Troubleshooting

### Erro: "DB_SYNC is required"
✅ Adicione `DB_SYNC=1` no `.env`

### Erro: "Swagger não aparece"
✅ Certifique que instalou: `npm install --legacy-peer-deps @nestjs/swagger swagger-ui-express`

### Erro: Permissão de arquivo
✅ Execute: `sudo chown -R $(whoami) node_modules`

---

**Documentação completa:** Ver [DOCUMENTACAO_API.md](DOCUMENTACAO_API.md)
