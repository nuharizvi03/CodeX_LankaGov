document.addEventListener('DOMContentLoaded', function() {
    // Add click event to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Here you would typically load the appropriate content
            console.log(`Navigating to: ${this.textContent.trim()}`);
        });
    });

    // Add logout functionality
    const logoutBtn = document.querySelector('.footer');
    logoutBtn.addEventListener('click', function() {
        alert('Logging out...');
        // In a real app, you would redirect to logout endpoint
        // window.location.href = '/logout';
    });

    // Make the dashboard checkbox interactive
    const dashboardCheckbox = document.getElementById('dashboard');
    dashboardCheckbox.addEventListener('change', function() {
        if(this.checked) {
            console.log('Dashboard menu expanded');
        } else {
            console.log('Dashboard menu collapsed');
        }
    });
});