    // Active state toggle
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', e => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Hide on scroll down, show on scroll up
    let lastScrollY = window.scrollY;
    const nav = document.getElementById('bottomNav');

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        nav.classList.add('hide');
      } else {
        nav.classList.remove('hide');
      }
      lastScrollY = window.scrollY;
    });