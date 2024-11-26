const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");
function openMenu()
{
    sideMenu.style.transform='translateX(-16rem)';
}
function closeMenu()
{
    sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50)
    {
        navBar.classList.add('bg.white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navBar.classList.remove('bg.white', 'bg-opacity-50', 'shadow-sm');
    }
    else{
        navBar.classList.remove('bg.white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navBar.classList.add('bg.white', 'bg-opacity-50', 'shadow-sm');
    }
})

//-------------Light Mode & Dark Mode----------
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark';
    }
    else{
        localStorage.theme ='light';
    }
  }