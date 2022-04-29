
setInterval(()=>{
da=new Date;
hr=da.getHours();
mi=da.getMinutes();
se=da.getSeconds();
hro=30*hr+mi/2;
mro=mi*6;
sro=6*se;

document.querySelector('.hors').style.transform=`rotate(${hro}deg)`;
document.querySelector('.min').style.transform=`rotate(${mro}deg)`;
document.querySelector('.sec').style.transform=`rotate(${sro}deg)`;



},1000)