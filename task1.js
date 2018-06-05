
var str = process.argv[2]; 

function palindrom (string) {
	string = string.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, '');
 	return string.split('').reverse().join('') == string;
}

if (palindrom(str))
	process.stdout.write('YES');
else 
process.stdout.write('NO');
