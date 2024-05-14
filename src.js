handleMouseMove = (event) => {
  const y = event.pageY;
  const x = event.pageX;
  const ref = document.getElementById("cbox");
  const scrollLeft =
    window.pageXOffset !== undefined
      ? window.pageXOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollLeft;
  const scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  const n = ref.clientWidth / 2;
  console.log(n);
  ref.style.left = x - scrollLeft - n + "px";
  ref.style.top = y - scrollTop - n + "px";
};
document.addEventListener("mousemove", handleMouseMove, false);

activelink = (event) => {
  const about = document.getElementById("aboutlink");
  const courses = document.getElementById("courseslink");
  const project = document.getElementById("projectslink");
  const scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  setActive = (item) => {
    about.setAttribute("class", "none");
    courses.setAttribute("class", "none");
    project.setAttribute("class", "none");

    item.setAttribute("class", "active");
  };
  if (scrollTop < about.offsetTop) {
    setActive(about);
  } else if (
    scrollTop > about.offsetTop &&
    scrollTop < courses.offsetTop + 250
  ) {
    setActive(project);
  } else if (scrollTop >= courses.offsetTop + 300) {
    setActive(courses);
  }
};

document.addEventListener("scroll", activelink);
