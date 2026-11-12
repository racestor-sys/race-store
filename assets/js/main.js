/* =========================================================
   Race Store — سكربت الموقع
   ========================================================= */

/* ---------- الإعدادات السريعة ---------- */
const CONFIG = {
  // رقم الواتساب الأساسي بالصيغة الدولية بدون + وبدون أصفار (مصر: 20 + الرقم بدون 0)
  whatsappNumber: "201021612723",
  // الرقم كما يظهر للعميل
  displayPhone: "01021612723",
  // رقم الواتساب الاحتياطي
  backupWhatsappNumber: "201099163786",
  backupDisplayPhone: "01099163786",
  // يوزر التليجرام بدون @
  telegramUser: "amk_race",
};

const WA_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;

/* =========================================================
   الألعاب والباقات
   لإضافة لعبة جديدة: انسخ نفس الشكل وجوه categories أضف أقسامها.
   ========================================================= */
const GAMES = {
  freefire: {
    name: "فري فاير",
    emoji: "🔥",
    tagline: "جواهر • عضويات • دروب",
    idLabel: "ID فري فاير",
    idTitle: "اكتب ID فري فاير",
    idHint: "اختياري — بس هيسرّع طلبك ويضمن الشحن على الحساب الصح.",
    idPlaceholder: "123456789",
    categories: {
      id: {
        label: "💎 شحن ID",
        emoji: "💎",
        accent: "#2563eb",
        accentInk: "#1d4ed8",
        orderLabel: "شحن شدات فري فاير بالـ ID",
        mode: "بالـ ID",
        note: "💎 كل الباقات دي بتتشحن بالـ ID مباشرة — من غير بيانات دخول للحساب.",
        items: [
          { name: "110", unit: "جوهرة", price: 60, hot: true },
          { name: "231", unit: "جوهرة", price: 110 },
          { name: "341", unit: "جوهرة", price: 165 },
          { name: "460", unit: "جوهرة", price: 240 },
          { name: "583", unit: "جوهرة", price: 280 },
          { name: "814", unit: "جوهرة", price: 390 },
          { name: "1040", unit: "جوهرة", price: 500 },
          { name: "1188", unit: "جوهرة", price: 530 },
          { name: "1771", unit: "جوهرة", price: 860 },
          { name: "2002", unit: "جوهرة", price: 950 },
          { name: "2420", unit: "جوهرة", price: 1080 },
          { name: "3000", unit: "جوهرة", price: 1350 },
        ],
      },

      membership: {
        label: "⭐ العضويات",
        emoji: "⭐",
        accent: "#f59e0b",
        accentInk: "#b45309",
        orderLabel: "عضوية فري فاير (تفعيل على الـ ID)",
        mode: "بالـ ID",
        note: "⭐ العضويات بتتفعل على الـ ID فور تأكيد الطلب — مفيش بيانات دخول مطلوبة.",
        items: [
          { name: "أسبوعي", unit: "عضوية ID", price: 125, textName: true },
          { name: "شهري", unit: "عضوية ID", price: 550, textName: true },
          { name: "مستوى", unit: "عضوية ID", price: 210, textName: true },
        ],
      },

      account: {
        label: "🎮 شحن أكونت",
        emoji: "🎮",
        accent: "#0891b2",
        accentInk: "#0e7490",
        orderLabel: "شحن أكونت فري فاير",
        mode: "شحن أكونت",
        note: "🎮 شحن الأكونت بيتم بالاتفاق الآمن على واتساب — مش بنطلب باسورد هنا.",
        idTitle: "رقم الموبايل أو ID",
        idHint: "اختياري — هنرتب معاك بيانات الشحن الآمنة على واتساب.",
        idPlaceholder: "010xxxxxxxx",
        items: [
          { name: "100", unit: "جوهرة — أكونت", price: 50 },
          { name: "300", unit: "جوهرة — أكونت", price: 150 },
          { name: "500", unit: "جوهرة — أكونت", price: 225 },
          { name: "1000", unit: "جوهرة — أكونت", price: 400 },
          { name: "2000", unit: "جوهرة — أكونت", price: 800 },
          { name: "شهري", unit: "عضوية أكونت", price: 400, textName: true },
          { name: "أسبوعي", unit: "عضوية أكونت", price: 85, textName: true },
          { name: "دروب 50", unit: "دروب", price: 50, textName: true },
          { name: "دروب 100", unit: "دروب", price: 100, textName: true },
        ],
      },
    },
  },

  pubg: {
    name: "ببجي موبايل",
    emoji: "🎯",
    tagline: "شدات • شحن بالـ ID",
    idLabel: "ID ببجي",
    idTitle: "اكتب ID ببجي",
    idHint: "اختياري — بس هيسرّع طلبك ويضمن الشحن على الحساب الصح.",
    idPlaceholder: "5123456789",
    categories: {
      shards: {
        label: "🎫 شحن شدات",
        emoji: "🎫",
        accent: "#f59e0b",
        accentInk: "#b45309",
        orderLabel: "شحن شدات ببجي موبايل بالـ ID",
        mode: "بالـ ID",
        note: "🎫 شحن الشدات بيتم بالـ ID مباشرة — متاح كميات أكبر، كلّمنا على واتساب.",
        items: [
          { name: "60", unit: "شدة", price: 60, hot: true },
          { name: "120", unit: "شدة", price: 115 },
          { name: "325", unit: "شدة", price: 270 },
          { name: "385", unit: "شدة", price: 310 },
          { name: "660", unit: "شدة", price: 510 },
          { name: "1800", unit: "شدة", price: 1300 },
          { name: "3850", unit: "شدة", price: 2600 },
          { name: "8100", unit: "شدة", price: 5200 },
        ],
      },
    },
  },

  pes: {
    name: "بيس",
    emoji: "⚽",
    tagline: "كوينز • أكونت + كونامي",
    idLabel: "بيانات حساب كونامي",
    idTitle: "ID كونامي أو الإيميل",
    idHint: "شحن بيس أكونت فقط — لازم الحساب يكون مربوط بكونامي.",
    idPlaceholder: "Konami ID / الإيميل",
    idInputMode: "text",
    missingId: "هبعتلك بيانات حساب كونامي على واتساب.",
    categories: {
      coins: {
        label: "🪙 شحن كوينز",
        emoji: "🪙",
        accent: "#16a34a",
        accentInk: "#15803d",
        orderLabel: "شحن كوينز بيس (أكونت + ربط كونامي)",
        mode: "أكونت + ربط كونامي",
        note: "⚽ شحن بيس أكونت فقط — لازم الحساب يكون مربوط بكونامي. هنرتب معاك خطوات الربط والدفع الآمن على واتساب.",
        items: [
          { name: "100", unit: "كوين", price: 80, hot: true },
          { name: "190", unit: "كوين", price: 70 },
          { name: "300", unit: "كوين", price: 200 },
          { name: "500", unit: "كوين", price: 180 },
          { name: "1000", unit: "كوين", price: 500 },
          { name: "1500", unit: "كوين", price: 485 },
          { name: "2000", unit: "كوين", price: 920 },
          { name: "3000", unit: "كوين", price: 1350 },
          { name: "4500", unit: "كوين", price: 1360 },
          { name: "5000", unit: "كوين", price: 2050 },
          { name: "10000", unit: "كوين", price: 3600 },
          { name: "15000", unit: "كوين", price: 5200 },
        ],
      },

      players: {
        label: "⭐ نجوم وبياكدجات",
        emoji: "⭐",
        accent: "#0284c7",
        accentInk: "#0369a1",
        orderLabel: "بياكدجات نجوم بيس",
        mode: "أكونت + ربط كونامي",
        note: "⭐ بياكدجات نجوم بيس بتتفعل على الأكونت المربوط بكونامي — هنأكد معاك البياكدج قبل الشحن.",
        items: [
          { name: "سواريز", unit: "بياكدج", price: 60, textName: true },
          { name: "كاسياس", unit: "بياكدج", price: 140, textName: true },
          { name: "تياجو ألكانتارا", unit: "بياكدج", price: 50, textName: true },
          { name: "عصام الحضري", unit: "بياكدج", price: 50, textName: true },
        ],
      },
    },
  },

  bloodstrike: {
    name: "بلود سترايك",
    emoji: "🩸",
    tagline: "جولد • باسات بالـ ID",
    idLabel: "ID بلود سترايك",
    idTitle: "اكتب ID بلود سترايك",
    idHint: "اختياري — بس هيسرّع طلبك ويضمن الشحن على الحساب الصح.",
    idPlaceholder: "123456789",
    categories: {
      gold: {
        label: "🪙 شحن جولد",
        emoji: "🪙",
        accent: "#dc2626",
        accentInk: "#b91c1c",
        orderLabel: "شحن بلود سترايك بالـ ID",
        mode: "بالـ ID",
        note: "🩸 شحن بلود سترايك بيتم بالـ ID مباشرة — من غير بيانات دخول للحساب.",
        items: [
          { name: "100", unit: "جولد", price: 65, hot: true },
          { name: "320", unit: "جولد", price: 160 },
          { name: "540", unit: "جولد", price: 250 },
          { name: "1100", unit: "جولد", price: 500 },
          { name: "2250", unit: "جولد", price: 950 },
          { name: "5800", unit: "جولد", price: 2450 },
        ],
      },

      passes: {
        label: "🎟️ باسات وكروت",
        emoji: "🎟️",
        accent: "#db2777",
        accentInk: "#be185d",
        orderLabel: "باسات بلود سترايك",
        mode: "باس / كارت على الـ ID",
        note: "🎟️ الباسات والكروت بتتفعل على الـ ID — هنأكد معاك النوع قبل الشحن.",
        items: [
          { name: "Strike Pass Elite", unit: "باس", price: 220, textName: true },
          { name: "Strike Pass Elite+", unit: "باس", price: 450, textName: true },
          { name: "Level Up Card", unit: "كارت", price: 150, textName: true },
        ],
      },
    },
  },

  roblox: {
    name: "روبلوكس",
    emoji: "🧱",
    tagline: "روبوكس • اشتراك شهري",
    idLabel: "يوزر روبلوكس",
    idTitle: "اكتب يوزر روبلوكس (Username)",
    idHint: "اختياري — اكتب اسم المستخدم بس، من غير أي بيانات دخول.",
    idPlaceholder: "Roblox username",
    idInputMode: "text",
    missingId: "هبعتلك يوزر روبلوكس على واتساب.",
    categories: {
      robux: {
        label: "🪙 شحن روبوكس",
        emoji: "🪙",
        accent: "#e2231a",
        accentInk: "#b91c1c",
        orderLabel: "شحن روبوكس",
        mode: "بالـ يوزر",
        note: "🧱 شحن روبوكس متاح بأي كمية — بيتشحن على يوزر الحساب من غير بيانات دخول. الكميات الأكبر بالطلب.",
        items: [
          { name: "80", unit: "روبوكس", price: 70 },
          { name: "400", unit: "روبوكس", price: 250 },
          { name: "800", unit: "روبوكس", price: 480 },
          { name: "1200", unit: "روبوكس", price: 730, hot: true },
          { name: "1700", unit: "روبوكس", price: 950 },
          { name: "3400", unit: "روبوكس", price: 1820 },
          { name: "4500", unit: "روبوكس", price: 2170 },
          { name: "10000", unit: "روبوكس", price: 4350 },
        ],
      },

      membership: {
        label: "⭐ الاشتراك الشهري",
        emoji: "⭐",
        accent: "#d97706",
        accentInk: "#b45309",
        orderLabel: "اشتراك روبلوكس الشهري (1000 روبوكس)",
        mode: "تفعيل على الحساب",
        idLabel: "يوزر روبلوكس أو بيانات التفعيل",
        idTitle: "يوزر روبلوكس أو بيانات التفعيل",
        idHint: "اختياري — اكتب يوزر الحساب، وهنرتب معاك التفعيل الآمن على واتساب.",
        missingId: "هبعتلك بيانات تفعيل الاشتراك على واتساب.",
        note: "⭐ الاشتراك الشهري 1000 روبوكس — هنأكد معاك بيانات التفعيل المناسبة على واتساب.",
        items: [
          { name: "شهري", unit: "1000 روبوكس", price: 650, textName: true, hot: true },
        ],
      },
    },
  },

  tiktok: {
    name: "تيك توك",
    emoji: "🎵",
    tagline: "كوينز • شحن يوزر",
    idLabel: "يوزر تيك توك",
    idTitle: "اكتب يوزر تيك توك (Username)",
    idHint: "اختياري — اكتب اسم المستخدم بس، من غير بيانات دخول.",
    idPlaceholder: "TikTok username",
    idInputMode: "text",
    missingId: "هبعتلك يوزر تيك توك على واتساب.",
    categories: {
      coins: {
        label: "🪙 شحن كوينز",
        emoji: "🪙",
        accent: "#fe2c55",
        accentInk: "#d81b45",
        orderLabel: "شحن كوينز تيك توك",
        mode: "بالـ يوزر",
        note: "🎵 شحن كوينز تيك توك بيتم على يوزر الحساب — من غير بيانات دخول. الكميات الأكبر متاحة بالطلب.",
        items: [
          { name: "70", unit: "كوين", price: 55 },
          { name: "140", unit: "كوين", price: 110 },
          { name: "350", unit: "كوين", price: 250 },
          { name: "700", unit: "كوين", price: 490 },
          { name: "1000", unit: "كوين", price: 650, hot: true },
          { name: "2000", unit: "كوين", price: 1250 },
          { name: "3000", unit: "كوين", price: 1850 },
          { name: "5000", unit: "كوين", price: 3000 },
        ],
      },
    },
  },

  subscriptions: {
    name: "اشتراكات",
    emoji: "📺",
    tagline: "شاهد • سبوتيفاي • AI",
    messageLabel: "الخدمة",
    kind: "service",
    idLabel: "بيانات التواصل",
    idTitle: "الإيميل أو رقم الموبايل",
    idHint: "اختياري — هنرتب معاك تفعيل الاشتراك على واتساب.",
    idPlaceholder: "example@gmail.com",
    idInputMode: "email",
    missingId: "هبعتلك بيانات تفعيل الاشتراك على واتساب.",
    categories: {
      platforms: {
        label: "📺 منصات",
        emoji: "📺",
        accent: "#0d9488",
        accentInk: "#0f766e",
        orderLabel: "اشتراكات المنصات",
        mode: "اشتراك",
        note: "📺 يانجو بلاي، سبوتيفاي، شاهد وواتشيت — التفعيل بعد تأكيد الطلب على واتساب.",
        items: [
          { name: "يانجو بلاي", unit: "3 شهور", price: 300, textName: true, hot: true },
          { name: "يانجو بلاي", unit: "6 شهور", price: 450, textName: true },
          { name: "سبوتيفاي", unit: "3 شهور", price: 120, textName: true },
          { name: "شاهد", unit: "اشتراك", price: 120, textName: true },
          { name: "واتشيت", unit: "اشتراك", price: 120, textName: true },
        ],
      },

      ai: {
        label: "🤖 ذكاء اصطناعي",
        emoji: "🤖",
        accent: "#7c3aed",
        accentInk: "#6d28d9",
        orderLabel: "اشتراكات الذكاء الاصطناعي",
        mode: "اشتراك",
        note: "🤖 جيمناي وChatGPT — ابعتلنا الإيميل أو رقم الموبايل وهنأكد مدة التفعيل على واتساب.",
        items: [
          { name: "جيمناي برو", unit: "3 شهور", price: 100, textName: true, hot: true },
          { name: "جيمناي بلس", unit: "12 شهر", price: 200, textName: true },
          { name: "ChatGPT", unit: "اشتراك", price: 500, textName: true },
        ],
      },
    },
  },
};

