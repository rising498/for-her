const pages = ['apology','promise','memories'].map(id => document.getElementById(id));
function showPage(id){pages.forEach(p=>p.classList.toggle('hidden',p.id!==id));window.scrollTo({top:0,behavior:'smooth'});}
document.getElementById('yesBtn').addEventListener('click',()=>showPage('promise'));
document.getElementById('memoriesBtn').addEventListener('click',()=>showPage('memories'));
document.getElementById('backBtn').addEventListener('click',()=>showPage('apology'));
const noBtn=document.getElementById('noBtn'), hint=document.getElementById('hint'), toast=document.getElementById('toast');
let count=0;
function dodge(e){if(e)e.preventDefault();count++;hint.textContent=['Aiyo 😭 please give me one chance!','Indha cat kooda azhudhudhu paaru 😿','Button-ku kooda bayam aagudhu 💗'][Math.min(count-1,2)];toast.textContent='Aiyo 😭 one chance please!';toast.classList.remove('hidden');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.add('hidden'),1300);const r=noBtn.getBoundingClientRect();const x=Math.max(8,Math.random()*(window.innerWidth-r.width-16));const y=Math.max(8,Math.random()*(window.innerHeight-r.height-16));noBtn.style.position='fixed';noBtn.style.left=x+'px';noBtn.style.top=y+'px';noBtn.style.zIndex='30';}
noBtn.addEventListener('pointerenter',dodge);
noBtn.addEventListener('touchstart',dodge,{passive:false});
noBtn.addEventListener('click',dodge);
