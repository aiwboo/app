const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
  const w = cursor.offsetWidth;
  const h = cursor.offsetHeight;

  // Center cursor on mouse
  let x = e.clientX - w / 2;
  let y = e.clientY - h / 2;

  // Keep cursor inside viewport
  x = Math.max(0, Math.min(x, window.innerWidth - w));
  y = Math.max(0, Math.min(y, window.innerHeight - h));

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.display = "block";

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cursor.style.display = "none";
  }, 5000);
});

// Hide cursor when mouse leaves window
document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});
