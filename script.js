document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to My Gaming Website!');
    
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const gameTitle = document.getElementById('game-title').value;
        const gameFile = document.getElementById('game-file').files[0];
        
        if (gameTitle && gameFile) {
            const gameList = document.getElementById('game-list');
            const newGameDiv = document.createElement('div');
            const placeholderImage = 'https://via.placeholder.com/150';
            newGameDiv.innerHTML = `<h3>${gameTitle}</h3><img src="${placeholderImage}" alt="${gameTitle}"><p>${gameFile.name}</p>`;
            gameList.appendChild(newGameDiv);
        } else {
            alert('Please enter a game title and select a game file.');
        }
    });
});