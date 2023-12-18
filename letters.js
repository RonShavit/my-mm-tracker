
let phrase = prompt("Enter Pharse: ").toUpperCase();
let charec = prompt("Enter Char: ");
let out = ['','','','',''];
let one = ['BDEFHKLMNPRTUVWXYZ','ABCDEFGOPQRSTZ','ABCDEFGIOPQRSTZ','ABCDEFGJKOPQRSTZ','CEFHMNSTUVWXYZ'];
let two = ['ABCDEFGHKLMNOPQRSUVW','MNXY','IKT','JMXYZ','ABDHMNOPQRUVW'];
let three = ['ABCDEFGHKLMNOPQRUVW','BEFHKPRS','BEFGHIMNPRSTWXYZ','BEFGHJPRS','ADEFHMNOQUVW'];
let four = ['ABCDEFGHKLMNOPQRUW','AJVWXZ','AIKTY','AJNQRVWX','ABDGHMNOQSUW'];
let five = ['ABDEFHKLMNPRSWXZ','BCDEGLOQSUZ','BCDEGIJLOQSTUVYZ','BCDEGKLOQSUZ','ACEHLMNQRWXZ'];
let checks = [one,two,three,four,five];

for (let i = 0 ;i<phrase.length;i++)
{
    for (let j = 0; j<checks.length;j++)
    {
        out[j] += checkLetters(phrase[i],checks[j], charec)
    }
}



document.getElementById("text1").innerHTML = out[0];
document.getElementById("text2").innerHTML = out[1];
document.getElementById("text3").innerHTML = out[2];
document.getElementById("text4").innerHTML = out[3];
document.getElementById("text5").innerHTML = out[4];


function checkLetters(letter, check, charac)
{
    let result = '';
    for (let i=0;i<check.length;i++)
    {
        if (check[i].includes(letter))
        {
            result+=charac;
            result+=charac;
        }
        else if (letter == ' ')
        {
            result+= '  '
        }
        else
        {
        result+='  ';
        }
    }

    result+='  ';
    return result;

}