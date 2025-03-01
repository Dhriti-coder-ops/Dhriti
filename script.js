let name=document.getElementById('name');
let message=document.getElementById('message');
let email=document.getElementById('email');
let btn=document.getElementById('btn');

btn.addEventListener('click',function()
{
    if(name.innerText="")
    {
        window.alert("Enter Something");
    }
});