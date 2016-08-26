
var sign;
var srcValue;


function press(domElement){
     
     var value =  document.getElementById("calc").value;
     if(document.getElementById("calc").value.length < 15){
     value = value.concat(domElement.value);
     document.getElementById("calc").value =value;
       
    }
};

function clearEntry(){
    document.getElementById("calc").value="";
};

function setSign(domElement){
   sign = domElement.value;
    srcValue=document.getElementById("calc").value;
   clearEntry();
};


function sqrt(){
     var value1 = document.getElementById("calc").value;
     document.getElementById("calc").value = Math.sqrt(value1);
};

function result(){
     if(sign==="√"){ sqrt();}
     else if (sign!=="√"){ var destValue = document.getElementById("calc").value;
     document.getElementById("calc").value = eval(`${srcValue}${sign}${destValue}`);
                         resultBorder(document.getElementById("calc").value);}
};

function setSqrt(domElement){
    sign = domElement.value;
    srcValue=document.getElementById("calc").value;
   
};


function changeSign(domElement){
    var atribute = document.getElementById("calc").value;
    if(atribute>0){  atribute =(domElement.id).concat(atribute);
       document.getElementById("calc").value = atribute;
    }else if(atribute<0){     atribute = atribute.replace("-","");
      document.getElementById("calc").value=atribute;  
    } 
};

function undisableBtnPoint() {
    document.getElementById("11").disabled = false;
};

function disableBtnPoint() {
    document.getElementById("11").disabled = true;
};

function point1(domElement){
            var dec = document.getElementById("calc").value;
    var reg =/[.]{1}[0-9]{1,}[.]{1}/g;
          if(dec==="."){
        document.getElementById("calc").value = dec.replace(".","");
           undisableBtnPoint();
          }else if(dec.match(reg)){
               document.getElementById("calc").value=dec.replace(/[.]$/,"");
              }
              else {
                  disableBtnPoint();
              }
          
    };

 function zero(domElement){
     var zer = document.getElementById("calc").value;
     var regular = /[0][1-9]/m;
     var regularZero = /[0]/m;
       
     if (zer.match(/[1-9]{1}[0]{1,}/)){
        document.getElementById("calc").value = zer;
    }else if (zer.match(regular)){
       document.getElementById("calc").value = zer.substr(1,zer.length); }
     else if(zer.match(/[0]{1,}[1-9]{0}/)){
        document.getElementById("calc").value = zer.replace(/[0]{1,}/,"0");}
};




 function exp(){
      var exp1 = document.getElementById("calc").value;
     document.getElementById("calc").value= Math.exp(exp1);
     resultBorder();
     if (exp1==="Infinity"){
          alert('Can not count Infinity exp! Push button "OK" ,after push "C" and try again.');
     }
 }

 function log(){
      var log1 = document.getElementById("calc").value;
     document.getElementById("calc").value= Math.log(log1);
     resultBorder();
     if (log1<0){
          alert('Can not count log because digit < 0! Push button "OK" ,after push "C" and try again.');
     }
 }

function resultBorder(){
    var  bor = document.getElementById("calc").value;
    document.getElementById("calc").value = bor.substring(0,15);
    document.getElementById("calc").value = parseFloat(bor).toFixed(8);
   
  };

function delLastSign(){
     var del = document.getElementById("calc").value;
    document.getElementById("calc").value = del.substr(0,del.length-1);
}

 



