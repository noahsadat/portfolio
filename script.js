
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
            const cards = document.querySelectorAll('.card');
        
            function isCenterInViewport(element) {
                const rect = element.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const tolerance = 300; // This is the vertical midpoint tolerance
        
                return Math.abs(viewportCenter - elementCenter) <= tolerance;
            }
        
            function checkCards() {
                cards.forEach(card => {
                    if (isCenterInViewport(card)) {
                        card.classList.add('scale');
                    } else {
                        card.classList.remove('scale');
                    }
                });
            }
        
            checkCards(); // Check immediately on load
            window.addEventListener('scroll', checkCards); // Check on every scroll
        });
        
        
        

    