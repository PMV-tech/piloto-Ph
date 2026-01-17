logout.html - Página de Saída do Sistema
Página de confirmação e processamento de logout no sistema BarberFlow.

🎯 Funcionalidade Principal
Confirmação segura de saída do sistema com opções claras para o usuário.

🎨 Design e Layout
Container centralizado com gradiente azul escuro

Card branco com sombras profundas

Ícone grande de logout (64px)

Mensagens claras de confirmação

Botões de ação em destaque

⚡ Opções Disponíveis
🔴 Confirmar Logout
Botão vermelho para ação principal

Ícone de saída

Processa logout e redireciona para login

↩️ Voltar ao Dashboard
Botão de contorno para cancelamento

Ícone de seta para voltar

Mantém usuário logado no sistema

🔒 Simulação de Logout (Frontend)
javascript
// Limpeza de armazenamento local
localStorage.removeItem('userLoggedIn');
sessionStorage.removeItem('userToken');

// Redirecionamento para login
window.location.href = 'login.html';
⏰ Sistema de Inatividade
Timeout automático: 30 segundos sem atividade

Detecta movimento do mouse, teclas e cliques

Pergunta se usuário deseja permanecer logado

Executa logout automático se não houver resposta

📱 Responsividade
Layout flexível para todos os tamanhos de tela

Padding adaptável para dispositivos móveis

Botões em coluna única para telas pequenas

⚠️ Observações Técnicas
Apenas demonstração: Em sistema real, logout seria processado no servidor

Sessão server-side: Necessário invalidar token/sessão no backend

Segurança: Limpeza apenas no client-side é insuficiente para produção

🔄 Fluxo de Logout
Confirmação → Usuário clica em "Confirmar Logout"

Limpeza → Remoção de dados locais/sessão

Feedback → Alerta de sucesso

Redirecionamento → Página de login

🎯 Mensagens para o Usuário
"Você está saindo do BarberFlow."

"Será necessário fazer login novamente..."

"Esta é uma demonstração..."

Confirmação de logout bem-sucedido

🛡️ Considerações de Segurança
Não armazenar dados sensíveis no localStorage

Invalidar tokens no servidor em produção

Limpar cookies de sessão

Redirecionamento seguro para login

💡 Melhorias para Produção
Requisição AJAX para invalidar sessão no servidor

Limpeza de cookies de autenticação

Log de atividade de logout

Redirecionamento com mensagem flash

Proteção CSRF no logout

Nota: Esta implementação é para fins demonstrativos. Em ambiente de produção, implementar logout completo no backend com invalidação de sessão/tokens.
