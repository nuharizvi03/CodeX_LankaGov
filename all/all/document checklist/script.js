document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const confirmBtn = document.getElementById('confirmBtn');

    // Check if all checkboxes are checked
    function checkAllChecked() {
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        confirmBtn.disabled = !allChecked;
    }

    // Add event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkAllChecked);
    });

    // Confirm button click handler
    confirmBtn.addEventListener('click', function() {
        if (!this.disabled) {
            alert('Thank you for confirming your documents are prepared!');
            // Here you would typically submit the form or navigate to next page
        }
    });
});