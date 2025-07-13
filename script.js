/* Mobile tag style giống website tag */
.card-tag, .website-tag {
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 999px;
  padding: 2px 14px 2px 14px;
  background: #fff;
  color: #111;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  min-width: 0;
  box-sizing: border-box;
}

[data-theme="light"] .card-tag, [data-theme="light"] .website-tag {
  border-color: #222;
  color: #111;
  background: #fff;
}
/* Color variables for dark mode */
:root {
    --bg-color: #141414;
    --sidebar-bg: #141414;
    --text-color: #fff;
    --card-bg: #1C1C1C;
    --border-color: rgba(255,255,255,0.1);
    --menu-hover-bg: rgba(255,255,255,0.1);
    --menu-hover-border: rgba(255,255,255,0.5);
    --footer-link: rgba(255,255,255,0.75);
    --footer-divider: rgba(255,255,255,0.5);
    --footer-copy: 0.5;
}

body {
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    background: var(--bg-color);
    color: var(--text-color);
    text-transform: uppercase; /* Viết hoa toàn bộ text cho Dark Mode */
}

.container {
    display: flex;
    height: 100vh;
    flex-direction: row;
    position: relative;
}

.sidebar {
    width: 300px;
    padding: 20px;
    background: var(--sidebar-bg);
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--border-color);
    transition: background 0.3s, border-color 0.3s, transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
    opacity: 1;
    transform: translateX(0);
    position: relative;
}

.header-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    font-family: 'Phudu', cursive, sans-serif !important;
    font-variation-settings: 'wght' 500;
    font-weight: 500 !important;
}

.header-subtitle {
    font-size: 14px;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 5px;
}

.menu {
    margin: 20px 0;
}

.menu-item {
    display: flex;
    font-weight: 800;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: var(--footer-link) !important;
    cursor: pointer;
    margin: 20px 0;
    transition: color 0.3s, border-color 0.3s, background 0.3s;
    padding: 10px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
}
.menu-item:hover,
.menu-item.active {
    color: var(--text-color) !important;
    background: var(--menu-hover-bg) !important;
    border-color: var(--menu-hover-border) !important;
}

.menu-item.dragging {
    opacity: 0.5;
}
.menu-item.drag-over {
    border: 2px dashed #ffb300;
}

.menu-icon {
    width: 48px;
    height: 48px;
    border-radius: 6px;
}

.menu-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
}

.menu-subtext {
    font-size: 12px;
    color: var(--text-color);
    opacity: 0.6;
    margin-top: 4px;
}

.work-section {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.section-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-left: 10px;
    border-bottom: 2px solid rgba(85, 82, 82, 0.5);
    padding-bottom: 20px;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Hiển thị 2 project trên 1 hàng */
    gap: 40px;
    padding: 30px 0 0 0;
    align-items: stretch;
}

.card {
    background: var(--card-bg);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 1.5px 6px rgba(0,0,0,0.10);
    transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: none;
    min-height: 650px; /* tăng chiều cao tối thiểu để card dài ra */
    position: relative;
}

.card:hover {
    transform: translateY(-8px) scale(1.025);
    box-shadow: 0 16px 48px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.13);
    background: linear-gradient(120deg, #232526 0%, #1C1C1C 100%);
}

.card-image {
    width: 100%;
    height: 340px; /* tăng chiều cao hình ảnh để card dài hơn */
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10);
    transition: filter 0.2s;
}

.card:hover .card-image {
    filter: brightness(1.08) saturate(1.1);
}

.card-details {
    padding: 44px 28px 32px 28px; /* tăng padding để card dài hơn */
    display: flex;
    flex-direction: column;
    flex: 1;
}

.card-title {
    font-size: 1.7rem; /* tăng kích thước tiêu đề */
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text-color);
    letter-spacing: 0.01em;
    text-align: left;
    font-family: 'Phudu', cursive, sans-serif !important;
    font-variation-settings: 'wght' 500;
    font-weight: 500 !important;
}

.card-subtitle {
    font-size: 1.2rem; /* tăng kích thước phụ đề */
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: 14px;
    font-weight: 500;
    text-align: left;
}

