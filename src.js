handleMouseMove = (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const ref = document.getElementById("cbox");
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const n =ref.clientWidth /2;
    console.log(n);
    ref.style.left =  x - scrollLeft -n +'px';
    ref.style.top = y - scrollTop -n  + 'px';
};
document.addEventListener("mousemove", handleMouseMove, false);

activelink =(event)=>{
    const about =document.getElementById('aboutlink');
    const courses =document.getElementById('courseslink');
    const project =document.getElementById('projectslink');
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;


    if(scrollTop<about.offsetTop){
        about.setAttribute('class','active');
        courses.setAttribute('class','none');
        project.setAttribute('class','none');
     }
     else if(scrollTop>about.offsetTop &&scrollTop<courses.offsetTop+250){
         about.setAttribute('class','noen');
         courses.setAttribute('class','none');
         project.setAttribute('class','active');
        }
        else if(scrollTop>=courses.offsetTop+300){
         about.setAttribute('class','none');
         courses.setAttribute('class','active');
         project.setAttribute('class','none');
      }

 }

 document.addEventListener("scroll",activelink);

