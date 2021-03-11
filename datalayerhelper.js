//dropdown click

var ecomevent="";
var eventName="";
//var partrefund=false;
var addMore=document.getElementById('addMore');

var eventparams= document.getElementById("diveventparams");
var actionfieldparams= document.getElementById("divactionfieldparams");
var prodparams=document.getElementById("divproducts");


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
			if(document.getElementById('addMore')!=null){
				document.getElementById('addMore').style.visibility = "hidden";
			}
				document.getElementById('dataGenerate').style.visibility = "hidden";
				document.getElementById('taggingcode').style.visibility = "hidden";
				document.getElementById('MainContainer').innerHTML = "";
				document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
                break;
			case 'ecomm':
                swapContent ("datalayerEcomm");
				//document.getElementById('taggingcode').style.visibility = "visible";
				//document.getElementById('taggingcode').innerHTML = "Coming soon";
                break;
        }
})


//replace the main header with desired element
function swapContent (id) {
	
	//let addMore=document.getElementById('addMore');
	document.getElementById("jsbeautfier").style.visibility="hidden";
	document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
	document.getElementById('dataGenerate').style.visibility = "visible";
	document.getElementById('taggingcode').style.visibility = "visible";
	
	if(document.getElementById('addMore')!=null){
		addMore.style.visibility="visible";
	}
	else{	
	var functionbuttondiv = document.getElementById("divfunctionButtons");
	functionbuttondiv.insertBefore(addMore, functionbuttondiv.childNodes[0]);
	}
	if(id=="datalayerEcomm"){
	//document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
	addMore.remove();
	document.getElementById('dataGenerate').style.visibility = "hidden";
	document.getElementById('taggingcode').style.visibility = "hidden";
	//document.getElementById('MainContainer').style.visibility = "visible";
	}
	
	let main = document.getElementById('MainContainer');
	main.innerHTML="";
//	let oldChild = main.firstElementChild;
    let newChild = document.getElementById(id);
	let clone = newChild.cloneNode(true);
	clone.style.visibility = "visible";
	//if(oldChild!=null){
    //const clone = div.cloneNode(true);
     //while (main.firstChild) main.firstChild.remove();
	// main.replaceChild(clone, oldChild);
	 
	//}
	//else{
		main.appendChild(clone);
	//}
	
	if(id=="datalayerEcomm"){
document.getElementById("ecommdropdown").addEventListener("change", function(){
var value=this.value;

document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";

switch (value) {
            case 'impression':
				//document.getElementById("useevent").style.visibility="visible";
				appendContent ("datalayerecommevent","impression");
				ecomevent="impressions";
				eventName="pr-impression";
                break;
            case 'click':
				document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","click");
			   ecomevent="click";
			   eventName="pr-productClick";
                break;
			case 'choose':
				appendContent ("datalayerecommevent","choose");
				ecomevent="";
				eventName="";
                break;
			case 'details':
               //document.getElementById("useevent").style.visibility="visible";
			   appendContent ("datalayerecommevent","detail");
			   ecomevent="detail";
			   eventName="pr-details";
			   break;
			case 'addtocart':
				document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","add");
			   ecomevent="add";
			   eventName="pr-addtoCart";
                break;
			case 'removecart':
				document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","remove");
			   ecomevent="remove";
			   eventName="pr-removefromCart";
                break;
				
			case 'checkout':
			document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","checkout");
			   ecomevent="checkout";
			   eventName="pr-checkout";
                break;
			case 'checkoutopt':
			document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","checkoutopt");
			   ecomevent="checkout_option";
			   eventName="pr-checkout_option";
                break;
			case 'purchase':
			   document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","purchase");
			   ecomevent="purchase";
			   eventName="pr-purchase";
                break;
			case 'fullrefund':
			   document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","fullrefund");
			   ecomevent="refund";
			   eventName="pr-refund";
                break;
			case 'partrefund':
			   document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","partrefund");
			   ecomevent="refund";
			   eventName="pr-refund";
			   //partrefund=true;
                break;

        }
})
	}
}

