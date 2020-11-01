let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            menu_items = data.menu_items;
            console.log(menu_items.length);
            for (const key in data.menu_items) {
                let opti = document.createElement("option");
                opti.textContent = data.menu_items[key].name;
                opti.value = key; 
                document.querySelector('#restaurant').appendChild(opti);
            }
            optionslist();
        }
       
    });

    function optionslist(){
        let i=0;
        if(menu_items != null){
            for(const jsonobj of menu_items){
                console.log(i++,jsonobj.name);
                
            }
        }
    }  
document.querySelector("#restaurant").addEventListener("change",displayorder);

function displayorder(e){
    let index = e.target.value;
    
    if(menu_items != null){
        let x = menu_items[index];
        let psmall = x.price_small;
        
        if(psmall == null){
            psmall = "Not available";
        }
        let descriptionx = x.description;
        if(descriptionx == ""){
            descriptionx = "Description not available";
        }
        document.querySelector("#menuname").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#sname").textContent = x.short_name;
        document.querySelector("#descp").textContent = descriptionx;
        document.querySelector("#psmall").textContent = psmall;
        document.querySelector("#plarge").textContent = x.plarge;
    }
    document.getElementById("tables").style.display = "block";
}


});