// Optional: Handle dropdown behavior on click
document.querySelector('.hamburger').addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  