/* ---------- أدوات مساعدة ---------- */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

let currentGame = "freefire";
let currentTab = "id";

function getGame() {
  return GAMES[currentGame];
}

function getCategory() {
  return getGame().categories[currentTab];
}

function money(value) {
  return Number(value).toLocaleString("en-US");
}

function whatsappLink(message, number = CONFIG.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function packageMessage(gameKey, tabKey, item) {
  const game = GAMES[gameKey];
  const category = game.categories[tabKey];
  const id = ($("#ffId")?.value || "").trim();
  const idLabel = category.idLabel || (tabKey === "account" ? "بيانات التواصل" : game.idLabel);

  const lines = [
    "مرحبًا Race Store 👋",
    `${game.messageLabel || "اللعبة"}: ${game.name}`,
    `أرغب في: ${category.orderLabel}`,
  ];

  if (category.mode) lines.push(`طريقة الشحن: ${category.mode}`);

  lines.push(
    `الباقة: ${item.name}${item.unit ? ` (${item.unit})` : ""}`,
    `السعر: ${item.price} ج.م`
  );

  if (id) {
    lines.push(`${idLabel}: ${id}`);
  } else if (tabKey === "account") {
    lines.push("هبعتلك بيانات الشحن على واتساب.");
  } else {
    lines.push(category.missingId || game.missingId || `هبعتلك ${idLabel} هنا 👇`);
  }

  lines.push("", "في انتظار تأكيد الطلب 🙏");
  return lines.join("\n");
}

/* ---------- تفعيل كل روابط الواتساب الثابتة ---------- */
function initWhatsappLinks() {
  $$(".js-wa").forEach((link) => {
    const message = link.dataset.message || "مرحبًا Race Store 👋 عايز أشحن لعبة أو اشتراك.";
    const number = link.dataset.waNumber || CONFIG.whatsappNumber;
    link.href = whatsappLink(message, number);
    if (!link.hasAttribute("target")) {
      link.target = "_blank";
      link.rel = "noopener";
    }
  });
}

/* ---------- رسم اختيار اللعبة ---------- */
function renderGameTabs() {
  const host = $("#gameTabs");
  if (!host) return;

  host.innerHTML =
    Object.entries(GAMES)
      .map(
        ([key, game]) => `
        <button class="game-tab ${key === currentGame ? "is-active" : ""}" type="button"
                data-game="${key}" aria-pressed="${key === currentGame}">
          <span class="game-emoji" aria-hidden="true">${game.emoji}</span>
          <span>${game.name}</span>
          <small>${game.tagline}</small>
        </button>
      `
      )
      .join("") +
    `
      <div class="game-tab soon" aria-disabled="true">
        <span class="game-emoji" aria-hidden="true">🎮</span>
        <span>المزيد</span>
        <small>قريبًا</small>
      </div>
    `;
}

function updateGameTabsActive() {
  $$("#gameTabs .game-tab[data-game]").forEach((button) => {
    const active = button.dataset.game === currentGame;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

/* ---------- رسم تابات الأقسام ---------- */
function renderCategoryTabs() {
  const host = $("#packageTabs");
  if (!host) return;

  host.innerHTML = Object.entries(getGame().categories)
    .map(
      ([key, category]) => `
      <button class="filter ${key === currentTab ? "is-active" : ""}" type="button"
              data-tab="${key}" role="tab" aria-selected="${key === currentTab}">
        ${category.label} <span class="tab-count">${category.items.length}</span>
      </button>
    `
    )
    .join("");
}

/* ---------- رسم خانات الباقات ---------- */
function renderPackages() {
  const grid = $("#packagesGrid");
  const category = getCategory();
  if (!grid || !category) return;

  grid.classList.toggle("is-single", category.items.length === 1);
  grid.innerHTML = category.items
    .map((item, index) => {
      const nameClass = item.textName ? "pack-name text" : "pack-name";
      const unit = item.unit ? `<small>${item.unit}</small>` : "";
      const hot = item.hot ? `<span class="pack-hot">الأكثر طلبًا 🔥</span>` : "";

      return `
        <a class="pack-card" data-index="${index}" href="${whatsappLink(packageMessage(currentGame, currentTab, item))}"
           target="_blank" rel="noopener" style="--accent:${category.accent}; --accent-ink:${category.accentInk || category.accent}">
          <span class="pack-top">
            <span class="pack-emoji" aria-hidden="true">${category.emoji}</span>
            ${hot}
          </span>
          <span class="${nameClass}">${item.name}${unit}</span>
          <span class="pack-price"><b>${money(item.price)}</b><small>ج.م</small></span>
          <span class="pack-cta">${WA_ICON} اطلب عبر واتساب</span>
        </a>
      `;
    })
    .join("");

  updateCategoryCopy();
}

/* ---------- تحديث النصوص حسب اللعبة والتاب ---------- */
function updateCategoryCopy() {
  const game = getGame();
  const category = getCategory();
  const note = $("#categoryNote");
  const idTitle = $(".id-bar-text strong");
  const idHint = $(".id-bar-text > span");
  const idInput = $("#ffId");

  if (note) note.textContent = category.note;

  const title = category.idTitle || game.idTitle;
  const hint = category.idHint || game.idHint;
  const placeholder = category.idPlaceholder || game.idPlaceholder;

  if (idTitle) idTitle.textContent = title;
  if (idHint) idHint.textContent = hint;
  if (idInput) {
    const inputMode = game.idInputMode || "numeric";
    idInput.placeholder = placeholder;
    idInput.maxLength = inputMode === "numeric" ? 20 : 80;
    idInput.setAttribute("inputmode", inputMode);
    idInput.setAttribute("aria-label", title);
  }
}

/* ---------- تفريغ خانة الـ ID عند تغيير اللعبة ---------- */
function resetIdField() {
  const input = $("#ffId");
  const status = $("#idStatus");
  if (input) input.value = "";
  if (status) {
    status.textContent = "";
    status.classList.remove("show");
  }
}

/* ---------- تبديل اللعبة ---------- */
function selectGame(gameKey) {
  if (!GAMES[gameKey]) return;

  currentGame = gameKey;
  currentTab = Object.keys(GAMES[gameKey].categories)[0];

  resetIdField();
  updateGameTabsActive();
  renderCategoryTabs();
  renderPackages();
}

/* ---------- تبديل تاب الباقات ---------- */
function selectTab(tabKey) {
  if (!getGame().categories[tabKey]) return;
  currentTab = tabKey;

  $$("#packageTabs .filter").forEach((button) => {
    const active = button.dataset.tab === tabKey;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  renderPackages();
}

/* ---------- ربط اختيار اللعبة ---------- */
function initGameTabs() {
  const host = $("#gameTabs");
  if (!host) return;

  host.addEventListener("click", (event) => {
    const button = event.target.closest("[data-game]");
    if (!button) return;
    selectGame(button.dataset.game);
  });
}

/* ---------- ربط تابات الأقسام وروابط الفوتر ---------- */
function initTabs() {
  const tabsHost = $("#packageTabs");
  if (tabsHost) {
    tabsHost.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tab]");
      if (!button) return;
      selectTab(button.dataset.tab);
    });
  }

  $$("[data-game-tab]").forEach((link) => {
    link.addEventListener("click", () => {
      const gameKey = link.dataset.gameTab;
      if (!GAMES[gameKey]) return;

      selectGame(gameKey);
      const tabKey = link.dataset.packageTab;
      if (tabKey && GAMES[gameKey].categories[tabKey]) selectTab(tabKey);
    });
  });
}

/* ---------- خانة الـ ID ---------- */
function initIdField() {
  const input = $("#ffId");
  const status = $("#idStatus");
  const grid = $("#packagesGrid");
  if (!input || !grid) return;

  input.addEventListener("input", () => {
    const inputMode = getGame().idInputMode || "numeric";

    if (inputMode === "numeric") {
      input.value = input.value.replace(/[^\d+]/g, "").slice(0, 20);
    } else {
      input.value = input.value.replace(/\s+/g, "").slice(0, 80);
    }

    if (status) {
      status.textContent = input.value ? "✓ هيتضاف للطلب" : "";
      status.classList.toggle("show", Boolean(input.value));
    }

    const category = getCategory();
    $$(".pack-card", grid).forEach((card) => {
      const index = Number(card.dataset.index);
      const item = category?.items[index];
      if (!item) return;
      card.href = whatsappLink(packageMessage(currentGame, currentTab, item));
    });
  });
}

/* ---------- عرض رقم الهاتف من الإعدادات ---------- */
function initPhoneDisplay() {
  const formatted = CONFIG.displayPhone.replace(/^(\d{4})(\d{3})(\d{4})$/, "$1 $2 $3");
  const backupFormatted = CONFIG.backupDisplayPhone.replace(/^(\d{4})(\d{3})(\d{4})$/, "$1 $2 $3");

  $$("[data-phone-display]").forEach((element) => {
    element.textContent = formatted;
  });

  $$("[data-phone-display-backup]").forEach((element) => {
    element.textContent = backupFormatted;
  });

  $$("[data-phone-tel]").forEach((link) => {
    link.href = `tel:+${CONFIG.whatsappNumber}`;
  });

  $$("[data-phone-tel-backup]").forEach((link) => {
    link.href = `tel:+${CONFIG.backupWhatsappNumber}`;
  });

  $$("[data-telegram-link]").forEach((link) => {
    link.href = `https://t.me/${CONFIG.telegramUser}`;
  });

  $$("[data-telegram-user]").forEach((element) => {
    element.textContent = `@${CONFIG.telegramUser}`;
  });
}

/* ---------- قائمة الموبايل ---------- */
function initMobileMenu() {
  const toggle = $("#menuToggle");
  const nav = $("#nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "فتح القائمة");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
  });

  $$("a", nav).forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

/* ---------- تأثير الهيدر عند التمرير ---------- */
function initHeaderScroll() {
  const header = $("#siteHeader");
  if (!header) return;

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- الأسئلة الشائعة (سؤال واحد مفتوح) ---------- */
function initFaq() {
  const items = $$(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

/* ---------- ظهور العناصر عند التمرير ---------- */
function initReveal() {
  const elements = $$(".reveal");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

/* ---------- السنة في الفوتر ---------- */
function initYear() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

/* ---------- التشغيل ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initWhatsappLinks();
  initPhoneDisplay();
  renderGameTabs();
  renderCategoryTabs();
  renderPackages();
  initGameTabs();
  initTabs();
  initIdField();
  initMobileMenu();
  initHeaderScroll();
  initFaq();
  initReveal();
  initYear();
});
