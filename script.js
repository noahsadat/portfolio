
function createStars() {
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const starSize = Math.random() * 0.3 + 1.5; // Size ranges from 1px to 1.5px
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;

    setPositionAndDelay(star);
    document.body.appendChild(star);
}

function setPositionAndDelay(star) {
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * documentHeight}px`;
    const animationDelay = Math.random() * 4; // Delay between 0 to 5 seconds
    star.style.animationDelay = `${animationDelay}s`;
}

window.onload = createStars;



        document.addEventListener("DOMContentLoaded", function() {
            new Typed('#typed-text', {
                strings: [
                    "Innovative Drive",
                    "Elevating Standards",
                    "Curious Culture",
                    "Strong Partnerships",
                    "Efficient Orchestration",
                    "Pioneering Methodologies",
                    "Consistent Delivery",
                    "Visionary Manifestation",
                    "Empowering Potential",
                    "Insightful Advancement"
                ],
                typeSpeed: 75,
                backSpeed: 70,
                startDelay: 200,
                backDelay: 500,
                cursorChar: '|',
                loop: true
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
            new Typed('#typed-text-skills', {
                strings: [
                    "Frontend Development",
                    "Creative Design",
                    "Sales",
                    "Tennis",
                    "Management",
                    "Optimization",
                    "Modernization",
                    "Evaluation",
                    "Integration"
                ],
                typeSpeed: 75,
                backSpeed: 70,
                startDelay: 200,
                backDelay: 500,
                cursorChar: '|',
                loop: true
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
          new Typed('#builder-title', {
              strings: [
                  "Build",
                  "Create",
                  "Design",
                  "Craft",
                  "Develop",
                  "Form",
                  "Compose",
                  "Construct",
                  "Generate"
              ],
              typeSpeed: 75,
              backSpeed: 70,
              startDelay: 200,
              backDelay: 500,
              cursorChar: '|',
              loop: true
          });
      });
        
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                } else {
                  entry.target.classList.remove('visible');
                }
              });
            }, {
              threshold: 0.95  // Adjust if needed to trigger earlier or later as the card enters the viewport
            });
          
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
              observer.observe(card);
            });
          });
          
          
        
        
        

    