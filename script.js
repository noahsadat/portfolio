
        function createStars() {
            const numberOfStars = 20;
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
            const animationDelay = Math.random() * 9; // Delay between 0 to 5 seconds
            star.style.animationDelay = `${animationDelay}s`;
        }
    
        window.onload = createStars;


        document.addEventListener("DOMContentLoaded", function() {
            new Typed('#typed-text', {
                strings: [
                    "Driving innovative transformation",
                    "Elevating performance standards",
                    "Fostering curious culture",
                    "Building strong partnerships",
                    "Orchestrating efficient operations",
                    "Pioneering new methodologies",
                    "Delivering consistent results",
                    "Manifesting visionary ideas",
                    "Empowering team potential",
                    "Advancing insightful knowledge"
                ],
                typeSpeed: 75,
                backSpeed: 70,
                startDelay: 200,
                backDelay: 500,
                cursorChar: '|',
                loop: true
            });
        });
        
        