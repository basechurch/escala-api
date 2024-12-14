# Documentação da API de Escalas

## Introdução

Bem-vindo à documentação da API de Escalas. Essa API foi desenvolvida para gerenciar atividades, escalas, voluntários, organizações e indisponibilidades de forma eficiente.

**Base URL**: `http://localhost:3000/api`

## Endpoints

### 1. Atividades
**Arquivo**: `atividades.js`

#### **GET /atividades**
Lista todas as atividades cadastradas.

**Parâmetros de Filtro (opcionais):**
- `organizacao_id`: ID da organização.
- `ministerio_id`: ID do ministério associado.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/atividades?organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Atividades listadas com sucesso",
    "data": [...]
}
```

#### **POST /atividades**
Cria uma nova atividade.

**Corpo da Requisição**:
```json
{
    "nome": "Atividade 1",
    "foto": "url_da_foto",
    "cor_indicador": "#FF5733",
    "categoria_atividade_id": 1,
    "organizacao_id": 1,
    "ministerio_id": 2
}
```

**Exemplo de Resposta**:
```json
{
    "code": 201,
    "message": "Atividade criada com sucesso",
    "data": {...}
}
```

---

### 2. Categoria de Atividades
**Arquivo**: `categoriaAtividade.js`

#### **GET /categoria-atividades**
Lista todas as categorias de atividades associadas a uma organização.

**Parâmetros de Filtro:**
- `organizacao_id`: ID da organização (obrigatório).

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/categoria-atividades?organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Categorias de atividades listadas com sucesso",
    "data": [...]
}
```

---

### 3. Escalas
**Arquivo**: `escalas.js`

#### **GET /escalas**
Lista todas as escalas cadastradas.

**Parâmetros de Filtro (opcionais):**
- `organizacao_id`: ID da organização (obrigatório).
- `slug`: Slug da escala.
- `ministerio_id`: ID do ministério associado.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/escalas?organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Escalas listadas com sucesso",
    "data": [...]
}
```

#### **POST /escalas**
Cria uma nova escala.

**Corpo da Requisição**:
```json
{
    "nome": "Escala de Natal",
    "slug": "natal",
    "data": "2024-12-25",
    "organizacao_id": 1,
    "criado_usuario_id": 2
}
```

**Exemplo de Resposta**:
```json
{
    "code": 201,
    "message": "Escala criada com sucesso",
    "data": {...}
}
```

---

### 4. Indisponibilidades
**Arquivo**: `indisponibilidades.js`

#### **GET /indisponibilidades**
Lista todas as indisponibilidades cadastradas.

**Parâmetros de Filtro (opcionais):**
- `organizacao_id`: ID da organização (obrigatório).
- `id_voluntario`: ID do voluntário.
- `created_at`: Data de criação.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/indisponibilidades?organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Indisponibilidades listadas com sucesso",
    "data": [...]
}
```

---

### 5. Ministérios
**Arquivo**: `ministerios.js`

#### **GET /ministerios**
Lista todos os ministérios cadastrados.

**Parâmetros de Filtro (opcionais):**
- `organizacao_id`: ID da organização.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/ministerios?organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Ministérios listados com sucesso",
    "data": [...]
}
```

---

### 6. Organizações
**Arquivo**: `organizacaoes.js`

#### **GET /organizacaoes**
Lista todas as organizações cadastradas.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/organizacaoes"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Organizações listadas com sucesso",
    "data": [...]
}
```

---

### 7. Voluntários
**Arquivo**: `voluntarios.js`

#### **GET /voluntarios**
Lista todos os voluntários cadastrados.

**Parâmetros de Filtro (opcionais):**
- `organizacao_id`: ID da organização.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/voluntarios?organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Voluntários listados com sucesso",
    "data": [...]
}
```

---

### 8. Sugestões de Voluntários
**Arquivo**: `voluntariosSugestoes.js`

#### **GET /voluntarios/sugestoes**
Lista sugestões de voluntários com base na data e atividade.

**Parâmetros de Filtro (obrigatórios):**
- `data`: Data no formato `YYYY-MM-DD`.
- `atividade_id`: ID da atividade (opcional).
- `organizacao_id`: ID da organização.

**Exemplo de Requisição**:
```bash
curl -X GET "http://localhost:3000/api/voluntarios/sugestoes?data=2024-12-25&atividade_id=1&organizacao_id=1"
```

**Exemplo de Resposta**:
```json
{
    "code": 200,
    "message": "Sugestões de voluntários recuperadas com sucesso",
    "data": {
        "sugestoes": [...],
        "todos": [...]
    }
}