function appendContent (id,evnt) {
	document.getElementById("jsbeautfier").style.visibility="hidden";
	let main = document.getElementById('MainContainer');
	let oldChild = document.querySelector("#MainContainer #datalayerecommevent");
	
	if(evnt!="choose"){
		let newChild;

	if(document.querySelectorAll("#datalayerecommevent")[1]==undefined){
     newChild= document.querySelectorAll("#datalayerecommevent")[0];
	}
	else{
	newChild= document.querySelectorAll("#datalayerecommevent")[1];
	}
	let clone = newChild.cloneNode(true);
	clone.style.visibility = "visible";
	
	if(oldChild!=null){
	main.replaceChild(clone,oldChild);	
	}
	else{
	main.appendChild(clone);
	}
	document.getElementById('dataGenerate').style.visibility = "visible";
	document.getElementById('taggingcode').style.visibility = "visible";

	/*if(document.querySelector("#MainContainer #diveventparams")!=null){
		document.querySelector("#MainContainer #diveventparams").remove();
	}*/
	
	if(evnt=="impression" && document.querySelector("#MainContainer #divactionfieldparams")!=null)
	{
		document.getElementById("divactionfieldparams").remove();
		
	}
	/*else if(document.querySelector("#MainContainer #divactionfieldparams")==null){
		let main = document.querySelector("#MainContainer #datalayerecommevent");
		let newChild = actionfieldparams;
	    let clone = newChild.cloneNode(true);
		main.appendChild(clone);
		//document.getElementById("diveventparams").remove();
		//alert("hi");
	}*/

	else if((evnt=="checkoutopt"||evnt=="fullrefund") && document.querySelector("#MainContainer #divproducts")!=null){
		document.getElementById("divproducts").remove();
	}
	/*else if(document.querySelector("#MainContainer #divproducts")==null){
		let main = document.querySelector("#MainContainer #datalayerecommevent");
		let newChild = prodparams;
	    let clone = newChild.cloneNode(true);
		main.insertBefore(clone,main.childNodes[0]);
	}*/
	
	
	let buttonArray = document.querySelectorAll("button");

buttonArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(elem.id=="eventparams"){
			let parentdiv= document.getElementById("diveventparams");
			let childNode=document.getElementsByClassName("eventparams")[0];
			let clone=childNode.cloneNode(true);
			clone.getElementsByClassName("key")[0].value="";
			clone.getElementsByClassName("value")[0].value="";
			parentdiv.appendChild(clone);
		}
		
		else if(elem.id=="actionfieldparams"){
			let parentdiv= document.getElementById("divactionfieldparams");
			let childNode=document.getElementsByClassName("actionfieldparams")[0];
			let clone=childNode.cloneNode(true);
			clone.getElementsByClassName("key")[0].value="";
			clone.getElementsByClassName("value")[0].value="";
			parentdiv.appendChild(clone);

		}
		else if(elem.id=="addnewproduct"){
			let parentdiv= document.getElementById("divproducts");
			let childNode=document.getElementsByClassName("divproductparams")[0];
			let clone=childNode.cloneNode(true);
			for(i=0;i<clone.getElementsByClassName("productparams").length;i++){
			//clone.getElementsByClassName("productparams")[i].getElementsByClassName("key")[0].value="";
			clone.getElementsByClassName("productparams")[i].getElementsByClassName("value")[0].value="";
			}
			parentdiv.appendChild(clone);

		}
    });
});
	}
	else{
		oldChild.remove();
		if(document.getElementById('addMore')!=null){
				document.getElementById('addMore').style.visibility = "hidden";
			}
				document.getElementById('dataGenerate').style.visibility = "hidden";
				document.getElementById('taggingcode').style.visibility = "hidden";
				//document.getElementById('MainContainer').innerHTML = "";
				document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
	}
}

