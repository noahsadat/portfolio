
        function createStars() {
            const numberOfStars = 50;
            for (let i = 0; i < numberOfStars; i++) {
                createStar();
            }
        }
    
        function createStar() {
            const star = document.createElement('div');
            star.className = 'star';
    
            // Randomize star size
            const starSize = Math.random() * 0.5 + 1; // Size ranges from 2px to 4px
            star.style.width = `${starSize}px`;
            star.style.height = `${starSize}px`;
    
            // Set initial position and animation delay
            setPositionAndDelay(star);
    
            // Update position and delay at the end of each animation cycle
            star.addEventListener('animationiteration', () => {
                setPositionAndDelay(star);
            });
    
            document.body.appendChild(star);
        }
    
        function setPositionAndDelay(star) {
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
    
            // Random animation delay
            const animationDelay = Math.random() * 7; // Delay between 0 to 5 seconds
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
            const cards = document.querySelectorAll('.card');
        
            function isCenterInViewport(element) {
                const rect = element.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const tolerance = 300; // You can adjust this tolerance for more flexibility
        
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
        
            // Trigger the function initially and on scroll
            checkCards();
            window.addEventListener('scroll', checkCards);
        });
        