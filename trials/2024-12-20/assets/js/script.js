document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', function() {
      const menu = this.nextElementSibling;
      document.querySelectorAll('.dropdown-menu').forEach(item => {
        if (item !== menu) {
          item.classList.remove('active');
        }
      });
      menu.classList.toggle('active');
    });
  });
  