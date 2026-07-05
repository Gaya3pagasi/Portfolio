 // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animateCursor() {
      cursor.style.left = mx - 6 + 'px';
      cursor.style.top = my - 6 + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + 'px';
      ring.style.top = ry - 18 + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));


    // Hover Image Preview for Projects
    const projectLinks = document.querySelectorAll('.project-item[data-img]');
    const previewImage = document.getElementById('project-preview-img');

    projectLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        previewImage.src = link.getAttribute('data-img');
        previewImage.classList.add('show');
        positionPreview(e);
      });

      link.addEventListener('mousemove', (e) => {
        positionPreview(e);
      });

      link.addEventListener('mouseleave', () => {
        previewImage.classList.remove('show');
      });
    });

    function positionPreview(e) {
      let x = e.clientX + 30;
      let y = e.clientY - 20;
      if (x + previewImage.offsetWidth > window.innerWidth - 20) {
        x = e.clientX - previewImage.offsetWidth - 30;
      }
      if (y + previewImage.offsetHeight > window.innerHeight - 20) {
        y = window.innerHeight - previewImage.offsetHeight - 20;
      }
      previewImage.style.left = x + 'px';
      previewImage.style.top  = y + 'px';
    }