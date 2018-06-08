var str = process.argv[2];

str = str.replace(/\W/g, '');
var d = str.replace(/\D/g, '');
var s = str.replace(/[aeiouyAEIOUYаеёиоуыэюяАЕЁИОУЫЭЮЯ0123456789]/g,'');
var g = str.replace(/[qwrtpsdfghjklzxcvbnmQWRTPSDFGHJKLZXCVBNMйцкнгшщзхъфвпрлджчсмтьбЙЦКНГШЩЗХЪФВПРЛДЖЧСМТЬБ0123456789]/g,'');

if (g.length != 0)
	g += " ";
if (s.length != 0)
	s+= " ";
var res = g + s + d;
process.stdout.write(res + '\n');
