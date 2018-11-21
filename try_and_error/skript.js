/* Mein erster Versuch mit JavaScript
20.09.2017
*/

//Datendeklaration
var text = document.querySelector('article').innerHTML;

//eine HTML-Ausgabe
document.write("<BR>");
document.write("Textlänge: <i>" + text.length + "</i>");
//Eine Ausgabe in der Konsole
console.log(text.length);
if(text.length > 3000)
{document.write("<BR>" + "langer text!");}
// einzeiliger Kommentar
/*
mehrzeiliger Kommentar
*/

var arr_words = text.split(/\W+/);
console.log(arr_words);


var array = [
	"Eins",
	"Zwei",
	"Drei"];
console.log(array);

var i = 0; 
while (i < 3) 
{
console.log(array[i]); 
i++; 
}

groesstes_wort(arr_words);

function groesstes_wort(arr)
{
var groesstes = ''; 

document.write(arr.length); 
document.write ("<BR>");

for(var i = 0; i < arr.length; i++)
{
	if (arr[i].length > groesstes.length){groesstes = arr[i];}
	i++;
}
document.write ("<BR>");
document.write (groesstes);
document.write ("<BR>");
arr.push(i);
}
