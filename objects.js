var playlist = {artistName: "songTitle"};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist ['Rockin'] = 'Beatles';
  playlist ['Let it Be'] = 'Yellow Submarine';
  updatePlaylist (playlist, 'Oco Ono', "Here's to love")
  return playlist;
}

function removeFromPlaylist(playlist, 'Slowride') {
  Delete playlist['Beatles'];
  return playlist;
} 