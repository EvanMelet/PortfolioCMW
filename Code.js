document.querySelectorAll(".language").forEach(function (input) {
  input.addEventListener("click", function (e) {
    changeLanguage(e);
  })}); 
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
  // For each identifier of a block containing some text
  Object.keys(languages).forEach(function (blockId) {
    // Fill in the block with the text in the right language
    document.querySelector("#" + blockId).innerHTML =
      languages[blockId][languageId];
  });
  // Whitespaces before punctuation
  if(languageId == 1){
    // French language: insert nobreak spaces before punctuation
    document.querySelectorAll(".punct").forEach(function(punct){punct.innerHTML = "&nbsp;";})
  }else{
    // Other languages: no whitespaces before punctuation
    document.querySelectorAll(".punct").forEach(function(punct){punct.innerHTML = "";})
  }
}
