let currentLang = "uk";

  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  next.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

function switchLanguage() {
  if (currentLang === "uk") {
    // Змінюємо тексти на німецьку
    document.querySelector(".hero-content h2").innerText = "Vorbereitungsbücher für das Studienkolleg";
    document.querySelector(".hero-content p").innerText = "Bereiten Sie sich auf die Aufnahmeprüfungen in Deutschland vor";
    document.querySelectorAll(".btn-buy").forEach(btn => btn.innerText = "Kaufen");

    document.querySelector(".home").innerText = "Startseite"
    document.querySelector(".about").innerText = "Über uns"
    document.querySelector(".books").innerText = "Sammlungen"
    document.querySelector(".contact").innerText = "Kontakt"

    document.querySelector(".feature-title-1").innerText = "Effektive Materialien";
    document.querySelector(".feature-text-1").innerText = "Alle Themen und Übungen für die Aufnahmeprüfung";

    document.querySelector(".feature-title-2").innerText = "Aktuelle Tests";
    document.querySelector(".feature-text-2").innerText = "Aufgaben und Beispiele wie in der Prüfung";

    document.querySelector(".feature-title-3").innerText = "Schnelle Lieferung";
    document.querySelector(".feature-text-3").innerText = "Zugang zur PDF-Datei sofort nach der Zahlung";

    document.querySelector(".about-title").innerText = "Über uns";

document.querySelector(".about-p1").innerHTML =
  "<strong>Wir erstellen Materialien, die helfen, strukturiert zu lernen, sich auf die Prüfung vorzubereiten und sie erfolgreich zu bestehen.</strong>";

document.querySelector(".about-p2").innerText =
  "Die Autoren der Materialien studieren an den besten Universitäten Deutschlands. Sie haben den Weg der Anpassung, der Vorbereitung auf Sprachzertifikate, des Studiums am Studienkolleg und wichtiger Prüfungen selbst durchlaufen.";

document.querySelector(".about-p3").innerText =
  "Unser Team weiß, wie es ist, sich ohne klare Struktur vorzubereiten, Materialien auf verschiedenen Websites zu suchen und Stunden mit Dingen zu verbringen, die kein Ergebnis bringen.";

document.querySelector(".about-p4").innerText =
  "Deshalb haben wir Sammlungen erstellt, die:";

document.querySelector(".about-li-1").innerText =
  "wie eine echte Prüfung aussehen";
document.querySelector(".about-li-2").innerText =
  "Dutzende Stunden an Suche sparen";
document.querySelector(".about-li-3").innerText =
  "helfen, Geschwindigkeit und Stressresistenz zu trainieren";
document.querySelector(".about-li-4").innerText =
  "für das Selbststudium geeignet sind";

document.querySelector(".about-p5").innerText =
  "Das ist nicht nur ein PDF. Es ist ein Werkzeug, das hilft, das eigene Wissen zu überprüfen und Selbstvertrauen vor der Prüfung zu gewinnen, um dem Universitätsstudium näherzukommen.";

document.querySelector(".about-p6").innerHTML =
  "<strong>Unser Ziel ist es, dass Sie die Prüfung beim ersten Versuch bestehen.</strong>";

  document.querySelector(".reviews-title").innerText =
  "Kundenbewertungen";

    document.querySelector(".important-title").innerText = "WICHTIG";
    document.querySelector(".important-text").innerText = "Sie benötigen Telegram, da sich die PDF-Dateien dort befinden.";
    
    document.querySelector(".products-title").innerText =
  "Alle Vorbereitungsbücher";

document.querySelector(".product-title-1").innerText =
  "Sammlung „Deutsch“ für das Studienkolleg München";
document.querySelector(".product-desc-1").innerText =
  "Enthält 5 Musterprüfungen";

document.querySelector(".product-title-2").innerText =
  "Sammlung „Mathematik“ W/M-Kurs für das Studienkolleg München";
document.querySelector(".product-desc-2").innerText =
  "Enthält 6 Musterprüfungen und Trainingsaufgaben zu jedem Thema";

document.querySelector(".product-title-3").innerText =
  "Sammlung „Mathematik“ für das Studienkolleg Leipzig";
document.querySelector(".product-desc-3").innerText = "Enthält 5 Musterprüfungen";

    currentLang = "de";

  } else if (currentLang === "de") {
    // Змінюємо тексти на російську
    document.querySelector(".hero-content h2").innerText = "Сборники для поступления в Штудиенколлег";
    document.querySelector(".hero-content p").innerText = "Подготовьтесь к вступительным экзаменам в Германии";
    document.querySelectorAll(".btn-buy").forEach(btn => btn.innerText = "Купить");

    document.querySelector(".home").innerText = "Главная"
    document.querySelector(".about").innerText = "Про нас"
    document.querySelector(".books").innerText = "Сборники"

    document.querySelector(".contact").innerText = "Контакты"
    document.querySelector(".feature-title-1").innerText = "Эффективные материалы";
    document.querySelector(".feature-text-1").innerText = "Все темы и упражнения для поступления";
    
    document.querySelector(".feature-title-2").innerText = "Актуальные тесты";
    document.querySelector(".feature-text-2").innerText = "Задания и примеры как на экзамене";
    
    document.querySelector(".feature-title-3").innerText = "Быстрая доставка";
    document.querySelector(".feature-text-3").innerText = "Доступ к PDF-файлу сразу после оплаты";
    document.querySelector(".about-title").innerText = "О нас";

document.querySelector(".about-p1").innerHTML =
  "<strong>Мы создаём материалы, которые помогают учиться структурировано, подготовиться к экзамену и успешно его сдать.</strong>";

document.querySelector(".about-p2").innerText =
  "Авторы материалов учатся в лучших университетах Германии. Они прошли путь адаптации, подготовки к языковым сертификатам, обучения в Studienkolleg и сдачи важных экзаменов.";

document.querySelector(".about-p3").innerText =
  "Наша команда знает, как это — готовиться без чёткой структуры, искать материалы на разных сайтах и тратить часы на то, что не приносит результата.";

document.querySelector(".about-p4").innerText =
  "Именно поэтому мы создали сборники, которые:";

document.querySelector(".about-li-1").innerText =
  "выглядят как настоящий экзамен";
document.querySelector(".about-li-2").innerText =
  "экономят десятки часов поиска";
document.querySelector(".about-li-3").innerText =
  "помогают натренировать скорость и стрессоустойчивость";
document.querySelector(".about-li-4").innerText =
  "подходят для самостоятельной работы";

document.querySelector(".about-p5").innerText =
  "Это не просто PDF. Это инструмент, который помогает проверить свои знания и почувствовать уверенность перед экзаменом, приближая вас к поступлению в университет.";

document.querySelector(".about-p6").innerHTML =
  "<strong>Наша цель — чтобы вы сдали экзамен с первого раза.</strong>";
  document.querySelector(".reviews-title").innerText =
  "Отзывы клиентов";

    document.querySelector(".important-title").innerText = "ВАЖНО";
    document.querySelector(".important-text").innerText = "Вам необходим Telegram, так как PDF-файлы находятся там.";
    document.querySelector(".products-title").innerText =
    "Всё сборники для подготовки";
  
  document.querySelector(".product-title-1").innerText =
    "Сборник «Deutsch» для Studienkolleg München";
  document.querySelector(".product-desc-1").innerText =
    "Содержит 5 Musterprüfungen";
  
  document.querySelector(".product-title-2").innerText =
    "Сборник «Mathematik» W/M-Kurs для Studienkolleg München";
  document.querySelector(".product-desc-2").innerText =
    "Содержит 6 Musterprüfungen и тренировочные задания по каждой теме";
  
  document.querySelector(".product-title-3").innerText =
    "Сборник «Mathematik» для Studienkolleg Leipzig";
  document.querySelector(".product-desc-3").innerText =
    "Содержит 5 Musterprüfungen";
    
    currentLang = "ru";

  } else if (currentLang === "ru") {
    // Повертаємо українську
    document.querySelector(".hero-content h2").innerText = "Збірники для вступу в Штудієнколлег";
    document.querySelector(".hero-content p").innerText = "Підготуйтеся до вступних іспитів в Німеччині";
    document.querySelectorAll(".btn-buy").forEach(btn => btn.innerText = "Купити");

    document.querySelector(".home").innerText = "Головна"
    document.querySelector(".about").innerText = "Про нас"
    document.querySelector(".books").innerText = "Збірники"

    document.querySelector(".contact").innerText = "Контакти"
    document.querySelector(".feature-title-1").innerText = "Ефективні матеріали";
    document.querySelector(".feature-text-1").innerText = "Всі теми та вправи, що потрібні для вступу";
    
    document.querySelector(".feature-title-2").innerText = "Актуальні тести";
    document.querySelector(".feature-text-2").innerText = "Завдання та приклади, як на іспиті";
    
    document.querySelector(".feature-title-3").innerText = "Швидка доставка";
    document.querySelector(".feature-text-3").innerText = "Доступ до PDF-файлу одразу після оплати";
    document.querySelector(".about-title").innerText = "Про нас";

document.querySelector(".about-p1").innerHTML =
  "<strong>Ми створюємо матеріали, які допомагають вчитися структуровано, підготуватися до іспиту та успішно скласти його.</strong>";

document.querySelector(".about-p2").innerText =
  "Автори матеріалів навчаються в найкращих університетах Німеччини. Вони пройшли шлях адаптації, підготовки до мовних сертифікатів, навчання у Studienkolleg та складання важливих іспитів.";

document.querySelector(".about-p3").innerText =
  "Наша команда знає, як це — готуватися без чіткої структури, шукати матеріали по різних сайтах, витрачати години на те, що не дає результату.";

document.querySelector(".about-p4").innerText =
  "Саме тому ми створили збірники, які:";

document.querySelector(".about-li-1").innerText =
  "виглядають як справжній іспит";
document.querySelector(".about-li-2").innerText =
  "заощаджують десятки годин пошуків";
document.querySelector(".about-li-3").innerText =
  "допомагають натренувати швидкість і стресостійкість";
document.querySelector(".about-li-4").innerText =
  "підходять для самостійної роботи";

document.querySelector(".about-p5").innerText =
  "Це не просто PDF. Це інструмент, який допомагає перевірити свої знання та відчути впевненість перед екзаменом, що наблизить Вас до вступу до університету.";

document.querySelector(".about-p6").innerHTML =
  "<strong>Наша мета — щоб Ви склали іспит з першого разу.</strong>";
  
  document.querySelector(".reviews-title").innerText =
  "Відгуки клієнтів";

    document.querySelector(".important-title").innerText = "ВАЖЛИВО";
    document.querySelector(".important-text").innerText = "Вам необхіден Telegram, оскільки PDF-файли знаходяться там.";
    document.querySelector(".products-title").innerText =
    "Усі збірники для підготовки";
  
  document.querySelector(".product-title-1").innerText =
    "Збірник “Deutsch” для Studienkolleg München";
  document.querySelector(".product-desc-1").innerText =
    "Містить 5 Musterprüfungen";
  
  document.querySelector(".product-title-2").innerText =
    "Збірник “Mathematik” W/M-Kurs для Studienkolleg München";
  document.querySelector(".product-desc-2").innerText =
    "Містить 6 Musterprüfungen і тренувальні вправи по кожній темі";
  
  document.querySelector(".product-title-3").innerText =
    "Збірник “Mathematik” для Studienkolleg Leipzig";
  document.querySelector(".product-desc-3").innerText =
    "Містить 5 Musterprüfungen";
    
    currentLang = "uk";
  }
}
