document.body.onload = function() {
    setTimeout(function() {
        let canvas = document.createElement("canvas");
        let container = document.getElementsByClassName("button-wrapper")[0];
        canvas.width = 600;
        canvas.height = 600;
      
        container.appendChild(canvas);
      
        let confetti_button = confetti.create(canvas);
        confetti({
            particleCount: 150,
            spread: 150,
            origin: { y: 0.55 }
          });
        confetti_button().then(() => container.removeChild(canvas));

        setTimeout(function() {
            document.querySelector('.writing').style.visibility = 'visible'
        }, 230);
    }, 2500);
};
