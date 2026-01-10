// --- Translations ---
const translations = {
    ko: {
        nav_dashboard: "대시보드",
        nav_transactions: "거래 내역",
        nav_goals: "목표 설정",
        nav_fixed: "고정 지출",
        nav_settings: "설정",
        dashboard_title: "대시보드",
        greeting_prefix: "안녕하세요, ",
        greeting_suffix: "!",
        card_income: "이번 달 수익",
        card_expense: "이번 달 지출",
        card_balance: "순이익",
        chart_title: "재무 흐름",
        trans_add_title: "거래 추가",
        label_date: "날짜",
        label_desc: "내용",
        label_amount: "금액",
        label_cat: "분류",
        opt_income: "수입",
        opt_expense: "지출",
        btn_add: "추가하기",
        recent_trans_title: "최근 거래 내역",
        full_trans_title: "전체 거래 내역",
        btn_view_all: "전체 보기",
        filter_all: "전체 내역",
        filter_income: "수입만",
        filter_expense: "지출만",
        th_date: "날짜",
        th_desc: "내용",
        th_cat: "분류",
        th_amount: "금액",
        th_manage: "관리",
        fixed_add_title: "고정 지출 추가",
        fixed_list_title: "고정 지출 목록",
        label_item_name: "항목 이름",
        label_payment_day: "매월 결제일",
        btn_register: "등록하기",
        goal_add_title: "새 목표 설정",
        label_goal_name: "목표 이름",
        label_target: "목표 금액",
        label_current: "현재 모은 금액",
        btn_goal_register: "목표 등록",
        settings_lang: "언어 설정 (Language)",
        settings_profile: "프로필 설정",
        settings_currency: "통화 설정 (Currency)",
        label_username: "사용자 이름",
        btn_save: "저장하기",
        settings_data: "데이터 관리",
        settings_data_desc: "모든 거래 내역과 목표 설정이 초기화됩니다. 이 작업은 되돌릴 수 없습니다.",
        btn_reset: "데이터 초기화",
        month_prefix: "월 ",
        month_payment: "매월 {day}일 결제",
        achieved: "% 달성",
        alert_input: "내용과 금액을 입력해주세요.",
        alert_save: "프로필이 저장되었습니다.",
        alert_reset: "정말 모든 데이터를 초기화하시겠습니까? 복구할 수 없습니다.",
        delete_confirm: "정말 삭제하시겠습니까?",
        type_income: "수입",
        type_expense: "지출",
        placeholder_desc: "예: 웹호스팅 비용",
        placeholder_amount: "0",
        placeholder_fixed_desc: "예: 넷플릭스 구독",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "예: 맥북 프로 구매",
        placeholder_username: "이름을 입력하세요",
        label_department: "부서",
        opt_no_dept: "선택 안함",
        nav_departments: "부서 예산",
        dept_add_title: "부서 추가",
        label_dept_name: "부서명",
        label_budget: "예산",
        btn_dept_register: "부서 등록",
        placeholder_dept_name: "예: 마케팅팀",
        used: "사용됨"
    },
    en: {
        nav_dashboard: "Dashboard",
        nav_transactions: "Transactions",
        nav_goals: "Goals",
        nav_fixed: "Fixed Expenses",
        nav_settings: "Settings",
        dashboard_title: "Dashboard",
        greeting_prefix: "Hello, ",
        greeting_suffix: "!",
        card_income: "Monthly Income",
        card_expense: "Monthly Expenses",
        card_balance: "Net Profit",
        chart_title: "Financial Flow",
        trans_add_title: "Add Transaction",
        label_date: "Date",
        label_desc: "Description",
        label_amount: "Amount",
        label_cat: "Category",
        opt_income: "Income",
        opt_expense: "Expense",
        btn_add: "Add",
        recent_trans_title: "Recent Transactions",
        full_trans_title: "All Transactions",
        btn_view_all: "View All",
        filter_all: "All",
        filter_income: "Income Only",
        filter_expense: "Expense Only",
        th_date: "Date",
        th_desc: "Description",
        th_cat: "Category",
        th_amount: "Amount",
        th_manage: "Manage",
        fixed_add_title: "Add Fixed Expense",
        fixed_list_title: "Fixed Expenses List",
        label_item_name: "Item Name",
        label_payment_day: "Monthly Payment Day",
        btn_register: "Register",
        goal_add_title: "Set New Goal",
        label_goal_name: "Goal Name",
        label_target: "Target Amount",
        label_current: "Current Amount",
        btn_goal_register: "Register Goal",
        settings_lang: "Language",
        settings_profile: "Profile Settings",
        settings_currency: "Currency Settings",
        label_username: "Username",
        btn_save: "Save",
        settings_data: "Data Management",
        settings_data_desc: "All transaction history and goals will be reset. This cannot be undone.",
        btn_reset: "Reset Data",
        month_prefix: "Mo. ",
        month_payment: "Payment on day {day}",
        achieved: "% Achieved",
        alert_input: "Please enter description and amount.",
        alert_save: "Profile saved.",
        alert_reset: "Are you sure you want to reset all data? This cannot be undone.",
        delete_confirm: "Are you sure?",
        type_income: "Income",
        type_expense: "Expense",
        placeholder_desc: "Ex: Web Hosting",
        placeholder_amount: "0",
        placeholder_fixed_desc: "Ex: Netflix",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "Ex: MacBook Pro",
        placeholder_username: "Enter your name",
        label_department: "Department",
        opt_no_dept: "None",
        nav_departments: "Department Budget",
        dept_add_title: "Add Department",
        label_dept_name: "Department Name",
        label_budget: "Monthly Budget",
        btn_dept_register: "Register Dept",
        placeholder_dept_name: "Ex: Marketing",
        used: "Used"
    },
    ja: {
        nav_dashboard: "ダッシュボード",
        nav_transactions: "取引履歴",
        nav_goals: "目標設定",
        nav_fixed: "固定費",
        nav_settings: "設定",
        dashboard_title: "ダッシュボード",
        greeting_prefix: "こんにちは、",
        greeting_suffix: "さん!",
        card_income: "今月の収入",
        card_expense: "今月の支出",
        card_balance: "純利益",
        chart_title: "財務フロー",
        trans_add_title: "取引追加",
        label_date: "日付",
        label_desc: "内容",
        label_amount: "金額",
        label_cat: "分類",
        opt_income: "収入",
        opt_expense: "支出",
        btn_add: "追加する",
        recent_trans_title: "最近の取引",
        full_trans_title: "全取引履歴",
        btn_view_all: "すべて見る",
        filter_all: "すべて",
        filter_income: "収入のみ",
        filter_expense: "支出のみ",
        th_date: "日付",
        th_desc: "内容",
        th_cat: "分類",
        th_amount: "金額",
        th_manage: "管理",
        fixed_add_title: "固定費追加",
        fixed_list_title: "固定費リスト",
        label_item_name: "項目名",
        label_payment_day: "毎月決済日",
        btn_register: "登録する",
        goal_add_title: "新しい目標",
        label_goal_name: "目標名",
        label_target: "目標金額",
        label_current: "現在の金額",
        btn_goal_register: "目標登録",
        settings_lang: "言語設定 (Language)",
        settings_profile: "プロフィール設定",
        settings_currency: "通貨設定 (Currency)",
        label_username: "ユーザー名",
        btn_save: "保存する",
        settings_data: "データ管理",
        settings_data_desc: "すべての取引履歴と目標が初期化されます。この操作は取り消せません。",
        btn_reset: "データ初期化",
        month_prefix: "月 ",
        month_payment: "毎月{day}日決済",
        achieved: "% 達成",
        alert_input: "内容と金額を入力してください。",
        alert_save: "プロフィールが保存されました。",
        alert_reset: "本当にすべてのデータを初期化しますか？復元できません。",
        delete_confirm: "本当に削除しますか？",
        type_income: "収入",
        type_expense: "支出",
        placeholder_desc: "例：サーバー費用",
        placeholder_amount: "0",
        placeholder_fixed_desc: "例：Netflix",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "例：MacBook Pro",
        placeholder_username: "名前を入力してください",
        label_department: "部署",
        opt_no_dept: "なし",
        nav_departments: "部署予算",
        dept_add_title: "部署追加",
        label_dept_name: "部署名",
        label_budget: "予算",
        btn_dept_register: "部署登録",
        placeholder_dept_name: "例：マーケティング",
        used: "使用済み"
    },
    zh: {
        nav_dashboard: "仪表板",
        nav_transactions: "交易记录",
        nav_goals: "目标设定",
        nav_fixed: "固定支出",
        nav_settings: "设置",
        dashboard_title: "仪表板",
        greeting_prefix: "你好，",
        greeting_suffix: "！",
        card_income: "本月收入",
        card_expense: "本月支出",
        card_balance: "净利润",
        chart_title: "财务流向",
        trans_add_title: "添加交易",
        label_date: "日期",
        label_desc: "描述",
        label_amount: "金额",
        label_cat: "分类",
        opt_income: "收入",
        opt_expense: "支出",
        btn_add: "添加",
        recent_trans_title: "最近交易",
        full_trans_title: "所有交易",
        btn_view_all: "查看全部",
        filter_all: "全部",
        filter_income: "仅收入",
        filter_expense: "仅支出",
        th_date: "日期",
        th_desc: "描述",
        th_cat: "分类",
        th_amount: "金额",
        th_manage: "管理",
        fixed_add_title: "添加固定支出",
        fixed_list_title: "固定支出列表",
        label_item_name: "项目名称",
        label_payment_day: "每月付款日",
        btn_register: "注册",
        goal_add_title: "设定新目标",
        label_goal_name: "目标名称",
        label_target: "目标金额",
        label_current: "当前金额",
        btn_goal_register: "注册目标",
        settings_lang: "语言 (Language)",
        settings_profile: "个人资料设置",
        settings_currency: "货币设置 (Currency)",
        label_username: "用户名",
        btn_save: "保存",
        settings_data: "数据管理",
        settings_data_desc: "所有交易记录和目标将被重置。此操作无法撤销。",
        btn_reset: "重置数据",
        month_prefix: "月 ",
        month_payment: "每月 {day} 日付款",
        achieved: "% 达成",
        alert_input: "请输入描述和金额。",
        alert_save: "个人资料已保存。",
        alert_reset: "确定要重置所有数据吗？此操作无法撤销。",
        delete_confirm: "确定要删除吗？",
        type_income: "收入",
        type_expense: "支出",
        placeholder_desc: "例：网站托管费",
        placeholder_amount: "0",
        placeholder_fixed_desc: "例：Netflix 订阅",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "例：MacBook Pro",
        placeholder_username: "输入你的名字",
        label_department: "部门",
        opt_no_dept: "无",
        nav_departments: "部门预算",
        dept_add_title: "添加部门",
        label_dept_name: "部门名称",
        label_budget: "预算",
        btn_dept_register: "注册部门",
        placeholder_dept_name: "例：市场部",
        used: "已使用"
    },
    es: {
        nav_dashboard: "Panel",
        nav_transactions: "Transacciones",
        nav_goals: "Metas",
        nav_fixed: "Gastos Fijos",
        nav_settings: "Ajustes",
        dashboard_title: "Panel",
        greeting_prefix: "Hola, ",
        greeting_suffix: "!",
        card_income: "Ingresos Mensuales",
        card_expense: "Gastos Mensuales",
        card_balance: "Beneficio Neto",
        chart_title: "Flujo Financiero",
        trans_add_title: "Añadir Transacción",
        label_date: "Fecha",
        label_desc: "Descripción",
        label_amount: "Cantidad",
        label_cat: "Categoría",
        opt_income: "Ingreso",
        opt_expense: "Gasto",
        btn_add: "Añadir",
        recent_trans_title: "Transacciones Recientes",
        full_trans_title: "Todas las Transacciones",
        btn_view_all: "Ver Todo",
        filter_all: "Todo",
        filter_income: "Solo Ingresos",
        filter_expense: "Solo Gastos",
        th_date: "Fecha",
        th_desc: "Descripción",
        th_cat: "Categoría",
        th_amount: "Cantidad",
        th_manage: "Gestionar",
        fixed_add_title: "Añadir Gasto Fijo",
        fixed_list_title: "Lista de Gastos Fijos",
        label_item_name: "Nombre del Elemento",
        label_payment_day: "Día de Pago Mensual",
        btn_register: "Registrar",
        goal_add_title: "Nueva Meta",
        label_goal_name: "Nombre de Meta",
        label_target: "Cantidad Objetivo",
        label_current: "Cantidad Actual",
        btn_goal_register: "Registrar Meta",
        settings_lang: "Idioma (Language)",
        settings_profile: "Perfil",
        settings_currency: "Moneda (Currency)",
        label_username: "Usuario",
        btn_save: "Guardar",
        settings_data: "Ajustes de Datos",
        settings_data_desc: "Todo será eliminado. No se puede deshacer.",
        btn_reset: "Reiniciar Datos",
        month_prefix: "Mes ",
        month_payment: "Pago el día {day}",
        achieved: "% Logrado",
        alert_input: "Ingrese descripción y cantidad.",
        alert_save: "Perfil guardado.",
        alert_reset: "¿Seguro que desea reiniciar todo?",
        delete_confirm: "¿Estás seguro?",
        type_income: "Ingreso",
        type_expense: "Gasto",
        placeholder_desc: "Ej: Hosting Web",
        placeholder_amount: "0",
        placeholder_fixed_desc: "Ej: Netflix",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "Ej: MacBook Pro",
        placeholder_username: "Ingrese su nombre",
        label_department: "Departamento",
        opt_no_dept: "Ninguno",
        nav_departments: "Presupuesto Dept",
        dept_add_title: "Añadir Departamento",
        label_dept_name: "Nombre del Dept",
        label_budget: "Presupuesto",
        btn_dept_register: "Registrar Dept",
        placeholder_dept_name: "Ej: Marketing",
        used: "Usado"
    },
    fr: {
        nav_dashboard: "Tableau de bord",
        nav_transactions: "Transactions",
        nav_goals: "Objectifs",
        nav_fixed: "Dépenses Fixes",
        nav_settings: "Paramètres",
        dashboard_title: "Tableau de bord",
        greeting_prefix: "Bonjour, ",
        greeting_suffix: "!",
        card_income: "Revenu Mensuel",
        card_expense: "Dépenses Mensuelles",
        card_balance: "Bénéfice Net",
        chart_title: "Flux Financier",
        trans_add_title: "Ajouter Transaction",
        label_date: "Date",
        label_desc: "Description",
        label_amount: "Montant",
        label_cat: "Catégorie",
        opt_income: "Revenu",
        opt_expense: "Dépense",
        btn_add: "Ajouter",
        recent_trans_title: "Transactions Récentes",
        full_trans_title: "Toutes les Transactions",
        btn_view_all: "Voir Tout",
        filter_all: "Tout",
        filter_income: "Revenus Seuls",
        filter_expense: "Dépenses Seules",
        th_date: "Date",
        th_desc: "Description",
        th_cat: "Catégorie",
        th_amount: "Montant",
        th_manage: "Gérer",
        fixed_add_title: "Ajouter Dépense Fixe",
        fixed_list_title: "Liste Dépenses Fixes",
        label_item_name: "Nom d'article",
        label_payment_day: "Jour de Paiement",
        btn_register: "Enregistrer",
        goal_add_title: "Nouvel Objectif",
        label_goal_name: "Nom de l'Objectif",
        label_target: "Montant Cible",
        label_current: "Montant Actuel",
        btn_goal_register: "Enregistrer Objectif",
        settings_lang: "Langue (Language)",
        settings_profile: "Profil",
        settings_currency: "Devise (Currency)",
        label_username: "Nom d'utilisateur",
        btn_save: "Enregistrer",
        settings_data: "Gestion des Données",
        settings_data_desc: "Tout sera réinitialisé. Cette action est irréversible.",
        btn_reset: "Réinitialiser",
        month_prefix: "Mois ",
        month_payment: "Paiement le {day}",
        achieved: "% Atteint",
        alert_input: "Entrez description et montant.",
        alert_save: "Profil enregistré.",
        alert_reset: "Voulez-vous vraiment tout réinitialiser ?",
        delete_confirm: "Êtes-vous sûr ?",
        type_income: "Revenu",
        type_expense: "Dépense",
        placeholder_desc: "Ex: Hébergement Web",
        placeholder_amount: "0",
        placeholder_fixed_desc: "Ex: Netflix",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "Ex: MacBook Pro",
        placeholder_username: "Entrez votre nom",
        label_department: "Département",
        opt_no_dept: "Aucun",
        nav_departments: "Budget Département",
        dept_add_title: "Ajouter Département",
        label_dept_name: "Nom du Département",
        label_budget: "Budget",
        btn_dept_register: "Enregistrer Dép",
        placeholder_dept_name: "Ex: Marketing",
        used: "Utilisé"
    },
    de: {
        nav_dashboard: "Dashboard",
        nav_transactions: "Transaktionen",
        nav_goals: "Ziele",
        nav_fixed: "Fixkosten",
        nav_settings: "Einstellungen",
        dashboard_title: "Dashboard",
        greeting_prefix: "Hallo, ",
        greeting_suffix: "!",
        card_income: "Monatliches Einkommen",
        card_expense: "Monatliche Ausgaben",
        card_balance: "Nettogewinn",
        chart_title: "Finanzfluss",
        trans_add_title: "Transaktion hinzufügen",
        label_date: "Datum",
        label_desc: "Beschreibung",
        label_amount: "Betrag",
        label_cat: "Kategorie",
        opt_income: "Einnahme",
        opt_expense: "Ausgabe",
        btn_add: "Hinzufügen",
        recent_trans_title: "Neueste Transaktionen",
        full_trans_title: "Alle Transaktionen",
        btn_view_all: "Alle ansehen",
        filter_all: "Alle",
        filter_income: "Nur Einnahmen",
        filter_expense: "Nur Ausgaben",
        th_date: "Datum",
        th_desc: "Beschreibung",
        th_cat: "Kategorie",
        th_amount: "Betrag",
        th_manage: "Verwalten",
        fixed_add_title: "Fixkosten hinzufügen",
        fixed_list_title: "Fixkostenliste",
        label_item_name: "Artikelname",
        label_payment_day: "Monatlicher Zahlungstag",
        btn_register: "Registrieren",
        goal_add_title: "Neues Ziel",
        label_goal_name: "Zielname",
        label_target: "Zielbetrag",
        label_current: "Aktueller Betrag",
        btn_goal_register: "Ziel registrieren",
        settings_lang: "Sprache (Language)",
        settings_profile: "Profileinstellungen",
        settings_currency: "Währung (Currency)",
        label_username: "Benutzername",
        btn_save: "Speichern",
        settings_data: "Datenverwaltung",
        settings_data_desc: "Alle Daten werden zurückgesetzt. Dies kann nicht rückgängig gemacht werden.",
        btn_reset: "Daten zurücksetzen",
        month_prefix: "M ",
        month_payment: "Zahlung am {day}.",
        achieved: "% Erreicht",
        alert_input: "Bitte Beschreibung und Betrag eingeben.",
        alert_save: "Profil gespeichert.",
        alert_reset: "Möchten Sie wirklich alle Daten zurücksetzen?",
        delete_confirm: "Sind Sie sicher?",
        type_income: "Einnahme",
        type_expense: "Ausgabe",
        placeholder_desc: "Bsp: Webhosting",
        placeholder_amount: "0",
        placeholder_fixed_desc: "Bsp: Netflix",
        placeholder_day: "1 ~ 31",
        placeholder_goal_name: "Bsp: MacBook Pro",
        placeholder_username: "Name eingeben",
        label_department: "Abteilung",
        opt_no_dept: "Keine",
        nav_departments: "Abteilungsbudget",
        dept_add_title: "Abteilung hinzufügen",
        label_dept_name: "Abteilungsname",
        label_budget: "Budget",
        btn_dept_register: "Abt. registrieren",
        placeholder_dept_name: "Bsp: Marketing",
        used: "Verwendet"
    }
};

