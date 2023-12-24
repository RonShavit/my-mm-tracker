
//get text and a char from user;
//prints to screen a big text made from give char
/*
(for text="abcdefghijqlmnopqrstuvwxyz 1234567890" and char='#' )
  ######    ########      ########  ########    ##########  ##########    ######    ##      ##      ##            ##    ##    ##    ##          ##      ##  ##      ##    ######    ########      ######    ########      ########  ##########  ##      ##  ##      ##  ##      ##  ##      ##  ##      ##  ##########                  ##        ######      ######          ##    ##########    ######    ##########    ######      ######      ######    
##      ##  ##      ##  ##          ##      ##  ##          ##          ##          ##      ##      ##            ##    ##  ##      ##          ####  ####  ####    ##  ##      ##  ##      ##  ##      ##  ##      ##  ##              ##      ##      ##  ##      ##  ##      ##    ##  ##      ##  ##          ##                  ####      ##      ##        ##        ####    ##          ##                ##    ##      ##  ##      ##  ##      ##  
##      ##  ########    ##          ##      ##  ##########  ##########  ##  ####    ##########      ##            ##    ####        ##          ##  ##  ##  ##  ##  ##  ##      ##  ########    ##      ##  ########      ######        ##      ##      ##  ##      ##  ##  ##  ##      ##          ##          ##                      ##            ##      ######      ##  ##    ########      ######          ##      ######      ######    ##      ##  
##########  ##      ##  ##          ##      ##  ##          ##          ##      ##  ##      ##      ##        ##  ##    ##  ##      ##          ##      ##  ##    ####  ##      ##  ##          ##    ####  ##    ##            ##      ##      ##      ##    ##  ##    ####  ####    ##  ##        ##        ##                        ##          ##            ##    ##########          ##  ##      ##      ##      ##      ##          ##  ##      ##  
##      ##  ########      ########  ########    ##########  ##            ######    ##      ##      ##          ##      ##    ##    ##########  ##      ##  ##      ##    ######    ##            ########  ##      ##  ########        ##        ######        ##      ##      ##  ##      ##      ##      ##########                  ##      ##########    ######          ##    ########      ######        ##        ######          ##      ######    
*/
let phrase = prompt("Enter Pharse: ").toUpperCase();
let charec = prompt("Enter Char: ");
let out = ['','','','',''];
let one = ['BDEFHKLMNPRTUVWXYZ57\\','ABCDEFGOPQRSTZ23567890','ABCDEFGIOPQRSTZ123567890\'','ABCDEFGJKOPQRSTZ234567890','CEFHMNSTUVWXYZ57/'];
let two = ['ABCDEFGHKLMNOPQRSUVW256890','MNXY1\\=','IKT14\'+=','JMXYZ47/=','ABDHMNOPQRUVW28903'];
let three = ['ABCDEFGHKLMNOPQRUVW506','BEFHKPRS345689-+','BEFGHIMNPRSTWXYZ135689-\\+/','BEFGHJPRS23456789-+','ADEFHMNOQUVW09'];
let four = ['ABCDEFGHKLMNOPQRUW4680','AJVWXZ4/=','AIKTY1247,+=','AJNQRVWX4\\=','ABDGHMNOQSUW4568903'];
let five = ['ABDEFHKLMNPRSWXZ25_/','BCDEGLOQSUZ235680_,','BCDEGIJLOQSTUVYZ12356780_.','BCDEGKLOQSUZ23456890_','ACEHLMNQRWXZ2_\\'];
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