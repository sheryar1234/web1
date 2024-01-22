export function toggleMenu() {
    const menu = document.querySelector('.r');
    menu.classList.toggle('show-menu');
    
    // Assuming you have anchor links inside the menu
    const links = menu.getElementsByTagName('a');
  
    // Add a click event listener to each link
    for (const link of links) {
      link.addEventListener('click', () => {
        // Close the menu after a link is clicked
        menu.classList.remove('show-menu');
      });
    }
  }
  