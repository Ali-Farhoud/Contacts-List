let filterinput=document.getElementById('filter-input');
let nameList=document.getElementById('names');

filterinput.addEventListener('keyup',filterStuff);

function filterStuff(e){
    let current=e.target.value.toLowerCase();
    let names=nameList.children;
    Array.from(names).forEach((name)=>{
        
        if(!name.classList.contains('list-group-item-heading')){
            
            let nameVal=name.textContent.toLowerCase();
            if(nameVal.indexOf(current)!=-1){
                name.style.display='';
            }else{
                name.style.display='none';
            }
        }
    });
}