document.addEventListener("DOMContentLoaded", function() {
    const musicCard = document.getElementById("#musicCard");
  
    musicCard.addEventListener("mouseover", (e) => {
      const { offsetX, offsetY, clientWidth, clientHeight } = e.target;
  
      const percentX = (offsetX / clientWidth - 0.5) * 2;
      const percentY = (offsetY / clientHeight - 0.5) * 2;
  
      const tiltX = 25 * percentY;
      const tiltY = -25 * percentX;
  
      musicCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
  
    musicCard.addEventListener("mouseout", () => {
      musicCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
  