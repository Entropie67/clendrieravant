/// Script JS amélioré
document.addEventListener('DOMContentLoaded', () => {
    const homepage = document.getElementById('homepage');
    const calendar = document.getElementById('calendar');
    const backBtn = document.getElementById('back-btn');
    const grid = document.querySelector('.grid');

    const gymnaseBtn = document.getElementById('gymnase-btn');
    const chineseBtn = document.getElementById('chinese-btn');

    const quotes = [
        "Le savoir est la clé du succès.",
        "La connaissance s'acquiert par l'expérience.",
        "Apprends comme si tu devais vivre pour toujours.",
        "La curiosité est le début de la sagesse.",
        "Un esprit bien formé est une richesse infinie.",
        "Chaque jour est une opportunité d’apprendre.",
        "Le savoir, c'est la liberté.",
        "Lire, c'est voyager sans bouger.",
        "La connaissance est une lumière dans l'obscurité.",
        "Apprendre, c'est grandir.",
        "La patience et la persévérance mènent à la connaissance.",
        "Une question posée est un problème à moitié résolu.",
        "L'éducation est l'arme la plus puissante pour changer le monde.",
        "Un bon livre est un trésor d’idées.",
        "Chaque nouvelle compétence est une porte ouverte.",
        "L'ignorance est l'ennemi de la sagesse.",
        "L'apprentissage est un voyage, pas une destination.",
        "La curiosité est le moteur de la découverte.",
        "Un professeur inspire, un maître transforme.",
        "La lecture nourrit l'âme comme la nourriture nourrit le corps.",
        "Chaque échec est une leçon déguisée.",
        "Le doute est le commencement de la sagesse.",
        "La réflexion mène à la vérité.",
        "L'éducation est le passeport vers l'avenir."
    ];

    const chengyu = [
        "亡羊补牢 (Mieux vaut tard que jamais)",
        "画龙点睛 (Donner vie à quelque chose)",
        "雪中送炭 (Aider quand c'est crucial)",
        "百闻不如一见 (Voir vaut mieux qu'entendre cent fois)",
        "刻舟求剑 (Agir de manière rigide sans réflexion)",
        "愚公移山 (La persévérance triomphe de tout)",
        "塞翁失马 (Une perte peut cacher un gain)",
        "守株待兔 (Attendre passivement une opportunité)",
        "自相矛盾 (Être en contradiction avec soi-même)",
        "井底之蛙 (Une vision limitée du monde)",
        "鹤立鸡群 (Se démarquer parmi les autres)",
        "望梅止渴 (Avoir de faux espoirs)",
        "胸有成竹 (Avoir confiance grâce à une bonne préparation)",
        "锦上添花 (Ajouter une touche de perfection)",
        "举一反三 (Apprendre par analogie)",
        "读万卷书，行万里路 (Lire des milliers de livres, parcourir des milliers de kilomètres)",
        "滴水穿石 (La persévérance finit par porter ses fruits)",
        "一箭双雕 (Faire d'une pierre deux coups)",
        "狼吞虎咽 (Manger avec avidité)",
        "草船借箭 (Utiliser intelligemment les ressources des autres)",
        "三人行，必有我师焉 (On peut toujours apprendre des autres)",
        "台上一分钟，台下十年功 (Une minute de gloire nécessite des années d'effort)",
        "刻苦耐劳 (Travail acharné et persévérance)",
        "行百里者半九十 (Les derniers pas sont les plus difficiles)"
    ];

    // Fonction pour générer le calendrier
    function generateCalendar(type) {
        grid.innerHTML = ''; // Vider les cases existantes
        for (let i = 1; i <= 24; i++) {
            const square = document.createElement('div');
            square.textContent = i;

            square.addEventListener('click', () => {
                if (!square.classList.contains('flipped')) {
                    square.classList.add('flipped');
                    const content = type === 'gymnase' ?
                        quotes[Math.floor(Math.random() * quotes.length)] :
                        chengyu[Math.floor(Math.random() * chengyu.length)];
                    square.innerHTML = `<p>${content}</p>`;
                }
            });

            grid.appendChild(square);
        }
    }

    // Événements pour les boutons
    gymnaseBtn.addEventListener('click', () => {
        homepage.classList.add('hidden');
        calendar.classList.remove('hidden');
        generateCalendar('gymnase');
    });

    chineseBtn.addEventListener('click', () => {
        homepage.classList.add('hidden');
        calendar.classList.remove('hidden');
        generateCalendar('chinese');
    });

    backBtn.addEventListener('click', () => {
        homepage.classList.remove('hidden');
        calendar.classList.add('hidden');
    });
});
