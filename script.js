function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'flex' : 'none';
}

// Function to show the Work section
function showWork() {
    localStorage.setItem('currentSection', 'work');
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to the Work menu item
    document.querySelector('.menu-item:nth-child(1)').classList.add('active');

    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">SELECT WORK</h2>
        <div class="card-container">
            <div class="card" onclick="showWorkDetails('Candid', 'Mobile App', 'An app serving real-time news and funding information for nonprofit organizations.', '2020')">
                <img class="card-image" src="img/Frame 4.jpg" alt="Candid">
                <div class="card-details">
                    <div class="card-title">Stripe Application</div>
                    <div class="card-subtitle">Mobile App</div>
                    <div class="card-description">Stripe is a popular payment processing platform that can be used to integrate payments into various applications, including food delivery, driver services, and grocery shipping.</div>
                    <div class="card-year">2024</div>
                </div>
            </div>
            <div class="card" onclick="showWorkDetails2('Candid', 'Mobile App', 'An app serving real-time news and funding information for nonprofit organizations.', '2020')">
                <img class="card-image" src="img/jd2.png" alt="Candid">
                <div class="card-details">
                    <div class="card-title">Job & Recuitment</div>
                    <div class="card-subtitle">Mobile App</div>
                    <div class="card-description">Job & Recuitment is a job search app in Vietnam, designed to efficiently connect job seekers and employers. With JR, we commit to providing a simple, fast, and flexible job search and recruitment experience.</div>
                    <div class="card-year">2024</div>
                </div>
            </div>
              <div class="card" onclick="showWorkDetails3('Candid', 'Mobile App', 'An app serving real-time news and funding information for nonprofit organizations.', '2020')">
                <img class="card-image" src="img/japan-team.png" alt="Candid">
                <div class="card-details">
                    <div class="card-title">Fukuoka SoftBank HAWKS Gaming</div>
                    <div class="card-subtitle">Website</div>
                    <div class="card-description">HAWKS X Esport its participation in the eSports Pro League, the Fukuoka SoftBank Hawks will further promote e-sports and aim to become the world's number one entertainment company that transcends the boundaries of professional baseball teams.</div>
                    <div class="card-year">2024</div>
                </div>
            </div>
        </div>
    `;
}

// Function to show the About section
function showAbout() {
    localStorage.setItem('currentSection', 'about');
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to the About menu item
    document.querySelector('.menu-item:nth-child(2)').classList.add('active');

    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">ABOUT ME</h2>
        <div  class="about-content">
            <div class="about-left">
                <img src="img/avatar1.jpg" alt="A description of the image" class="about-image">
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
                        <li><strong>Information Technology</strong> - SaiGon Technology University</li>
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
                <div class="spotify-playlist">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0BFqbDnUs4LFfNIAulZGhA?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                
            </div>
        </div>
    `;
    
}
function showGame() {
    localStorage.setItem('currentSection', 'game');
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
}    

document.addEventListener('DOMContentLoaded', () => {
        const currentSection = localStorage.getItem('currentSection');
        if (currentSection) {
            if (currentSection === 'work') {
                showWork();
            } else if (currentSection === 'about') {
                showAbout();
            } else if (currentSection === 'game') {
                showGame();
            }
        } else {
            // Default to showing work if no section is stored
            showWork();
        }
    });
// Function to show details of a specific work
// Function to show details of a specific work
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

// Gọi hàm preloadImages khi trang được tải
window.onload = preloadImages;