.card-description {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.68;
    margin-bottom: 16px;
    text-align: left;
    line-height: 1.6;
    flex: 1;
}

.card-year {
    font-size: 0.98rem;
    color: var(--text-color);
    opacity: 0.8;
    text-align: right;
    font-weight: 600;
    margin-top: 10px;
}

.footer-links {
    display: flex;
    align-items: center;
    margin-top: auto;
}

.footer-link {
    color: var(--footer-link);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 8px;
}

.footer-divider {
    color: var(--footer-divider);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}

.footer-copy {
    opacity: var(--footer-copy);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 10px;
}

.blue-quiz-link {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1.4em;
    transition: color 0.2s;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
    .sidebar {
        width: 250px; /* Slightly reduce sidebar width */
    }

    .menu-item {
        font-size: 15px; /* Slightly smaller font size */
    }

    .header-title {
        font-size: 22px; /* Adjust title size */
    }

    .header-subtitle {
        font-size: 12px; /* Adjust subtitle size */
    }

    .card-container {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }
    .card-image {
        height: 170px;
    }
    .card-details {
        padding: 18px 14px 14px 14px;
    }
}

/* XÓA HOÀN TOÀN các media query liên quan đến sidebar, #toggle-sidebar, #close-sidebar cho mobile/tablet */

@media (max-width: 600px) {
    .card-container {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 0;
    }
    .card {
        min-height: 320px;
    }
    .card-image {
        height: 140px;
    }
    .card-details {
        padding: 14px 10px 10px 10px;
    }
}

@media (max-width: 480px) {
    .header-title {
        font-size: 18px; /* Further adjust title size for very small screens */
    }

    .header-subtitle {
        font-size: 10px; /* Further adjust subtitle size for very small screens */
    }

    .menu-item {
        padding: 8px; /* Reduce padding for mobile */
    }

    .card-title {
        font-size: 20px; /* Adjust card title size */
    }

    .card-subtitle {
        font-size: 14px; /* Adjust card subtitle size */
    }

    .card-description {
        font-size: 12px; /* Adjust card description size */
    }

    .footer-link {
        font-size: 10px; /* Smaller footer link size */
    }
}

.about-content {
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
    
}

.about-content p {
    margin: 15px 0; /* Giảm khoảng cách giữa các đoạn văn */
}
.about-left::-webkit-scrollbar, .about-right::-webkit-scrollbar {
    width: 0; /* Hide vertical scrollbar */
    height: 0; /* Hide horizontal scrollbar */
}
.about-left {
    flex: 1;
    min-width: 300px;
    border: 1px solid rgba(255, 255, 255, 0.2); /* Add border */
    border-radius: 8px; /* Add rounded corners */
    padding: 20px; /* Add padding for inner content */
    background: #1C1C1C; /* Match the background color */
    max-height: 7000px; /* Set a maximum height */
    overflow-y: auto; /* Enable vertical scrolling */
}
.about-left {
    margin-left: -8px; /* Keep this if you want to adjust the left margin */
    margin-bottom: 10px;
}

.about-right {
    flex: 1; /* Allow it to take available space */
    min-width: 300px; /* Minimum width */
    padding: 0; /* Remove any padding */
    margin: 0; /* Remove any margin */
    max-height: 820px; /* Set a maximum height */
    overflow-y: auto; /* Enable vertical scrolling */
}

.about-list {
    list-style-type: none; /* Remove default list styling */
    padding-left: 0; /* Remove left padding */
    margin-bottom: 20px; /* Space below the list */
}

.about-list li {
    margin-bottom: 10px; /* Space between list items */
    font-size: 14px; /* Font size for list items */
    color: rgba(255, 255, 255, 0.75); /* Text color */
}

.about-subtitle {
    font-size: 18px; /* Font size for subtitles */
    font-weight: 600; /* Bold font weight */
    margin-top: 20px; /* Space above subtitles */
    margin-bottom: 10px; /* Space below subtitles */
    color: rgba(255, 255, 255, 0.9); /* Text color */
}

.about-list li strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
}

.about-list a {
    color: rgba(255, 255, 255, 0.75); /* Link color */
    text-decoration: none; /* Remove underline */
}

