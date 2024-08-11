document.addEventListener('DOMContentLoaded', () => {

    const rows = document.querySelectorAll('.transaction-table tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('click', () => {
            rows.forEach(r => {
                r.querySelectorAll('.expandable-text').forEach(textElement => {
                    textElement.classList.remove('expanded');
                });
            });

            row.querySelectorAll('.expandable-text').forEach(textElement => {
                textElement.classList.add('expanded');
            });
        });
    });

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
});