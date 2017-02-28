var CreationTableauLangages = function () {
  var langage = ['Html', 'CSS', 'Java', 'PHP'];
    return langage;
}

var CreationTableauNombres = function () {
 var nombre = [0, 1, 2, 3, 4, 5];
    return nombre;
}

var RemplacementElement = function (langage) {
  langage[2] = 'Javascript';
  return langage;
}

var AjoutElementLangages = function (langage) {
   langage.push('Ruby', 'Python');
    return langage;
}

var AjoutElementNombres = function (nombre) {
  nombre.unshift(-2, -1);
   return nombre;
}

var SuppressionPremierElement = function (langage) {
 langage.shift('');
  return langage;
}

var SuppressionDernierElement = function (langage) {
 langage.pop('')
  return langage;
}

var ConversionChaineTableau = function (reseauxSociauxChaine) {
   return reseauxSociauxChaine.split(',') ;

}

var ConversionTableauChaine = function (langage) {
   var langageChaine = langage.join(',');
  return langageChaine;
}

var TriTableau = function (reseauxSociaux) {
  var reseauxSociauxsorted = reseauxSociaux.sort();
  return reseauxSociauxsorted;
}

var InversionTableau = function (reseauxSociaux){
 var reseauxSociauxreverse = reseauxSociaux.reverse();
  return reseauxSociauxreverse;
}
