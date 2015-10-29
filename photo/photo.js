function showPic(whichpic){
	var source=whichpic.getAttribute("href");//取出各个图片链接
	var placeholder=document.getElementById("placeholoder");//获取并定义占位符
	placeholder.setAttribute("src",source);//对这个占位符进行src属性的更改
	var text=whichpic.getAttribute("title");//将title标签赋值给text
	var description=document.getElementBtId("description");//通过ID取出description吧它存在这个变量中
	description.firstChild.nodeValue="text";//description这个变量的第一个子节点的node值设为text
	}