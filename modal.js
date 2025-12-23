 // Modal functionality
        const canvaModal = document.getElementById('canvaModal');
        const editCanvaBtns = document.querySelectorAll('.editCanvaBtn');
        const closeModalBtn = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelBtn');
        const openCanvaBtn = document.getElementById('openCanvaBtn');

        // Open modal - attach to all buttons with editCanvaBtn class
        editCanvaBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                canvaModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
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