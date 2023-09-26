var table=document.getElementById("MyTable")
var Search=document.getElementById("SearchBar")
var OnSubmit=document.getElementById("OnSubmit")
var OnOther=document.getElementById("SearchedHero")
OnSubmit.addEventListener("click",SearchFunction)
function SearchFunction(){
    var hero=Search.value
    var tr=table.getElementsByTagName("tr")
    for(var i=0;i<tr.length;i++)
    {
     let td1=tr[i].getElementsByTagName("td")[0]
    if(td1)
    {
        let textvalue=td1.textContent||td1.innerHTML

        if(textvalue.indexOf(hero)>-1){
            tr[1].style.display="";
        }
        else{
            tr[i].style.display="Not Found"; 
        }

    }
    }
}