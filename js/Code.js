document.querySelectorAll(".language").forEach(function (input) {
  input.addEventListener("click", function (e) {
    // faire tourner le drapeau lorsqu'on clique dessus
    rotateFlag(e.target);
    changeLanguage(e);
  });
});

// ajouter la classe pour la rotation et l'enlever quand l'animation se termine
function rotateFlag(element) {
  element.classList.add("spin");
  element.addEventListener("animationend", function handler() {
    element.classList.remove("spin");
    element.removeEventListener("animationend", handler);
  });
}

var languages = {
    // l'ordre des éléments correspond aux drapeaux ; si ceux-ci sont
    // inversés, il suffit de permuter les deux entrées dans chaque tableau
    titre_page :["my portfolio", "Mon Portfolio"],
    presentation : ["Welcome to my portfolio yeahhhhh !", "Bienvenue sur mon portfolio yeahhhhh !"],
    texte_presentation : [
        "I am a developer passionate about creating websites and applications. I love learning new technologies and taking on challenges to improve my skills. On this portfolio, you will find my projects, skills, and professional experiences. Feel free to contact me for any collaboration or job opportunity!",
        "Je suis un développeur passionné par la création de sites web et d'applications. J'aime apprendre de nouvelles technologies et relever des défis pour améliorer mes compétences. Sur ce portfolio, vous trouverez mes projets, mes compétences et mes expériences professionnelles. N'hésitez pas à me contacter pour toute collaboration ou opportunité d'emploi !"
    ]
}
function changeLanguage(event) {
  var languageId = event.target.dataset.language;
  // Pour chaque identifiant d'un bloc contenant du texte
  Object.keys(languages).forEach(function (blockId) {
    // Remplir le bloc avec le texte dans la langue appropriée
    document.querySelector("#" + blockId).innerHTML =
      languages[blockId][languageId];
  });
  // Espaces avant la ponctuation
  if(languageId == 1){
    // Langue française : insérer des espaces insécables avant la ponctuation
    document.querySelectorAll(".punct").forEach(function(punct){punct.innerHTML = "&nbsp;";})
  }else{
    // Autres langues : pas d'espaces avant la ponctuation
    document.querySelectorAll(".punct").forEach(function(punct){punct.innerHTML = "";})
  }
}