.about-list a:hover {
    text-decoration: underline; /* Underline on hover */
}

.about-section {
    margin-bottom: 20px; /* Space between sections */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Border for each section */
    background: rgba(255, 255, 255, 0.05); /* Slight background for sections */
    border-radius: 8px; /* Optional: rounded corners for a softer look */
    padding-top: 40px 0 0;
    padding-left: 20px;
}
.about-section iframe {
    width: 100%; /* Make the iframe responsive */
    height: 166px; /* Set a fixed height */
    border: none; /* Remove border */
    margin-top: 20px; /* Space above the playlist */
}
.about-image {
    width: 100%; /* Giữ nguyên chiều rộng */
    aspect-ratio: 14 / 9; /* Đặt tỷ lệ khung hình */
    object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
    border-radius: 8px; /* Bo góc */
    margin-bottom: 20px; /* Khoảng cách phía dưới */
    filter: grayscale(100%); /* Chuyển sang trắng đen */
}

/* Spotify Playlist Styling */
.spotify-playlist {
    margin-top: 10px; /* Giảm khoảng cách phía trên để đẩy playlist lên cao hơn */
    margin-bottom: 20px; /* Add space below the playlist */
    padding: 10x; /* Add padding around the playlist */
    border-radius: 12px; /* Add rounded corners */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Border for each section */

}

.spotify-playlist iframe {
    width: 100%; /* Make the iframe responsive */
    border-radius: 12px; /* Add rounded corners to the iframe */
}

/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
    .spotify-playlist iframe {
        height: 260px; /* Tăng chiều cao cho tablet/mobile */
    }
}

@media (max-width: 480px) {
    .spotify-playlist iframe {
        height: 200px; /* Tăng chiều cao cho mobile nhỏ */
    }
}

body {
    margin: 0;
    font-family: 'IBM Plex Mono', monospace;
    background: #141414;
    color: white;
}

.container {
    display: flex;
    height: 100vh; /* Full height of the viewport */
    flex-direction: row; /* Default to row layout */
    position: relative; /* Position relative for absolute button */
}

.sidebar {
    width: 300px; /* Fixed width for the sidebar */
    padding: 20px;
    background: #141414;
    display: flex;
    flex-direction: column; /* Stack children vertically */
    border-right: 2px solid rgba(255, 255, 255, 0.1); /* Right border for sidebar */
    transition: transform 0.3s ease; /* Smooth transition for sidebar */
}

.header-container {
    display: flex; /* Use Flexbox for alignment */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    margin-bottom: 20px; /* Space below the header */
}

#toggle-sidebar {
    display: none; /* Hide by default */
    position: absolute;
    top: 20px;
    right: 20px; /* Move to the right */
    left: auto;  /* Remove left positioning */
    background: transparent;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 28px;
    z-index: 1100;
    height: 24px;         /* giảm chiều cao xuống nữa */
    line-height: 24px;    /* căn giữa icon theo chiều dọc */
    /* width: 48px; */    /* nếu muốn hình vuông, bỏ comment */
}

#close-sidebar {
    display: none; /* Hide by default */
    background: transparent;
    color: white;
    border: none;
    font-size: 32px;
    cursor: pointer;
    margin-bottom: 10px;
    align-self: flex-end;
    z-index: 1101;
}

/* Mode toggle circle button - border white with opacity, solid and inner circle on hover only */
.mode-toggle-btn {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.4);
  background: var(--sidebar-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  outline: none;
  padding: 0;
  position: relative;
  overflow: hidden;
}
.mode-toggle-btn .inner-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  transition: opacity 0.18s;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.mode-toggle-btn:hover {
  background: var(--menu-hover-bg);
  border-color: #fff;
}
.mode-toggle-btn:hover .inner-circle {
  opacity: 1;
}
.mode-toggle-btn:focus {
  background: var(--sidebar-bg);
  border-color: rgba(255,255,255,0.4);
}

