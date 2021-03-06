//dropdown click
document.getElementById("dldropdown").addEventListener("change", function(){
var value=this.value;

switch (value) {
            case 'declare':
				swapContent ("datalayerdec");
                break;
            case 'push':
                swapContent ("datalayerPush");
                break;
			case 'select':
				document.getElementById('addMore').style.visibility = "hidden";
				document.getElementById('dataGenerate').style.visibility = "hidden";
				document.getElementById('taggingcode').style.visibility = "hidden";
				document.getElementById('MainContainer').innerHTML = "";
				document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
                break;
        }
})

//replace the main header with desired element
function swapContent (id) {
	document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
	document.getElementById('addMore').style.visibility = "visible";
	document.getElementById('dataGenerate').style.visibility = "visible";
	document.getElementById('taggingcode').style.visibility = "visible";
	//document.getElementById('MainContainer').style.visibility = "visible";
	
	let main = document.getElementById('MainContainer');
	let oldChild = main.firstElementChild;
    let newChild = document.getElementById(id);
	let clone = newChild.cloneNode(true);
	clone.style.visibility = "visible";
	if(oldChild!=null){
    //const clone = div.cloneNode(true);
     //while (main.firstChild) main.firstChild.remove();
	 main.replaceChild(clone, oldChild);
	 
	}
	else{
		main.appendChild(clone);
	}
}

function removeNode(){
	alert(this.parent.innerHTML);
}

//var datalayerclass = document.getElementById("MainContainer").firstElementChild;
var addmore=document.getElementById("addMore");
addmore.addEventListener("click", function newRow(){	
    var datalayerclass = document.getElementById("MainContainer").firstElementChild;
	//alert("class name is "+datalayerclass);
	var div = document.createElement("div");
	var inputkey = document.createElement("input");
	var inputvalue = document.createElement("input");
	var b = document.createElement("b");
	var p = document.createElement("p");
	var removeicon= document.createElement("img");
	div.classList.add("input-group","keyvalue");
	div.style.padding="0 2px 2px 0";

	inputkey.setAttribute("type", "text");	
	inputkey.setAttribute("class", "form-control key");
	inputkey.setAttribute("id", "key");
	inputkey.setAttribute("placeholder", "Key");
	inputkey.setAttribute("style", "display: inline;border: 1px solid");
	
	inputvalue.setAttribute("type", "text");	
	inputvalue.setAttribute("class", "form-control value");
	inputvalue.setAttribute("placeholder", "Value");
	inputvalue.setAttribute("style", "display: inline;border: 1px solid");
	
	removeicon.setAttribute("id","removeIcon");
	removeicon.src="Images\/images.jpg";
	removeicon.setAttribute("alt","remove row");
	removeicon.onclick = function() {
    this.parentElement.remove();
	}
	
	b.innerHTML=":"
	
	p.setAttribute("style","margin-left:4px;margin-right:4px;display: inline");
	p.appendChild(b);
	div.appendChild(inputkey);
	div.appendChild(p);
	div.appendChild(inputvalue);
	div.appendChild(removeicon);
	datalayerclass.appendChild(div);
});


function generateCode()
{
	try{
	
	var dlname="dataLayer";
	var dataLayer=[];
	
	function pushTodl(name, val) {
   var obj = {};
   obj[name] = val;
   dataLayer.push(obj);
}
	var temp = document.getElementById("MainContainer").firstElementChild;

	for(i=0;i<temp.children.length;i++){
	
	if(temp.children[i].getElementsByClassName("key")[0]!=undefined){
		var keyy= temp.children[i].getElementsByClassName("key")[0].value;
	}
	else{
		keyy="event";
	}
	
	var value= temp.children[i].getElementsByClassName("value")[0].value;
	
	pushTodl(keyy, value);
	
	}
	
	if(temp.className.indexOf("datalayerdec")>-1){
		var code=dlname+"="+"[{"+JSON.stringify(dataLayer).replace(/{|}|\]|\[/g,'')+"}]";
	//document.getElementById("taggingcode").innerHTML=;
	$("#taggingcode").text(code);
	}
	else if(temp.className.indexOf("datalayerPush")>-1){
		var code=dlname+".push"+"({"+JSON.stringify(dataLayer).replace(/{|}|\]|\[/g,'')+"})"
	//document.getElementById("taggingcode").innerHTML=;	
	$("#taggingcode").text(code);
	}
}
catch(e){
	console.log(e);
}
}