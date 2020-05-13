(function() {
	
const template = document.createElement('template');
template.innerHTML = `

<style>
 

.highlightrows {
	background-color:white;
	color:black;
	}

.highlightrowsblue {
	background-color:slateblue;
	color:white;
	}
</style>

 

<p id="demo">This is demo</p>` 
	 
var obj, dbParam, xmlhttp, myObj, x, txt = "";
/*xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
myObj = JSON.parse(this.responseText);
obj = { table: "customers", limit: 20 };*/

//this is the json array


	 
 

var txt = "";
txt += `<div style = 'background-color:white;  width:100%;'><div   part='banner' style='padding-top:15px; height:60px;font-family:roboto;font-size:30px;font-weight:bold;text-align:center;'>Leaderboard</div>

 
<div style = "height:550px;margin-left: 20px;margin-right:10px;">	
	<table    id='details'  class = 'smallfont'  cellspacing='0' width='100%' style = "border-collapse:separate;border-spacing:5px;text-align:left;font-size:8px;">  
		 		<thead>
				<tr style = 'text-align:left;'> 
				<th data-sort-initial='true' data-type='numeric' data-class='expand'  data-toggle='true'>Name/Emp #</th>
				<th>Scan Rate/hr</th>
				<th>Goal Status</th>
				</tr> 
				</thead>      
				 
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">400</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:green;color:white;font-size:12px;font-weight:normal;text-align:center;">on track</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
				<tr>
				<td  style="border-top:none;" name='id' >Jane Doe / 3456812</td>
				<td style="border-top:none;">200</td>
				<td style="border-top:none;"><div style = "height:20px;width:80%;background-color:red;color:white;font-size:12px;font-weight:normal;text-align:center;">at risk</div></td>
				</tr>
				
	</table> 
	</div>
	
	<input type='button' id= 'myClose' onclick="hhh = document.getElementById('leaderboard');hhh.style.display = 'none';" value='Cancel' style='float:right;height:35px;margin-right:10px;width:80px;'><br /><br /></div>` 

	/*Note:  In the above, I am putting the cancel button which closes the dialog in template literal tic marks at the very end of this script so that I can use an onclick event which requires both single and double quotes.  This is the way I get around this common issue.  Please note that I must use double quotes for the rest of this script as I build this out dynamically.  But at the very end when I break out of the loop, I can use the tik mark and thus both single and double quotes for the onclick event handler.*/
 
class radarleaderboard extends HTMLElement {
	
	constructor() {
    super();
		//this.attachShadow({mode: 'open'});
		//this.shadowRoot.appendChild(template.content.cloneNode(true));
		//simplified...create the shadow and add content all in one:
		
		const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));;
		
		//Remember..attachShadow just creates an EMPTY shadow-root.  You must append the shadow tree content nodes. 
		this.shadowRoot.querySelector('#demo').innerHTML = txt;;
		
		var items = this.shadowRoot.querySelectorAll('.highlightrows');
			for (var i = 0; i < items.length; i++) {
				 items[i].addEventListener('click', function() {
					 
					//alert("Hello World!"); 
					 //this .innerhtml = "hi pat";
					 window.location.assign("01-EmployeeDetails.html")
                     this .shadowRoot.classList.toggle('highlightrowsblue');
				});	 					
			};
	}
	
	connectedCallback() {
		const whattodo = this.getAttribute('dosomething');
		//this.shadowRoot.querySelector('#primarybutton').innerHTML = mycaption;
		//alert(whattodo);
	updateStylePrimaryButton(this);   
	}   
	
	disconnectedCallback() {
	}
	
	static get observedAttributes() {return ['xpos', 'ypos', 'width', 'c', 'layer', 'trans', 'size', 'textcolor', 'family']; }	
	
	attributeChangedCallback(name, oldValue, newValue) {
		if(name == "c2" && newValue == "orange"){
			document.querySelector('#feedback').innerHTML = "Welcome Fed<span style='color:orange;'>Ex!";
		} 
		
		if(name == "c2" && newValue !== "orange"){
			document.querySelector('#feedback').innerHTML = "You are not FedEx!";
		} 
		 updateStyleTable(this);
	}	
} //class definition

	function rowHigh() {
		  //alert("pat");
		//var items  = this.shadowRoot.querySelectorAll('tr.highlightrows');
		//this.shadowRoot.querySelector('#joe').style.backgroundColor = 'blue';	
	}

	function updateStyleTable(elem) {
		var shadow = elem.shadowRoot;
		var childNodes = shadow.childNodes;
		
                                                      //var childNodes = elem.childNodes;
		for(var i = 0; i < childNodes.length; i++) 	{
			if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
				childNodes[i].textContent = '.fxlistclass {' +
				    ' left: '             + elem.getAttribute('xpos') + 'px;' +
					' top: '              + elem.getAttribute('ypos') + 'px;' +
					' width: '            + elem.getAttribute('width') + '%;' +     
                    ' background-color: ' + elem.getAttribute('c') + ';' +  
					' z-index: '          + elem.getAttribute('layer') + ';' +  
					' opacity: '          + elem.getAttribute('trans') + ';' +				  
                    ' font-size: '        + elem.getAttribute('size') + 'px;' + 
                    ' color: '            + elem.getAttribute('textcolor') + ';' + 
					' font-family: '      + elem.getAttribute('family') + ';' + '}'  
					
			}
		}  
	}  
	
	window.customElements.define('radar-leaderboard', radarleaderboard);  //new standard
	//document.registerElement('fx-table', FxTable);  //old standard
})(); //IIFE





 