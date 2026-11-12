console.log("Innan blocket");
{
  let name = "Sara";
  const age = 22;
  var city = "Borlänge";

  console.log(name);
  console.log(age);
  console.log(city);
}

console.log("Efter blocket");
console.log(city);
/*
Reflektion uppgift 2:

Var, let och const används för att skapa variabler.
Let och const fungerar bara inuti blocket medan
var även fungerar utanför blocket.

När jag testade console.log såg jag att alla tre
fungerade inuti blocket, men bara var fungerade
utanför.
*/
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? "truthy" : "falsy");

  if (
    num1 !== null &&
    num1 !== undefined &&
    num2 !== null &&
    num2 !== undefined &&
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    !isNaN(num1) &&
    !isNaN(num2)
  ) {
    return num1 + num2;
  } else {
    console.log("Felaktig input");
  }
};

console.log(add(5, 3));

/*
Reflektion uppgift 3:

Om jag hade använt let istället för const hade
jag kunnat ändra värdet på variabeln add.

Jag hade också kunnat skriva funktionen så här:

function add(num1, num2) {
    return num1 + num2;
}

Return betyder att funktionen skickar tillbaka
ett resultat, i detta fall summan av två tal.
*/
/*
Reflektion uppgift 4:

En ternary operator är ett kortare sätt att skriva
if och else.

Två likhetstecken (==) jämför värden medan tre
(===) jämför både värde och datatyp.

Jag använde !== null och !== undefined för att
kontrollera att parametrarna har giltiga värden.
*/

const num1 = 0;
let arg1;
let sum = false;

// Test 1
console.log(add(sum, 1));

// Test 2
sum = add("0", 3);
console.log(sum);

// Test 3
console.log(add(3, "num1"));

// Test 4
console.log(add(-5, num1));

// Test 5
console.log(add(arg1, 7));

// Test 6
console.log(add());

console.log(num1);
console.log(sum);

/*
Reflektion uppgift 5:

En parameter är namnet som används i funktionen,
medan ett argument är värdet man skickar in när
man anropar funktionen. En variabel används för
att spara ett värde.

Det sista värdet på num1 blir 0 eftersom värdet
inte ändras i testerna. Sum blir undefined eftersom
test 2 inte fungerar då "0" är text och inte en siffra.

Test 1 fungerar inte eftersom sum är false.
Test 2 fungerar inte eftersom "0" är text.
Test 3 fungerar inte eftersom num1 är text.
Test 4 fungerar och ger -5 eftersom båda värdena
är siffror.
Test 5 fungerar inte eftersom arg1 saknar värde.
Test 6 fungerar inte eftersom inga argument skickas in.
Därför får båda parametrarna num1 och num2 värdet
undefined. Funktionen kan då inte returnera någon summa
och skriver istället ut "Felaktig input".
*/
