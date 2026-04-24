//Car Collection

document.addEventListener('DOMContentLoaded', function () {

  // DEFAULT CARS
  const defaultCars = [
    {
      id: 1,
      brand: 'Porsche',
      name: '911 Turbo S',
      category: 'sports',
      hp: '701 HP / 590 lb-ft of torque',
      acceleration: '2.5 to 2.6',
      topSpeed: '198',
      weight: '1,733',
      description: 'An all-wheel-drive sports car delivering around 640 hp from its twin-turbo flat-six engine. It blends everyday comfort with supercar acceleration, reaching 0 to 60 mph in under 3 seconds.',
      image: 'images/porsche.jpg',
      youtube: 'https://www.youtube.com/watch?v=S8tNRyFoSco',
    },
    {
      id: 2,
      brand: 'Porsche',
      name: '918 Spyder',
      category: 'hypercar',
      hp: '887 HP / 944 lb-ft of torque',
      acceleration: '2.5 to 2.6',
      topSpeed: '211',
      weight: '1,675',
      description: 'A plug-in hybrid hypercar powered by a naturally aspirated V8 and dual electric motors, producing 887 hp. It combines extreme performance with advanced hybrid technology, sprinting from 0 to 60 mph in about 2.5 seconds.',
      image: 'images/spyder.png',
      youtube: 'https://www.youtube.com/watch?v=TFvnHtCNjbQ',
    },
    {
      id: 3,
      brand: 'Nissan',
      name: 'GT-R R33',
      category: 'sports',
      hp: '710 HP',
      acceleration: '2.9',
      topSpeed: '211',
      weight: '—',
      description: 'A legendary 1990s Japanese sports car equipped with the RB26DETT twin-turbo inline-six and advanced all-wheel drive. It earned its reputation through dominance in motorsports and street tuning culture.',
      image: 'images/GTR.png',
      youtube: 'https://www.youtube.com/watch?v=SNriBkMkGbQ',
    },
    {
      id: 4,
      brand: 'Porsche',
      name: 'Cayenne Turbo GT',
      category: 'suv',
      hp: '650 HP / 626 lb-ft of torque',
      acceleration: '2.9 to 3.1',
      topSpeed: '186',
      weight: '2,293',
      description: 'A high-performance SUV powered by a twin-turbo V8 producing over 630 hp. It combines sports car handling with SUV practicality and track-level performance.',
      image: 'images/Cayenne.png',
      youtube: 'https://www.youtube.com/watch?v=qTCBGNVBiZQ',
    },
    {
      id: 5,
      brand: 'Tesla',
      name: 'Model S Plaid',
      category: 'electric',
      hp: '1,020 HP',
      acceleration: '1.99',
      topSpeed: '200',
      weight: '2,178',
      description: 'An all-electric performance sedan producing over 1,000 hp with tri-motor all-wheel drive. It delivers hypercar-level acceleration while offering advanced autonomous driving technology.',
      image: 'images/Tesla.png',
      youtube: 'https://www.youtube.com/watch?v=G6hJHF2XKWQ',
    },
    {
      id: 6,
      brand: 'Toyota',
      name: 'Land Cruiser LC300',
      category: 'suv',
      hp: '302–309 HP',
      acceleration: '6.7 to 7.0',
      topSpeed: '130',
      weight: '2,495',
      description: 'A full-size luxury SUV powered by a twin-turbo V6, built for extreme durability and off-road capability. It combines premium comfort with legendary all-terrain performance.',
      image: 'images/lc300.png',
      youtube: 'https://www.youtube.com/watch?v=SQPBmGOMBSs',
    },
    {
      id: 7,
      brand: 'Toyota',
      name: 'Hilux GR-S',
      category: 'pickup',
      hp: '224 HP / 550 Nm torque',
      acceleration: '9.8 to 9.9',
      topSpeed: '112',
      weight: '2,120',
      description: 'A sport-tuned version of the legendary Hilux pickup, built for durability and off-road strength. It combines rugged reliability with aggressive styling and improved suspension performance.',
      image: 'images/Hilux.png',
      youtube: 'https://www.youtube.com/watch?v=k4RNMrHIDCk',
    },
    {
      id: 8,
      brand: 'Toyota',
      name: 'Camry TRD',
      category: 'sedan',
      hp: '301 HP',
      acceleration: '5.6 to 6.0',
      topSpeed: '135',
      weight: '1,400',
      description: 'A midsize sedan known for comfort, fuel efficiency, and long-term reliability. It delivers smooth daily driving performance with modern safety and technology features.',
      image: 'images/Camry.png',
      youtube: 'https://www.youtube.com/watch?v=FTaHEXNKFSk',
    },
    {
      id: 9,
      brand: 'Honda',
      name: 'Accord',
      category: 'sedan',
      hp: '252 HP / 273 lb-ft of torque',
      acceleration: '5.4 to 5.7',
      topSpeed: '130',
      weight: '1,429',
      description: 'A turbocharged midsize sedan producing around 252 hp with strong, responsive acceleration. It balances sporty performance with practicality, comfort, and efficiency.',
      image: 'images/Accord.png',
      youtube: 'https://www.youtube.com/watch?v=THMovBa5rb0',
    },
  ];

  // LOAD DEFAULTS INTO LOCALSTORAGE ON FIRST VISIT
  function initCars() {
    const existing = localStorage.getItem('userCars');
    if (!existing) {
      localStorage.setItem('userCars', JSON.stringify(defaultCars));
    }
  }

  initCars();

  // FILTER BUTTONS 
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const filterValue = this.getAttribute('data-filter');
      document.querySelectorAll('.carCard').forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === cardCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 3D TILT EFFECT 
  function applyTiltEffect(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 15;
      const rotateY = (x - centerX) / 15;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0)';
    });
  }

  // INTERSECTION OBSERVER
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  });

  // SEARCH BAR 
  const searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();
      document.querySelectorAll('.carCard').forEach(card => {
        const brand = card.querySelector('.carBrand')?.textContent.toLowerCase() || '';
        const name = card.querySelector('.carName')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.carDescription')?.textContent.toLowerCase() || '';
        if (brand.includes(query) || name.includes(query) || desc.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }

  // LOAD ALL CARS FROM LOCALSTORAGE 
  function loadSavedCars() {
    const saved = getSavedCars();
    const grid = document.querySelector('.carsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (saved.length === 0) {
      grid.innerHTML = `<p class="emptymsg">No cars in your collection yet. Hit <strong>+ Add Car</strong> to get started!</p>`;
      return;
    }

    saved.forEach(car => {
      const card = createCarCard(car);
      grid.appendChild(card);
      applyTiltEffect(card);
      observer.observe(card);
    });
  } 

  //OPEN / CLOSE
  // ─── CONFIRM MODAL ────────────────────────────────────────────
  const confirmModal = document.getElementById('confirmModal');
  const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
  const confirmCancelBtn = document.getElementById('confirmCancelBtn');
  const confirmMsgEl = document.getElementById('confirmMsg');
  let pendingDeleteId = null;

  confirmCancelBtn?.addEventListener('click', () => {
    confirmModal.classList.remove('active');
    pendingDeleteId = null;
  });

  confirmModal?.addEventListener('click', (e) => {
    if (e.target === confirmModal) {
      confirmModal.classList.remove('active');
      pendingDeleteId = null;
    }
  });

  confirmDeleteBtn?.addEventListener('click', () => {
    if (pendingDeleteId !== null) {
      removeCarFromStorage(pendingDeleteId);
      loadSavedCars();
      confirmModal.classList.remove('active');
      pendingDeleteId = null;
    }
  });

  function showConfirmModal(car) {
    pendingDeleteId = car.id;
    confirmMsgEl.textContent = `Are you sure you want to remove ${car.brand} ${car.name} from your collection?`;
    confirmModal.classList.add('active');
  }
  const modal = document.getElementById('addCarModal');
  const addCarBtn = document.getElementById('addCarBtn');
  const closeModal = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');

  if (addCarBtn) addCarBtn.addEventListener('click', () => modal.classList.add('active'));
  if (closeModal) closeModal.addEventListener('click', () => modal.classList.remove('active'));
  if (cancelBtn) cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  //  AUTO-OPEN MODAL IF REDIRECTED FROM DASHBOARD
  if (new URLSearchParams(window.location.search).get('addCar') === 'true') {
    modal?.classList.add('active');
    history.replaceState({}, '', window.location.pathname);
  }

  //IMAGE PREVIEW 
  const imageUpload = document.getElementById('imageUpload');
  const imageUrl = document.getElementById('imageUrl');
  const imagePreview = document.getElementById('imagePreview');

  imageUpload?.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
      imageUrl.value = '';
    };
    reader.readAsDataURL(file);
  });

  imageUrl?.addEventListener('input', function () {
    if (this.value.trim()) {
      imagePreview.src = this.value.trim();
      imagePreview.style.display = 'block';
      imageUpload.value = '';
    } else {
      imagePreview.style.display = 'none';
    }
  });

  // FORM SUBMIT
  const addCarForm = document.getElementById('addCarForm');
  addCarForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    if (imageUpload?.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => finalizeCarSubmit(ev.target.result);
      reader.readAsDataURL(imageUpload.files[0]);
    } else {
      const src = imageUrl?.value.trim() || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400';
      finalizeCarSubmit(src);
    }
  });

  function finalizeCarSubmit(imageSrc) {
    const car = {
      id: Date.now(),
      brand: document.getElementById('carBrand').value.trim(),
      name: document.getElementById('carName').value.trim(),
      category: document.getElementById('carCategory').value,
      hp: document.getElementById('carHp').value.trim(),
      acceleration: document.getElementById('carAcceleration').value.trim(),
      topSpeed: document.getElementById('carTopSpeed').value.trim(),
      weight: document.getElementById('carWeight').value.trim(),
      description: document.getElementById('carDescription').value.trim(),
      image: imageSrc,
      youtube: document.getElementById('carYoutube').value.trim() || '',
    };

    saveCarToStorage(car);
    loadSavedCars();

    modal.classList.remove('active');
    addCarForm.reset();
    if (imagePreview) {
      imagePreview.style.display = 'none';
      imagePreview.src = '';
    }

    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
  }

  // CREATE CARD HTML
  function createCarCard(car) {
    const article = document.createElement('article');
    article.className = 'carCard';
    article.setAttribute('data-category', car.category);

    // make card clickable if youtube link exists
    if (car.youtube) {
      article.style.cursor = 'pointer';
      article.addEventListener('click', (e) => {
        // don't trigger if clicking the remove button
        if (e.target.classList.contains('deleteCarBtn')) return;
        window.open(car.youtube, '_blank');
      });
    }

    article.innerHTML = `
      <div class="carImage">
        <img src="${car.image}" alt="${car.brand} ${car.name}" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400'">
      </div>
      <div class="carInfo">
        <span class="carBrand">${car.brand}</span>
        <h2 class="carName">${car.name}</h2>
        ${car.youtube ? '<span class="youtubeBadge">▶ Watch Review</span>' : ''}
        <div class="carSpecs">
          <div class="specItem"><span class="specIcon">🚀</span><div><strong>${car.hp}</strong><small>Power</small></div></div>
          <div class="specItem"><span class="specIcon">⏱️</span><div><strong>${car.acceleration}s</strong><small>0-60 mph</small></div></div>
          <div class="specItem"><span class="specIcon">⚡</span><div><strong>${car.topSpeed} mph</strong><small>Top Speed</small></div></div>
          <div class="specItem"><span class="specIcon">⚖️</span><div><strong>${car.weight} kg</strong><small>Weight</small></div></div>
        </div>
        <p class="carDescription">${car.description}</p>
        <button class="deleteCarBtn" data-id="${car.id}">Remove</button>
      </div>
    `;

    article.querySelector('.deleteCarBtn').addEventListener('click', () => {
      showConfirmModal(car);
    });

    return article;
  }

  // LOCALSTORAGE HELPERS 
  function saveCarToStorage(car) {
    const saved = getSavedCars();
    saved.push(car);
    localStorage.setItem('userCars', JSON.stringify(saved));
  }

  function getSavedCars() {
    try {
      return JSON.parse(localStorage.getItem('userCars')) || [];
    } catch {
      return [];
    }
  }

  function removeCarFromStorage(id) {
    const saved = getSavedCars().filter(c => c.id !== id);
    localStorage.setItem('userCars', JSON.stringify(saved));
  }

  // INIT LOAD 
  loadSavedCars();

}); 