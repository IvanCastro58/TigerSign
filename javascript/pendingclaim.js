document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.transaction-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('click', () => {
            // Remove expanded class from all rows
            rows.forEach(r => {
                r.querySelectorAll('.expandable-text').forEach(textElement => {
                    textElement.classList.remove('expanded');
                });
            });

            // Add expanded class to the clicked row's text
            row.querySelectorAll('.expandable-text').forEach(textElement => {
                textElement.classList.add('expanded');
            });
        });
    });

    const statusDropdowns = document.querySelectorAll('.status-dropdown');

    function updateStatusStyle(dropdown) {
        const status = dropdown.value;
        
        // Remove all status-related classes
        dropdown.classList.remove('status-paid', 'status-processing', 'status-available');
        
        // Add the class corresponding to the current status
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

    // Initialize status styles on page load
    statusDropdowns.forEach(dropdown => {
        updateStatusStyle(dropdown);
    });

    // Update status styles on change
    statusDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', () => {
            updateStatusStyle(dropdown);
        });
    });
});