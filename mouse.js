const containerElement = document.querySelector(".container");
const congratsElement = document.querySelector(".congrats");
const mouseElement = document.querySelector(".mouse-event");

window.addEventListener("mousemove", (event) => {
  const congratsText = event.clientX === event.clientY ? "Congrats!" : "";
  containerElement.innerHTML = `<div class="mouse-event">
    ${event.clientX}
    <h4>Mouse X position(px)</h4>
 </div>

 <div class="mouse-event">
   ${event.clientY}
   <h4>Mouse Y position(px)</h4>
</div>`;

  congratsElement.textContent = congratsText;
});
