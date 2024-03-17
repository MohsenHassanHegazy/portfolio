handleMouseMove = (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const ref = document.getElementById("cbox");
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    ref.style.left =  x - scrollLeft -450 +'px';
    ref.style.top = y - scrollTop -450  + 'px';
};
document.addEventListener("mousemove", handleMouseMove, false);