/* Responsive for mobile/tablet */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 80vw;
        max-width: 340px;
        height: 100vh;
        z-index: 1001;
        background: var(--sidebar-bg);
        display: none;
        flex-direction: column;
        border-right: 2px solid var(--border-color);
        border-bottom: none;
        box-shadow: 2px 0 16px rgba(0,0,0,0.25);
        padding-top: 40px;
        transition: left 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
        opacity: 0;
        pointer-events: none;
        transform: translateX(40px);
    }
    .sidebar.sidebar-open {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
    }
    #toggle-sidebar {
        display: block;
    }
    #close-sidebar {
        display: block;
    }
    main.work-section {
        padding: 16px;
        margin-left: 0;
    }
    .footer-links {
        flex-wrap: wrap;
        gap: 4px;
    }
}

/* --- ĐẢM BẢO MENU BURGER VÀ TEXT ĐỀU NHAU TRÊN MOBILE --- */
@media (max-width: 768px) {
    .header-container {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 8px;
        min-height: 48px;
    }
    #toggle-sidebar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
        font-size: 28px;
        margin: 0;
        padding: 0;
        background: transparent;
        border-radius: 8px;
        box-shadow: none;
    }
    .menu {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: space-evenly !important;
        width: 100%;
        gap: 0;
        margin: 0;
        padding: 0;
    }
    .menu-item {
        flex: 1 1 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 0;
        min-height: 48px;
        font-size: 15px;
        margin: 0 2px;
        padding: 0 2px;
        border-radius: 8px;
        text-align: center;
        box-sizing: border-box;
    }
}
@media (max-width: 480px) {
    .header-container {
        min-height: 40px;
        padding: 0 4px;
    }
    #toggle-sidebar {
        height: 40px;
        width: 40px;
        font-size: 22px;
    }
    .menu-item {
        min-height: 40px;
        font-size: 13px;
    }
    .sidebar.sidebar-open .menu-item {
        min-height: 40px;
        font-size: 13px;
        padding: 0 2px;
    }
}

/* --- Responsive: Khi sidebar mở trên mobile, menu dọc đều, dễ bấm --- */
@media (max-width: 768px) {
    .sidebar.sidebar-open .menu {
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: flex-start !important;
        width: 100%;
        gap: 0;
        margin: 0;
        padding: 0;
    }
    .sidebar.sidebar-open .menu-item {
        width: 100%;
        margin: 8px 0;
        text-align: left;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        min-height: 48px;
        padding: 10px;
    }
}
@media (max-width: 480px) {
    .sidebar.sidebar-open .menu-item {
        min-height: 40px;
        font-size: 15px;
        padding: 0 2px;
    }
}

/* Hide old spinner */
.spinner { display: none !important; }

@media (min-width: 769px) {
    #toggle-sidebar {
        display: none; /* Hide the burger button on desktop */
    }

    #close-sidebar {
        display: none; /* Hide the close button on desktop */
    }
}
.menu-item.active {
    color: rgba(255, 255, 255, 1); /* Active color */
    background: rgba(255, 255, 255, 0.1); /* Active background */
    border-color: rgba(255, 255, 255, 0.5); /* Active border color */
}


.work-details-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #141414;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow: hidden;
    padding: 20px; /* Thêm padding để tránh nội dung sát viền màn hình */
}

.work-image-fullscreen {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.1); /* Thêm border cho hình ảnh */
    border-radius: 8px; /* Bo góc */
    margin-bottom: 20px; /* Khoảng cách giữa hình ảnh và thông tin */
}

.full-size-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px; /* Bo góc */
    border: 2px solid rgba(255, 255, 255, 0.1); /* Thêm border cho phần thông tin */
}

.work-info-fullscreen {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background: #1C1C1C;
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.1); /* Thêm border cho phần thông tin */
    text-align: center;
}
.work-info{
    padding: 50px;
    
}
.work-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-family: 'Phudu', cursive, sans-serif !important;
    font-variation-settings: 'wght' 500;
    font-weight: 500 !important;
}

.work-subtitle {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 10px;
}

.work-description {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
    padding-bottom: 20px; /* Khoảng cách giữa mô tả và border */
}

.work-meta {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;
    padding-bottom: 20px; /* Khoảng cách giữa thông tin meta và border */
}