const currencySymbols = {
    KRW: '₩',
    USD: '$',
    JPY: '¥',
    CNY: '¥',
    EUR: '€'
};

// --- State ---
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let goals = JSON.parse(localStorage.getItem('goals')) || [];
let departments = JSON.parse(localStorage.getItem('departments')) || []; // New State
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || { name: '사장님' };
let currentLang = localStorage.getItem('language') || 'ko';
let currentCurrency = localStorage.getItem('currency') || 'KRW';

// --- DOM Elements ---
const balanceEl = document.getElementById('total-balance');
const incomeEl = document.getElementById('total-income');
const expenseEl = document.getElementById('total-expense');
const transactionListEl = document.getElementById('transaction-list');
const fullTransactionListEl = document.getElementById('full-transaction-list');
const goalsListContainer = document.getElementById('goals-list-container');
const departmentsListContainer = document.getElementById('departments-list-container'); // New
const languageSelector = document.getElementById('language-selector');
const currencySelector = document.getElementById('currency-selector');

// Forms
const addTransactionForm = document.getElementById('add-transaction-form');
const addGoalForm = document.getElementById('add-goal-form');
const addDeptForm = document.getElementById('add-dept-form'); // New

// Inputs
const dateInput = document.getElementById('t-date');
const descInput = document.getElementById('t-desc');
const amountInput = document.getElementById('t-amount');
const typeInput = document.getElementById('t-type');
const deptInput = document.getElementById('t-department'); // New
const goalNameInput = document.getElementById('g-name');
const goalTargetInput = document.getElementById('g-target');
const goalCurrentInput = document.getElementById('g-current');
const deptNameInput = document.getElementById('dept-name'); // Corrected ID
const deptBudgetInput = document.getElementById('dept-budget'); // Corrected ID
const filterTypeInput = document.getElementById('filter-type');
const settingUsernameInput = document.getElementById('setting-username');
const userNameDisplay = document.getElementById('user-name-display');

