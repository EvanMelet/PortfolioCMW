//traductions des textes du site en français et en anglais, fais avec l'aide de Claude.//
var languages = {
  "titre_page":       ["Evan Melet",          "Evan Melet"],
  "presentation":     ["I design and manage web projects from A to Z.", "Je conçois et pilote des projets web de A à Z."],
  "texte_presentation": [
    "Trained at Paris Panthéon-Sorbonne and Université Gustave Eiffel, I am interested in both the technical and project management sides of digital work. I coordinated the documentary Recueil, filmed in South Korea, as well as several web projects for various clients. These experiences gave me a well-rounded approach, from conception to deployment.",
    "Formé à Paris Panthéon Sorbonne ainsi qu'à l'université Gustave Eiffel, je m'intéresse à la fois aux aspects techniques et à la gestion de projets numériques. J'ai notamment coordonné le documentaire Recueil, tourné en Corée du Sud, ainsi que plusieurs projets de sites web pour des clients variés. Ces projets m'ont permis de développer une approche polyvalente, de la conception à la mise en ligne."
  ],
  "skip-link":        ["Skip to content",     "Aller au contenu"],
  "nav-apropos":      ["About",               "À propos"],
  "nav-projets":      ["Projects",            "Projets"],
  "nav-contact":      ["Contact",             "Contact"],
  "nav-parcours":    ["Background",  "Parcours"],
  "btn-projets":      ["See my projects",     "Voir mes projets"],
  "titre-apropos":    ["About",               "À propos"],
  "titre-projets":    ["Projects",            "Projets"],
  "titre-contact":    ["Contact",             "Contact"],
  "filtre-tous":      ["All",                 "Tous"],
  "filtre-web":       ["Websites",            "Sites web"],
  "filtre-video":     ["Video",               "Vidéo"],
  "comp-gestion":    ["Project management",  "Gestion de projet"],

  "desc-recueil":     [
    "Recueil is a interactive documentary about the Buddhist temple Silsangsa and the rural community of Indramang in the township of Sannae, at the foot of Mount Jirisan, in South Korea.",
    "Recueil est un documentaire interactif consacré au temple bouddhiste Silsangsa et à la communauté rurale Indramang de la commune de Sannae, au pied du mont Jirisan, en Corée du Sud."
  ],
  "desc-guycantin":   ["Website creation for an equestrian leather craftsman.", "Création d'un site web pour un tanneur d'équitation."],
  "desc-maison32":    ["Website creation for a Parisian apartment rental.",     "Création d'un site web pour la location d'un appartement parisien."],
  "desc-dicowork":    ["Website creation for a critical dictionary of labour history.", "Création d'un site web pour un dictionnaire critique de l'histoire du travail."],
  "lien-site":        ["Visit the site",      "Voir le site"],
  "lien-docu":        ["Watch the documentary", "Voir le documentaire"],
  "intro-contact":    ["A question or a project? Write to me.", "Une question, un projet ? Écris-moi."],
  "mentions":         ["Legal notice",        "Mentions légales"],
  "titre-parcours":  ["Background",            "Parcours"],
  "date-master":     ["Since September 2024",  "Depuis septembre 2024"],
  "desc-master":     ["Web project management (Agile, Jira), front-end development (HTML, CSS, JavaScript) and an introduction to multimedia creation.", "Gestion de projet web (méthode Agile, Jira), développement front-end (HTML, CSS, JavaScript) et initiation à la création multimédia."],
  "date-stage":      ["May – August 2026",     "Mai – Août 2026"],
  "desc-stage":      ["Deployment of a multilingual website, content writing and SEO (Dico-Labor project).", "Déploiement d'un site web multilingue, rédaction de contenus et référencement (projet Dico-Labor)."],
  "date-freelance":  ["Since June 2023",       "Depuis juin 2023"],
  "desc-freelance":  ["WordPress website creation, responsive integration, client relations and SEO optimisation.", "Création de sites sous WordPress, intégration de maquettes responsives, relation client et optimisation SEO."],
  "date-licence":    ["2019 – 2023",           "2019 – 2023"],
  "desc-licence":    ["Fundamentals in economics, management and quantitative methods.", "Fondamentaux en économie, gestion et méthodes quantitatives."],
};

//Fonction de traduction, utlise data-i18n pour identifier les éléments à traduire et changer leur contenu en fonction de la langue sélectionnée.
function changerLangue(languageId) {
  document.documentElement.lang = languageId == 0 ? "en" : "fr";
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var cle = el.dataset.i18n;
    if (languages[cle]) {
      el.innerHTML = languages[cle][languageId];
    }
  });
}

// Clic sur un drapeau
document.querySelectorAll(".language").forEach(function (img) {
  img.addEventListener("click", function (e) {
    changerLangue(e.target.dataset.language);
  });
});

//Initialiser en français au chargement
changerLangue(1);

//Année dynamique dans le footer
document.getElementById("annee").textContent = new Date().getFullYear();

// Menu burger https://claude.ai/share/a9cb5c3b-87aa-4157-8c7b-84566d7eaae1
var burger = document.querySelector('.burger');
var menu = document.getElementById('menu');

burger.addEventListener('click', function () {
  var estOuvert = menu.classList.toggle('ouvert');
  burger.setAttribute('aria-expanded', estOuvert);
  burger.setAttribute('aria-label', estOuvert ? 'Fermer le menu' : 'Ouvrir le menu');
});

//Bascule thème clair / sombre 
var boutonTheme = document.querySelector('.theme-toggle');
var html = document.documentElement;

// Thème de départ selon la préférence système
var prefereSombre = window.matchMedia('(prefers-color-scheme: dark)').matches;
html.setAttribute('data-theme', prefereSombre ? 'sombre' : 'clair');

boutonTheme.addEventListener('click', function () {
  var actuel = html.getAttribute('data-theme');
  html.setAttribute('data-theme', actuel === 'sombre' ? 'clair' : 'sombre');
});
/* Filtres de projets  */
var boutonsFiltres = document.querySelectorAll(".filtre");

boutonsFiltres.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    boutonsFiltres.forEach(function (b) { b.classList.remove("actif"); });
    bouton.classList.add("actif");

    var filtre = bouton.dataset.filtre;
    document.querySelectorAll(".projet").forEach(function (projet) {
      if (filtre === "tous" || projet.dataset.categorie === filtre) {
        projet.style.display = "";
      } else {
        projet.style.display = "none";
      }
    });
  });
});

