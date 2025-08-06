# Lista de Tarefas - Minha Lista de Tarefas Interativa

Uma aplicação web moderna e completa para gerenciamento de tarefas, desenvolvida com Next.js 15, TypeScript e seguindo as melhores práticas de desenvolvimento frontend.

## 🚀 Demonstração

<a href="https://to-do-list-lime-one-52.vercel.app/" target="_blank">Link da aplicação hospedada</a>

## 📋 Sobre o Projeto

### ✅ Funcionalidades Obrigatórias Implementadas

- **✅ Exibição de Tarefas**: Lista pré-definida com nome, status e data de criação formatada
- **✅ Adicionar Tarefas**: Formulário com validação que impede criação de tarefas vazias
- **✅ Alternar Status**: Toggle visual entre "pendente" e "concluída" com animações
- **✅ Remover Tarefas**: Exclusão individual de tarefas com confirmação visual
- **✅ Filtros**: Visualização por "Todos", "Pendentes" e "Concluídas"
- **✅ Persistência**: Dados salvos automaticamente no localStorage

### 🌟 Diferenciais Implementados

#### 🔧 Tecnologias e Qualidade

- **✅ PWA (Progressive Web App)** - Funciona offline e pode ser instalada como app nativo
- **✅ Testes Completos** - Cobertura de testes unitários e de integração com Jest + Testing Library
- **✅ Publicação** - Aplicação publicada na Vercel

#### 🎨 UX/UI e Acessibilidade

- **✅ Design Responsivo** - Mobile First com breakpoints otimizados
- **✅ Animações Suaves** - Transições e micro-interações usando Motion (Framer Motion)
- **✅ Acessibilidade Completa** - ARIA labels, navegação por teclado, semântica HTML
- **✅ Estado Vazio Inteligente** - Diferentes mensagens baseadas no contexto

#### 🔍 Funcionalidades Extras

- **✅ Busca em Tempo Real** - Pesquisa por texto nas tarefas
- **✅ Ordenação Inteligente** - Por data de criação e status
- **✅ Validações Robustas** - Prevenção de tarefas duplicadas e vazias
- **✅ Feedback Visual** - Estados de loading, sucesso e erro

#### ⚡ Performance e Arquitetura

- **✅ Code Splitting** - Carregamento otimizado de componentes
- **✅ Memoização** - useCallback e useMemo para otimização
- **✅ Custom Hooks** - Lógica reutilizável encapsulada
- **✅ Componentização Avançada** - Arquitetura escalável por features

## 🛠️ Tecnologias Utilizadas

### Core Stack

- **Next.js 15** - Framework React com App Router e otimizações modernas
- **TypeScript 5** - Tipagem estática com configuração strict
- **React 19** - Biblioteca para interfaces de usuário

### Estilização e Design

- **SCSS Modules** - Pré-processador CSS com escopo local
- **CSS Grid & Flexbox** - Layout responsivo moderno
- **Google Fonts** - Roboto e League Spartan para tipografia consistente
- **Design Tokens** - Variáveis CSS para cores e espaçamentos

### Animações e Interações

- **Motion (Framer Motion)** - Animações fluidas e transições
- **CSS Transitions** - Micro-interações nativas
- **React Icons** - Ícones consistentes e otimizados

### Qualidade e Testes

- **Jest** - Framework de testes unitários
- **React Testing Library** - Testes de componentes focados no usuário
- **ESLint** - Linter com regras do Next.js e TypeScript
- **TypeScript Declarations** - Tipagens customizadas para módulos CSS e PWA

### PWA e Performance

- **next-pwa** - Configuração PWA otimizada para Next.js
- **Service Workers** - Cache inteligente e funcionamento offline
- **Web App Manifest** - Instalação como app nativo

### Utilitários

- **UUID** - Geração de IDs únicos para tarefas
- **Custom ID Generator** - Alternativa determinística para testes

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação e Execução

1. **Clone o repositório**