// ... (Helper Functions same as before) ...
function formatMoney(amount) {
    const symbol = currencySymbols[currentCurrency];
    return `${symbol}${Number(amount).toLocaleString()}`;
}

function parseAmount(value) {
    if (!value) return 0;
    return Number(value.replace(/,/g, ''));
}

function initInputFormatting() {
    const amountInputs = [
        amountInput,
        fixedAmountInput,
        goalTargetInput,
        goalCurrentInput,
        deptBudgetInput // Add new input
    ];

    amountInputs.forEach(input => {
        if (!input) return; // safety
        input.addEventListener('input', (e) => {
            const val = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numbers
            if (val) {
                e.target.value = Number(val).toLocaleString();
            } else {
                e.target.value = '';
            }
        });
    });

    // Fixed Day Input Restriction (1-31)
    if (fixedDayInput) {
        fixedDayInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/[^0-9]/g, '');

            if (val !== '') {
                let num = parseInt(val, 10);
                if (num > 31) num = 31;
                e.target.value = num;
            } else {
                e.target.value = '';
            }
        });

        fixedDayInput.addEventListener('blur', (e) => {
            let val = parseInt(e.target.value, 10);
            if (val < 1) e.target.value = 1;
            if (!val) e.target.value = '';
        });
    }
}

