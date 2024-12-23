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
        const target = document.getElementById('join');
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');

    backgroundMusic.volume = 0.075;

    backgroundMusic.play().catch(err => {
        console.warn('音楽の自動再生がブロックされました。');
    });

    musicToggle.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(err => {
                console.error('音楽の再生に失敗しました:', err);
            });
            musicToggle.classList.remove('active');
        } else {
            backgroundMusic.pause();
            musicToggle.classList.add('active');
        }
    });
});

const translations = {
    ja: {
        about: "特徴",
        rules: "ルール",
        join: "参加方法",
        hero: { title: "最高のPvP練習を。", subtitle: "rntqyでスリル満点の対戦を楽しもう！" },
        joinButton: "今すぐサーバーに参加",
        sections: {
            about: [
                "1: 日本にサーバーがあるから東アジアからの接続が速い！",
                "2: いろいろなDuelがある！"
            ],
            rules: [
                "1: チート等の不正ツール使用禁止",
                "2: 暴言の禁止",
                "3: サーバー攻撃の禁止",
                "4: スパムの禁止",
                "以上のルールに違反した場合、ペナルティが課せられます。"
            ],
            join: [
                "IPアドレス: play.rntqy.net",
                "対応バージョン: JE 1.20～1.21.4　BE 1.20～",
                "※統合版から入る場合、ポート番号は変えなくてよいです",
                "Discordサーバーへ参加"
            ]
        },
        contact: {
            heading: "お問い合わせ",
            emailLabel: "メールアドレス",
            nameLabel: "名前",
            messageLabel: "要件",
            sendButton: "送る",
            completionMessage: "送信完了"
        }
    },
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

// ボタンとメニューを取得
const menuToggleButton = document.getElementById('menu-toggle-button');
const slideMenu = document.getElementById('slide-menu');
const loadingOverlay = document.getElementById('loading-overlay');
const languageButtons = document.querySelectorAll('.language-option');

// メニューの状態を管理
let isMenuOpen = false;

// メニューを開閉する関数
function toggleMenu() {
    if (isMenuOpen) {
        slideMenu.style.right = '-300px'; // メニューを隠す
    } else {
        slideMenu.style.right = '0'; // メニューを表示
    }
    isMenuOpen = !isMenuOpen;
}

// 言語切り替えボタンをクリックしたときの処理
menuToggleButton.addEventListener('click', toggleMenu);

// 言語選択ボタンをクリックしたときの処理
languageButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const selectedLanguage = event.target.getAttribute('data-lang');
        console.log(`Selected language: ${selectedLanguage}`);

        // スピナーを表示してメニューを閉じる
        loadingOverlay.style.display = 'flex';
        toggleMenu();

        // デモとして2秒後にスピナーを非表示にする
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
  
    // ボタンのクリックイベント
    menuButton.addEventListener("click", () => {
      const isActive = menuButton.classList.contains("active");
  
      // ボタンの位置を切り替え
      if (isActive) {
        menuButton.classList.remove("active");
      } else {
        menuButton.classList.add("active");
      }
  
      // メニューの表示切り替え
      menu.classList.toggle("open");
      overlay.classList.toggle("visible");
    });
  
    // オーバーレイをクリックしたときにメニューを閉じる
    overlay.addEventListener("click", () => {
      menuButton.classList.remove("active");
      menu.classList.remove("open");
      overlay.classList.remove("visible");
    });
  });
  