const careerPool = [
            "A cosmic shift suggests a sudden breakthrough in your creative pursuits. Do not fear taking the non-traditional route; your unique perspective is your greatest asset.",
            "Stability is coming. The alignment of Saturn suggests that structured routines and systemizing your daily efforts will build an unbreakable foundation.",
            "Your planetary chart shows massive, latent technical energy. An analytical project or complex problem you tackle shortly will open doors to high-impact opportunities.",
            "Communication is highlighted. A connection you establish online or in a shared learning space will catalyze an unexpected technical collaboration."
        ];

        const lovePool = [
            "Your emotional sector is undergoing a quiet, reflective phase. Use this time to establish clear personal boundaries; the energy you protect now determines your growth.",
            "A magnetic alignment suggests clear, vibrant interactions. Expect meaningful, supportive conversations with those in your immediate inner circle.",
            "Patience is your strong suit this season. Slow down and let connections mature naturally. Rushing the process might cloud your natural judgment.",
            "You are radiating authentic, grounded energy right now. This draws honest, deeply loyal people into your space. Trust your gut feelings about new acquaintances."
        ];

        const advicePool = [
            "\"He who has a why to live can bear almost any how.\" Clear out the clutter, focus on one major project, and let the rest fall away.",
            "\"Energy flows where attention goes.\" Turn off the external noise and invest directly in refining your craft.",
            "\"Smooth seas do not make skillful sailors.\" Embrace current friction as system diagnostic tests of your resilience.",
            "\"The stars align for those who build their own maps.\" Action precedes clarity. Begin coding your ideas before they feel 100% perfect."
        ];

        // 1. Function to calculate Zodiac Sign from DOB
        function getZodiacSign(dateString) {
            const date = new Date(dateString);
            const month = date.getMonth() + 1; // Months are 0-11
            const day = date.getDate();

            if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius ♒";
            if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces ♓";
            if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries ♈";
            if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus ♉";
            if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini ♊";
            if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer ♋";
            if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo ♌";
            if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo ♍";
            if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra ♎";
            if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio ♏";
            if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius ♐";
            return "Capricorn ♑";
        }

        // 2. Hash Function: Converts Name + DOB into a deterministic index number (0 to pool size - 1)
        function generateDeterministicIndex(str, poolSize) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return Math.abs(hash) % poolSize;
        }

        // 3. Form Submit Handler
        function generateDestiny(event) {
            event.preventDefault(); // Prevents page reload

            const name = document.getElementById('userName').value.trim();
            const dob = document.getElementById('userDob').value;

            if (!name || !dob) return;

            // Generate inputs for deterministic predictions
            const seedString = name.toLowerCase() + dob;
            const zodiac = getZodiacSign(dob);

            // Fetch reproducible results
            const careerIndex = generateDeterministicIndex(seedString + "career", careerPool.length);
            const loveIndex = generateDeterministicIndex(seedString + "love", lovePool.length);
            const adviceIndex = generateDeterministicIndex(seedString + "advice", advicePool.length);

            // Update DOM Elements
            document.getElementById('greeting').innerText = `Greetings, ${name}`;
            document.getElementById('zodiacSign').innerText = zodiac;
            document.getElementById('careerPrediction').innerText = careerPool[careerIndex];
            document.getElementById('lovePrediction').innerText = lovePool[loveIndex];
            document.getElementById('lunarAdvice').innerText = advicePool[adviceIndex];

            // Display Results
            const resultsCard = document.getElementById('resultsCard');
            resultsCard.style.display = 'block';

            // Smooth scroll to results
            resultsCard.scrollIntoView({ behavior: 'smooth' });
        }

    const randomCompliments = [
    "Your aura radiates an unshakeable resilience. When unexpected chaos enters your space, you instinctively find the most logical path forward.",
    "The cosmos marks you as a natural architect. You don't just dream up great ideas; you possess the precise focus needed to build them into reality.",
    "Your alignment shows a highly analytical mind. You have a unique gift for spotting structural patterns where others only see chaotic noise.",
    "There is a deep, quiet brilliance in your cosmic footprint. You don't require an audience to know the absolute value of the skills you are building.",
    "Your celestial chart shows immense debugging energy. You approach complex, tangled problems with the calm patience of a true master.",
    "A rare planetary configuration suggests you thrive in deep-focus zones. Your capacity to sit with a challenge until it clicks is your superpower.",
    "The stars indicate you are an innovator. You aren't afraid to re-write the rules or try a completely new logic pattern when the old one fails.",
    "Your cosmic blueprint shows an exceptional balance of sharp logic and deep intuition, making you incredibly adept at navigating complex systems.",
    "You possess the rare energy of a system optimizer. You naturally look at spaces, code, or routines and figure out how to make them run faster and cleaner.",
    "Your presence brings a grounded, stabilizing force to those around you. You are the anchor in the middle of a celestial storm.",
    "The cosmic currents show you have an insatiable curiosity. Your drive to understand how things work behind the scenes will take you incredibly far.",
    "You have a remarkable ability to filter out external noise. When you commit to a goal, your focus becomes sharp enough to cut through any distraction.",
    "Your chart highlights a self-taught spirit. The universe favors your independence and your relentless drive to master new crafts on your own terms.",
    "You possess a magnetic intellectual energy. People are naturally drawn to your insights because you speak with substance rather than fluff.",
    "The alignment of Mercury in your chart suggests you are an efficient strategist. You don't waste energy; you plan your moves deliberately.",
    "You have the rare gift of conceptual clarity. You can take an incredibly complex topic and break it down so it makes perfect sense to anyone.",
    "Your celestial signature is one of steady, compounding growth. You understand that small daily efforts eventually build unbreakable empires.",
    "The stars reveal an incredibly adaptable mind. You transition seamlessly between high-level logic and creative, out-of-the-box execution.",
    "You carry the energy of a cosmic explorer. You refuse to accept shallow, surface-level answers and always dig deeper until you uncover the truth.",
    "Your chart shows a powerful internal compass. Even when the road ahead is unmapped, your instincts consistently point you in the right direction."
];

// 1. Generate a completely random index using Math.random()
const randomIndex = Math.floor(Math.random() * randomCompliments.length);

// 2. Inject it into the HTML placeholder
document.getElementById('cosmicCompliment').innerText = `✨ Cosmic Insight: ${randomCompliments[randomIndex]}`;