determinant.onclick = function(){
    var a = document.getElementById("s11").value;
    var b = document.getElementById("s12").value;
    var c = document.getElementById("s13").value;
    var d = document.getElementById("s21").value;
    var e = document.getElementById("s22").value;
    var f = document.getElementById("s23").value;
    var g = document.getElementById("s31").value;
    var h = document.getElementById("s32").value;
    var i = document.getElementById("s33").value;
  
    var final = a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
      var final2 =a+" * ( "+e+" * "+i+" - "+f+" * "+h+" ) - "+b+" * ( "+d+" * "+i+" - "+f+" * "+g+" ) + "+c+" * ( "+d+" * "+h+" - "+e+" * "+g+" ) = ";
      final2+=final;
      document.getElementById("solution").innerText = final2;
    document.getElementById("result").innerText = final;
  }