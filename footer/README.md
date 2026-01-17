footer.html - Scripts e Funcionalidades Globais
Arquivo de scripts com funções utilitárias globais para todas as páginas do sistema BarberFlow.

🔧 Funcionalidades Principais
1. Auto-hide de Alertas
Alerts removidos automaticamente após 5 segundos

Transição suave de opacidade

Fade-out animado

2. Validação de Formulários
Verificação automática de campos obrigatórios

Highlight vermelho em campos inválidos

Mensagem de alerta unificada

Prevenção de envio inválido

3. Formatação de Telefone
Máscara automática: (XX) XXXXX-XXXX

Suporte a 10 e 11 dígitos

Remoção de caracteres não numéricos

Aplicado em todos inputs type="tel"

4. Menu Ativo Automático
Identifica página atual pela URL

Adiciona classe .active ao link correspondente

Navegação visual melhorada

5. Sistema de Alertas Customizados
javascript
showAlert('Mensagem', 'tipo')
Tipos disponíveis:

success ✅ - Verde (sucesso)

error ❌ - Vermelho (erro)

warning ⚠️ - Amarelo (aviso)

info ℹ️ - Azul (informação)

Características:

Posição fixa no canto superior direito

Animação de entrada (slideInRight)

Botão de fechar manual (×)

Auto-removido após 5 segundos

Design responsivo

🎨 Estilos Injetados
Animação slideInRight para alertas

Estilos específicos por tipo de alerta

Layout flex para conteúdo do alerta

Botão de fechar com estilo clean

⚡ Comportamento ao Carregar Página
DOMContentLoaded - Executa todas as funções

Alertas - Configura auto-removal

Formulários - Aplica validação

Telefones - Adiciona máscara

Menu - Marca link ativo

🔗 Dependências
../main.js - Scripts principais do sistema

Font Awesome - Para ícones nos alertas

📱 Responsividade
Alertas com largura mínima de 300px

Máxima largura de 400px

Posicionamento adaptável

Font-size adequado para mobile

🛡️ Segurança
Sanitização de inputs telefônicos

Validação no client-side (apenas UX)

Prevenção de envio mal formado

Escape básico de caracteres especiais

💡 Uso Recomendado
javascript
// Exemplo de uso:
showAlert('Operação realizada com sucesso!', 'success');
showAlert('Erro ao processar a solicitação.', 'error');
showAlert('Confirme os dados antes de enviar.', 'warning');
Nota: Estas validações são apenas para melhorar a experiência do usuário. Validações de segurança e integridade devem ser implementadas no backend.
