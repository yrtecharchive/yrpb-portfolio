const backgroundEffect = document.getElementById("background-effect");

      function createParticle() {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = `${Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.background = "rgba(56, 189, 248, 0.5)";
        particle.style.borderRadius = "50%";
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `float ${
          5 + Math.random() * 10
        }s infinite alternate`;
        backgroundEffect.appendChild(particle);
      }

      for (let i = 0; i < 50; i++) {
        createParticle();
      }
      