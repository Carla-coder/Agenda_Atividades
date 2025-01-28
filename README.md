
# Agenda de Atividades

Um aplicativo web interativo para **gerenciar suas tarefas diárias** de forma simples e eficiente.

## 📜 Descrição

**"Agenda de Atividades"** é uma página web que permite aos usuários:

- Adicionar tarefas com título, prioridade e data/hora.
- Organizar e visualizar tarefas de forma fluída.
- Marcar tarefas como concluídas.
- Editar e remover tarefas facilmente.
- Armazenar as tarefas de forma persistente no navegador usando **LocalStorage**.

Este projeto utiliza tecnologias modernas para criar uma experiência eficiente de gerenciamento de atividades.

### Tela inicial:

A tela inicial exibe um formulário para adicionar tarefas, com os campos para título, prioridade, e data/hora, e uma lista de tarefas organizadas de acordo com suas prioridades.

- Tela Inicial

![tela inicial](https://github.com/user-attachments/assets/407370d4-1f22-4d0f-a711-7f4cd0616e03)

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da página.

- **CSS3**: Estilização com design responsivo e efeitos visuais.

- **JavaScript**: Funcionalidades interativas e manipulação de tarefas.

- **LocalStorage**: Persistência dos dados da lista de tarefas.

## 📂 Estrutura de Pastas

```bash

📂 Projeto
├── 📁 image           # Imagens (como fundo)
├── index.html         # Página principal
├── style.css          # Estilos
├── script.js          # Funcionalidades

```

## 🌟 Funcionalidades

- **Adicionar Tarefas**: Permite adicionar novas tarefas com título, prioridade (Baixa, Média, Alta) e data/hora.
- **Organização de Tarefas**: As tarefas são exibidas com base na prioridade e podem ser marcadas como concluídas.
- **Edição e Remoção**: As tarefas podem ser editadas ou removidas após a criação.
- **Persistência de Dados**: As tarefas são armazenadas no LocalStorage e permanecem mesmo após o fechamento do navegador.
- **Drag and Drop (Arrastar e Soltar)**: A lista de tarefas permite reorganizar as tarefas ao arrastá-las e soltá-las na posição desejada. Isso facilita a reorganização das tarefas com base na prioridade ou outra ordem de sua escolha.
- inclui a biblioteca **SortableJS** no código com a tag que permite manipular a lista de tarefas.
``` 
<script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"></script> 
```

- **Configurando o Sortable**: No código, você pode inicializar o Sortable na lista de tarefas (taskList), permitindo que os itens sejam arrastados e soltos para reorganizar a ordem.

## 🛠️ Instalação

**Clone este repositório**:

```bash
git clone https://github.com/Carla-coder/Agenda_Atividades.git
```

## 🚀 Como Usar

- Abra o arquivo index.html no seu navegador. Eu recomendo usar o VSCode para abrir e visualizar o projeto localmente.
- No formulário da página inicial, adicione um título para a tarefa, escolha a prioridade e defina a data/hora.
- Clique em **"Adicionar Tarefa"** para inserir a tarefa na lista.
- Para marcar a tarefa como concluída, clique no botão **"Concluir"** ao lado da tarefa.
- Se necessário, edite ou remova tarefas clicando nos botões de **"Editar"** ou **"Remover"** ao lado de cada tarefa.
- As tarefas podem ser reorganizadas arrastando-as e soltando-as na posição desejada.
- As tarefas serão salvas automaticamente no LocalStorage, garantindo que a lista de tarefas seja preservada mesmo após fechar o navegador.

## 🙏 Agradecimentos

Agradeço a todos que utilizarem este projeto e a todas as contribuições que permitam que a **Agenda de Atividades** se torne uma ferramenta mais eficiente.

## 👩‍💻 Autor

**Carla Coder – Desenvolvedora Full Stack**, apaixonada por criar experiências úteis e interativas. Conecte-se comigo no https://www.github.com/Carla-coder e https://www.linkedin.com/in/carlamozena/