```bash
git clone https://github.com/muriloviscondi/todo-list.git
cd todo_list
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute em modo desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Executa em modo desenvolvimento

# Build e Produção
npm run build            # Gera build de produção
npm run build:safe       # Build com testes e lint
npm run start            # Executa build de produção

# Testes
npm run test             # Executa todos os testes
npm run test:watch       # Executa testes em modo watch
npm run test:coverage    # Executa testes com cobertura
npm run test:ci          # Executa testes para CI/CD

# Qualidade
npm run lint             # Executa ESLint
```

## 🧪 Testes

A aplicação possui cobertura completa de testes incluindo:

### Cenários de Teste Implementados

- **✅ Renderização Inicial** - Verificação de todos os elementos na tela
- **✅ Criação de Tarefas** - Adição com validação e limpeza do formulário
- **✅ Filtragem por Status** - Todos, Pendentes e Concluídas
- **✅ Alteração de Status** - Toggle entre pendente/concluída
- **✅ Exclusão de Tarefas** - Remoção com atualização da lista
- **✅ Busca por Texto** - Pesquisa em tempo real
- **✅ Validação de Entrada** - Prevenção de tarefas vazias
- **✅ Fluxo Completo E2E** - Criar → Alterar → Deletar

### Executar Testes

```bash
# Todos os testes
npm run test

# Modo watch para desenvolvimento
npm run test:watch

# Com relatório de cobertura
npm run test:coverage
```

### Mocks e Setup

- Mocks para `localStorage` e APIs do browser
- Setup para `ResizeObserver` e `IntersectionObserver`
- Configuração otimizada para CI/CD

## 🎨 Arquitetura e Design

### Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── icons/          # Ícones do sistema
│   │   ├── layout/         # Componentes de layout (Container, Flex)
│   │   └── ui/             # Componentes de interface
│   ├── features/           # Features organizadas por domínio
│   │   └── todoList/       # Feature de lista de tarefas
│   ├── hooks/              # Custom hooks
│   ├── styles/             # Estilos globais
│   ├── types/              # Definições de tipos
│   ├── utils/              # Funções utilitárias
│   └── __tests__/          # Testes da aplicação
```

### Princípios de Design

- **Componentização**: Componentes pequenos, focados e reutilizáveis
- **Separation of Concerns**: Separação clara entre lógica e apresentação
- **Design System**: Tokens de design consistentes e escaláveis
- **Mobile First**: Design responsivo priorizando dispositivos móveis

### Padrões Utilizados

- **Custom Hooks**: Lógica reutilizável encapsulada (`useTodoDataLocalStorage`)
- **Compound Components**: Componentes compostos para flexibilidade
- **Render Props**: Padrões avançados para reutilização
- **TypeScript Generics**: Tipagem flexível e reutilizável

## 📱 PWA Features

A aplicação é uma Progressive Web App completa com:

- **✅ Instalável**: Pode ser instalada como app nativo em dispositivos móveis e desktop
- **✅ Offline First**: Funciona sem conexão com internet usando Service Workers
- **✅ Responsiva**: Adapta-se perfeitamente a qualquer tamanho de tela
- **✅ Performance**: Cache inteligente e carregamento otimizado
- **✅ App-like**: Experiência similar a aplicativos nativos

### Configuração PWA

- **Manifest**: Configurado para instalação nativa
- **Service Worker**: Cache de recursos e funcionamento offline
- **Icons**: Conjunto completo de ícones para diferentes dispositivos
- **Meta Tags**: Otimização para dispositivos móveis

## 🔄 Integração com APIs

### Implementação Atual

- **Dados Mockados**: Lista inicial de tarefas para demonstração
- **localStorage**: Persistência local dos dados
- **Simulação Assíncrona**: Estrutura preparada para APIs reais

### Preparação para Backend Real

A aplicação está estruturada para fácil integração com APIs REST:

```typescript
// Exemplo de service para integração futura
const TodoService = {
  async getTodos(): Promise<Todo[]> {
    const response = await fetch('/api/todos');
    if (!response.ok) throw new Error('Failed to fetch todos');
    return response.json();
  },

  async createTodo(todo: CreateTodoRequest): Promise<Todo> {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error('Failed to create todo');
    return response.json();
  },

  async updateTodo(id: string, updates: Partial<Todo>): Promise<Todo> {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update todo');
    return response.json();
  },

  async deleteTodo(id: string): Promise<void> {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete todo');
  },
};
```

## 📊 Analytics (Preparado para Google Analytics)

A aplicação está estruturada para integração com Google Analytics:

```typescript
// Eventos que seriam rastreados:
const trackEvents = {
  todoCreated: () =>
    gtag('event', 'todo_created', {
      event_category: 'engagement',
      event_label: 'new_todo',
    }),

  todoCompleted: () =>
    gtag('event', 'todo_completed', {
      event_category: 'engagement',
      event_label: 'complete_todo',
    }),

  todoDeleted: () =>
    gtag('event', 'todo_deleted', {
      event_category: 'engagement',
      event_label: 'delete_todo',
    }),

  filterUsed: (filter: string) =>
    gtag('event', 'filter_used', {
      event_category: 'interaction',
      event_label: filter,
    }),
};
```

## 🚀 Deploy e Hospedagem

### Vercel (Recomendado)

```bash
# Build local
npm run build

