document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const minecraftId = document.getElementById('minecraftId').value;

    const userData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${minecraftId}`)
        .then(response => response.json())
        .catch(error => {
            alert("ユーザーが見つかりませんでした。");
            return null;
        });

    if (userData) {
        const uuid = userData.id;
        const username = userData.name;
        const skinUrl = `https://crafatar.com/avatars/${uuid}?size=100&overlay=true`;

        document.getElementById('userSkin').src = skinUrl;
        document.getElementById('usernameDisplay').textContent = username;

        setTimeout(function() {
            window.location.href = 'https://store.rntqy.com';
        }, 1000);
    }
});