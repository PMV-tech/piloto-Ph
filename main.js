// ============================================
// BARBERFLOW - MAIN.JS
// JavaScript principal do sistema
// ============================================

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('BarberFlow carregado');
    
    // Inicializar componentes
    initComponents();
    
    // Configurar eventos
    setupEvents();
});

// Inicializar componentes
function initComponents() {
    // Formatação de inputs
    initInputMasks();
    
    // Tabelas interativas
    initInteractiveTables();
}

// Configurar eventos
function setupEvents() {
    // Formulários
    setupFormValidation();
    
    // Botões de ação
    setupActionButtons();
    
    // Navegação
    setupNavigation();
}

// ============================================
// FUNÇÕES DE UTILIDADE
// ============================================

// Formatar data
function formatDate(date, format = 'dd/MM/yyyy') {
    if (!date) return '';
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return date;
    
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    
    switch(format) {
        case 'dd/MM/yyyy':
            return `${day}/${month}/${year}`;
        case 'dd/MM/yyyy HH:mm':
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        case 'HH:mm':
            return `${hours}:${minutes}`;
        default:
            return date;
    }
}

// Formatar moeda
function formatCurrency(value) {
    if (!value && value !== 0) return 'R$ 0,00';
    
    const num = parseFloat(value);
    if (isNaN(num)) return 'R$ 0,00';
    
    return num.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Formatar telefone
function formatPhone(value) {
    if (!value) return '';
    
    const clean = value.replace(/\D/g, '');
    
    if (clean.length === 11) {
        return clean.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (clean.length === 10) {
        return clean.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        return value;
    }
}

// Validar e-mail
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// FUNÇÕES DE UI
// ============================================

// Mostrar loading
function showLoading(element = document.body) {
    const loading = document.createElement('div');
    loading.className = 'loading-overlay';
    loading.innerHTML = `
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
        <div class="loading-text">Carregando...</div>
    `;
    
    element.appendChild(loading);
}

// Esconder loading
function hideLoading() {
    const loading = document.querySelector('.loading-overlay');
    if (loading) {
        loading.remove();
    }
}

// Mostrar mensagem
function showMessage(message, type = 'info', duration = 5000) {
    // Remover mensagens existentes
    const existing = document.querySelector('.message-toast');
    if (existing) {
        existing.remove();
    }
    
    // Criar nova mensagem
    const toast = document.createElement('div');
    toast.className = `message-toast message-${type}`;
    toast.innerHTML = `
        <div class="message-content">
            <i class="fas fa-${getMessageIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="message-close">&times;</button>
    `;
    
    // Adicionar ao corpo
    document.body.appendChild(toast);
    
    // Mostrar com animação
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Configurar botão de fechar
    toast.querySelector('.message-close').addEventListener('click', () => {
        hideMessage(toast);
    });
    
    // Auto-remover após duração
    if (duration > 0) {
        setTimeout(() => {
            hideMessage(toast);
        }, duration);
    }
    
    return toast;
}

function getMessageIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function hideMessage(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        toast.remove();
    }, 300);
}

// Confirmar ação
function confirmAction(message, confirmText = 'Confirmar', cancelText = 'Cancelar') {
    return new Promise((resolve) => {
        // Criar modal de confirmação
        const modal = document.createElement('div');
        modal.className = 'confirm-modal';
        modal.innerHTML = `
            <div class="confirm-content">
                <div class="confirm-message">
                    <i class="fas fa-question-circle"></i>
                    <p>${message}</p>
                </div>
                <div class="confirm-buttons">
                    <button class="btn btn-outline confirm-cancel">${cancelText}</button>
                    <button class="btn btn-danger confirm-ok">${confirmText}</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Mostrar modal
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Configurar eventos
        modal.querySelector('.confirm-cancel').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
                resolve(false);
            }, 300);
        });
        
        modal.querySelector('.confirm-ok').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
                resolve(true);
            }, 300);
        });
        
        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.remove();
                    resolve(false);
                }, 300);
            }
        });
    });
}

// ============================================
// FUNÇÕES DE FORMULÁRIO
// ============================================

// Setup de máscaras
function initInputMasks() {
    // Telefone
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function(e) {
            this.value = formatPhone(this.value);
        });
    });
    
    // Data
    document.querySelectorAll('input[type="date"]').forEach(input => {
        // Configurar valor mínimo como hoje
        const today = new Date().toISOString().split('T')[0];
        if (!input.min) {
            input.min = today;
        }
    });
}

// ============================================
// FUNÇÕES DE TABELA
// ============================================

// Ordenar tabela
function sortTable(table, column, type = 'text') {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isAscending = table.dataset.sortColumn === column && table.dataset.sortOrder !== 'desc';
    
    rows.sort((a, b) => {
        const aValue = a.children[column].textContent.trim();
        const bValue = b.children[column].textContent.trim();
        
        if (type === 'number') {
            const aNum = parseFloat(aValue.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
            const bNum = parseFloat(bValue.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.'));
            return isAscending ? bNum - aNum : aNum - bNum;
        } else if (type === 'date') {
            const aDate = parseDate(aValue);
            const bDate = parseDate(bValue);
            return isAscending ? bDate - aDate : aDate - bDate;
        } else {
            return isAscending ? 
                bValue.localeCompare(aValue, 'pt-BR') : 
                aValue.localeCompare(bValue, 'pt-BR');
        }
    });
    
    // Remover linhas existentes
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    // Adicionar linhas ordenadas
    rows.forEach(row => tbody.appendChild(row));
    
    // Atualizar estado de ordenação
    table.dataset.sortColumn = column;
    table.dataset.sortOrder = isAscending ? 'desc' : 'asc';
    
    // Atualizar indicadores de ordenação
    updateSortIndicators(table, column, isAscending);
}

function parseDate(dateString) {
    const parts = dateString.split(/[/\s:]/);
    if (parts.length >= 3) {
        return new Date(parts[2], parts[1] - 1, parts[0], parts[3] || 0, parts[4] || 0);
    }
    return new Date(dateString);
}

function updateSortIndicators(table, column, isAscending) {
    // Remover indicadores anteriores
    table.querySelectorAll('th i.fa-sort-up, th i.fa-sort-down').forEach(icon => {
        icon.className = 'fas fa-sort';
    });
    
    // Adicionar novo indicador
    const th = table.querySelector(`th:nth-child(${parseInt(column) + 1})`);
    if (th) {
        const icon = th.querySelector('i');
        if (icon) {
            icon.className = isAscending ? 'fas fa-sort-up' : 'fas fa-s
