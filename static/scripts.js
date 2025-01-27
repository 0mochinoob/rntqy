document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('join-button').addEventListener('click', function () {
        const target = document.getElementById('join');
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const navLinks = document.querySelectorAll('.header a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    const joinButton = document.getElementById('join-button');
    joinButton.addEventListener('click', function () {
        const target = document.getElementById('ranks');
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth',
        });
    });
});

document.getElementById("ja").addEventListener("click", () => {
    location.reload();
});

const translations = {
    en: {
        about: "Features",
        rules: "Rules",
        join: "How to Join",
        hero: { title: "The Best PvP Practice.", subtitle: "Enjoy thrilling battles on rntqy!" },
        joinButton: "Join the Server Now",
        sections: {
            about: [
                "1: Servers located in Japan for fast connections from East Asia!",
                "2: A variety of duels to enjoy!"
            ],
            rules: [
                "1: No cheating or use of illegal tools",
                "2: No abusive language",
                "3: No server attacks",
                "4: No spamming",
                "Violations will result in penalties."
            ],
            join: [
                "IP Address: play.rntqy.net",
                "Supported Versions: JE 1.20–1.21.4, BE 1.20–",
                "* No need to change the port number for Bedrock Edition",
                "Join the Discord Server"
            ]
        },
        contact: {
            heading: "Contact Us",
            emailLabel: "Email Address",
            nameLabel: "Name",
            messageLabel: "Message",
            sendButton: "Send",
            completionMessage: "Submission Completed"
        }
    },
    zh: {
        about: "特点",
        rules: "规则",
        join: "如何加入",
        hero: { title: "最佳的 PvP 练习。", subtitle: "在 rntqy 尽享刺激对战！" },
        joinButton: "立即加入服务器",
        sections: {
            about: [
                "1: 日本服务器，东亚连接速度快！",
                "2: 提供多种决斗模式！"
            ],
            rules: [
                "1: 禁止使用作弊工具",
                "2: 禁止侮辱性语言",
                "3: 禁止攻击服务器",
                "4: 禁止垃圾信息",
                "违反规则将受到惩罚。"
            ],
            join: [
                "IP 地址: play.rntqy.net",
                "支持版本: JE 1.20–1.21.4，BE 1.20–",
                "* 对于基岩版，无需更改端口号",
                "加入 Discord 服务器"
            ]
        },
        contact: {
            heading: "联系我们",
            emailLabel: "电子邮件地址",
            nameLabel: "姓名",
            messageLabel: "信息",
            sendButton: "发送",
            completionMessage: "提交完成"
        }
    },
    ko: {
        about: "특징",
        rules: "규칙",
        join: "참여 방법",
        hero: { title: "최고의 PvP 연습.", subtitle: "rntqy에서 스릴 넘치는 대전을 즐기세요!" },
        joinButton: "지금 서버 참여",
        sections: {
            about: [
                "1: 일본 서버로 동아시아에서 빠른 연결 속도!",
                "2: 다양한 듀얼 모드 제공!"
            ],
            rules: [
                "1: 치트 또는 불법 도구 사용 금지",
                "2: 욕설 금지",
                "3: 서버 공격 금지",
                "4: 스팸 금지",
                "규칙 위반 시 제재를 받습니다."
            ],
            join: [
                "IP 주소: play.rntqy.net",
                "지원 버전: JE 1.20–1.21.4, BE 1.20–",
                "* 베드락 에디션은 포트 번호 변경 불필요",
                "Discord 서버에 참여"
            ]
        },
        contact: {
            heading: "문의하기",
            emailLabel: "이메일 주소",
            nameLabel: "이름",
            messageLabel: "메시지",
            sendButton: "보내기",
            completionMessage: "제출 완료"
        }
    },
    ru: {
        about: "Особенности",
        rules: "Правила",
        join: "Как присоединиться",
        hero: { title: "Лучшая практика PvP.", subtitle: "Наслаждайтесь захватывающими битвами на rntqy!" },
        joinButton: "Присоединяйтесь к серверу сейчас",
        sections: {
            about: [
                "1: Серверы расположены в Японии для быстрого соединения из Восточной Азии!",
                "2: Разнообразные дуэли для удовольствия!"
            ],
            rules: [
                "1: Запрещено использование читов или нелегальных инструментов",
                "2: Запрещены оскорбления",
                "3: Запрещены атаки на сервер",
                "4: Запрещен спам",
                "Нарушение приведет к наказаниям."
            ],
            join: [
                "IP-адрес: play.rntqy.net",
                "Поддерживаемые версии: JE 1.20–1.21.4, BE 1.20–",
                "* Нет необходимости менять порт для Bedrock Edition",
                "Присоединяйтесь к Discord-серверу"
            ]
        },
        contact: {
            heading: "Свяжитесь с нами",
            emailLabel: "Адрес электронной почты",
            nameLabel: "Имя",
            messageLabel: "Сообщение",
            sendButton: "Отправить",
            completionMessage: "Отправлено"
        }
    },
    tw: {
        about: "特色",
        rules: "規則",
        join: "如何加入",
        hero: { title: "最棒的 PvP 練習。", subtitle: "在 rntqy 享受刺激的戰鬥！" },
        joinButton: "立即加入伺服器",
        sections: {
            about: [
                "1: 伺服器位於日本，提供東亞地區快速連線！",
                "2: 各種精彩的對決等你體驗！"
            ],
            rules: [
                "1: 禁止作弊或使用非法工具",
                "2: 禁止使用侮辱性語言",
                "3: 禁止攻擊伺服器",
                "4: 禁止刷屏",
                "違規者將受到處罰。"
            ],
            join: [
                "IP 地址: play.rntqy.net",
                "支持版本: JE 1.20–1.21.4, BE 1.20–",
                "* Bedrock 版無需更改埠號",
                "加入 Discord 伺服器"
            ]
        },
        contact: {
            heading: "聯絡我們",
            emailLabel: "電子郵件地址",
            nameLabel: "姓名",
            messageLabel: "訊息",
            sendButton: "發送",
            completionMessage: "提交完成"
        }
    },
    pt: {
        about: "Recursos",
        rules: "Regras",
        join: "Como Entrar",
        hero: { title: "A Melhor Prática de PvP.", subtitle: "Desfrute de batalhas emocionantes no rntqy!" },
        joinButton: "Entre no Servidor Agora",
        sections: {
            about: [
                "1: Servidores localizados no Japão para conexões rápidas na Ásia Oriental!",
                "2: Uma variedade de duelos para aproveitar!"
            ],
            rules: [
                "1: Proibido trapacear ou usar ferramentas ilegais",
                "2: Proibido linguagem abusiva",
                "3: Proibido ataques ao servidor",
                "4: Proibido spam",
                "Violações resultarão em penalidades."
            ],
            join: [
                "Endereço IP: play.rntqy.net",
                "Versões Suportadas: JE 1.20–1.21.4, BE 1.20–",
                "* Não é necessário alterar o número da porta para o Bedrock Edition",
                "Entre no servidor do Discord"
            ]
        },
        contact: {
            heading: "Contate-Nos",
            emailLabel: "Endereço de Email",
            nameLabel: "Nome",
            messageLabel: "Mensagem",
            sendButton: "Enviar",
            completionMessage: "Envio Concluído"
        }
    },
    fr: {
        about: "Caractéristiques",
        rules: "Règles",
        join: "Comment Rejoindre",
        hero: { title: "La Meilleure Pratique PvP.", subtitle: "Profitez de combats palpitants sur rntqy!" },
        joinButton: "Rejoignez le Serveur Maintenant",
        sections: {
            about: [
                "1: Serveurs situés au Japon pour des connexions rapides en Asie de l'Est !",
                "2: Une variété de duels pour le plaisir !"
            ],
            rules: [
                "1: Pas de tricherie ou d'outils illégaux",
                "2: Pas de langage abusif",
                "3: Pas d'attaques sur le serveur",
                "4: Pas de spam",
                "Les violations entraîneront des sanctions."
            ],
            join: [
                "Adresse IP : play.rntqy.net",
                "Versions prises en charge : JE 1.20–1.21.4, BE 1.20–",
                "* Pas besoin de changer le numéro de port pour Bedrock Edition",
                "Rejoignez le serveur Discord"
            ]
        },
        contact: {
            heading: "Contactez-Nous",
            emailLabel: "Adresse Email",
            nameLabel: "Nom",
            messageLabel: "Message",
            sendButton: "Envoyer",
            completionMessage: "Soumission Complétée"
        }
    },
    de: {
        about: "Merkmale",
        rules: "Regeln",
        join: "Wie Beitreten",
        hero: { title: "Das Beste PvP-Training.", subtitle: "Erleben Sie spannende Kämpfe auf rntqy!" },
        joinButton: "Treten Sie Jetzt dem Server Bei",
        sections: {
            about: [
                "1: Server in Japan für schnelle Verbindungen aus Ostasien!",
                "2: Eine Vielzahl von Duellen zum Genießen!"
            ],
            rules: [
                "1: Kein Schummeln oder Verwenden illegaler Tools",
                "2: Keine beleidigende Sprache",
                "3: Keine Angriffe auf den Server",
                "4: Kein Spamming",
                "Verstöße werden bestraft."
            ],
            join: [
                "IP-Adresse: play.rntqy.net",
                "Unterstützte Versionen: JE 1.20–1.21.4, BE 1.20–",
                "* Keine Änderung der Portnummer für Bedrock Edition erforderlich",
                "Treten Sie dem Discord-Server bei"
            ]
        },
        contact: {
            heading: "Kontaktieren Sie Uns",
            emailLabel: "E-Mail-Adresse",
            nameLabel: "Name",
            messageLabel: "Nachricht",
            sendButton: "Senden",
            completionMessage: "Übermittlung Abgeschlossen"
        }
    },
    it: {
        about: "Caratteristiche",
        rules: "Regole",
        join: "Come Unirsi",
        hero: { title: "La Migliore Pratica PvP.", subtitle: "Goditi emozionanti battaglie su rntqy!" },
        joinButton: "Unisciti al Server Ora",
        sections: {
            about: [
                "1: Server situati in Giappone per connessioni rapide dall'Asia Orientale!",
                "2: Una varietà di duelli per divertirsi!"
            ],
            rules: [
                "1: Vietato barare o utilizzare strumenti illegali",
                "2: Vietato linguaggio offensivo",
                "3: Vietati attacchi al server",
                "4: Vietato lo spam",
                "Le violazioni comporteranno penalità."
            ],
            join: [
                "Indirizzo IP: play.rntqy.net",
                "Versioni supportate: JE 1.20–1.21.4, BE 1.20–",
                "* Nessuna necessità di modificare il numero di porta per Bedrock Edition",
                "Unisciti al server Discord"
            ]
        },
        contact: {
            heading: "Contattaci",
            emailLabel: "Indirizzo Email",
            nameLabel: "Nome",
            messageLabel: "Messaggio",
            sendButton: "Invia",
            completionMessage: "Invio Completato"
        }
    },    
    ar: {
        about: "الميزات",
        rules: "القواعد",
        join: "كيفية الانضمام",
        hero: { title: "أفضل تدريب على PvP.", subtitle: "استمتع بمعارك مثيرة على rntqy!" },
        joinButton: "انضم إلى الخادم الآن",
        sections: {
            about: [
                "1: الخوادم تقع في اليابان لاتصالات سريعة من شرق آسيا!",
                "2: مجموعة متنوعة من المبارزات للاستمتاع!"
            ],
            rules: [
                "1: لا غش أو استخدام أدوات غير قانونية",
                "2: لا لغة مسيئة",
                "3: لا هجمات على الخادم",
                "4: لا إرسال رسائل متكررة",
                "سيؤدي الانتهاك إلى عقوبات."
            ],
            join: [
                "عنوان IP: play.rntqy.net",
                "الإصدارات المدعومة: JE 1.20–1.21.4, BE 1.20–",
                "* لا حاجة لتغيير رقم المنفذ لإصدار Bedrock",
                "انضم إلى خادم Discord"
            ]
        },
        contact: {
            heading: "اتصل بنا",
            emailLabel: "عنوان البريد الإلكتروني",
            nameLabel: "الاسم",
            messageLabel: "الرسالة",
            sendButton: "إرسال",
            completionMessage: "تم الإرسال بنجاح"
        }
    },
    hi: {
        about: "विशेषताएं",
        rules: "नियम",
        join: "कैसे शामिल हों",
        hero: { title: "सबसे अच्छा PvP अभ्यास।", subtitle: "rntqy पर रोमांचक लड़ाइयों का आनंद लें!" },
        joinButton: "अभी सर्वर से जुड़ें",
        sections: {
            about: [
                "1: जापान में स्थित सर्वर, पूर्वी एशिया से तेज़ कनेक्शन के लिए!",
                "2: विभिन्न प्रकार के द्वंद्वयुद्ध का आनंद लें!"
            ],
            rules: [
                "1: धोखा या अवैध उपकरणों का उपयोग न करें",
                "2: अपमानजनक भाषा का उपयोग न करें",
                "3: सर्वर पर हमला न करें",
                "4: स्पैम न करें",
                "नियमों का उल्लंघन दंड का कारण बनेगा।"
            ],
            join: [
                "आईपी ​​पता: play.rntqy.net",
                "समर्थित संस्करण: JE 1.20–1.21.4, BE 1.20–",
                "* बेडरॉक संस्करण के लिए पोर्ट नंबर बदलने की आवश्यकता नहीं है",
                "डिस्कॉर्ड सर्वर से जुड़ें"
            ]
        },
        contact: {
            heading: "हमसे संपर्क करें",
            emailLabel: "ईमेल पता",
            nameLabel: "नाम",
            messageLabel: "संदेश",
            sendButton: "भेजें",
            completionMessage: "सबमिशन पूरा हुआ"
        }
    }
};

