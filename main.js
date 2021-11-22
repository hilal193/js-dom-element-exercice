// 1
let h3 = document.getElementById("content")
let affiche = h3.firstElementChild;
console.log(affiche);
// 2
let deux = document.getElementById("titreNiv3");
console.log(deux);
// 3
let prec = deux.previousElementSibling;
console.log(prec);
// 4
let quatre = document.getElementsByClassName("petitParagraphe")[0];
let suivant = quatre.nextElementSibling;
console.log(suivant);
// 5
let cinq = document.getElementsByClassName("important")[0];
let parents = cinq.parentElement;
console.log(parents);
// 6
let six = document.getElementById("listElements").parentElement;
let enfant = six.firstElementChild;
console.log(enfant);
// 7
let sept = document.getElementsByClassName("important");
let septSuivant = sept[sept.length-1].nextElementSibling;
console.log(septSuivant);

// 8
let huit = document.getElementById("textGeneral");
let suivSuiv = huit.nextElementSibling.nextElementSibling;
console.log(suivSuiv);
// 9
let footer = document.getElementById('footer')
let span = footer.getElementsByTagName('span')[0]
console.log(span);
let spanParent = span.parentElement
console.log(spanParent.nextElementSibling.firstElementChild);
// 10
let nicolas = document.getElementsByTagName('b')[2]
console.log(nicolas);
console.log(nicolas.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);
// 11
let onze = document.querySelector(".grandParagraphe");
console.log(onze);
// 12
let douze = document.querySelectorAll("li");
let boucle = Array.from(douze);
boucle.forEach(element => {
  console.log(element);
});
boucle.forEach(element => {
    console.log(element.innerText);
  });
  boucle.forEach(element => {
    console.log(element.textContent);
  });
//   ou
  let test = [...douze]
  test.forEach(element => {
      console.log(element);
  });
  test.forEach(element => {
    console.log(element.innerText);
});
test.forEach(element => {
    console.log(element.textContent);
});