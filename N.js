var k=764.2;
var m=0.3895;
var x1=0.076;
var v12=11.3325;
var btn=document.getElementById('btn');
btn.addEventListener("click",data);
function data()
{
  var angle=parseFloat(document.getElementById('angle').value);
  var srh=parseFloat(document.getElementById('srh').value);
  var x2o=(x1*srh)/100;
  var v2o2=(((0.5*k*x2o*x2o)+m*9.81*x2o*Math.cos(90-angle))*2)/m;
  var v22=(v2o2*0.5*k*x1*x1)/((0.5*k*x1*x1)+m*9.81*x1*Math.cos(90-angle));
  var rh=(Math.sqrt(v22/v12))*100;
  var print=document.getElementById('print');
  if(Number.isNaN(rh))
  {
    return false;
  }
  else
  {
    print.textContent="Normalized Rebound Number: "+rh;
  }
}
