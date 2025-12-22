document.getElementById("year").textContent = new Date().getFullYear();

        // Zoom functionality
        let zoomLevel = 100;
        const minZoom = 50;
        const maxZoom = 200;
        const zoomStep = 10;

        const previewInner = document.getElementById('previewInner');
        const zoomLevelDisplay = document.getElementById('zoomLevel');
        const zoomInBtn = document.getElementById('zoomIn');
        const zoomOutBtn = document.getElementById('zoomOut');
        const zoomResetBtn = document.getElementById('zoomReset');

        function updateZoom() {
            previewInner.style.transform = `scale(${zoomLevel / 100})`;
            zoomLevelDisplay.textContent = `${zoomLevel}%`;
            
            // Disable buttons at limits
            zoomOutBtn.disabled = zoomLevel <= minZoom;
            zoomInBtn.disabled = zoomLevel >= maxZoom;
            
            zoomOutBtn.style.opacity = zoomLevel <= minZoom ? '0.5' : '1';
            zoomInBtn.style.opacity = zoomLevel >= maxZoom ? '0.5' : '1';
        }

        zoomInBtn.addEventListener('click', () => {
            if (zoomLevel < maxZoom) {
                zoomLevel = Math.min(maxZoom, zoomLevel + zoomStep);
                updateZoom();
            }
        });

        zoomOutBtn.addEventListener('click', () => {
            if (zoomLevel > minZoom) {
                zoomLevel = Math.max(minZoom, zoomLevel - zoomStep);
                updateZoom();
            }
        });

        zoomResetBtn.addEventListener('click', () => {
            zoomLevel = 100;
            updateZoom();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === '=' || e.key === '+') {
                    e.preventDefault();
                    zoomInBtn.click();
                } else if (e.key === '-') {
                    e.preventDefault();
                    zoomOutBtn.click();
                } else if (e.key === '0') {
                    e.preventDefault();
                    zoomResetBtn.click();
                }
            }
        });

        // Mouse wheel zoom 
        previewInner.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    zoomInBtn.click();
                } else {
                    zoomOutBtn.click();
                }
            }
        });

        // Initialize
        updateZoom();


         // Modal functionality
        const canvaModal = document.getElementById('canvaModal');
        const editCanvaBtn = document.getElementById('editCanvaBtn');
        const closeModalBtn = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelBtn');
        const openCanvaBtn = document.getElementById('openCanvaBtn');

        // Open modal
        editCanvaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            canvaModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close modal functions
        function closeModal() {
            canvaModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);

        // Close modal when clicking outside
        canvaModal.addEventListener('click', (e) => {
            if (e.target === canvaModal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && canvaModal.classList.contains('active')) {
                closeModal();
            }
        });

        // Open Canva in new tab
        openCanvaBtn.addEventListener('click', () => {
            window.open('https://www.canva.com/', '_blank');
            closeModal();
        });