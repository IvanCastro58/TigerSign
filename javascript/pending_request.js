document.addEventListener('DOMContentLoaded', () => {

    const rows = document.querySelectorAll(".clickable-row");
        rows.forEach(row => {
            row.addEventListener("click", function() {
                window.location.href = "pending_claim.html";
            });
        });
});