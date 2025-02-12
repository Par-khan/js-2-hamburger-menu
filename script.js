const hamburger=document.querySelector('.hamburger-menu-container')
const headingContent=document.querySelector('.heading-content')
const goTotop=document.querySelector("body > div > div.top > a")
const closeitems=document.querySelector('.close-items')
const tap=document.querySelector('.tap')
const onTop=document.querySelector("body > div")
const nav =document.querySelector("body > div > header > div > nav")


hamburger.addEventListener('click',(e)=>{
    e.stopPropagation()
   headingContent.classList.add('tap')

   nav.addEventListener('click',(e)=>{
    e.stopPropagation()
   });


   closeitems.addEventListener('click',(e)=>{
    headingContent.classList.remove('tap')
   });

   window.addEventListener('click',(e)=>{
    headingContent.classList.remove('tap')
   });
})

goTotop.addEventListener('click',(e)=>{
    onTop.scrollTo(0,0)
})