# Deploy para Vercel
npx vercel --prod
```

### Configuração de Deploy

- **Build Otimizado**: Script `build:safe` com testes e lint
- **Variáveis de Ambiente**: Configuração para diferentes ambientes
- **CI/CD**: Scripts otimizados para integração contínua

### Outras Plataformas

- **Netlify**: Deploy automático via Git
- **AWS Amplify**: Integração com serviços AWS
- **GitHub Pages**: Para projetos estáticos

## 🎯 Escolhas Técnicas e Justificativas

### Next.js 15 com App Router

- **Server Components**: Melhor performance e SEO
- **Streaming**: Carregamento progressivo
- **Built-in Optimizations**: Imagens, fontes e bundling otimizados

### TypeScript Strict

- **Type Safety**: Prevenção de erros em tempo de compilação
- **Developer Experience**: IntelliSense e refatoração segura
- **Maintainability**: Código mais robusto e documentado

### SCSS Modules

- **Scoped Styles**: Evita conflitos de CSS
- **Variables**: Tokens de design centralizados
- **Nested Rules**: Melhor organização do código

### Motion (Framer Motion)

- **Performance**: Animações otimizadas para 60fps
- **Declarative**: API simples e poderosa
- **Accessibility**: Respeita preferências de movimento do usuário

### Jest + Testing Library

- **User-Centric**: Testes focados na experiência do usuário
- **Confidence**: Alta cobertura para refatorações seguras
- **CI/CD**: Integração com pipelines de deploy

## ♿ Acessibilidade

A aplicação segue as diretrizes WCAG 2.1:

- **✅ Semantic HTML**: Uso correto de tags semânticas (`main`, `section`, `button`)
- **✅ ARIA Labels**: Atributos descritivos para leitores de tela
- **✅ Keyboard Navigation**: Navegação completa via teclado
- **✅ Color Contrast**: Contraste adequado para todos os elementos
- **✅ Focus Management**: Estados de foco visíveis e lógicos
- **✅ Screen Reader**: Testado com leitores de tela
- **✅ Motion Preferences**: Respeita `prefers-reduced-motion`

## 📈 Performance

### Otimizações Implementadas

- **Code Splitting**: Componentes carregados sob demanda
- **Memoization**: `useMemo` e `useCallback` para evitar re-renders
- **Lazy Loading**: Carregamento progressivo de recursos
- **Bundle Analysis**: Análise e otimização do tamanho do bundle

### Métricas Esperadas

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

## 👤 Autor

Desenvolvido por [Murilo Viscondi](https://www.linkedin.com/in/murilo-viscondi/)

## 📄 Licença

Este projeto está sob a licença MIT.