// ... (Update Language Logic) ...
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    const t = translations[lang];

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // Update Placeholders
    descInput.placeholder = t.placeholder_desc;
    amountInput.placeholder = t.placeholder_amount;
    fixedDescInput.placeholder = t.placeholder_fixed_desc;
    fixedDayInput.placeholder = t.placeholder_day;
    fixedAmountInput.placeholder = t.placeholder_amount;
    goalNameInput.placeholder = t.placeholder_goal_name;
    goalTargetInput.placeholder = (2000000).toLocaleString();
    goalCurrentInput.placeholder = (0).toLocaleString();
    settingUsernameInput.placeholder = t.placeholder_username;

    // New Placeholders
    if (deptNameInput) deptNameInput.placeholder = t.placeholder_dept_name || "Ex: Marketing";
    if (deptBudgetInput) deptBudgetInput.placeholder = (1000000).toLocaleString();

    // Update Dynamic Parts
    updateUserProfileDisplay();
    updateDepartmentSelect(); // Update "Select None" option text if needed
    refreshAllViews();
}

// ... (Other functions) ...

function refreshAllViews() {
    renderFixedExpenses();
    renderFullTransactions();
    updateDashboard(); // includes renderDashboardTransactions
    renderGoals();
    renderDepartments(); // New
}