function addProdParam(elem){
	let parentdiv= elem.parentElement;
	let childNode=document.getElementsByClassName("productparams")[0];
	let clone=childNode.cloneNode(true);
	clone.getElementsByClassName("key")[0].value="";
	clone.getElementsByClassName("value")[0].value="";
	parentdiv.appendChild(clone);
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function removeNode(elem){
	elem.parentElement.remove();
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
	inputkey.setAttribute("onfocus","removeerrormsg()");
	
	inputvalue.setAttribute("type", "text");	
	inputvalue.setAttribute("class", "form-control value");
	inputvalue.setAttribute("placeholder", "Value");
	inputvalue.setAttribute("style", "display: inline;border: 1px solid");
	inputvalue.setAttribute("onfocus","removeerrormsg()");
	
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

function clearall(){
	var inputs=document.getElementsByTagName("input");
	for(i=0;i<inputs.length;i++){
		inputs[i].value="";
	}
	document.getElementById('taggingcode').innerHTML = "Here goes the tagging code";
	return;
}

function removeerrormsg() {
	if(document.getElementById("errormsg")!=null ||document.getElementById("errormsg")!=undefined){
	document.getElementById("errormsg").remove();
	//document.removeEventListener('click', removeerrormsg());
	}
}	

function generateCode()
{
	try{

	var temp = document.getElementById("MainContainer").firstElementChild;
	
	var dlname=document.getElementById("dlName").value;
	 if(dlname==""||dlname==undefined){
	dlname="dataLayer";
	 }
	var dataLayer=[];
	 
	
	function pushTodl(name, val) {
   var obj = {};
   obj[name] = val;
   dataLayer.push(obj);
}

function pushToobj(name, val) {
  
   objtemp[name] = val;
}

if(temp.id=="datalayerdec"||temp.id=="datalayerPush"){
	for(i=0;i<temp.children.length;i++){
	
	if(temp.children[i].getElementsByClassName("key")[0]!=undefined){
		var keyy= temp.children[i].getElementsByClassName("key")[0].value;
	}
	else{
		keyy="event";
	}
	
	var value= temp.children[i].getElementsByClassName("value")[0].value;
	
	if(keyy=="" || value==""){
		dataLayer=[];
		var error = document.getElementById("error");
		//error msg
		error.innerHTML = "<span id='errormsg' style='color: red;background-color: #e7c3c3;padding: 2px;'>"+ 
                        "Please fill the boxes</span>"
		
		//document.addEventListener('click', removeerrormsg());
		break;
	}
	else{
	pushTodl(keyy, value);
	}
	}
}

else if(temp.id="datalayerEcomm")
{
	var dltemp=[];
	var dltemp2=[];
	var dltemp3=[];
	var objtemp = {};
	var object={};
	var objtemp2={};
	var objtemp3={};

	var divprods=document.getElementById("divproducts");
	var prods=divprods.getElementsByClassName("divproductparams");
	//var productparams=document.querySelectorAll("#MainContainer .productparams");
	
	
	for (i=0;i<prods.length;i++){
	
	for(j=0;j<prods[i].querySelectorAll(".productparams").length;j++){
	
	var keyy= prods[i].querySelectorAll(".productparams")[j].getElementsByClassName("key")[0].value;
	
	var value= prods[i].querySelectorAll(".productparams")[j].getElementsByClassName("value")[0].value;
	
	if(document.querySelector("#MainContainer #datalayerecommevent #divproducts")==null){
		objtemp={};
		break;
	}
	else{
	//pushToobj(keyy, value);
	objtemp[keyy] = value;
	}
	}
	if(Object.keys(objtemp).length != 0  && objtemp.constructor === Object){
	dltemp.push(objtemp);
	objtemp	={};
	}
}
	
	//objtemp["impressions"]=dataLayer;
	var divactionfieldparams=document.getElementById("divactionfieldparams");
	var actionfieldparams=divactionfieldparams.getElementsByClassName("actionfieldparams");
	
	for(i=0;i<actionfieldparams.length;i++){
		var keyy= actionfieldparams[i].getElementsByClassName("key")[0].value;
		var value= actionfieldparams[i].getElementsByClassName("value")[0].value;
		if(keyy=="" ||keyy==undefined /*|| value=="" || value==undefined*/){
		objtemp2={};
		break;
		}
		else{
		objtemp2[keyy] = value;
		}
	}
	
	//dltemp2.push(objtemp);
	
	objtemp["event"]=eventName;
	var divevent=document.getElementById("diveventparams");
	var eventparams=divevent.getElementsByClassName("eventparams");
	
	for(i=0;i<eventparams.length;i++){
		var keyy= eventparams[i].getElementsByClassName("key")[0].value;
		var value= eventparams[i].getElementsByClassName("value")[0].value;
		
		if(keyy=="" ||keyy==undefined){
		//objtemp3={};
		break;
		}
		else{
		objtemp[keyy] = value;
		}
		//objtemp3[keyy] = value;
		
	}
	
	//dltemp3.push(objtemp);
	//objtemp={};
	if(Object.keys(objtemp2).length != 0  && objtemp2.constructor === Object){
	object["actionField"]=objtemp2;	
	}
	
	//object["products"]=dltemp;
	
	if(ecomevent=="impressions"){
		objtemp3[ecomevent]=dltemp;
	}
	//else if(ecomevent=="checkout_option"){
	//object["products"]=dltemp;
	//objtemp3[ecomevent]=object;
	//}
	else if(dltemp.length==0){
	objtemp3[ecomevent]=object;	
	}
	else{
	object["products"]=dltemp;
	objtemp3[ecomevent]=object;	
	}
	objtemp["ecommerce"]=objtemp3;
}

	
	if(temp.className.indexOf("datalayerdec")>-1 && dataLayer.length!=0){
		document.getElementById("jsbeautfier").style.visibility="visible";
		var code=dlname+"="+"[{"+JSON.stringify(dataLayer).replace(/{|}|\]|\[/g,'')+"}];";
	//document.getElementById("taggingcode").innerHTML=;
	$("#taggingcode").text(code);
	}
	else if(temp.className.indexOf("datalayerPush")>-1 && dataLayer.length!=0){
		document.getElementById("jsbeautfier").style.visibility="visible";
		var code=dlname+".push"+"({"+JSON.stringify(dataLayer).replace(/{|}|\]|\[/g,'')+"});"
	//document.getElementById("taggingcode").innerHTML=;	
	$("#taggingcode").text(code);
	}
	else if(temp.className.indexOf("datalayerEcomm")>-1){
	document.getElementById("jsbeautfier").style.visibility="visible";
	var code= dlname+".push"+"("+JSON.stringify(objtemp)+");";
	var beautify=js_beautify(code);
	//document.getElementById("taggingcode").innerHTML=;	
	$("#taggingcode").text(beautify);
	}
}
catch(e){
	console.log(e);
}
}