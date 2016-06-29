window.onload=function(){
var input=document.getElementById("wrap");
var parent=document.getElementById("demo");	
	input.onfocus=function(e){
		var event=e||window.event;
		if(this.value=="请输入文字"){
			this.value="";
			input.style.color="black";
			}
		}
	input.onblur=function(e){
		var event=e||window.event;
		if(this.value==""){
		input.value="请输入文字";
		input.style.color="#999";
		}
	}	
var arr=[];
// 把keyup事件绑定到document中 
input.onkeyup =function getKey(e){ 
var  e = e || window.event; 
	arr.push(String.fromCharCode(e.charCode));
var keycode = e.which ? e.which : e.keyCode; 
if(keycode == 13 || keycode == 108){ //如果按下ENTER键 
//在这里设置你想绑定的事件 
if(input.value!=""){
var oDiv=document.createElement('div');	
	oDiv.className="demo";
	parent.appendChild(oDiv);
	input.value="";
			} 
		}   
	
	}


}