// --- Department Logic ---
function renderDepartments() {
    if (!departmentsListContainer) return;
    departmentsListContainer.innerHTML = '';
    const t = translations[currentLang];

    // Calculate spent per department based on transactions
    // Assuming transactions have 'departmentId' property
    const deptSpending = {};
    transactions.forEach(tr => {
        if (tr.departmentId && tr.type === 'expense') {
            deptSpending[tr.departmentId] = (deptSpending[tr.departmentId] || 0) + tr.amount;
        }
    });

    departments.forEach(dept => {
        const spent = deptSpending[dept.id] || 0;
        const percent = Math.min((spent / dept.budget) * 100, 100);
        let statusColor = 'var(--success-color)';
        if (percent > 80) statusColor = 'var(--warning-color)';
        if (percent >= 100) statusColor = 'var(--danger-color)';

        const el = document.createElement('div');
        el.className = 'goal-card-item glass-panel';

        el.innerHTML = `
            <div class="goal-header">
                <h3>${dept.name}</h3>
                <button class="delete-btn" onclick="removeDepartment(${dept.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="goal-amounts">
                <span style="color:${statusColor}">${formatMoney(spent)}</span>
                <span>/ ${formatMoney(dept.budget)}</span>
            </div>
            <div class="goal-progress">
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${percent}%; background-color: ${statusColor};"></div>
                </div>
                <div style="text-align: right; font-size: 0.8rem; color: var(--text-secondary);">
                    ${Math.round(percent)}% ${t.used || 'Used'}
                </div>
            </div>
        `;
        departmentsListContainer.appendChild(el);
    });
}

function addDepartment(e) {
    e.preventDefault();
    if (deptNameInput.value.trim() === '' || deptBudgetInput.value.trim() === '') {
        alert(translations[currentLang].alert_input);
        return;
    }

    const newDept = {
        id: Date.now(),
        name: deptNameInput.value,
        budget: parseAmount(deptBudgetInput.value)
    };

    departments.push(newDept);
    localStorage.setItem('departments', JSON.stringify(departments));

    renderDepartments();
    updateDepartmentSelect();

    deptNameInput.value = '';
    deptBudgetInput.value = '';
}

function removeDepartment(id) {
    if (confirm(translations[currentLang].delete_confirm)) {
        departments = departments.filter(d => d.id !== id);
        localStorage.setItem('departments', JSON.stringify(departments));
        renderDepartments();
        updateDepartmentSelect();
    }
}
window.removeDepartment = removeDepartment;

function updateDepartmentSelect() {
    if (!deptInput) return;
    const currentVal = deptInput.value;
    deptInput.innerHTML = `<option value="" data-i18n="opt_no_dept">${translations[currentLang].opt_no_dept || "None"}</option>`;

    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.innerText = dept.name;
        deptInput.appendChild(option);
    });
    deptInput.value = currentVal; // try to restore selection
}

// Update showSection
const originalShowSection2 = showSection;
showSection = function (sectionId) {
    originalShowSection2(sectionId);
    if (sectionId === 'departments-view') renderDepartments();
}

// Update addTransaction
function addTransaction(e) {
    e.preventDefault();
    if (descInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert(translations[currentLang].alert_input);
        return;
    }

    const transaction = {
        id: Date.now(),
        desc: descInput.value,
        amount: parseAmount(amountInput.value),
        date: dateInput.value,
        type: typeInput.value,
        departmentId: deptInput.value ? Number(deptInput.value) : null // Add Dept ID
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateDashboard();

    descInput.value = '';
    amountInput.value = '';
    // Keep date and type? or reset?
}

// --- Event Listeners ---
if (addDeptForm) addDeptForm.addEventListener('submit', addDepartment);
// Re-attach addTransaction listener as we redefined the function? 
// Actually the previous reference is bound. We should redefine functionality inside the same function name or re-bind.
// Since we redefined 'addTransaction' variable (function), we need to update the listener.
addTransactionForm.removeEventListener('submit', addTransaction); // This won't work easily if we don't have reference to old one.
// Instead, let's just make sure the initial init binds the *current* addTransaction.
// But wait, addTransaction was defined as 'function addTransaction...', so it's hoisted/referenced. 
// Redefining it here essentially replaces it.
// To be safe, let's re-add the listener:
addTransactionForm.onlinesubmit = addTransaction; // This is a bit hacky. 
// Better: just use the new function. Since the old event listener holds reference to the old function object.
// We must update the event listener.
addTransactionForm.removeEventListener('submit', window.oldAddTransactionHandler); // We don't have the ref.
// Let's just create a new handler in init() or simply overwrite the listener logic.
// In this specific file structure, we're replacing the whole script file content or chunks.
// If we replace the 'addTransaction' function definition in the file, the 'init' function further down (if re-run) or the existing listener (if page not reloaded) 
// In a SPA context here, we are rewriting the file. The browser will only pick it up on reload.
// So simple replacement of the function definition is enough.

// --- Init Update ---
// We need to call updateDepartmentSelect in init() and bind addDeptForm.
// We'll append this to the end of init or modify init.


// Chart
let financeChart;

// --- Helper Functions ---
function formatMoney(amount) {
    const symbol = currencySymbols[currentCurrency];
    return `${symbol}${Number(amount).toLocaleString()}`;
}

function parseAmount(value) {
    if (!value) return 0;
    return Number(value.replace(/,/g, ''));
}

function initInputFormatting() {
    const amountInputs = [
        amountInput,
        fixedAmountInput,
        goalTargetInput,
        goalCurrentInput
    ];

    amountInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const val = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numbers
            if (val) {
                e.target.value = Number(val).toLocaleString();
            } else {
                e.target.value = '';
            }
        });
    });

    // Fixed Day Input Restriction (1-31)
    if (fixedDayInput) {
        fixedDayInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/[^0-9]/g, '');

            if (val !== '') {
                let num = parseInt(val, 10);
                if (num > 31) num = 31;
                // Don't auto-correct < 1 while typing to allow '1', '10' etc.
                // But if user types '0' as first char, maybe prevent it?
                // Let's just allow typing but clamp max.
                e.target.value = num;
            } else {
                e.target.value = '';
            }
        });

        fixedDayInput.addEventListener('blur', (e) => {
            let val = parseInt(e.target.value, 10);
            if (val < 1) e.target.value = 1;
            if (!val) e.target.value = '';
        });
    }
}

