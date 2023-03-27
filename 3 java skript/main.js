const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((Letter, idx )=> `<span style="transition-delay:${idx *50}ms">${Letter}</span>` )
        .join('')
});