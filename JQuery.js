document.writeln('hi')
//---------------------------
document.body.style.backgroundColor = 'blue'
//----------------------------
$ ('#firstHeading').text('nihongo')
// في حاله تغير اسم كلاس او ايدي نستخدم تيكست
// $ ( .class or #id).text('change the text')
//----------------------------
$ ('p').css('color' , 'red');
//----------------------------
$ ('#firstHeading').css('background-color' , 'pink');
//----------------------------
$ ('#firstHeading').html('<ul><li> JAPAN </li></ul>')
// change the header to unorder list
$ ('#firstHeading').css('color' , 'blue');
//----------------------------

$ ('#firstHeading').css('display' , 'none');
// disappear the header

//---------------------------

$ ('#firstHeading').css('color')
// يرجع لنا القيمه
"rgb(0, 0, 255)"
$ ('#firstHeading').text()
// يرجع لنا القيمه
" JAPAN "

//-------------------------
$('img').attr('srcset', 'https://picsum.photos/200/100')
// change the image
//-------------------------------------
$ ('#firstHeading').hide()
$ ('#firstHeading').show()

//-------------------------------------
