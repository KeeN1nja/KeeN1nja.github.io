function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    const footer = document.getElementById('contact');
    const navLinks = document.querySelectorAll('nav ul li a');
    const containers = document.querySelectorAll('.card-container'); // Select the containers

    // Random background generate
    const backgrounds = ['Background1.avif', 'Background5.avif', 'Background2.avif'];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url(${randomBackground})`;

    // Sections
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    // Hide the card containers when a section is clicked
    containers.forEach(container => {
        container.style.display = 'none'; // Hide the containers
    });

    if (sectionId) {
        document.getElementById(sectionId).style.display = 'block'; // Show the selected section
        footer.style.display = 'none'; // Hide the footer when a section is displayed
    } else {
        sections.forEach(section => {
            section.style.display = 'block'; // Show all sections
        });
        footer.style.display = 'block'; // Show the footer when all sections are displayed

        // Show the card containers when "Show All" is clicked
        containers.forEach(container => {
            container.style.display = 'flex'; // Make sure containers are shown again
        });
    }

    // Highlight active link
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });
    if (sectionId) {
        const activeLink = Array.from(navLinks).find(link => link.textContent.toLowerCase() === sectionId);
        if (activeLink) {
            activeLink.classList.add('active'); // Add active class to the clicked link
        }
    }
}