.work-meta p {
    margin: 5px 0;
}

.close-button {
    background: #ff4757;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.close-button:hover {
    background: #ff6b81;
}


.back-icon {
    font-size: 24px; /* Kích thước biểu tượng */
    font-weight: bold; /* Đậm */
    color: rgba(255, 255, 255, 0.8); /* Màu sắc */
    cursor: pointer; /* Con trỏ chuột */
    margin-bottom: 20px; /* Khoảng cách dưới */
    transition: color 0.3s ease; /* Hiệu ứng màu khi hover */
}

.back-icon:hover {
    color: rgba(255, 255, 255, 1); /* Màu sắc khi hover */
}

[data-theme="light"] .back-icon {
    color: #222 !important; /* Đổi màu mũi tên cho light mode */
}

[data-theme="light"] .back-icon:hover {
    color: #000 !important;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px); /* Di chuyển lên một chút */
    }
    to {
        opacity: 1;
        transform: translateY(0); /* Về vị trí ban đầu */
    }
}

.work-details {
    display: none; /* Ẩn chi tiết ban đầu */
    animation: fadeIn 0.5s ease; /* Thêm animation */
}
.fade-in {
    animation: fadeIn 0.5s ease forwards; /* Kích hoạt animation */
}
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-in.active {
    opacity: 1;
    transform: translateY(0);
}


.figma-iframe {
    width: 100%; /* Chiều rộng sẽ lấp đầy container */
    height: auto; /* Chiều cao tự động điều chỉnh */
    aspect-ratio: 16 / 9; /* Tỉ lệ khung hình (16:9) */
    border: 1px dashed rgba(88, 88, 88, 0.1); /* Border cho iframe */
    margin-top: 20px; /* Khoảng cách phía trên */
}

/* Loading Animation Overlay */
#loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    transition: opacity 0.4s;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid rgba(255,255,255,0.2);
    border-top: 6px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Toggle switch style */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
}
.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--border-color);
    transition: .3s;
    border-radius: 24px;
}
.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background: var(--text-color);
    transition: .3s;
    border-radius: 50%;
}
.toggle-switch input:checked + .slider {
    background: #ffd700;
}
.toggle-switch input:checked + .slider:before {
    transform: translateX(20px);
    background: #fff;
}

/* Grid background for body */
body::before {
  content: "";
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
}
body {
  position: relative;
  z-index: 1;
}

body, .sidebar, .card, .about-left, .about-section, .work-info-fullscreen {
    background: var(--bg-color) !important;
    color: var(--text-color) !important;
    text-transform: uppercase;
    font-family: 'IBM Plex Mono', monospace !important;
}

.header-title, .card-title, .work-title {
    font-family: 'Phudu', cursive, sans-serif !important;
    font-variation-settings: 'wght' 500;
    font-weight: 500 !important;
}

/* Loader Animation */
.loader {
  width: 80px;
  height: 60px;
  box-sizing: border-box;
  background:
    linear-gradient(#fff 0 0) left /calc(50% - 15px) 8px no-repeat,
    linear-gradient(#fff 0 0) right/calc(50% - 15px) 8px no-repeat,
    conic-gradient(from 135deg at top,#0000, red 1deg 90deg,#0000 91deg) bottom/14px 8px repeat-x,
    #000;
  border-bottom: 2px solid red;
  position: relative;
  overflow: hidden;
  animation: l6-0 1s infinite linear;
}
.loader::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 14px;
  background: lightblue;
  left: -5px;
  animation:
    l6-1 2s infinite cubic-bezier(0,100,1,100), 
    l6-2 2s infinite linear;
}
@keyframes l6-0{
  50% { background-position: left,right,bottom -2px left -4px}
}
@keyframes l6-1{
  0%,27%   {bottom: calc(50% + 4px)}
  65%,100% {bottom: calc(50% + 4.1px)}
}
@keyframes l6-2{
  100% {left:100%}
}

/* Ensure loading overlay is black background */
#loading-overlay {
    background: #000 !important;
}

@media (max-width: 768px) {
    .sidebar {
        padding-top: 20px !important;
    }
    .sidebar.sidebar-open .menu {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }
}

