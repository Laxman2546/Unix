// script.js

document.addEventListener('mousemove', e => {
    const trail = Object.assign(document.createElement('div'), { className: 'trail', style: `left: ${e.pageX}px; top: ${e.pageY}px;` });
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
});
