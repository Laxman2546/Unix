document.addEventListener('DOMContentLoaded', () => {
    const zoomElement = document.querySelector('.zoom');
    const zoomImage = document.querySelector('.zoom-image');
    const zoomFactor = 2; // Define the zoom factor

    zoomElement.addEventListener('mousemove', (e) => {
        const rect = zoomElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = x / rect.width * 100;
        const yPercent = y / rect.height * 100;

        zoomImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        zoomImage.style.transform = `translate(-50%, -50%) scale(${zoomFactor})`;
    });

    zoomElement.addEventListener('mouseleave', () => {
        zoomImage.style.transformOrigin = 'center center';
        zoomImage.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
