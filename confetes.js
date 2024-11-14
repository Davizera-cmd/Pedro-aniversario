// Função para gerar confetes
function criarConfetes() {
    for (let i = 0; i < 100; i++) { // Cria 100 confetes
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Randomiza a posição horizontal de cada confete
        confete.style.left = Math.random() * window.innerWidth + 'px';
        
        // Randomiza a animação para que os confetes caiam em momentos diferentes
        confete.style.animationDelay = Math.random() * 3 + 's'; // Atraso da animação

        // Adiciona os confetes no corpo da página
        document.body.appendChild(confete);
    }
}

// Função para criar a explosão de confetes
function explosaoConfetes() {
    for (let i = 0; i < 100; i++) { // Cria 100 confetes para a explosão
        const confete = document.createElement('div');
        confete.classList.add('confete');
        
        // Randomiza a posição de cada confete para sair de diferentes lugares da tela
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        confete.style.left = randomX + 'px';
        confete.style.top = randomY + 'px';

        // Adiciona os confetes no corpo da página
        document.body.appendChild(confete);

        // Remove o confete após a animação de explosão
        setTimeout(() => {
            confete.remove();
        }, 1000); // Tempo da animação
    }
}

// Chama a função para criar a explosão de confetes assim que a página carrega
window.onload = () => {
    explosaoConfetes();  // Explosão imediata
    setTimeout(criarConfetes, 1500);  // Começa a chuva de confetes após a explosão
};
