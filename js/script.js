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
  "btn-projets":      ["See my projects",     "Voir mes projets"],
  "titre-apropos":    ["About",               "À propos"],
  "titre-projets":    ["Projects",            "Projets"],
  "titre-contact":    ["Contact",             "Contact"],
  "filtre-tous":      ["All",                 "Tous"],
  "filtre-web":       ["Websites",            "Sites web"],
  "filtre-video":     ["Video",               "Vidéo"],
  "desc-recueil":     [
    "Recueil is a documentary about the Buddhist temple Silsangsa and the rural community of Indramang in the township of Sannae, at the foot of Mount Jirisan, in South Korea.",
    "Recueil est un documentaire consacré au temple bouddhiste Silsangsa et à la communauté rurale Indramang de la commune de Sannae, au pied du mont Jirisan, en Corée du Sud."
  ],
  "desc-guycantin":   ["Website creation for an equestrian leather craftsman.", "Création d'un site web pour un tanneur d'équitation."],
  "desc-maison32":    ["Website creation for a Parisian apartment rental.",     "Création d'un site web pour la location d'un appartement parisien."],
  "desc-dicowork":    ["Website creation for a critical dictionary of labour history.", "Création d'un site web pour un dictionnaire critique de l'histoire du travail."],
  "lien-site":        ["Visit the site",      "Voir le site"],
  "intro-contact":    ["A question or a project? Write to me.", "Une question, un projet ? Écris-moi."],
  "mentions":         ["Legal notice",        "Mentions légales"]
};

//Fonction de traduction
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
