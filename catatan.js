document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tambahButton').addEventListener('click', function() {
        const paragrafBaru = document.createElement('p');
        paragrafBaru.textContent = 'Paragraf baru ditambahkan!';
        document.getElementById('kontainer').appendChild(paragrafBaru);
    });
});