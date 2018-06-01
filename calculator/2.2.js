var ouput=document.getElementById('output');
var result=document.getElementById('result');
var rm=document.getElementById('btn1');
var em=document.getElementById('btn2');
var eq=document.getElementById('eq');
var num=document.getElementsByClassName('num');
        var sn=[];
		var arr="";
		var number=[];//存数字
		var symbol=[];//存符号
for (var i = 0; i < num.length; i++) {
	num[i].onclick=function(){
		arr=arr.concat("",this.innerText);
		console.log(arr);
		output.innerText+=this.innerText;
		if(this.innerText=="-"||this.innerText=="+"||this.innerText=="*"||this.innerText=="/"||this.innerText=="="){
		var index=arr.indexOf(this.innerText);
        var number1=arr.slice(0, index);
        number.push(number1);
        symbol.push(this.innerText);
        var slen=symbol.length-1;//除开等号的长度
        arr="";
		}

		console.log(number);
        console.log(symbol);
        for (var j = 0; j < symbol.length; j++) {
        	sn[j*2]=number[j];
        	sn[j*2+1]=symbol[j];
        }
        console.log(sn);var lastresult=0;var tplen;
        


        function mix(){


        }
        for (var i = 0; i < symbol.length; i++) {
            if ((symbol.indexOf("*")<0)&&(symbol.indexOf("/")<0)) {
            add();
               if(symbol[symbol.length-1]=="="){ 
    
            result.innerText=number[0];
        }
        }
            if ((symbol.indexOf("+")<0)&&(symbol.indexOf("-")<0)) {
            mul();
               if(symbol[symbol.length-1]=="="){ 
    
            result.innerText=number[0];
        }

        }
        
         
        }
      
           if (((symbol.indexOf("*")>=0)||(symbol.indexOf("/")>=0))&&(symbol.indexOf("+")>=0)||(symbol.indexOf("-")>=0)) {
               sn=sn.slice(0, sn.length-1);
               midTOLast(sn);
               console.log(b);
               var value=getValue(b);
                   if(symbol[symbol.length-1]=="="){ 
    
            result.innerText=value;
        }

            }
     




	}
}
	function add(){
            for (var i = 0; i < symbol.length-1; i++) {
                if (symbol[i]=="+") {
                    var tp=Number(number[i])+Number(number[i+1]);
                    number.splice(i,2,tp);
                    symbol.splice(i,1);
                }
                else{
                    var tp=Number(number[i])-Number(number[i+1]);
                    number.splice(i,2,tp);
                    symbol.splice(i,1);
                    }
               
            }
            return number;

        }
        function mul(){
             for (var i = 0; i < symbol.length-1; i++) {
                if (symbol[i]=="*") {
                    var tp=Number(number[i])*Number(number[i+1]);
                    number.splice(i,2,tp);
                    symbol.splice(i,1);
                }
                else{
                    var tp=Number(number[i])/Number(number[i+1]);
                    number.splice(i,2,tp);
                    symbol.splice(i,1);
                    }
                
            }
            return number;

        }
        function find(a,x){
          var results=[],
            len=a.length,
            pos=0;
          while(pos<len){
           pos=a.indexOf(x,pos);
           if(pos===-1){//未找到就退出循环完成搜索
            break;
           }
           results.push(pos);//找到就存储索引
           pos+=1;//并从下个位置开始搜索
          }
          return results;
         }
         
         console.log(find(symbol,"*"));
        
         console.log(find(symbol,"/"));





 function midTOLast(a){
  var a_len=a.length;
  var myArray=new Array();
  b=[];
  for(var i=0;i<a_len;i++){
   switch (a[i]){
    case '(':
    {
     myArray.push(a[i]);
     break;
    }
    case ')'://如果是）则将栈中左括号之前的对象弹出
    {
     if(myArray.length==0){
      return false;
     }
     temp=myArray.pop();//非空，弹出对象
     while(temp!='('){//只要不是左括号，则全部弹出
      b.push(temp);//并输出到后缀表达式中
      if(myArray.length==0){//保证栈为空
       break;
      }
      temp=myArray.pop();
     }
     break;
    }
    case '*':{
     if(myArray.length==0){//如果栈为空则直接入栈
      myArray.push(a[i]);
     }else{
      temp=myArray[myArray.length-1];
      if(temp=='+'||temp=='-'){//如果遇到高的，则遇到的继续入栈
       myArray.push(a[i]);//遇到的入栈
      }
     }
     break;
    }
    case '/':
    {
     if(myArray.length==0){//如果栈为空则直接入栈
      myArray.push(a[i]);
     }else{
      temp=myArray[myArray.length-1];
      if(temp=='+'||temp=='-'){//如果遇到高的，则遇到的继续入栈
       myArray.push(a[i]);//遇到的入栈
      }
     }
     break;
    }
    case '+':{
     if(myArray.length==0){//如果栈为空则直接入栈
      myArray.push(a[i]);
     }else{
      temp=myArray[myArray.length-1];
      if(temp=='/'||temp=='*'){//如果遇到低的，则栈中的出栈，遇到的入栈
       while(myArray.length!=0){
        temp=myArray.pop();//栈中的出栈
        b.push(temp);//保存到存储空间
       }
       myArray.push(a[i]);//遇到的入栈
      }
     }
     break;
    }
    case '-':
    {
     if(myArray.length==0){//如果栈为空则直接入栈
      myArray.push(a[i]);
     }else{
      temp=myArray[myArray.length-1];
      if(temp=='/'||temp=='*'){//如果遇到低的，则栈中的出栈，遇到的入栈
       while(myArray.length!=0){
        temp=myArray.pop();//栈中的出栈
        b.push(temp);//保存到存储空间
       }
       myArray.push(a[i]);//遇到的入栈
      }
     }
     break;
    }
    default:
    {
     b.push(a[i]);
     break;
    }
   }
  }
  //最后将栈中剩下的操作符输出
  while(myArray.length!=0){
   temp=myArray.pop();
   b.push(temp);
  }
  return true;
 }
  function getValue(a){
  var a_len=a.length,
   myArray=new Array();
   for(var i=0;i<a_len;i++){
    switch (a[i])
    {//遇到数值则直接入栈
    //  case '0':
    //  case '1':
    //  case '2':
    //  case '3':
    //  case '4':
    //  case '5':
    //  case '6':
    //  case '7':
    //  case '8':
    //  case '9':
    //  case "10":
    //  {
    //   myArray.push(a[i]);
    //   break;
    //  }
     case '+':
     {//遇到操作符则出栈两个元素进行对应操作
      temp=Number(myArray.pop())+Number(myArray.pop());
      myArray.push(temp);//再将结果入栈
      temp=null;
      break;
     }
     case '-':
     {
      s=myArray.pop();
      temp=myArray.pop()-s;
      myArray.push(temp);
      s=null;temp=null;
      break;
     }
     case '*':
     {
      temp=myArray.pop()*myArray.pop();
      myArray.push(temp);//再将结果入栈
      temp=null;
      break;
     }
     case '/':
     {
      s=myArray.pop();
      temp=myArray.pop()/s;
      myArray.push(temp);
      s=null;temp=null;
      break;
     }
     default:{

      myArray.push(a[i]);
      break;

     }
    }
   }
   return myArray.pop();//算出结果
 }
	// 	C的作用
	em.onclick=function(){
			ouput.innerText="";
		 number=[];//存数字
		 symbol=[];//存符号
		 arr="";
		 result.innerText="";
	}
	// 	X的作用
	rm.onclick=function(){
	var str=output.innerText;
	arr=arr.slice(0, arr.length-1);
	len=str.length-1;
	output.innerText=str.slice(0, len);		
	}