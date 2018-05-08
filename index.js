


function reverse(binary){
    let A=new Array();

    for(var i=binary.length-1;i>=0;i--){
        A.push(binary[i]);
    }

    return A;
}


function compare(binary1,binary2){
    if(binary1.length>binary2.length){
            return binary1.length;
    }
    else return binary2.length;
}


function convert(number,allow){
    
    let tmp=new Array();    
      let  bin=Math.abs(number);
    
    while(bin){
        tmp.push(bin%2);
        bin=parseInt(bin/2);
    }
   
  
   if(allow){
        tmp.push(0);
   }
    return reverse(tmp);

    
}


function unconvert(Array){
    let result=0;
       for(let i=0;i<Array.length;i++){
        result+= Array[i] *Math.pow(2,Array.length-1-i);
       }

       return result;
}



function minus(binary,count){


    if(binary.length<count){
        binary=Add(count-binary.length,binary);
    }

    for(let i=binary.length-1;i>=0;i--){
        if(parseInt(binary[i])==1&&i!=0){
            for(let j=i-1;j>=0;j--){
                if(parseInt(binary[j])==1){
            
                    binary[j]=0;
                }
                else binary[j]=1;
            }
            return binary;
        }

        
    }

    return binary;
}


function plus(binary,count){
    if(binary.length<count){
        binary=Add(count-binary.length,binary);
    }
    return binary;
}

function SHR(binary,type,binary2,length){
    
  
    if(type){

        if(binary.length>length){
            binary.splice(0,1);
        }

        binary.splice(0,0,binary[0]);
    }
    else {
        binary.splice(0,0,binary2[binary2.length-1]);
      
    }
    binary.pop();

    return binary;
}



function Add(add,binary){
    
        
        var bin=new Array();

        for(let i=0;i<add;i++){
            bin.push(0);
        }


      binary.forEach(element => {
          bin.push(element);
      });


  

    return bin;

}




function plusbit(binary1,binary2,type){

    if(binary1.length>binary2.length){
       binary2 = Add(binary1.length-binary2.length,binary2);
    }
    else if(binary1.length<binary2.length){
      binary1 =  Add(binary2.length-binary1.length,binary1);
    }

     
    
    let tmp=new Array();
    var remember=0;
    if(binary1.length==binary2.length){
        
        for(var i=binary1.length-1;i>=0;i--){
            var add=parseInt(binary1[i]+binary2[i]+remember);

            switch(add){
                case 2:
                if(i==0){
                    
                    tmp.push(0);
                    tmp.push(1);
                    
                }
                else {
                    tmp.push(0);
                    remember=1;
                }
                break;


                case 3:
                if(i==0){
                
                    tmp.push(1);
                    tmp.push(1);
                   
                }
                else {
                    tmp.push(1);
                    remember=1;
                }
                break;

                default :
                    tmp.push(add);
                    remember=0;
                    break;

            }

        }


      
        return reverse(tmp);  
    }
}
function onecomplement(binary){
        for(let i=binary.length-1;i>=0;i--){
        
                    if(parseInt(binary[i])==1){
                        binary[i]=0;
                    }
                    else binary[i]=1;
                }
          
                return binary;
 }
        
function divbit(binary1,binary2,count){
    let bin1=unconvert(binary1);
    let bin2=unconvert(binary2);

    if(bin1>bin2)  return plus(convert(bin1-bin2,false),count);
    else return minus(convert(bin1-bin2,false),count);
       


   
}


var number1=12;
var number2=-5;


let count= compare(convert(number1,true),convert(number2,true));
let length=count;



function init(A,Q,M,Q1){

    A = new Array();
    A=Add(count,A);
    

    Q1=0;

    if(number1>0) M=plus(convert(number1,false),length);
    else M=minus(convert(number1,false),length);

    if(number2>0) {
        Q=plus(convert(number2,false),length);
    }
    else Q=minus(convert(number2,false),length);


    let object = {"A":A,"Q":Q,"Q1":Q1,"M":M};

   return object;
}


let A;
    
var Q;
var M;

function Booth(A,Q,Q1,M){
     let object =  init(A,Q,Q1,M);
    A=object.A;
    Q=object.Q;
    Q1=object.Q1
    M=object.M;
   

    while(count){
            if((Q1==0&&parseInt(Q[Q.length-1])==0) || (Q1==1&&Q[Q.length-1]==1)){
                    Q=SHR(Q,false,A);
                    A=SHR(A,true);
                  
                    count--;
            }
            else {
                if(Q1==1&&parseInt(Q[Q.length-1])==0){
                    A=plusbit(A,M);
                    Q1=Q[Q.length-1];
                    Q=SHR(Q,false,A);
                    A=SHR(A,true,Q,length);
                  
                  
                    count--;
                }
                else {
                    
               
                    A=divbit(A,M,length);
                
                    Q1=Q[Q.length-1];
                    Q=SHR(Q,false,A);
                    A=SHR(A,true,Q,length);
                
                    
                    count--;
                }
            }
    }

   

    console.log("result = ", A+","+Q);

}

Booth();





