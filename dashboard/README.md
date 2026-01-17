dashboard.html - Painel de Controle
Página principal do sistema BarberFlow após login, com resumo e acesso rápido.

Visão Geral
Dashboard central com estatísticas, agendamentos recentes e ações rápidas para o usuário.

Seções Principais
🎯 Boas-vindas
Saudação personalizada com nome do usuário

Fundo gradiente azul escuro

Breve descrição do propósito

📊 Estatísticas Rápidas
Ícone	Valor	Descrição
📅	3	Agendamentos ativos
⏰	1	Para hoje
💰	R$ 150	Último serviço
⭐	4.8	Avaliação média
📅 Próximos Agendamentos
Tabela com próximos compromissos:

Data/Hora formatada

Serviço agendado

Barbeiro responsável

Status com badges coloridos

Ações: Visualizar e Reagendar

⚡ Ações Rápidas
Botões de acesso rápido:

✅ Novo Agendamento

👤 Editar Perfil

📋 Ver Histórico

💬 Suporte

📝 Atividade Recente
Lista das últimas ações:

Agendamentos confirmados

Pagamentos realizados

Avaliações enviadas

Com data/hora relativa

Layout e Navegação
Sidebar: Menu principal com navegação

Top Bar: Saudação e botão de logout

Grid responsivo: Estatísticas e painéis organizados

Cards: Cada seção em card individual

Funcionalidades JavaScript
viewDetails(id) - Visualizar detalhes do agendamento

reschedule(id) - Reagendar compromisso

newAppointment() - Criar novo agendamento

editProfile() - Editar perfil do usuário

viewHistory() - Ver histórico completo

contactSupport() - Contatar suporte

Dados de Exemplo
Usuário: João Silva (Cliente)

Agendamentos:

15/03 - Corte Social (Confirmado)

16/03 - Barba (Agendado)

Atividades: Confirmações, pagamentos, avaliações

Design
Cores principais: Azul escuro (#1a1a2e) e azul claro (#4cc9f0)

Ícones Font Awesome para melhor visualização

Badges coloridos para status

Grid responsivo (col-8 e col-4)

Dependências
../style.css - Estilos principais

../main.js - Scripts globais

Font Awesome 6.4.0 (CDN)

Propósito: Fornecer visão geral rápida e ações imediatas para o usuário após login.

