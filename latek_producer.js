/*aim : output latek code for various purposes 
parrameters, settings, alignment , answer sheets , drawings and graphics, 
etc
*/

/*generate fractions (positive) for multiplication only
produces double the no. of fractions 
*/
function generate(){
    el = document.getElementById("inputVal");
    N = el.value;
    // echo(n);
    var r;
    r  = new Array();
    var q="";
    var k = 1;
    tab5 = '&nbsp'.repeat(60);
    doll = "$";
    curlyB = '{';
    curlyD = '}';
    for(j=0; j<N; j++){
       for(i=0; i<8 ; i++){
          r[i] = Math.ceil(Math.random() * 100 ) ;
          if(Math.random() > 0.5 ){              //to reduce the odd nos. 
             if(r[i] %2 != 0 ){
                r[i]++;
             }
          }
          
       }
       q  = q + k 
             +doll
             + (j%2 ? '' : '{' )
             + ".\\displaystyle \\frac{" 
             + r[0] 
             + "}{" 
             + r[1] 
             + "}\\ \\times \\ \\frac{" 
             + r[2] 
             + "}{" 
             + r[3] 
             + "}\\ \\ = \\ "
             + (j%2 ? '' : '}' )
             +doll
	    + tab5
             + (k+1)                            
             + ".$\\displaystyle \\frac{" 
             + r[4] 
             + "}{" 
             + r[5] 
             + "}\\ \\times \\ \\frac{" 
             + r[6] 
             + "}{" 
             + r[7] 
             + "}\\ \\ = \\ $" 
             +"<br /><br />";
 
             k = k+2;
    }
   
 
    b = document.getElementById("list");
    // b.innerHTML = r.toLocaleString();
    b.innerHTML = q;
 
 }


 /* to generate integers , dual column 
 same operation at row level */

 function generateIntegers(){                                 
   p = document.getElementById("integerInputVal").value;
   p = Number(p);
   k = 0;
   answer ="";
   str = "";
   tab5 = "&nbsp".repeat(40);
   operation = '+';
   n = new Array();
   for(i=0 ; i< (p/2); i++){
      for ( j=0; j< 4; j++){                                             //get the integers 
         n[j] = Math.floor(Math.random()*100);
         t = Math.round(Math.random()) * (-1);
         if(t==0){                                   //to get negative integers 
             operation = '-';
            }
         else {
            operation = '+';
            n[j] *= t ;            
         }
      }
      str = str  + "${\\displaystyle " + 
            ++k + 
            ".\\ \\ " + 
            n[0] + 
            "\\ " +
            operation +
            "\\  " +
            (n[1]>0 ? " " : "( ")+  
            n[1]+ 
            (n[1]>0 ? " " : ") ")+ 
            "\\ =\\ }$"+ 
            tab5 + 
            "$\\displaystyle " +
            ++k +             
            ".\\ \\ " + 
            n[2] + 
            "\\ " +
            operation +
            "\\  " +
            (n[3]>0 ? " " : "( ")+  
            n[3]+ 
            (n[3]>0 ? " " : ") ")+ 
            " \\ =\\ $"+ 
            "<br /> ";
            if(operation == '+'){
               answer  =  answer + (n[0] + n[1])+ "<br /> "+ (n[2]+n[3])+ "<br />";
            }
            else {
               answer  =  answer + (n[0] - n[1])+ "<br /> "+ (n[2]- n[3]) + "<br />";
            }
   }
   list = document.getElementById("list");
   list.innerHTML = str;
   ans = document.getElementById("answers");
   ans.innerHTML = answer;
      //  document.write(p);
 }
