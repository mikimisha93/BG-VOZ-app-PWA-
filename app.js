function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const trains = [
  { line: "S1", dest: "Central", time: "12:05", platform: "2" },
  { line: "U3", dest: "Airport", time: "12:10", platform: "1" }
];

function loadBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  trains.forEach(t => {
    const row = document.createElement("div");
    row.className = "train";
    row.innerHTML = `${t.line} | ${t.dest} | ${t.time} | Platform ${t.platform}`;
    board.appendChild(row);
  });
}

loadBoard();
