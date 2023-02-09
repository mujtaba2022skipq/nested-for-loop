for(i=0; i<=10; i++){
    for(var j=0; j<=i; j++){
        document.write (j,'')
    }
    document.write ('<br>')
}

document.write ('<br>')
for(i=0; i<=10; i++){
    for(var j=0; j<=i; j++){
        document.write ("#",'')
    }
    document.write ('<br>')
}
document.write ('<br>')
var n=5;
var i,j,k;
for(i=1; i<=n; i++){
    for(j=1; j<=n - i; j++){
        document.write ("&nbsp;&nbsp;");
    }
    for(k = 0; k < 2 * i - 1; k++){
        document.write ("*");
    }
    document.write ("<br>");
}

for(i=1; i<=n; i++){
    for(j=0; j< i; j++){
        document.write ("&nbsp;&nbsp;");
    }
    for(k = (n - i) * 2 - 1; k > 0; k--){
        document.write ("*");
    }
    document.write ("<br>");
}