// --- Language & Currency Logic ---
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    const t = translations[lang];

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    // Update Placeholders
    descInput.placeholder = t.placeholder_desc;
    amountInput.placeholder = t.placeholder_amount;
    fixedDescInput.placeholder = t.placeholder_fixed_desc;
    fixedDayInput.placeholder = t.placeholder_day;
    fixedAmountInput.placeholder = t.placeholder_amount;
    goalNameInput.placeholder = t.placeholder_goal_name;
    goalTargetInput.placeholder = (2000000).toLocaleString(); // Keep numbers
    goalCurrentInput.placeholder = (0).toLocaleString();
    settingUsernameInput.placeholder = t.placeholder_username;

    // Update Dynamic Parts
    updateUserProfileDisplay();
    refreshAllViews();
}

function updateCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('currency', currency);
    refreshAllViews();
}

function refreshAllViews() {
    renderFixedExpenses();
    renderFullTransactions();
    updateDashboard(); // includes renderDashboardTransactions
    renderGoals();
}

function updateUserProfileDisplay() {
    const t = translations[currentLang];
    userNameDisplay.innerText = `${t.greeting_prefix}${userProfile.name}${t.greeting_suffix}`;
}

// --- Initialization ---
function init() {
    // Set default date
    dateInput.valueAsDate = new Date();

    // Set Selectors
    languageSelector.value = currentLang;
    currencySelector.value = currentCurrency;

    updateLanguage(currentLang); // This also calls refreshing views

    // Formatting Listeners
    initInputFormatting();

    // Load User Profile
    settingUsernameInput.value = userProfile.name;

    // Navigation Listeners
    setupNavigation();

    // Init Chart
    initChart();

    // Listeners
    languageSelector.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });
    currencySelector.addEventListener('change', (e) => {
        updateCurrency(e.target.value);
    });
}

// --- Navigation ---
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                showSection(targetId);

                // Update active state in sidebar
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }

    // Refresh specific views if needed
    if (sectionId === 'transactions-view') renderFullTransactions();
    if (sectionId === 'goals-view') renderGoals();
}

// Expose to global for HTML onclicks
window.navigateToTransactions = () => {
    // Manually trigger click on sidebar or just call showSection
    document.querySelector('[data-target="transactions-view"]').click();
};
window.showSection = showSection; // fallback

// --- Dashboard Logic ---
function updateDashboard() {
    const amounts = transactions.map(t => t.type === 'expense' ? -t.amount : t.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0);
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);

    balanceEl.innerText = formatMoney(total);
    incomeEl.innerText = formatMoney(income);
    expenseEl.innerText = formatMoney(expense);

    renderDashboardTransactions();
    updateChart();
}

function renderDashboardTransactions() {
    transactionListEl.innerHTML = '';
    const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    const recent = sorted.slice(0, 5);

    recent.forEach(t => {
        const item = createTransactionElement(t);
        transactionListEl.appendChild(item);
    });
}

function createTransactionElement(t) {
    const li = document.createElement('li');
    li.classList.add('transaction-item');

    const isIncome = t.type === 'income';
    const iconClass = isIncome ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';
    const iconBg = isIncome ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)';
    const iconColor = isIncome ? 'var(--success-color)' : 'var(--danger-color)';
    const sign = isIncome ? '+' : '-';

    li.innerHTML = `
        <div class="t-info">
            <div class="t-icon" style="background: ${iconBg}; color: ${iconColor}">
                <i class="fa-solid ${iconClass}"></i>
            </div>
            <div class="t-details">
                <h4>${t.desc}</h4>
                <span>${t.date}</span>
            </div>
        </div>
        <div class="t-right" style="display:flex; align-items:center;">
            <span class="t-amount ${t.type}">
                ${sign}${formatMoney(Math.abs(t.amount))}
            </span>
            <button class="delete-btn" onclick="removeTransaction(${t.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
    return li;
}

function addTransaction(e) {
    e.preventDefault();
    if (descInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert(translations[currentLang].alert_input);
        return;
    }

    const transaction = {
        id: Date.now(),
        desc: descInput.value,
        amount: parseAmount(amountInput.value),
        date: dateInput.value,
        type: typeInput.value,
        departmentId: deptInput ? deptInput.value : null
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateDashboard();

    // If we are in transactions view, refresh the list
    if (!document.getElementById('transactions-view').classList.contains('hidden')) {
        renderFullTransactions();
    }

    descInput.value = '';
    amountInput.value = '';
    if (deptInput) deptInput.value = "";
}

function removeTransaction(id) {
    if (confirm(translations[currentLang].delete_confirm)) {
        transactions = transactions.filter(t => t.id !== id);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        updateDashboard();
        renderFullTransactions(); // If called from full list
    }
}
window.removeTransaction = removeTransaction;

// --- Transactions View Logic ---
function renderFullTransactions() {
    fullTransactionListEl.innerHTML = '';

    const filter = filterTypeInput.value;
    let filtered = transactions;

    if (filter !== 'all') {
        filtered = transactions.filter(t => t.type === filter);
    }

    // Sort by Date Descending
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered.forEach(t => {
        const tr = document.createElement('tr');
        const isIncome = t.type === 'income';
        const typeLabel = isIncome ? translations[currentLang].type_income : translations[currentLang].type_expense;
        const typeClass = isIncome ? 'success-color' : 'danger-color';
        const sign = isIncome ? '+' : '-';

        tr.innerHTML = `
            <td>${t.date}</td>
            <td>${t.desc}</td>
            <td><span style="color: var(--${typeClass})">${typeLabel}</span></td>
            <td style="color: var(--${isIncome ? 'success-color' : 'danger-color'}); font-weight:bold;">
                ${sign}${formatMoney(Math.abs(t.amount))}
            </td>
            <td>
                <button class="delete-btn" onclick="removeTransaction(${t.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        fullTransactionListEl.appendChild(tr);
    });
}
window.renderFullTransactions = renderFullTransactions; // For onchange in select

