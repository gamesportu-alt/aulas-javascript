elementosFake.forEach(elemento => {
    console.log(
        elemento.tagName,
        elemento.classList.length,
        elemento.classList.join(', ')
    );
});