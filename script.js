// Loading overlay and image preload
window.onload = function() {
    // Hide loading overlay when everything is loaded
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 400);
    }
    preloadImages();
};

// Preload images for faster UX
function preloadImages() {
    const images = [
        'img/img-project1.jpg',
        'img/Frame 4.jpg',
        'img/12.png',
        'img/12345.jpg',
        'img/zoom in.png',
        'img/3333.png',
        'img/1.png',
        'img/2222.png'
    ];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Section navigation logic
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'flex' : 'none';
}

function setActiveMenu(section) {
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item.dataset.section === section) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function showWork() {
    localStorage.setItem('currentSection', 'work');
    setActiveMenu('work');
    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">SELECT WORK</h2>
        <div class="card-container">
            <div class="card" onclick="showWorkDetailsBlueQuiz('Blue Quiz - Chelsea FC X FPT', 'Web Application', '', '2024')">
                <img class="card-image" src="img/logo-chelsea.png" alt="Blue Quiz - Chelsea FC X FPT">
                <div class="card-details">
                    <div class="card-title">Blue Quiz - Chelsea FC X FPT</div>
                    <div class="card-subtitle">Web Application</div>
                    <div class="card-description">
                        A football quiz web app for Chelsea FC fans, built for the FPT event. Features interactive questions, real-time scoring, and a Chelsea-inspired UI.
                    </div>
                    <div class="card-year">2025</div>
                </div>
            </div>
            <div class="card" onclick="showWorkDetails('Stripe Application', 'Mobile App', '', '2024')">
                <img class="card-image" src="img/Frame 4.jpg" alt="Stripe Application">
                <div class="card-details">
                    <div class="card-title">Stripe Application</div>
                    <div class="card-subtitle">Mobile App</div>
                    <div class="card-description">
                        A modern payment platform UI for food delivery, driver services, and grocery shipping. Focused on seamless user experience and clean, bold visuals.
                    </div>
                    <div class="card-year">2024</div>
                </div>
            </div>
            <div class="card" onclick="showWorkDetails2('Job & Recruitment', 'Mobile App', '', '2024')">
                <img class="card-image" src="img/jd2.png" alt="Job & Recruitment">
                <div class="card-details">
                    <div class="card-title">Job & Recruitment</div>
                    <div class="card-subtitle">Mobile App</div>
                    <div class="card-description">
                        A job search app for Vietnam, connecting job seekers and employers with a fast, flexible, and intuitive interface. Includes research, personas, and prototype.
                    </div>
                    <div class="card-year">2024</div>
                </div>
            </div>
            <div class="card" onclick="showWorkDetails3('Fukuoka SoftBank HAWKS Gaming', 'Website', '', '2024')">
                <img class="card-image" src="img/japan-team.png" alt="Fukuoka SoftBank HAWKS Gaming">
                <div class="card-details">
                    <div class="card-title">Fukuoka SoftBank HAWKS Gaming</div>
                    <div class="card-subtitle">Website</div>
                    <div class="card-description">
                        Esports team website for the Fukuoka SoftBank Hawks. Vibrant, energetic, and designed to promote e-sports and team spirit.
                    </div>
                    <div class="card-year">2024</div>
                </div>
            </div>
        </div>
    `;
}

function showAbout() {
    localStorage.setItem('currentSection', 'about');
    setActiveMenu('about');
    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">ABOUT ME</h2>
        <div class="about-content">
            <div class="about-left">
                <img src="img/haonguyen-photo.png" alt="A description of the image" class="about-image">
                <p style="font-weight: 700; font-size: 18px;">HI, I'M HAO 🤟🏼</p>
                <p style="font-weight: 700; font-size: 18px;">I'M CURRENTLY A FREELANCE DESIGNER</p>
                <p>I specialize in building thoughtful and user-centered digital experiences that encourage people to lead more intentional lives.</p>
                <p>With a background in both design and technology, I bring a unique perspective to every project I work on. My goal is to create products that are not only functional but also meaningful.</p>
            </div>
            <div class="about-right">
                <div class="about-section">
                    <h3 class="about-subtitle">EXPERIENCE</h3>
                    <ul class="about-list">
                        <li><strong>2024-now</strong></li>
                        <li><strong>Freelancer</strong></li>
                        <li><strong>10/2023-12/2023</strong></li>
                        <li><strong>Intern UX/UI Designer at ITBee Soltuion</strong></li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3 class="about-subtitle">EDUCATION</h3>
                    <ul class="about-list">
                        <li><strong></strong>2021-2024</li>
                        <li><strong>Information Technology</strong> - SaiGon Technology University</li>I
                        <li><strong></strong>2023</li>
                        <li><strong>UX/UI Design Certification Cousera</strong> - Interaction Design Foundation</li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3 class="about-subtitle">SKILLS</h3>
                    <ul class="about-list">
                        <li><strong>Design Tools:</strong> Figma, Adobe XD, Photoshop, Illustrator</li>
                        <li><strong>Frontend Development:</strong> HTML, CSS, Reactjs(Basic)</li>
                        <li><strong>User Research:</strong> Usability Testing, User Interviews, Persona Creation</li>
                        <li><strong>Soft Skills:</strong> Collaboration, Communication, Problem Solving</li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3 class="about-subtitle">CONTACT</h3>
                    <ul class="about-list">
                        <li><strong>Email:</strong>haonguyenanh03@gmail.com</li>
                        <li><strong>Phone:</strong>0967773200</li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-anh-h%C3%A0o-4302a9223/" target="_blank">linkedin.com/in/haonguyen03</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Section details logic (unchanged)
function showWorkDetails(title, subtitle, description, year) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('main-content').innerHTML = `
        <div class="work-details">
            <div class="back-icon" onclick="showWork()">&#60;</div>
            <div class="work-image">
                <img src="img/img-project1.jpg" alt="${title}" class="full-size-image">
            </div>
            <div class="work-info">
                <p class="work-subtitle">${subtitle}</p>
                <h2 class="work-title">STRIPE APPLICATION</h2>
                <p class="work-description">Stripe Application is a popular payment processing platform that can be used to integrate payments into various applications, including food delivery, driver services, and grocery shipping.</p>
                <div class="work-meta">
                    <p><strong>Year:</strong> 2024</p>
                    <p><strong>Tools:</strong> Figma, Adobe Photoshop</p>
                </div>
            </div>
            <div class="work-image">
                <img src="img/Frame 4.jpg" alt="${title}" class="full-size-image">
            </div>
        </div>
        <div class="work-info">
            <p class="work-description">Home & Searching can enhance user experience by highlighting popular dishes, adding a "Favorites" section, and offering personalized suggestions, while improving the search with smart filters and quick categories for easier and faster meal selection.</p>
        </div>
        <div class="work-image">
            <img src="img/12.png" alt="${title}" class="full-size-image">
        </div>
        <div class="work-info">
            <p class="work-description">Order Place in the Stripe food delivery app displays essential information such as order details, pickup location with GPS directions, estimated times for pickup and delivery, contact options for customers and restaurants, earnings for the current order, and delivery status to help drivers manage their tasks efficiently.</p>
        </div>
        <div class="work-image">
            <img src="img/12345.jpg" alt="${title}" class="full-size-image">
            <img src="img/123456.png" alt="${title}" class="full-size-image">
        </div>
        <div class="work-info">
            <p class="work-description">Order for Delivery & and more screen in the Stripe food delivery app features an order summary, delivery options, payment methods, promotions, special instructions, and estimated delivery time, all aimed at providing a seamless ordering experience for users while ensuring they have everything needed before confirming their order.</p>
        </div>
        <div class="work-image">
            <img src="img/3333.png" alt="${title}" class="full-size-image">
            <img src="img/1.png" alt="${title}" class="full-size-image">
            <img src="img/2222.png" alt="${title}" class="full-size-image">  
        </div>
    `;
    const workDetails = document.querySelector('.work-details');
    workDetails.style.display = 'block'; // Hiển thị chi tiết
    workDetails.classList.add('fade-in'); // Thêm lớp để kích hoạt animation


}

function showWorkDetails2(title, subtitle, description, year) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('main-content').innerHTML = `
        <div class="work-details">
            <div class="back-icon" onclick="showWork()">&#60;</div>
            <div class="work-image">
                <img src="img/jd22.png" alt="${title}" class="full-size-image">
            </div>
            <div class="work-info">
                <p class="work-subtitle">${subtitle}</p>
                <h2 class="work-title">JOB AND RECUITMENT</h2>
                <p class="work-description">Job & Recuitment is a job search app in Vietnam, designed to efficiently connect job seekers and employers. With JR, we commit to providing a simple, fast, and flexible job search and recruitment experience.</p>
                <div class="work-meta">
                    <p><strong>Year:</strong> 2024</p>
                    <p><strong>Tools:</strong> Figma, Adobe Photoshop</p>
                </div>
            </div>
            <div class="work-image">
                <img src="img/desk-research2.png" alt="${title}" class="full-size-image">
            </div>
               <div class="work-info">
            <p class="work-description">About this desk research analyzes the IT layoff wave in Vietnam, highlighting job market challenges, student difficulties, and industry trends.</p>
        </div>
             <div class="work-image">
                <img src="img/desk-research.png" alt="${title}" class="full-size-image">
            </div>
                 <div class="work-info">
            <p class="work-description">This research compares <strong> VietnamWorks and TopCV </strong> , highlighting their advantages and disadvantages in job searching and resume optimization for Vietnamese job seekers.</p>
        </div>
            <div class="work-image">
                <img src="img/market-research.png" alt="${title}" class="full-size-image">
            </div>
             <div class="work-info">
            <p class="work-description">Personas it features two personas: <strong> Alex Nguyen</strong> and <strong>Linh Tran</strong>. The personas provide insights into their professional goals, challenges, and attributes.</p>
        </div>
            <div class="work-image">
                <img src="img/PERSONALS.svg" alt="${title}" class="full-size-image">
            </div>
        </div>
        <div class="work-info">
        </div>
         <div class="work-info">
            <p class="work-description">Color Pallette & Typography A color palette is a collection of colors that work well together. It can be used for a variety of purposes, such as designing a app.</p>
        </div>
        <div class="work-image">
            <img src="img/TYPO2.svg" alt="${title}" class="full-size-image">
        </div>
          <div class="work-info">
            <p class="work-description">Home Page & Searching offers personalized job recommendations and a search bar, while the search feature includes filters for location, job type, and salary. Users can sort results, apply, save jobs, and set up alerts for new postings, enhancing the overall experience.</p>
        </div>
         <div class="work-image">
            <img src="img/search-jd.png" alt="${title}" class="full-size-image">
        </div>
         <div class="work-image">
            <img src="img/search2-jd.png" alt="${title}" class="full-size-image">
        </div>
   <div class="work-info">
            <p class="work-description">Order for Delivery & and more screen in the Stripe food delivery app features an order summary, delivery options, payment methods, promotions, special instructions, and estimated delivery time, all aimed at providing a seamless ordering experience for users while ensuring they have everything needed before confirming their order.</p>
        </div>
        <div class="work-image">
            <img src="img/JD1.png" alt="${title}" class="full-size-image">
            <img src="img/JD.png" alt="${title}" class="full-size-image">
        </div>
  <div class="work-info">
            <p class="work-description">Demo Prototype</p>
        </div>
 <iframe class="figma-iframe" src="https://embed.figma.com/proto/pgAyL3T7JLKTGXPi3YAc5d/JOB%26RECUITMENT?page-id=81%3A538&amp;node-id=749-9068&amp;node-type=frame&amp;viewport=-20%2C122%2C0.2&amp;scaling=scale-down&amp;content-scaling=fixed&amp;starting-point-node-id=749%3A9068&amp;show-proto-sidebar=1&amp;embed-host=share" allowfullscreen></iframe>
        
    `;
    const workDetails = document.querySelector('.work-details');
    workDetails.style.display = 'block'; // Hiển thị chi tiết
    workDetails.classList.add('fade-in'); // Thêm lớp để kích hoạt animation
}
function showWorkDetails3(title, subtitle, description, year) {
    document.getElementById('main-content').innerHTML = `
        <div class="work-details">
            <div class="back-icon" onclick="showWork()">&#60;</div>
            <div class="work-image">
                <img src="img/SHG-BANNER.svg" alt="${title}" class="full-size-image">
            </div>
            <div class="work-info">
                <p class="work-subtitle">${subtitle}</p>
                <h2 class="work-title">FUKUOKA SOFTBANK HAWKS GAMING</h2>
                <p class="work-description">Fukuoka SoftBank HAWKS Gaming HAWKS X Esport its participation in the eSports Pro League, the Fukuoka SoftBank Hawks will further promote e-sports and aim to become the world's number one entertainment company that transcends the boundaries of professional baseball teams.</p>
                <div class="work-meta">
                    <p><strong>Year:</strong> 2024</p>
                    <p><strong>Tools:</strong> Figma, Adobe Photoshop</p>
                </div>
            </div>
            <div class="work-image">
                <img src="img/japan-team.png" alt="${title}" class="full-size-image">
            </div>
        </div>
        <div class="work-image">
            <img src="img/news-shg.png" alt="${title}" class="full-size-image">
        </div>
        <div class="work-image">
            <img src="img/player-shg.png" alt="${title}" class="full-size-image">
            <img src="img/profile-shg.png" alt="${title}" class="full-size-image">
        </div>
        <div class="work-image">
            <img src="img/history-shg.png" alt="${title}" class="full-size-image">
            <img src="img/sponsor-shg.png" alt="${title}" class="full-size-image">
            
        </div>

        
    `;
    const workDetails = document.querySelector('.work-details');
    workDetails.style.display = 'block'; // Hiển thị chi tiết
    workDetails.classList.add('fade-in'); // Thêm lớp để kích hoạt animation

}

// Add Blue Quiz - Chelsea FC X FPT details popup
function showWorkDetailsBlueQuiz(title, subtitle, description, year) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('main-content').innerHTML = `
        <div class="work-details">
            <div class="back-icon" onclick="showWork()">&#60;</div>
            <div class="work-image">
                <img src="img/logo-chelsea.png" alt="${title}" class="full-size-image">
            </div>
            <div class="work-info">
                <p class="work-subtitle">${subtitle}</p>
                <h2 class="work-title">BLUE QUIZ - CHELSEA FC X FPT</h2>
                <p class="work-description">Blue Quiz is a web application designed for Chelsea FC fans, created for the FPT event. The app features interactive football quizzes, real-time scoring, and a Chelsea-inspired user interface. It aims to engage fans and test their knowledge about the club in a fun, competitive way.</p>
                <div class="work-meta">
                    <p><strong>Year:</strong> 2025</p>
                    <p><strong>Tools:</strong> Figma, Adobe Photoshop</p>
                </div>
            </div>
            <div class="work-image">
                <img src="img/chelsea-page.png" alt="${title}" class="full-size-image">
            </div>
        </div>
        <div class="work-info">
            <p class="work-description">
                <a href="https://ha0121.github.io/BluesQuiz-Chelsea/" target="_blank" class="blue-quiz-link">Try the Blue Quiz - Chelsea FC X FPT here!</a>
            </p>
        </div>
    `;
    const workDetails = document.querySelector('.work-details');
    workDetails.style.display = 'block';
    workDetails.classList.add('fade-in');
}

// Drag and drop logic for menu
function initMenuDragDrop() {
    const menu = document.querySelector('.menu');
    if (!menu) return;
    let draggedItem = null;

    // Randomize menu order on first load (or if not saved)
    const menuOrderKey = 'menuOrder';
    let order = JSON.parse(localStorage.getItem(menuOrderKey));
    const items = Array.from(menu.children);

    if (!order || order.length !== items.length) {
        // Randomize
        order = items.map((_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        localStorage.setItem(menuOrderKey, JSON.stringify(order));
    }

    // Apply order
    order.forEach(idx => menu.appendChild(items[idx]));

    // Drag events
    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('dragstart', function(e) {
            draggedItem = item;
            item.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', function() {
            draggedItem = null;
            item.classList.remove('dragging');
            menu.querySelectorAll('.menu-item').forEach(i => i.classList.remove('drag-over'));
            // Save new order
            const newOrder = Array.from(menu.children).map(i => items.indexOf(i));
            localStorage.setItem(menuOrderKey, JSON.stringify(newOrder));
        });
        item.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        item.addEventListener('dragenter', function(e) {
            if (item !== draggedItem) item.classList.add('drag-over');
        });
        item.addEventListener('dragleave', function() {
            item.classList.remove('drag-over');
        });
        item.addEventListener('drop', function(e) {
            e.preventDefault();
            if (item !== draggedItem) {
                menu.insertBefore(draggedItem, item.nextSibling === draggedItem ? item : item.nextSibling);
            }
            menu.querySelectorAll('.menu-item').forEach(i => i.classList.remove('drag-over'));
        });
    });
}

window.initMenuDragDrop = initMenuDragDrop;

// Initial section load
document.addEventListener('DOMContentLoaded', () => {
    const currentSection = localStorage.getItem('currentSection');
    if (currentSection === 'about') showAbout();
    else showWork();
});

// Responsive sidebar toggle logic (for mobile)
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    function showSidebar() {
        // Animation: add class for open
        sidebar.style.display = 'flex';
        setTimeout(() => sidebar.classList.add('sidebar-open'), 10);
    }
    function hideSidebar() {
        // Animation: remove class for close
        sidebar.classList.remove('sidebar-open');
        setTimeout(() => { sidebar.style.display = 'none'; }, 300);
    }
    if (toggleBtn) toggleBtn.addEventListener('click', showSidebar);
    if (closeBtn) closeBtn.addEventListener('click', hideSidebar);

    // Hide sidebar on mobile by default
    function handleResize() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('sidebar-open');
            sidebar.style.display = 'none';
        } else {
            sidebar.classList.remove('sidebar-open');
            sidebar.style.display = 'flex';
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    // Optional: Hide sidebar when clicking outside (mobile only)
    document.addEventListener('click', function(e) {
        if (
            window.innerWidth <= 768 &&
            sidebar.style.display === 'flex' &&
            sidebar.classList.contains('sidebar-open') &&
            !sidebar.contains(e.target) &&
            e.target !== toggleBtn
        ) {
            hideSidebar();
        }
    });
});