document.getElementById('language-switcher').addEventListener('click', (event) => {
    const lang = event.target.dataset.lang;
    if (!lang) return;

    console.log(`Language selected: ${lang}`);
    showSpinner();

    setTimeout(() => {
        updateLanguage(lang);
        hideSpinner();
    }, 1000);
});

function updateLanguage(lang) {
    const text = translations[lang];
    if (!text) {
        console.error(`No translations found for language: ${lang}`);
        return;
    }

    document.querySelector('a[href="#about"]').textContent = text.about;
    document.querySelector('a[href="#rules"]').textContent = text.rules;
    document.querySelector('a[href="#join"]').textContent = text.join;
    document.querySelector('.hero h1').textContent = text.hero.title;
    document.querySelector('.hero p').textContent = text.hero.subtitle;
    document.getElementById('join-button').textContent = text.joinButton;
    document.querySelector('#contact-section h2:not(#completion-message)').textContent = text.contact.heading;
    document.querySelector('label[for="email"]').textContent = text.contact.emailLabel;
    document.querySelector('label[for="name"]').textContent = text.contact.nameLabel;
    document.querySelector('label[for="message"]').textContent = text.contact.messageLabel;
    document.querySelector('#contactForm button[type="submit"]').textContent = text.contact.sendButton;
    document.querySelector('#completion-message').textContent = text.contact.completionMessage;

    const aboutBox = document.querySelector('#about .box');
    aboutBox.innerHTML = `
        <h2>${text.about}</h2>
        <p>${text.sections.about[0]}</p>
        <p>${text.sections.about[1]}</p>
    `;

    const rulesBox = document.querySelector('#rules .box');
    rulesBox.innerHTML = `
        <h2>${text.rules}</h2>
        <p>${text.sections.rules[0]}</p>
        <p>${text.sections.rules[1]}</p>
        <p>${text.sections.rules[2]}</p>
        <p>${text.sections.rules[3]}</p>
        <p><div class="red">${text.sections.rules[4]}</div></p>
    `;

    const joinBox = document.querySelector('#join .box');
    joinBox.innerHTML = `
        <h2>${text.join}</h2>
        <p>${text.sections.join[0]}</p>
        <p>${text.sections.join[1]}</p>
        <p>${text.sections.join[2]}</p>
    `;

    const joinParagraphsContainer = joinBox.querySelectorAll('p, .discord-button');
    joinParagraphsContainer.forEach((el) => el.remove());

    text.sections.join.forEach((content, index) => {
        if (index === text.sections.join.length - 1) {
            const discordButton = document.createElement('a');
            discordButton.href = 'https://discord.gg/7nQxhAjtHV';
            discordButton.className = 'discord-button';
            discordButton.target = '_blank';
            discordButton.rel = 'noopener noreferrer';
            discordButton.textContent = content;
            joinBox.appendChild(discordButton);
        } else {
            const paragraph = document.createElement('p');
            paragraph.textContent = content;
            joinBox.appendChild(paragraph);
        }
    });
}

