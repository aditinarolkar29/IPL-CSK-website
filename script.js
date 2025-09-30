// Navigation toggle
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href").substring(1);

    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

// Player Info
const players = {
  dhoni: {
    name: "MS Dhoni",
    img: "images/dhoni.jpg",
    info: "Captain Cool 🦁 | Wicketkeeper-Batsman | IPL titles: 5 | Runs: 5000+"
  },
  jadeja: {
    name: "Ravindra Jadeja",
    img: "images/jadeja.jpg",
    info: "All-rounder | The Rock of CSK | Runs: 2500+ | Wickets: 120+"
  },
  gaikwad: {
    name: "Ruturaj Gaikwad",
    img: "images/gaikwad.jpg",
    info: "Opening Batsman | Orange Cap Winner 2021 | Runs: 1500+"
  },
  rayudu: {
    name: "Ambati Rayudu",
    img: "images/rayudu.jpg",
    info: "Reliable Middle Order | Runs: 4000+ | 3 IPL Titles"
  },
  chahar: {
    name: "Deepak Chahar",
    img: "images/chahar.jpg",
    info: "Swing Bowler | Powerplay Specialist | Wickets: 80+"
  },
  bravo: {
    name: "Dwayne Bravo",
    img: "images/bravo.jpg",
    info: "All-rounder | Death Bowling King | Wickets: 180+ | Runs: 1500+"
  }
};

const modal = document.getElementById("player-modal");
const playerInfo = document.getElementById("player-info");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".player-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-player");
    const p = players[id];
    playerInfo.innerHTML = `
      <h2>${p.name}</h2>
      <img src="${p.img}" alt="${p.name}" style="width:200px; border-radius:10px; margin:15px 0;">
      <p>${p.info}</p>
    `;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target == modal) modal.style.display = "none"; });

// Fan Vote
function vote(player) {
  document.getElementById("vote-result").innerText = `You voted for ${player} 🎉`;
}

