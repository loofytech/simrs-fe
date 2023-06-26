export const menuScript = (bind: boolean) => {
  if (bind) {
    const script1 = document.createElement("script");
    script1.classList.add("script1");
    script1.src = "/js/helpers.js";
    script1.type = "module";
    document.body.appendChild(script1);
  
    const script2 = document.createElement("script");
    script2.classList.add("script2");
    script2.src = "/js/menu.js";
    script2.type = "module";
    document.body.appendChild(script2);
  
    const script3 = document.createElement("script");
    script3.classList.add("script3");
    script3.src = "/js/main.js";
    script3.type = "module";
    document.body.appendChild(script3);
  } else {
    document.querySelectorAll(".script1").forEach(el => el.remove());
    document.querySelectorAll(".script2").forEach(el => el.remove());
    document.querySelectorAll(".script3").forEach(el => el.remove());
  }
}