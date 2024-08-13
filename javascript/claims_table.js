document.addEventListener('DOMContentLoaded', () => {

    const statusDropdowns = document.querySelectorAll('.status-dropdown');

    function updateStatusStyle(dropdown) {
        const status = dropdown.value;
        
        dropdown.classList.remove('status-paid', 'status-processing', 'status-available');

        switch (status) {
            case 'paid':
                dropdown.classList.add('status-paid');
                break;
            case 'processing':
                dropdown.classList.add('status-processing');
                break;
            case 'available':
                dropdown.classList.add('status-available');
                break;
        }
    }

    statusDropdowns.forEach(dropdown => {
        updateStatusStyle(dropdown);
    });

    statusDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', () => {
            updateStatusStyle(dropdown);
        });
    });

    const rows = document.querySelectorAll(".clickable-row");
        rows.forEach(row => {
            row.addEventListener("click", function() {
                window.location.href = "claimed_request_details.html";
            });
        });
});