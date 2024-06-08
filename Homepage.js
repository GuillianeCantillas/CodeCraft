// Sample data for demonstration
var players = [
    { rank: "1st", username: "Player1", score: 100, avatar: "avatar1.jpg" },
    { rank: "2nd", username: "Player2", score: 90, avatar: "avatar2.jpg" },
    { rank: "3rd", username: "Player3", score: 80, avatar: "avatar3.jpg" }
  ];
  
  // Function to update leaderboard
  function updateLeaderboard() {
    var leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = ""; // Clear existing leaderboard
  
    // Loop through players array and create leaderboard entries
    players.forEach(function(player) {
      var entry = document.createElement("div");
      entry.className = "leaderboard-entry";
      entry.innerHTML = `
        <img src="rank_${player.rank}.png" alt="${player.rank}" class="rank-image">
        <img src="${player.avatar}" alt="Avatar" class="avatar">
        <div class="username">${player.username}</div>
        <div class="score">${player.score}</div>
      `;
      leaderboard.appendChild(entry);
    });
  }
  
  // Call updateLeaderboard function to initially populate leaderboard
  updateLeaderboard();
  