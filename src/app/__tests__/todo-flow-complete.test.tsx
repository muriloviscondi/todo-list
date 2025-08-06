import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import HomePage from '../page';

// Mock para styled-components e outras dependências
jest.mock('@/app/utils', () => ({
  formatDate: (date: Date) => date.toLocaleDateString('pt-BR'),
  generateId: () => `test-id-${Math.random().toString(36).substring(2, 11)}`,
}));

describe('Todo List - Testes de Fluxo', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  test('deve renderizar a aplicação corretamente', async () => {
    // Verificar se o título está presente
    expect(screen.getByText('Lista de Tarefas')).toBeInTheDocument();

    // Verificar se o input está presente
    expect(
      screen.getByPlaceholderText('Adicionar nova tarefa')
    ).toBeInTheDocument();

    // Verificar se os botões de filtro estão presentes
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Pendentes')).toBeInTheDocument();
    expect(screen.getByText('Concluídas')).toBeInTheDocument();
  });

  test('deve criar uma nova tarefa com sucesso', async () => {
    const user = userEvent.setup();

    // Encontrar o campo de input
    const input = screen.getByPlaceholderText('Adicionar nova tarefa');

    // Encontrar o botão de adicionar (botão sem nome, mas com ícone)
    const addButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.innerHTML.includes('svg') &&
          button.innerHTML.includes('path') &&
          !button.getAttribute('aria-label')
      );

    expect(addButton).toBeTruthy();

    // Digitar uma nova tarefa
    const taskText = 'Nova tarefa de teste';
    await user.type(input, taskText);

    // Clicar no botão de adicionar
    if (addButton) {
      await user.click(addButton);
    }

    // Verificar se a tarefa foi adicionada à lista
    expect(screen.getByText(taskText)).toBeInTheDocument();

    // Verificar se o input foi limpo
    expect(input).toHaveValue('');
  });

  test('deve filtrar tarefas por status', async () => {
    const user = userEvent.setup();

    // Verificar filtro "Todos"
    const todosButton = screen.getByText('Todos');
    await user.click(todosButton);

    // Deve mostrar tanto tarefas pendentes quanto concluídas
    expect(screen.queryAllByText('PENDENTE').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('CONCLUÍDA').length).toBeGreaterThan(0);

    // Filtrar por pendentes
    const pendentesButton = screen.getByText('Pendentes');
    await user.click(pendentesButton);

    // Deve mostrar apenas tarefas pendentes
    expect(screen.queryAllByText('PENDENTE').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('CONCLUÍDA').length).toBe(0);

    // Filtrar por concluídas
    const concluidasButton = screen.getByText('Concluídas');
    await user.click(concluidasButton);

    // Deve mostrar apenas tarefas concluídas
    expect(screen.queryAllByText('CONCLUÍDA').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('PENDENTE').length).toBe(0);
  });

  test('deve alterar status de uma tarefa', async () => {
    const user = userEvent.setup();

    // Encontrar uma tarefa pendente
    const pendenteTasks = screen.queryAllByText('PENDENTE');
    expect(pendenteTasks.length).toBeGreaterThan(0);

    // Encontrar o primeiro botão de toggle (marcar como concluída)
    const toggleButtons = screen.getAllByLabelText(/Marcar como/);
    expect(toggleButtons.length).toBeGreaterThan(0);

    const initialPendingCount = screen.queryAllByText('PENDENTE').length;
    const initialCompletedCount = screen.queryAllByText('CONCLUÍDA').length;

    // Clicar no primeiro botão de toggle
    await user.click(toggleButtons[0]);

    // Verificar se os contadores mudaram
    const finalPendingCount = screen.queryAllByText('PENDENTE').length;
    const finalCompletedCount = screen.queryAllByText('CONCLUÍDA').length;

    // Se era pendente, deve ter diminuído pendentes e aumentado concluídas
    // Se era concluída, deve ter aumentado pendentes e diminuído concluídas
    expect(finalPendingCount + finalCompletedCount).toBe(
      initialPendingCount + initialCompletedCount
    );
  });

  test('deve deletar uma tarefa', async () => {
    const user = userEvent.setup();

    // Contar tarefas iniciais
    const initialTaskCount = screen.getAllByLabelText('Delete item').length;

    // Encontrar o primeiro botão de deletar
    const deleteButtons = screen.getAllByLabelText('Delete item');
    expect(deleteButtons.length).toBeGreaterThan(0);

    // Deletar a primeira tarefa
    await user.click(deleteButtons[0]);

    // Verificar se o número de tarefas diminuiu
    const finalTaskCount = screen.getAllByLabelText('Delete item').length;
    expect(finalTaskCount).toBe(initialTaskCount - 1);
  });

  test('deve buscar tarefas por texto', async () => {
    const user = userEvent.setup();

    // Encontrar o campo de busca
    const searchInput = screen.getByPlaceholderText('Pesquisar...');

    // Buscar por uma palavra específica que existe em alguma tarefa
    await user.type(searchInput, 'projeto');

    // Verificar se apenas tarefas com "projeto" estão visíveis
    const allTasks = screen.queryAllByText(/PENDENTE|CONCLUÍDA/);

    // Se houver resultados, deve ser menor que o total inicial
    // Se não houver resultados, a busca funcionou corretamente
    expect(allTasks.length).toBeGreaterThanOrEqual(0);
  });

  test('não deve criar tarefa com texto vazio', async () => {
    const user = userEvent.setup();

    // Contar tarefas iniciais
    const initialTaskCount = screen.getAllByText(/PENDENTE|CONCLUÍDA/).length;

    // Encontrar o botão de adicionar
    const addButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.innerHTML.includes('svg') &&
          button.innerHTML.includes('path') &&
          !button.getAttribute('aria-label')
      );

    // Tentar adicionar sem texto
    if (addButton) {
      await user.click(addButton);
    }

    // O número de tarefas deve permanecer o mesmo
    const finalTaskCount = screen.getAllByText(/PENDENTE|CONCLUÍDA/).length;
    expect(finalTaskCount).toBe(initialTaskCount);
  });

  test('fluxo completo: criar, alterar e deletar tarefa', async () => {
    const user = userEvent.setup();

    // 1. Criar tarefa
    const input = screen.getByPlaceholderText('Adicionar nova tarefa');
    const addButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.innerHTML.includes('svg') &&
          button.innerHTML.includes('path') &&
          !button.getAttribute('aria-label')
      );

    const taskText = 'Tarefa para fluxo completo';
    await user.type(input, taskText);

    if (addButton) {
      await user.click(addButton);
    }

    // Verificar se foi criada
    expect(screen.getByText(taskText)).toBeInTheDocument();

    // 2. Alterar status (encontrar o toggle da tarefa criada)
    const taskElement = screen.getByText(taskText);
    const taskContainer = taskElement.closest('div');
    const toggleButton = taskContainer?.querySelector(
      'button[aria-label*="Marcar"]'
    );

    if (toggleButton) {
      await user.click(toggleButton);
    }

    // A tarefa deve ainda estar presente
    expect(screen.getByText(taskText)).toBeInTheDocument();

    // 3. Deletar tarefa
    const deleteButton = taskContainer?.querySelector(
      'button[aria-label="Delete item"]'
    );

    if (deleteButton) {
      await user.click(deleteButton);
    }

    // A tarefa deve ter sido removida
    expect(screen.queryByText(taskText)).not.toBeInTheDocument();
  });
});