// --- Fixed Expenses Logic ---
let fixedExpenses = JSON.parse(localStorage.getItem('fixedExpenses')) || [];

const addFixedForm = document.getElementById('add-fixed-form');
const fixedDescInput = document.getElementById('f-desc');
const fixedDayInput = document.getElementById('f-day');
const fixedAmountInput = document.getElementById('f-amount');
const fixedListEl = document.getElementById('fixed-list');
const totalFixedCostEl = document.getElementById('total-fixed-cost');

function renderFixedExpenses() {
    fixedListEl.innerHTML = '';
    let total = 0;

    const sorted = [...fixedExpenses].sort((a, b) => a.day - b.day);
    const t = translations[currentLang];

    sorted.forEach(item => {
        total += item.amount;
        const li = document.createElement('li');
        li.classList.add('transaction-item');

        li.innerHTML = `
            <div class="t-info">
                <div class="t-icon" style="background: rgba(239, 68, 68, 0.2); color: var(--danger-color);">
                    <i class="fa-solid fa-calendar-check"></i>
                </div>
                <div class="t-details">
                    <h4>${item.desc}</h4>
                    <span>${t.month_payment.replace('{day}', item.day)}</span>
                </div>
            </div>
            <div class="t-right" style="display:flex; align-items:center;">
                <span class="t-amount expense">
                    -${formatMoney(item.amount)}
                </span>
                <button class="delete-btn" onclick="removeFixedExpense(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        fixedListEl.appendChild(li);
    });

    totalFixedCostEl.innerText = `${t.month_prefix}${formatMoney(total)}`;
}

function addFixedExpense(e) {
    e.preventDefault();
    if (fixedDescInput.value.trim() === '' || fixedAmountInput.value.trim() === '') {
        alert(translations[currentLang].alert_input);
        return;
    }

    const fExpense = {
        id: Date.now(),
        desc: fixedDescInput.value,
        day: +fixedDayInput.value,
        amount: parseAmount(fixedAmountInput.value)
    };

    fixedExpenses.push(fExpense);
    localStorage.setItem('fixedExpenses', JSON.stringify(fixedExpenses));

    // Auto-add to Transactions for this month
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 0-indexed
    // Ensure day is valid (e.g., if day is 31 but month is Feb)
    let day = fExpense.day;
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    if (day > lastDayOfMonth) day = lastDayOfMonth;

    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const newTrans = {
        id: Date.now() + 1, // Ensure unique ID different from fExpense
        desc: fExpense.desc, // Same description
        amount: fExpense.amount,
        date: formattedDate,
        type: 'expense' // Boolean or string? existing uses 'expense'
    };

    transactions.push(newTrans);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateDashboard(); // Refresh dashboard to show new balance

    renderFixedExpenses();

    fixedDescInput.value = '';
    fixedDayInput.value = '';
    fixedAmountInput.value = '';
}

function removeFixedExpense(id) {
    if (confirm(translations[currentLang].delete_confirm)) {
        fixedExpenses = fixedExpenses.filter(f => f.id !== id);
        localStorage.setItem('fixedExpenses', JSON.stringify(fixedExpenses));
        renderFixedExpenses();
    }
}
window.removeFixedExpense = removeFixedExpense;

// Update showSection to render this view
const originalShowSection = showSection;
showSection = function (sectionId) {
    originalShowSection(sectionId);
    if (sectionId === 'fixed-expenses-view') renderFixedExpenses();
}

addFixedForm.addEventListener('submit', addFixedExpense);

// --- Goals Logic ---
function renderGoals() {
    goalsListContainer.innerHTML = '';
    const t = translations[currentLang];

    goals.forEach(goal => {
        const percent = Math.min((goal.current / goal.target) * 100, 100);
        const el = document.createElement('div');
        el.className = 'goal-card-item glass-panel';

        el.innerHTML = `
            <div class="goal-header">
                <h3>${goal.name}</h3>
                <button class="delete-btn" onclick="removeGoal(${goal.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="goal-amounts">
                <span>${formatMoney(goal.current)}</span>
                <span>/ ${formatMoney(goal.target)}</span>
            </div>
            <div class="goal-progress">
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${percent}%"></div>
                </div>
                <div style="text-align: right; font-size: 0.8rem; color: var(--primary-color);">
                    ${Math.round(percent)}${t.achieved}
                </div>
            </div>
        `;
        goalsListContainer.appendChild(el);
    });
}

function addGoal(e) {
    e.preventDefault();

    const newGoal = {
        id: Date.now(),
        name: goalNameInput.value,
        target: parseAmount(goalTargetInput.value),
        current: parseAmount(goalCurrentInput.value)
    };

    goals.push(newGoal);
    localStorage.setItem('goals', JSON.stringify(goals));

    renderGoals();

    goalNameInput.value = '';
    goalTargetInput.value = '';
    goalCurrentInput.value = '';
}

function removeGoal(id) {
    if (confirm(translations[currentLang].delete_confirm)) {
        goals = goals.filter(g => g.id !== id);
        localStorage.setItem('goals', JSON.stringify(goals));
        renderGoals();
    }
}
window.removeGoal = removeGoal;

// --- Settings Logic ---
function saveUserProfile() {
    const name = settingUsernameInput.value.trim();
    if (name) {
        userProfile.name = name;
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        updateUserProfileDisplay();
        alert(translations[currentLang].alert_save);
    }
}
window.saveUserProfile = saveUserProfile;

function resetAllData() {
    if (confirm(translations[currentLang].alert_reset)) {
        localStorage.clear();
        transactions = [];
        goals = [];
        userProfile = { name: '사장님' };
        currentLang = 'ko'; // Reset language
        currentCurrency = 'KRW'; // Reset currency
        location.reload();
    }
}
window.resetAllData = resetAllData;

// --- Chart Logic ---
function initChart() {
    const ctx = document.getElementById('financeChart').getContext('2d');

    if (financeChart) {
        financeChart.destroy();
    }

    financeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '순이익 (누적)',
                data: [],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

function updateChart() {
    if (!financeChart) return;

    // Sort Chronologically
    const sorted = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Group by Date or just cumulative
    const labels = sorted.map(t => t.date);

    let cumulative = 0;
    const dataPoints = sorted.map(t => {
        const val = t.type === 'income' ? t.amount : -t.amount;
        cumulative += val;
        return cumulative;
    });

    financeChart.data.labels = labels;
    financeChart.data.datasets[0].data = dataPoints;
    financeChart.update();
}


// --- Department Logic ---
function renderDepartments() {
    if (!departmentsListContainer) return;
    departmentsListContainer.innerHTML = '';
    const t = translations[currentLang];

    departments.forEach(dept => {
        // Calculate spent for this department
        const spent = transactions
            .filter(t => t.departmentId == dept.id && t.type === 'expense')
            .reduce((acc, t) => acc + t.amount, 0);

        const percent = Math.min((spent / dept.budget) * 100, 100);
        const el = document.createElement('div');
        el.className = 'goal-card-item glass-panel';

        el.innerHTML = `
            <div class="goal-header">
                <h3>${dept.name}</h3>
                <button class="delete-btn" onclick="removeDepartment(${dept.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="goal-amounts">
                <span>${formatMoney(spent)}</span>
                <span>/ ${formatMoney(dept.budget)}</span>
            </div>
            <div class="goal-progress">
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${percent}%; background-color: var(--danger-color);"></div>
                </div>
                <div style="text-align: right; font-size: 0.8rem; color: var(--danger-color);">
                    ${Math.round(percent)}${t.used || '%'}
                </div>
            </div>
        `;
        departmentsListContainer.appendChild(el);
    });
}

function addDepartment(e) {
    e.preventDefault();
    if (deptNameInput.value.trim() === '' || deptBudgetInput.value.trim() === '') {
        alert(translations[currentLang].alert_input);
        return;
    }

    const newDept = {
        id: Date.now(),
        name: deptNameInput.value,
        budget: parseAmount(deptBudgetInput.value)
    };

    departments.push(newDept);
    localStorage.setItem('departments', JSON.stringify(departments));

    renderDepartments();
    updateDepartmentSelect();

    deptNameInput.value = '';
    deptBudgetInput.value = '';
}

function removeDepartment(id) {
    if (confirm(translations[currentLang].delete_confirm)) {
        departments = departments.filter(d => d.id !== id);
        localStorage.setItem('departments', JSON.stringify(departments));
        renderDepartments();
        updateDepartmentSelect();
    }
}

function updateDepartmentSelect() {
    // Save current selection if any
    const currentVal = deptInput ? deptInput.value : '';

    // Clear options except first (Select None)
    if (!deptInput) return;

    while (deptInput.options.length > 1) {
        deptInput.remove(1);
    }

    departments.forEach(dept => {
        const opt = document.createElement('option');
        opt.value = dept.id;
        opt.innerText = dept.name;
        deptInput.appendChild(opt);
    });

    // Restore selection if still valid
    if (departments.find(d => d.id == currentVal)) {
        deptInput.value = currentVal;
    }
}
window.removeDepartment = removeDepartment;

// Update showSection to render Departments view
const originalShowSectionDept = showSection; // Rename to avoid conflict if reassigned
showSection = function (sectionId) {
    // Call the original (or previously modified) function
    originalShowSectionDept(sectionId);

    if (sectionId === 'departments-view') {
        renderDepartments();
    }
}

// --- Init ---
function init() {
    // Set default date
    dateInput.valueAsDate = new Date();

    // Set Selectors
    languageSelector.value = currentLang;
    currencySelector.value = currentCurrency;

    // Init Department Select
    updateDepartmentSelect();

    updateLanguage(currentLang);

    // Formatting Listeners
    initInputFormatting();

    // Load User Profile
    settingUsernameInput.value = userProfile.name;

    // Navigation Listeners
    setupNavigation();

    // Init Chart
    initChart();

    // Listeners
    languageSelector.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });
    currencySelector.addEventListener('change', (e) => {
        updateCurrency(e.target.value);
    });
}
// ... (Navigation, Dashboard, Transactions, Fixed Expenses, Goals Logic) ...

// Ensure addFixedExpense logic (from previous step) is kept.

// Ensure Event Listeners are attached
addTransactionForm.onsubmit = addTransaction; // Overwrite to ensure latest function
if (addGoalForm) addGoalForm.onsubmit = addGoal;
if (addFixedForm) addFixedForm.onsubmit = addFixedExpense;
if (addDeptForm) addDeptForm.onsubmit = addDepartment;

// Start
init();
