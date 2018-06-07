var a = process.argv[2]; 
function fibo (num) {
	var n = Math.abs(num);
	var f0 = 0;
	var f1 = 1;
	if (n < 2)
  		return n;
 	var i;
 	var fi;
 	for (i=2; i <=n ; i++){ 
 		fi = f0 + f1;
 		f0 = f1;
 		f1 = fi;
 	}
 	return fi;
	}
process.stdout.write(fibo(a));
