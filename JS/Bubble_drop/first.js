document.body.addEventListener("click",(event)=>{
     
    const circle = document.createElement('div');
    circle.className = 'circle';
    const singleWords = [
  "serendipity", "ephemeral", "luminous", "nostalgia", "solitude", 
  "resilience", "petrichor", "ethereal", "mellifluous", "quintessential", 
  "catalyst", "velocity", "zenith", "apex", "momentum", 
  "tranquility", "harmony", "zen", "sanctuary", "anchor", 
  "vivid", "grit", "crux", "pulse", "spark"
];
    const value = Math.floor(Math.random()*singleWords.length);
    circle.textContent = singleWords[value];

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;


    const colors = [
  "#1A365D", "#2B6CB0", "#4299E1", "#667EEA", "#7F9CF5",
  "#2D3748", "#4A5568", "#718096", "#CBD5E0", "#E2E8F0",
  "#E53E3E", "#F56565", "#ED8936", "#ECC94B", "#48BB78",
  "#38B2AC", "#9F7AEA", "#ED64A6", "#F687B3", "#00B5D8",
  "#F7FAFC", "#EDF2F7", "#E6FFFA", "#EBF8FF", "#FEFCBF",
  "#FEEBC8", "#FED7D7", "#E9D8FD", "#D9C3B0", "#8C7864"
];
    circle.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    
    document.body.appendChild(circle);

    setTimeout(()=>{
            circle.remove();
    },5000)
})