function showSpinner() {
    document.getElementById('loading-overlay').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('loading-overlay').style.display = 'none';
}

document.getElementById('music-toggle').addEventListener('click', () => {
    showSpinner();

    setTimeout(() => {
        hideSpinner();
    }, 1000);
});

const menuToggleButton = document.getElementById('menu-toggle-button');
const slideMenu = document.getElementById('slide-menu');
const loadingOverlay = document.getElementById('loading-overlay');
const languageButtons = document.querySelectorAll('.language-option');

let isMenuOpen = false;

function toggleMenu() {
    if (isMenuOpen) {
        slideMenu.style.right = '-300px';
    } else {
        slideMenu.style.right = '0';
    }
    isMenuOpen = !isMenuOpen;
}

menuToggleButton.addEventListener('click', toggleMenu);

languageButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const selectedLanguage = event.target.getAttribute('data-lang');
        console.log(`Selected language: ${selectedLanguage}`);

        languageButtons.forEach(button => {
            button.addEventListener("click", () => {
              menuSlide.classList.remove("open");
            });
          });

        loadingOverlay.style.display = 'flex';
        toggleMenu();

        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("menu-overlay");

    button.classList.toggle("clicked");

    menuButton.addEventListener("click", () => {
        const isActive = menuButton.classList.contains("active");

        if (isActive) {
            menuButton.classList.remove("active");
        } else {
            menuButton.classList.add("active");
        }

        menu.classList.toggle("open");
        overlay.classList.toggle("visible");
    });

    overlay.addEventListener("click", () => {
        menuButton.classList.remove("active");
        menu.classList.remove("open");
        overlay.classList.remove("visible");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuSlide = document.getElementById("language-switcher");
    const backgroundBlur = document.getElementById("background-blur");
    const menuButton = document.getElementById("menu-button");
    const languageButtons = document.querySelectorAll(".language-option");

    menuButton.addEventListener("click", () => {
        menuSlide.classList.add("open");
        backgroundBlur.classList.add("active");
    });

        languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            menuSlide.classList.remove("open");
            backgroundBlur.classList.remove("active");
        });
    });

    backgroundBlur.addEventListener("click", () => {
        menuSlide.classList.remove("open");
        backgroundBlur.classList.remove("active");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggleButton = document.getElementById('menu-toggle-button');
    const slideMenu = document.getElementById('slide-menu');
    const closeMenuButton = document.getElementById('close-menu-button');

    let isMenuOpen = false;

    function openMenu() {
        slideMenu.style.right = '0';
        closeMenuButton.style.display = 'block';
        isMenuOpen = true;
    }

    function closeMenu() {
        slideMenu.style.right = '-300px';
        closeMenuButton.style.display = 'none';
        isMenuOpen = false;
    }

    menuToggleButton.addEventListener('click', function () {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeMenuButton.addEventListener('click', function () {
        closeMenu();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const questionForm = document.getElementById("question-form");
    const questionsContainer = document.getElementById("questions-container");

    const fetchQuestions = async () => {
        const response = await fetch("/questions");
        const questions = await response.json();
        questionsContainer.innerHTML = questions.map(q => `
            <div data-id="${q[0]}">
                <p>${q[1]} (${q[2]})</p>
                <button class="edit-button" data-user="${q[3]}">Edit</button>
                <button class="delete-button" data-user="${q[3]}">Delete</button>
            </div>
        `).join("");
    };

    questionForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const content = document.getElementById("question-content").value;
        const userId = document.getElementById("user-id").value;

        await fetch("/questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content, user_id: userId }),
        });

        questionForm.reset();
        fetchQuestions();
    });

    questionsContainer.addEventListener("click", async (e) => {
        const button = e.target;
        const questionId = button.closest("div").dataset.id;
        const userId = button.dataset.user;

        if (button.classList.contains("edit-button")) {
            const newContent = prompt("Edit your question:");
            if (newContent) {
                await fetch(`/questions/${questionId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content: newContent, user_id: userId }),
                });
                fetchQuestions();
            }
        }

        if (button.classList.contains("delete-button")) {
            await fetch(`/questions/${questionId}?user_id=${userId}`, { method: "DELETE" });
            fetchQuestions();
        }
    });

    fetchQuestions();
});
