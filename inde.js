let le=document.getElementById("A");
let lp=document.getElementById("wo");
let wo=document.getElementById("Le");
le.addEventListener('input',function(){
    let i=this.value;
    wo.innerHTML=i.length;
    let j=i.split(" ");
    let ol=1;
    for(let z=0;z<j.length;z++)
    {
           if(j[z]!="")
           {
              ol;
              lp.innerHTML=ol;
              ol++;
           }
    }
});
