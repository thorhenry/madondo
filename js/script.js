// Madondo League Website - Complete JavaScript with CSS and Content

// CSS Styles embedded in JavaScript
const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        background: linear-gradient(135deg, #37003c 0%, #1a1a2e 100%);
        min-height: 100vh;
    }

    #header {
        background: linear-gradient(135deg, #37003c 0%, #1a1a2e 100%);
        color: white;
        padding: 1rem 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    .header-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 0;
        align-self: flex-start;
    }

    .logo-icon {
        width: 5.5rem;
        height: 5.5rem;
        transition: all 0.3s ease;
        object-fit: contain;
        display: block;
    }

    .logo:hover .logo-icon {
        transform: scale(1.05);
    }

    .logo h1 {
        font-size: 1.8rem;
        font-weight: bold;
        color: #ffffff;
    }

    /* Hide text on larger screens, show only logo */
    @media (min-width: 768px) {
        .logo h1 {
            display: none;
        }
    }

    /* Show text on smaller screens */
    @media (max-width: 767px) {
        .logo h1 {
            display: block;
        }
    }

    .nav-menu ul {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    .nav-menu a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: all 0.3s ease;
    }

    .nav-menu a:hover,
    .nav-menu a.active {
        background-color: rgba(0, 255, 133, 0.2);
        color: #00ff85;
    }

    .search-container {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        position: relative;
    }

    .search-input {
        position: relative;
    }

    .search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        text-shadow: none !important;
        box-shadow: none !important;
        -webkit-text-shadow: none !important;
        -moz-text-shadow: none !important;
    }

    .search-input:focus::placeholder {
        color: rgba(255, 255, 255, 0.4);
        text-shadow: none !important;
        box-shadow: none !important;
        -webkit-text-shadow: none !important;
        -moz-text-shadow: none !important;
    }

    @keyframes typing {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .search-suggestions {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #ffffff;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        max-height: 400px;
        overflow-y: auto;
        display: none;
    }

    .search-suggestion-item {
        cursor: pointer;
        border-bottom: 1px solid #f8f9fa;
        transition: all 0.2s ease;
    }

    .search-suggestion-item:last-child {
        border-bottom: none;
    }

    .search-suggestion-item:hover {
        background: #f8f9fa;
    }

    mark {
        background: #00ff85;
        color: #000;
        padding: 0 2px;
        border-radius: 2px;
        font-weight: 600;
    }

    /* Search Suggestions Responsive */
    @media (max-width: 768px) {
        .search-suggestions {
            max-height: 300px;
        }
        
        .search-suggestion-item {
            padding: 0.5rem;
        }
        
        .search-suggestion-item > div {
            gap: 0.5rem !important;
            padding: 0.5rem !important;
        }
        
        .search-suggestion-item > div > div:first-child {
            width: 28px !important;
            height: 28px !important;
            font-size: 0.75rem !important;
        }
        
        .search-suggestion-item > div > div:nth-child(2) > div:first-child {
            font-size: 0.85rem !important;
        }
        
        .search-suggestion-item > div > div:nth-child(2) > div:last-child {
            font-size: 0.75rem !important;
        }
    }

    @media (max-width: 480px) {
        .search-suggestions {
            max-height: 250px;
        }
        
        .search-suggestion-item > div > div:first-child {
            width: 24px !important;
            height: 24px !important;
            font-size: 0.7rem !important;
        }
        
        .search-suggestion-item > div > div:nth-child(2) > div:first-child {
            font-size: 0.8rem !important;
        }
        
        .search-suggestion-item > div > div:nth-child(2) > div:last-child {
            font-size: 0.7rem !important;
        }

        .table-tabs {
            flex-direction: row;
            gap: 0.5rem;
            margin: 1rem 0;
            flex-wrap: wrap;
            justify-content: center;
        }

        .table-tab {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            flex: 1;
            min-width: 80px;
            min-height: 40px;
            justify-content: center;
            text-align: center;
        }

        .table-tab i {
            font-size: 0.8rem;
        }

        #full-table {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }

        #full-table .league-table {
            min-width: 900px;
            font-size: 0.8rem;
        }

        #full-table .league-table th:first-child,
        #full-table .league-table td:first-child {
            position: sticky;
            left: 0;
            background: #37003c;
            z-index: 10;
        }

        #full-table .league-table th:nth-child(2),
        #full-table .league-table td:nth-child(2) {
            position: sticky;
            left: 60px;
            background: #37003c;
            z-index: 10;
            min-width: 120px;
            max-width: 120px;
            text-align: left;
        }



        #full-table .league-table th,
        #full-table .league-table td {
            padding: 0.5rem 0.5rem;
            white-space: nowrap;
        }

        .form-results {
            gap: 0.1rem;
        }

        .form-result {
            width: 16px;
            height: 16px;
            font-size: 0.6rem;
        }
    }
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem;
        border-radius: 30px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .search-container:hover {
        background: transparent !important;
        box-shadow: none !important;
        transform: none !important;
    }

    .search-container:focus-within {
        background: transparent !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
    }

    /* Global input shadow override */
    input[type="text"]:focus,
    input[type="search"]:focus {
        outline: none !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        text-shadow: none !important;
        -webkit-text-shadow: none !important;
        -moz-text-shadow: none !important;
    }

    #searchInput {
        background: transparent !important;
        border: 2px solid rgba(255, 255, 255, 0.2);
        outline: none !important;
        color: white;
        font-size: 0.95rem;
        width: 220px;
        padding: 0.8rem 1.2rem;
        border-radius: 25px;
        transition: all 0.3s ease;
        backdrop-filter: none !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        text-shadow: none !important;
        -webkit-text-shadow: none !important;
        -moz-text-shadow: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
    }

    #searchInput::placeholder {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        text-shadow: none !important;
        box-shadow: none !important;
        -webkit-text-shadow: none !important;
        -moz-text-shadow: none !important;
    }

    #searchInput:hover {
        border-color: rgba(255, 255, 255, 0.4);
        background: transparent !important;
        box-shadow: none !important;
    }

    #searchInput:focus {
        border-color: #00ff85;
        background: transparent !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        text-shadow: none !important;
        -webkit-text-shadow: none !important;
        -moz-text-shadow: none !important;
        outline: none !important;
    }

    #searchBtn {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        border: none;
        padding: 0.8rem 1.2rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.3);
        font-weight: bold;
        color: #37003c;
        position: relative;
        overflow: hidden;
    }

    #searchBtn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.5s;
    }

    #searchBtn:hover {
        background: linear-gradient(135deg, #00cc6a, #00ff85);
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 255, 133, 0.4);
    }

    #searchBtn:hover::before {
        left: 100%;
    }

    #searchBtn:active {
        transform: scale(0.95);
    }

    #main-content {
        min-height: calc(100vh - 200px);
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .page-title {
        color: #ffffff;
        font-size: 2.25rem;
        font-weight: 700;
        text-align: left;
        margin: 0 0 1.5rem 0;
        padding: 0;
        line-height: 1.2;
        letter-spacing: -0.02em;
        position: relative;
    }

    .page-subtitle {
        color: #adb5bd;
        font-size: 1rem;
        font-weight: 400;
        margin: 0.5rem 0 0 0;
        line-height: 1.4;
    }

    .page-header {
        background: linear-gradient(135deg, #37003c 0%, #1a1a2e 100%);
        padding: 2rem 0;
        margin-bottom: 2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .page-header-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    /* Page Header Responsive */
    @media (max-width: 768px) {
        .page-header {
            padding: 1.5rem 0;
            margin-bottom: 1.5rem;
        }
        
        .page-header-content {
            padding: 0 1rem;
        }
        
        .page-title {
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }
        
        .page-subtitle {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .page-header {
            padding: 1rem 0;
            margin-bottom: 1rem;
        }
        
        .page-header-content {
            padding: 0 0.75rem;
        }
        
        .page-title {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
        }
        
        .page-subtitle {
            font-size: 0.85rem;
        }
    }

    .hero-section {
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3');
        background-size: cover;
        background-position: center;
        color: white;
        text-align: center;
        padding: 4rem 2rem;
        border-radius: 15px;
        margin-bottom: 3rem;
    }

    .hero-section h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .hero-section p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .stat-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }

    .stat-card i {
        font-size: 3rem;
        color: #00ff85;
        margin-bottom: 1rem;
    }

    .stat-card h3 {
        font-size: 2rem;
        color: #37003c;
        margin-bottom: 0.5rem;
    }

    .table-container {
        
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .league-table {
        width: 100%;
        border-collapse: collapse;
        background: #37003c;
    }

    .league-table th {
        background: #37003c;
        color: white;
        padding: 1rem;
        text-align: left;
    }

    .league-table td {
        padding: 1rem;
        border-bottom: none;
        color: white;
    }

    .league-table tr:hover {
        background-color: rgba(0, 255, 133, 0.1);
    }

    .table-tabs {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
        padding: 0 2rem;
    }

    .table-tab {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid transparent;
        color: #ffffff;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        text-align: center;
        min-height: 44px;
    }

    .table-tab i {
        font-size: 0.9rem;
        line-height: 1;
    }

    .table-tab span {
        line-height: 1;
        vertical-align: middle;
    }

    .table-tab:hover {
        background: rgba(0, 255, 133, 0.2);
        border-color: #00ff85;
        transform: translateY(-2px);
    }

    .table-tab.active {
        background: #00ff85;
        color: #000000;
        border-color: #00ff85;
    }

    .table-view {
        display: none;
    }

    .table-view.active {
        display: block;
    }

    .form-indicator {
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.8rem;
    }

    .form-results {
        display: flex;
        gap: 0.25rem;
    }

    .form-result {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.5rem;
        font-weight: 700;
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .form-result.latest {
        border: 1px solid white;
        box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
        transform: scale(1.1);
    }
    
    .player-avatar {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 6px;
        flex-shrink: 0;
    }
    
    /* League Stats specific player avatar - keep small */
    .league-table .player-avatar {
        width: 24px !important;
        height: 24px !important;
        font-size: 0.75rem !important;
    }
    
    /* Fallback for players without images in League Stats */
    .league-table .player-avatar:not([src*=".jpg"]):not([src*=".jpeg"]):not([src*=".png"])::before {
        content: '⚽';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #00ff85;
        color: white;
        border-radius: 50%;
        font-weight: bold;
        font-size: 0.75rem;
    }
    
    .player-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    
    .player-row {
        display: flex;
        align-items: center;
    }
    
    .team-row {
        display: flex;
        align-items: center;
    }
    
    .team-logo {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 6px;
        flex-shrink: 0;
    }
    
    .team-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    
    .table-legend {
        margin-top: 1rem;
        text-align: center;
    }
    
    .table-legend p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.85rem;
        margin: 0;
    }
    
    /* News Page Styles */
    .news-stats {
        display: flex;
        gap: 2rem;
        margin-top: 1rem;
    }
    
    .news-count, .news-latest {
        color: #00ff85;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .news-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    
    .news-filters {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }
    
    .filter-btn:hover, .filter-btn.active {
        background: #00ff85;
        color: #000;
        border-color: #00ff85;
    }
    
    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
    }
    
    .news-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .news-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .news-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
    }
    
    .news-category-badge {
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .news-category-badge.transfer {
        background: #ff6b6b;
        color: white;
    }
    
    .news-category-badge.match {
        background: #4ecdc4;
        color: white;
    }
    
    .news-category-badge.general {
        background: #45b7d1;
        color: white;
    }
    
    .news-category-badge.injury {
        background: #f39c12;
        color: white;
    }
    
    .news-category-badge.contract {
        background: #9b59b6;
        color: white;
    }
    
    .news-category-badge.breaking {
        background: #e74c3c;
        color: white;
    }
    
    .news-category-badge.rumor {
        background: #f1c40f;
        color: #000;
    }
    
    .news-category-badge.analysis {
        background: #3498db;
        color: white;
    }
    
    .news-category-badge.interview {
        background: #2ecc71;
        color: white;
    }
    
    .news-category-badge.preview {
        background: #9b59b6;
        color: white;
    }
    
    .news-category-badge.review {
        background: #e67e22;
        color: white;
    }
    
    .news-category-badge.championship {
        background: #ffd700;
        color: #000;
    }
    
    .news-category-badge.players {
        background: #00ff85;
        color: #000;
    }
    
    .news-category-badge.match-report {
        background: #ff6b35;
        color: white;
    }
    
    .news-category-badge.transfers {
        background: #8e44ad;
        color: white;
    }
    
    .news-category-badge.team-news {
        background: #2980b9;
        color: white;
    }
    
    .news-category-badge.league-news {
        background: #27ae60;
        color: white;
    }
    
    .news-category-badge.cup-news {
        background: #e74c3c;
        color: white;
    }
    
    .news-category-badge.manager-news {
        background: #f39c12;
        color: white;
    }
    
    .news-category-badge.stadium-news {
        background: #34495e;
        color: white;
    }
    
    .news-category-badge.clubs {
        background: #37003c;
        color: white;
    }
    
    .news-date {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
    }
    
    .news-title {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.6rem;
        line-height: 1.3;
    }
    
    .news-excerpt {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.5;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
    
    .news-footer {
        display: flex;
        justify-content: flex-end;
    }
    
    .read-more-btn {
        background: #00ff85;
        color: #000;
        border: none;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        transition: background 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }
    
    .read-more-btn:hover {
        background: #00cc6a;
    }
    
    .no-news {
        text-align: center;
        padding: 3rem;
        color: rgba(255, 255, 255, 0.7);
    }
    
    .no-news h3 {
        color: #ffffff;
        margin-bottom: 1rem;
    }
    
    /* News Detail Styles */
    .news-detail-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    
    .news-detail-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 2rem;
    }
    
    .news-detail-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .news-detail-category {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        background: #00ff85;
        color: #000;
    }
    
    .news-detail-date {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
    }
    
    .news-detail-title {
        color: #ffffff;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.3;
    }
    
    .news-detail-content {
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.8;
        font-size: 1.1rem;
    }
    
    @media (max-width: 768px) {
        .news-grid {
            grid-template-columns: 1fr;
        }
        
        .news-filters {
            justify-content: center;
        }
        
        .news-stats {
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .news-detail-title {
            font-size: 1.5rem;
        }
    }
    
    /* Hero Section Styles */
    .hero-section {
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        min-height: 400px;
        margin: 2rem 0;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .hero-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center 15%;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 1.5s ease-in-out;
        animation: zoomInOut 20s infinite;
    }
    
    .hero-image.active {
        opacity: 1;
    }
    
    @keyframes zoomInOut {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(55, 0, 60, 0.4) 0%, rgba(26, 26, 46, 0.6) 100%);
        z-index: 2;
    }
    
    .hero-content {
        position: relative;
        z-index: 3;
        text-align: center;
        color: white;
        padding: 2rem;
        max-width: 600px;
    }
    
    .hero-indicators {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.5rem;
        z-index: 4;
    }
    
    .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }
    
    .indicator::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: #00ff85;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
    }
    
    .indicator.active {
        background: transparent;
        transform: scale(1.3);
        box-shadow: 0 0 15px rgba(0, 255, 133, 0.6);
    }
    
    .indicator.active::before {
        width: 100%;
        height: 100%;
        animation: pulse 2s infinite;
    }
    
    .indicator:hover {
        background: rgba(255, 255, 255, 0.5);
        transform: scale(1.1);
    }
    
    .indicator:hover::before {
        width: 60%;
        height: 60%;
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.7;
        }
    }
    
    .hero-content h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    .hero-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        opacity: 0.9;
    }
    
    .hero-btn {
        background: #00ff85;
        color: #000;
        border: none;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 255, 133, 0.3);
    }
    
    .hero-btn:hover {
        background: #00cc6a;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 255, 133, 0.4);
    }
    
    @media (max-width: 768px) {
        .hero-section {
            min-height: 300px;
            margin: 1rem 0;
        }
        
        .hero-content h2 {
            font-size: 2rem;
        }
        
        .hero-content p {
            font-size: 1rem;
        }
        
        .hero-btn {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }
    }
    
    /* Home Page Dynamic Sections */
    .home-sections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .home-section {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .section-header h2 {
        color: #ffffff;
        font-size: 1.3rem;
        margin: 0;
    }
    
    .view-all-btn {
        background: #00ff85;
        color: #000;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        transition: background 0.3s ease;
    }
    
    .view-all-btn:hover {
        background: #00cc6a;
    }
    
    /* Table Preview */
    .table-preview {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .table-row {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 6px;
        transition: background 0.3s ease;
    }
    
    .table-row:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .position {
        width: 30px;
        color: #00ff85;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .team-info {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .team-logo-small {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    
    .team-name {
        color: #ffffff;
        font-size: 0.9rem;
    }
    
    .points {
        color: #00ff85;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    /* Fixtures Preview */
    .fixtures-preview {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .fixture-preview {
        padding: 1rem;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        transition: background 0.3s ease;
    }
    
    .fixture-preview:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .fixture-teams {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    
    .team {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #ffffff;
        font-size: 0.9rem;
    }
    
    .vs {
        color: #00ff85;
        font-weight: 600;
        font-size: 0.8rem;
    }
    
    .fixture-date {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        text-align: center;
    }
    
    /* News Preview */
    .news-preview {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .news-item {
        padding: 1rem;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        transition: background 0.3s ease;
    }
    
    .news-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .news-item .news-title {
        color: #ffffff;
        font-size: 1rem;
        margin: 0.5rem 0;
    }
    
    .news-item .news-excerpt {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
    }
    
    .news-item .news-date {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.8rem;
    }
    
    /* Stats Row - Small Square Cards */
    .stats-row {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
        flex-wrap: wrap;
    }
    
    .stat-square {
        background: rgba(255, 255, 255, 0.05);
        width: 100px;
        height: 100px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
        text-align: center;
    }
    
    .stat-square:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
    
    .stat-square i {
        font-size: 1.2rem;
        color: #00ff85;
        margin-bottom: 0.3rem;
    }
    
    .stat-square h3 {
        color: #ffffff;
        font-size: 1.2rem;
        margin: 0;
        font-weight: 700;
        line-height: 1;
    }
    
    .stat-square p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
        font-size: 0.7rem;
        line-height: 1;
    }
    
    @media (max-width: 768px) {
        .home-sections {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .stats-row {
            gap: 0.8rem;
        }
        
        .stat-square {
            width: 80px;
            height: 80px;
        }
        
        .stat-square i {
            font-size: 1rem;
        }
        
        .stat-square h3 {
            font-size: 1rem;
        }
        
        .stat-square p {
            font-size: 0.6rem;
        }
        
        .section-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }
    }
    
    .player-full-name {
        font-weight: 500;
    }
    
    .total-contributions {
        color: #00ff85;
        font-size: 1.1em;
    }
    

    

    
    .stats-section-title {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .league-table {
        color: #ffffff;
    }
    
    .league-table th,
    .league-table td {
        color: #ffffff;
        font-weight: 500;
    }
    
    .league-table h2,
    .league-table h3 {
        color: #ffffff;
        font-weight: 600;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    
    #players-table h2 {
        color: #ffffff !important;
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        margin-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #00ff85;
        background: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
    }
    
    #players-table h3 {
        color: #ffffff !important;
        font-weight: 500;
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
        margin-top: 1.5rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        background: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
    }
    
    #players-table .league-table {
        margin-bottom: 1.5rem;
        width: 100%;
    }
    
    #players-table .league-table th,
    #players-table .league-table td {
        color: #ffffff !important;
        font-weight: 500;
        padding: 0.8rem 1rem;
        text-align: center;
        vertical-align: middle;
    }
    
    #players-table .league-table th {
        font-weight: 600;
        font-size: 0.95rem;
        color: #ffffff !important;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    #players-table .league-table td:first-child {
        text-align: left;
        font-weight: 600;
    }
    
    #players-table .league-table th:nth-child(1),
    #players-table .league-table td:nth-child(1) {
        width: 35%;
    }
    
    #players-table .league-table th:nth-child(2),
    #players-table .league-table td:nth-child(2),
    #players-table .league-table th:nth-child(3),
    #players-table .league-table td:nth-child(3),
    #players-table .league-table th:nth-child(4),
    #players-table .league-table td:nth-child(4) {
        width: 20%;
    }
    
    .goals-highlight {
        color: #ffd700;
        font-size: 1.1em;
    }
    
    .assists-highlight {
        color: #00ff85;
        font-size: 1.1em;
    }

    .form-result.win {
        background: #28a745;
    }

    .form-result.draw {
        background: #ffc107;
        color: #000;
    }

    .form-result.loss {
        background: #dc3545;
    }

    .team-name {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white !important;
        font-weight: 600;
        justify-content: flex-start;
    }

    .league-table .team-name {
        color: white !important;
        font-weight: 600;
    }

    .team-logo {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-shrink: 0;
    }
    
    .team-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .fixtures-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.8rem;
        max-width: 100%;
    }

    .fixtures-container {
        max-width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    .matchday-section {
        margin-bottom: 1.5rem;
    }

    .matchday-title {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
        padding-bottom: 0.3rem;
    }

    .matchday-divider {
        border: none;
        height: 2px;
        background: linear-gradient(to right, transparent, rgba(0, 255, 133, 0.5), transparent);
        margin: 2rem 0;
    }

    .page-divider {
        border: none;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
        margin: 1.5rem 0;
    }

    .fixture-card {
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .fixture-card:last-child {
        border-bottom: none;
    }

    .fixture-card.completed .fixture-status {
        color: #28a745;
    }

    .fixture-card.live .fixture-status {
        color: #dc3545;
        animation: pulse 2s infinite;
    }

    .fixture-card.scheduled .fixture-status {
        color: #007bff;
    }

    .fixture-card.upcoming .fixture-status {
        color: #6c757d;
    }

    .fixture-card.postponed .fixture-status {
        color: #ffc107;
    }

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }

    .fixture-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        padding-bottom: 0.3rem;
    }

    .fixture-date {
        font-weight: 500;
        color: #ffffff;
        font-size: 0.8rem;
    }

    .fixture-time {
        color: #adb5bd;
        font-size: 0.75rem;
    }

    .fixture-status {
        font-size: 0.7rem;
        padding: 0.15rem 0.4rem;
        color: #ffffff;
        font-weight: 500;
    }

    .fixture-teams {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-size: 0.85rem;
    }

    .team {
        display: flex;
        align-items: center;
        flex: 1;
    }

    .home-team {
        justify-content: flex-end;
        text-align: right;
    }

    .away-team {
        justify-content: flex-start;
        text-align: left;
    }

    .fixture-card .team-name {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-weight: 500;
        color: #ffffff;
        font-size: 1.5rem;
    }

    .team-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2rem;
    }

    .red-cards-indicator {
        display: flex;
        gap: 0.1rem;
        font-size: 0.7rem;
        line-height: 1;
    }

    .team-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .fixture-card .team-score {
        font-size: 1.5rem !important;
        font-weight: 600;
        color: #ffffff !important;
        margin: 0 0.3rem;
    }

    .fixture-vs {
        color: #adb5bd;
        font-weight: 500;
        margin: 0 0.5rem;
        font-size: 0.75rem;
    }

    .fixture-venue {
        text-align: center;
        color: #adb5bd;
        font-size: 0.75rem;
        font-style: italic;
    }



    .fixture-actions {
        margin-top: 0.5rem;
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .lineup-btn {
        background: none;
        border: none;
        padding: 0.3rem 0.6rem;
        color: #00ff85;
        font-weight: 500;
        font-style: italic;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.75rem;
        text-decoration: underline;
    }

    .lineup-btn:hover {
        color: #00cc6a;
        transform: translateY(-1px);
    }

    .stats-btn {
        background: none;
        border: none;
        padding: 0.3rem 0.6rem;
        color: #ffd700;
        font-weight: 500;
        font-style: italic;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.75rem;
        text-decoration: underline;
    }

    .stats-btn:hover {
        color: #ffb347;
        transform: translateY(-1px);
    }

    .fixture-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    /* Mobile responsive for fixture cards */
    @media (max-width: 768px) {
        .fixture-teams {
            font-size: 0.7rem;
        }
        
        .fixture-card .team-name {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.7rem;
        }

        .team-info {
            gap: 0.1rem;
        }

        .red-cards-indicator {
            font-size: 0.5rem;
        }
        
        .team-logo {
            width: 16px;
            height: 16px;
        }
        
        .fixture-card .team-score {
            font-size: 1.3rem !important;
        }
    }

    @media (max-width: 480px) {
        .fixture-card {
            padding: 0.6rem;
        }
        
        .fixture-teams {
            font-size: 0.65rem;
        }
        
        .fixture-card .team-name {
            display: flex;
            align-items: center;
            font-size: 0.65rem;
            gap: 0.2rem;
        }

        .team-info {
            gap: 0.1rem;
        }

        .red-cards-indicator {
            font-size: 0.4rem;
        }
        
        .team-logo {
            width: 14px;
            height: 14px;
        }
        
        .fixture-card .team-score {
            font-size: 1rem !important;
        }
    }

    /* Force horizontal layout for team names on mobile */
    @media (max-width: 768px) {
        .fixture-card .team .team-name {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 0.3rem !important;
        }
        
        .fixture-card .team .team-logo {
            order: 1 !important;
        }
        
        .fixture-card .team .team-info {
            order: 2 !important;
            flex-direction: column !important;
        }
        
        .fixture-card .team .team-text {
            order: 1 !important;
        }
        
        .fixture-card .team .red-cards-indicator {
            order: 2 !important;
        }
    }

    /* Match Stats Page Styles */
    .match-stats-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    }

    .match-stats-header {
        text-align: center;
        margin-bottom: 1rem;
        padding: 1rem;
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1) 0%, rgba(55, 0, 60, 0.8) 100%);
        border-radius: 10px;
    }

    .match-stats-header h1 {
        color: #ffffff;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        flex-wrap: nowrap;
    }

    .match-stats-header .team-logo {
        width: 20px;
        height: 20px;
        margin: 0 0.2rem;
        object-fit: contain;
    }

    .match-stats-header .team-name {
        font-weight: 600;
        white-space: nowrap;
    }

    .match-stats-header .vs-text {
        color: #adb5bd;
        font-weight: 400;
        margin: 0 0.3rem;
    }

    .match-score {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .team-score {
        font-size: 2rem;
        font-weight: 700;
        color: #ffffff;
    }

    .score-separator {
        font-size: 1.5rem;
        color: #ffffff;
        font-weight: 600;
    }

    .match-status {
        color: #adb5bd;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .simple-stats {
        max-width: 600px;
        margin: 0 auto;
        padding: 0.5rem;
    }

    .stats-section {
        margin-bottom: 1rem;
        padding: 0.5rem;
    }

    .stats-section h3 {
        color: #00ff85;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    .section-divider {
        border: none;
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(0, 255, 133, 0.3), transparent);
        margin: 1rem 0;
    }

    .lineup-divider {
        border: none;
        height: 2px;
        background: linear-gradient(to right, transparent, rgba(0, 255, 133, 0.6), transparent);
        margin: 1.5rem 0;
    }

    .player-stats {
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 500;
    }

    .two-yellows {
        display: inline-block;
        font-size: 0.3rem;
        line-height: 1;
        margin-left: 0.2rem;
    }

    .stat-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-card.full-width {
        grid-column: 1 / -1;
    }

    .stat-card h3 {
        color: #00ff85;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .score-breakdown {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .team-score-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem 0;
    }

    .team-name {
        color: #ffffff;
        font-weight: 600;
    }

    .score {
        color: #00ff85;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .cards-summary, .substitutions-summary {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .team-cards, .team-subs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem 0;
    }

    .cards-row {
        display: flex;
        gap: 1rem;
    }

    .player-of-match {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0;
    }

    .potm-simple {
        color: #ffd700;
        font-size: 0.9rem;
        font-style: italic;
        font-weight: 500;
    }

    .yellow-cards, .red-cards {
        font-weight: 600;
    }

    .yellow-cards {
        color: #ffd700;
    }

    .red-cards {
        color: #ff4444;
    }

    .subs-count {
        color: #00ff85;
        font-weight: 600;
    }

    .goal-scorers-list, .card-details-list, .substitution-list {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .goal-scorer-item, .card-item, .substitution-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0;
    }

    .goal-count {
        color: #00ff85;
        font-weight: 600;
    }

    .goal-minutes {
        color: #adb5bd;
        font-size: 0.9rem;
    }

    .substitution-time {
        color: #00ff85;
        font-weight: 600;
    }

    .substitution-for {
        color: #adb5bd;
        font-size: 0.9rem;
    }

    .no-goals, .no-cards, .no-subs {
        text-align: center;
        color: #adb5bd;
        font-style: italic;
        padding: 1rem;
    }

    .team-substitutions {
        margin-bottom: 1.5rem;
    }

    .team-substitutions:last-child {
        margin-bottom: 0;
    }

    .team-sub-title {
        color: #00ff85;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .lineup-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
    }

    .lineup-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    .lineup-header h1 {
        color: #ffffff;
        margin: 0;
        font-size: 1.3rem;
    }

    .lineup-tabs {
        display: flex;
        gap: 0.5rem;
    }

    .tab-btn {
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        color: #ffffff;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    /* Mobile responsive for lineup header */
    @media (max-width: 768px) {
        .lineup-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }

        .lineup-header h1 {
            font-size: 1.2rem;
        }

        .lineup-tabs {
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .tab-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
        }

        .back-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .lineup-header h1 {
            font-size: 1rem;
        }

        .lineup-tabs {
            gap: 0.3rem;
        }

        .tab-btn {
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;
        }

        .back-btn {
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;
        }
    }

    .tab-btn.active {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border-color: #00ff85;
    }

    .lineup-tab {
        display: none;
    }

    .lineup-tab.active {
        display: block;
    }

    .lineup-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }

    .team-section h2 {
        color: #00ff85;
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
    }

    .team-section h3 {
        color: #ffffff;
        margin: 1rem 0 0.5rem 0;
        font-size: 1rem;
        font-weight: 600;
    }

    .players-list {
        margin-bottom: 1rem;
    }

    .player-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0.3rem 0;
        padding: 0.3rem 0;
    }

    .player-number {
        background: #00ff85;
        color: #37003c;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.8rem;
        flex-shrink: 0;
    }

    .player-name {
        color: #ffffff;
        font-weight: 500;
        font-size: 0.9rem;
        flex: 1;
    }

    .player-position {
        color: #adb5bd;
        font-size: 0.8rem;
        font-weight: 500;
        flex-shrink: 0;
        min-width: 40px;
    }

    .player-goals {
        color: #00ff85;
        font-weight: 700;
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }

    .yellow-card {
        color: #ffd700;
        font-size: 1rem;
        margin-left: 0.3rem;
    }

    .red-card {
        color: #ff4444;
        font-size: 1rem;
        margin-left: 0.3rem;
    }

    .player-assists {
        color: #00ff85;
        font-weight: 700;
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }

    .player-substitution {
        color: #ffa500;
        font-weight: 700;
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }

    .clickable-player {
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .clickable-player:hover {
        color: #00ff85;
    }

    /* Player Profile Page Styles */
    .player-profile-container {
        min-height: 100vh;
        background: linear-gradient(135deg, #37003c 0%, #1a1a2e 50%, #16213e 100%);
    }

    /* Hero Section (Compact) */
    .player-hero {
        background: linear-gradient(135deg, rgba(0, 255, 133, 0.1) 0%, rgba(55, 0, 60, 0.8) 100%);
        padding: 1.5rem 1rem;
        text-align: center;
    }

    .player-hero-simple {
        max-width: 500px;
        margin: 0 auto;
    }

    .player-avatar-simple {
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: #ffffff;
        margin: 0 auto 1rem auto;
    }

    .player-hero-details {
        text-align: center;
    }

    .player-name-simple {
        color: #ffffff;
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
    }

    .verified-badge-profile {
        width: 24px;
        height: 24px;
    }

    .player-details-row {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }

    .player-club {
        color: #00ff85;
        font-weight: 600;
        font-size: 1rem;
    }

    .player-position {
        color: #ffffff;
        font-weight: 600;
        font-size: 1rem;
    }

    .player-nationality {
        color: #adb5bd;
        font-weight: 500;
        font-size: 1rem;
    }

    .player-stats-row {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .hero-stat-simple {
        text-align: center;
        padding: 0.5rem 1rem;
        min-width: 60px;
    }

    .hero-stat-simple .stat-label {
        color: #adb5bd;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: block;
        margin-bottom: 0.3rem;
    }

    .hero-stat-simple .stat-value {
        color: #00ff85;
        font-size: 1.4rem;
        font-weight: 700;
        display: block;
    }

    /* Mobile Responsive for Player Profile */
    @media (max-width: 768px) {
        .player-hero {
            padding: 1rem 0.5rem;
        }

        .player-hero-simple {
            max-width: 100%;
        }

        .player-avatar-simple {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
        }

        .player-name-simple {
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
        }

        .player-details-row {
            gap: 1rem;
            margin-bottom: 0.8rem;
        }

        .player-club, .player-position, .player-nationality {
            font-size: 0.9rem;
        }

        .player-stats-row {
            gap: 1rem;
        }

        .hero-stat-simple {
            padding: 0.4rem 0.8rem;
            min-width: 50px;
        }

        .hero-stat-simple .stat-label {
            font-size: 0.6rem;
            margin-bottom: 0.2rem;
        }

        .hero-stat-simple .stat-value {
            font-size: 1.2rem;
        }

        .player-content {
            padding: 1rem;
        }

        .stats-compact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.4rem;
        }

        .stat-compact {
            padding: 0.4rem 0.2rem;
        }

        .stat-compact .stat-number-compact {
            font-size: 1.2rem;
            margin-bottom: 0.1rem;
        }

        .stat-compact .stat-text-compact {
            font-size: 0.5rem;
        }

        .info-row-compact {
            padding: 0.4rem 0;
        }

        .info-label-compact, .info-value-compact {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        .player-details-row {
            flex-direction: column;
            gap: 0.5rem;
        }

        .player-stats-row {
            gap: 0.8rem;
        }

        .hero-stat-simple {
            min-width: 45px;
            padding: 0.3rem 0.6rem;
        }

        .stats-compact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.3rem;
        }

        .stat-compact {
            padding: 0.3rem 0.1rem;
        }

        .stat-compact .stat-number-compact {
            font-size: 1rem;
        }

        .stat-compact .stat-text-compact {
            font-size: 0.45rem;
        }

        .match-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
        }

        .match-stat-item {
            padding: 0.5rem;
        }

        .match-stat-number {
            font-size: 1.4rem;
        }

        .match-stat-label {
            font-size: 0.7rem;
        }
    }

    /* Main Content */
    .player-content {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
    }

    .player-info-section {
        margin-bottom: 2rem;
    }

    .player-info-section h2 {
        color: #ffffff;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .player-info-compact {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .info-row-compact {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .info-row-compact:last-child {
        border-bottom: none;
    }

    .info-label-compact {
        color: #adb5bd;
        font-size: 0.9rem;
        font-weight: 500;
    }

    .info-value-compact {
        color: #ffffff;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .player-stats-section {
        margin-bottom: 2rem;
    }

    .player-stats-section h2 {
        color: #ffffff;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .stats-compact-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
    }

    .stat-compact {
        text-align: center;
        padding: 0.5rem 0.3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-compact .stat-number-compact {
        color: #00ff85;
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 0.2rem;
    }

    .stat-compact .stat-text-compact {
        color: #adb5bd;
        font-size: 0.6rem;
        text-transform: uppercase;
        letter-spacing: 0.3px;
        line-height: 1.2;
    }

    .player-match-stats-section {
        margin-top: 2rem;
        padding: 1rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .player-match-stats-section h2 {
        color: #00ff85;
        font-size: 1.3rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .match-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
    }

    .match-stat-item {
        text-align: center;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .match-stat-number {
        font-size: 1.8rem;
        font-weight: 700;
        color: #00ff85;
        margin-bottom: 0.5rem;
    }

    .match-stat-label {
        font-size: 0.9rem;
        color: #ffffff;
        font-weight: 500;
    }

    /* Action Buttons */
    .player-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .action-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        border: none;
    }

    .back-btn {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .back-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }

    .fixtures-btn {
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        color: #37003c;
    }

    .fixtures-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 255, 133, 0.3);
    }

    .table-btn {
        background: linear-gradient(135deg, #ffd700, #ffb347);
        color: #37003c;
    }

    .table-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
    }

    /* Horizontal player cards */
    .player-card {
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .player-card .player-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #37003c;
        overflow: hidden;
        flex-shrink: 0;
    }

    .player-card .player-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;
    }

    .player-card .player-name {
        color: #ffffff !important;
        font-weight: 600;
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
        max-width: none !important;
        line-height: 1.2;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .player-card .verified-badge {
        width: 16px;
        height: 16px;
    }

    .player-card .player-club {
        color: #00ff85;
        font-weight: 500;
        font-size: 0.9rem;
    }

    .player-card .view-stat-text {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.7rem;
        font-style: italic;
        margin-top: 0.25rem;
    }



    /* Touchlines */
    .touchline {
        position: absolute;
        background: #ffffff;
    }

    .touchline.top {
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
    }

    .touchline.bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
    }

    .touchline.left {
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
    }

    .touchline.right {
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
    }

    /* Halfway line */
    .halfway-line {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #ffffff;
        transform: translateY(-50%);
    }

    /* Center circle */
    .center-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
        border: 3px solid #ffffff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    .center-spot {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        background: #ffffff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    /* Penalty areas */
    .penalty-area {
        position: absolute;
        width: 40%;
        height: 25%;
        border: 3px solid #ffffff;
        background: transparent;
    }

    .home-penalty {
        bottom: 0;
        left: 30%;
    }

    .away-penalty {
        top: 0;
        left: 30%;
    }

    /* Goal areas */
    .goal-area {
        position: absolute;
        width: 20%;
        height: 12%;
        border: 3px solid #ffffff;
        background: transparent;
    }

    .home-goal {
        bottom: 0;
        left: 40%;
    }

    .away-goal {
        top: 0;
        left: 40%;
    }

    /* Penalty spots */
    .penalty-spot {
        position: absolute;
        width: 8px;
        height: 8px;
        background: #ffffff;
        border-radius: 50%;
    }

    .home-penalty-spot {
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
    }

    .away-penalty-spot {
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
    }

    /* Penalty arcs */
    .penalty-arc {
        position: absolute;
        width: 60px;
        height: 60px;
        border: 3px solid #ffffff;
        border-radius: 50%;
        border-bottom: none;
    }

    .home-penalty-arc {
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
    }

    .away-penalty-arc {
        top: 15%;
        left: 50%;
        transform: translateX(-50%) rotate(180deg);
    }

    /* Corner arcs */
    .corner-arc {
        position: absolute;
        width: 20px;
        height: 20px;
        border: 3px solid #ffffff;
        border-radius: 50%;
    }

    .top-left {
        top: 0;
        left: 0;
        border-right: none;
        border-bottom: none;
    }

    .top-right {
        top: 0;
        right: 0;
        border-left: none;
        border-bottom: none;
    }

    .bottom-left {
        bottom: 0;
        left: 0;
        border-right: none;
        border-top: none;
    }

    .bottom-right {
        bottom: 0;
        right: 0;
        border-left: none;
        border-top: none;
    }

    /* Goals */
    .goal {
        position: absolute;
        width: 15%;
        height: 8%;
        border: 3px solid #ffffff;
        background: rgba(255, 255, 255, 0.1);
    }

    .home-goal-post {
        bottom: -2px;
        left: 42.5%;
    }

    .away-goal-post {
        top: -2px;
        left: 42.5%;
    }

    /* Players layer */
    .players-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .pitch-half {
        height: 50%;
        position: relative;
    }

    .formation-line {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        padding: 1rem;
    }

    .pitch-player-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        text-align: center;
        position: absolute;
        z-index: 3;
    }

    /* Home Team Positions (Top Half Only) - Professional Lineup Style */
    .defender-left {
        top: 15%;
        left: 20%;
    }

    .defender-center {
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
    }

    .defender-right {
        top: 15%;
        right: 20%;
    }

    .defender-wide-left {
        top: 15%;
        left: 5%;
    }

    .defender-wide-right {
        top: 15%;
        right: 5%;
    }

    .midfielder-center {
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
    }

    .midfielder-left {
        top: 35%;
        left: 30%;
    }

    .midfielder-right {
        top: 35%;
        right: 30%;
    }

    .midfielder-defensive {
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
    }

    .midfielder-attacking {
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
    }

    .forward-left {
        top: 45%;
        left: 30%;
    }

    .forward-right {
        top: 45%;
        right: 30%;
    }

    .forward-center {
        top: 45%;
        left: 50%;
        transform: translateX(-50%);
    }

    .forward-striker {
        top: 45%;
        left: 50%;
        transform: translateX(-50%);
    }

    .forward-wing {
        top: 45%;
        left: 10%;
    }

    /* Away Team Positions (Bottom Half Only) - Professional Lineup Style */
    .defender-left-away {
        bottom: 15%;
        left: 20%;
    }

    .defender-center-away {
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
    }

    .defender-right-away {
        bottom: 15%;
        right: 20%;
    }

    .defender-wide-left-away {
        bottom: 15%;
        left: 5%;
    }

    .defender-wide-right-away {
        bottom: 15%;
        right: 5%;
    }

    .midfielder-center-away {
        bottom: 35%;
        left: 50%;
        transform: translateX(-50%);
    }

    .midfielder-left-away {
        bottom: 35%;
        left: 30%;
    }

    .midfielder-right-away {
        bottom: 35%;
        right: 30%;
    }

    .midfielder-defensive-away {
        bottom: 25%;
        left: 50%;
        transform: translateX(-50%);
    }

    .midfielder-attacking-away {
        bottom: 35%;
        left: 50%;
        transform: translateX(-50%);
    }

    .forward-left-away {
        bottom: 45%;
        left: 30%;
    }

    .forward-right-away {
        bottom: 45%;
        right: 30%;
    }

    .forward-center-away {
        bottom: 45%;
        left: 50%;
        transform: translateX(-50%);
    }

    .forward-striker-away {
        bottom: 45%;
        left: 50%;
        transform: translateX(-50%);
    }

    .forward-wing-away {
        bottom: 45%;
        left: 10%;
    }

    .pitch-player {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
        color: #37003c;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
    }

    .player-name {
        color: #ffffff;
        font-size: 0.8rem;
        font-weight: 600;
        max-width: 80px;
        line-height: 1.1;
    }

    .player-position {
        color: #adb5bd;
        font-size: 0.7rem;
        font-weight: 500;
    }

    .player-icon {
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        white-space: nowrap;
    }

    .goal-icon {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid #00ff85;
    }

    .yellow-icon {
        background: rgba(255, 215, 0, 0.2);
        color: #ffd700;
        border: 1px solid #ffd700;
    }

    .red-icon {
        background: rgba(255, 68, 68, 0.2);
        color: #ff4444;
        border: 1px solid #ff4444;
    }

    .pitch-player:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .pitch-player.scorer {
        background: #00ff85;
        color: #37003c;
        box-shadow: 0 0 10px rgba(0, 255, 133, 0.5);
    }

    .pitch-player.yellow-card {
        border: 3px solid #ffd700;
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }

    .pitch-player.red-card {
        border: 3px solid #ff4444;
        box-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
    }

    .pitch-legend {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #ffffff;
        font-size: 0.9rem;
    }

    .legend-color {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .legend-color.scorer {
        background: #00ff85;
    }

    .legend-color.yellow-card {
        background: #ffd700;
    }

    .legend-color.red-card {
        background: #ff4444;
    }

    .back-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .back-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }

    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .news-card {
        background: rgba(255, 255, 255, 0.1);;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .news-card:hover {
        transform: translateY(-5px);
    }

    .news-image {
        height: 200px;
        background: linear-gradient(45deg, #37003c, #1a1a2e);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 3rem;
    }

    .news-content {
        padding: 1.5rem;
    }

    .news-date {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .news-title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #ffd700;
    }

    .clubs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    .club-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .club-card:hover {
        transform: translateY(-5px);
    }

    .club-header {
        background: linear-gradient(45deg, #37003c, #1a1a2e);
        color: white;
        padding: 2rem;
        text-align: center;
    }

    .club-logo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    .club-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .club-info {
        padding: 1.5rem;
        color: #ffffff;
    }
    
    .club-info p {
        color: #ffffff;
        margin-bottom: 0.5rem;
    }
    
    .club-info strong {
        color: #00ff85;
    }

    .club-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1rem;
    }

    .club-stat {
        text-align: center;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        color: #ffffff;
    }
    
    .club-stat strong {
        color: #00ff85;
        font-size: 1.2rem;
    }
    
    .club-stat div:last-child {
        color: #ffffff;
        opacity: 0.8;
        font-size: 0.9rem;
    }
    
    .club-view-more {
        margin-top: 1.5rem;
        text-align: center;
    }
    
    .view-more-btn {
        background: #00ff85;
        color: #000;
        border: none;
        padding: 0.75rem 2rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }
    
    .view-more-btn:hover {
        background: #00cc6a;
    }
    
    .club-name-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    
    .verification-badge {
        display: flex;
        align-items: center;
    }
    
    .captain-indicator {
        color: #ffd700;
        font-size: 1rem;
        margin-left: 0.3rem;
    }
    
    .captain-text {
        color: #ffd700;
        font-weight: 600;
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }
    
    .captain-role {
        color: #ffd700 !important;
        font-weight: 700 !important;
    }
    
    .captain-title {
        color: #ffd700;
        font-style: italic;
        font-size: 0.9rem;
        margin: 0.3rem 0 0 0;
        text-align: center;
    }
    
    /* Team Details Page Styles */
    .team-details-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
    }
    
    .team-details-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        flex-wrap: wrap;
    }
    
    .team-details-logo {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        border: 2px solid #00ff85;
    }
    
    .team-details-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .team-details-info {
        flex: 1;
        min-width: 150px;
    }
    
    .team-details-info h1 {
        color: #ffffff;
        font-size: 1.2rem;
        margin: 0 0 0.25rem 0;
        font-weight: 700;
    }
    
    .team-details-subtitle {
        color: #00ff85;
        font-size: 0.8rem;
        margin: 0;
        opacity: 0.9;
    }
    
    .back-btn {
        background: #37003c;
        color: #ffffff;
        border: 1px solid #00ff85;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        transition: all 0.3s ease;
        white-space: nowrap;
    }
    
    .back-btn:hover {
        background: #00ff85;
        color: #000;
    }
    
    .team-details-section {
        margin-bottom: 1.5rem;
    }
    
    .team-details-section h2 {
        color: #ffffff;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        font-weight: 600;
    }
    
    .team-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.5rem;
    }
    
    .team-stat-card {
        background: rgba(255, 255, 255, 0.03);
        padding: 0.75rem;
        border-radius: 4px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .stat-number {
        color: #00ff85;
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }
    
    .stat-label {
        color: #ffffff;
        font-size: 0.7rem;
        opacity: 0.8;
    }
    
    .team-form {
        background: rgba(255, 255, 255, 0.03);
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .form-results {
        display: flex;
        gap: 0.2rem;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
    }
    
    .form-result {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.8rem;
    }
    
    .form-result.w {
        background: #00ff85;
        color: #000;
    }
    
    .form-result.d {
        background: #ffc107;
        color: #000;
    }
    
    .form-result.l {
        background: #dc3545;
        color: #ffffff;
    }
    
    .form-description {
        color: #ffffff;
        margin: 0;
        font-size: 0.8rem;
    }
    
    .team-fixtures {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .team-fixture {
        background: rgba(255, 255, 255, 0.03);
        padding: 0.6rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid rgba(255, 255, 255, 0.05);
        flex-wrap: wrap;
        gap: 0.4rem;
    }
    
    .fixture-date {
        color: #00ff85;
        font-size: 0.75rem;
        font-weight: 600;
        min-width: 70px;
    }
    
    .fixture-teams {
        flex: 1;
        text-align: center;
        color: #ffffff;
        min-width: 120px;
    }
    
    .team-home {
        font-weight: 700;
        color: #00ff85;
    }
    
    .team-away {
        font-weight: 500;
        color: #ffffff;
    }
    
    .fixture-vs {
        margin: 0 0.4rem;
        color: #888;
    }
    
    .fixture-score {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.9rem;
    }
    
    .score-number {
        color: #00ff85;
    }
    
    .score-separator {
        color: #888;
    }
    
    .fixture-status {
        color: #ffc107;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.65rem;
    }
    
    .team-players {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.5rem;
    }
    
    .team-player {
        background: rgba(255, 255, 255, 0.03);
        padding: 0.6rem;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.05);
        flex-wrap: wrap;
        gap: 0.4rem;
    }
    
    .player-name {
        color: #ffffff;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.2rem;
    }
    
    .player-details {
        color: #888;
        font-size: 0.75rem;
    }
    
    .player-stats {
        display: flex;
        gap: 0.6rem;
    }
    
    .player-stat {
        color: #00ff85;
        font-weight: 600;
        font-size: 0.75rem;
    }
    
    @media (max-width: 768px) {
        .team-details-container {
            padding: 0.5rem;
        }
        
        .team-details-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
        
        .team-details-info h1 {
            font-size: 1.3rem;
        }
        
        .team-stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.5rem;
        }
        
        .team-stat-card {
            padding: 0.75rem;
        }
        
        .stat-number {
            font-size: 1.2rem;
        }
        
        .team-fixture {
            flex-direction: column;
            text-align: center;
        }
        
        .fixture-date {
            min-width: auto;
        }
        
        .fixture-teams {
            min-width: auto;
        }
        
        .team-players {
            grid-template-columns: 1fr;
        }
        
        .team-player {
            flex-direction: column;
            text-align: center;
        }
    }
    
    @media (max-width: 480px) {
        .team-stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .form-results {
            justify-content: center;
        }
    }

    .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .player-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .player-card:hover {
        transform: translateY(-5px);
    }

    .player-header {
        background: linear-gradient(45deg, #37003c, #1a1a2e);
        color: white;
        padding: 2rem;
        text-align: center;
    }

    .player-avatar {
        width: 100px;
        height: 100px;
        background: white;
        border-radius: 50%;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: #37003c;
    }

    .player-info {
        padding: 1.5rem;
    }

    .player-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1rem;
    }

    .player-stat {
        text-align: center;
        padding: 0.5rem;
        background: #f8f9fa;
        border-radius: 5px;
    }

    /* Modern Players Page Layout */
    .players-modern-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .team-modern-section {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .team-modern-header {
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .team-modern-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .team-modern-logo {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .team-modern-details {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .team-modern-name {
        font-size: 1.4rem;
        font-weight: 600;
        color: white;
        margin: 0;
    }

    .team-modern-count {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.85rem;
    }

    .players-modern-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .player-modern-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        transition: background-color 0.2s ease;
    }

    .player-modern-row:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .player-modern-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .player-modern-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .player-modern-avatar i {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.6);
    }

    .player-modern-content {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .player-modern-name {
        font-size: 1rem;
        font-weight: 600;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .player-modern-details {
        display: flex;
        gap: 1rem;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .player-modern-number {
        color: #ffd700;
        font-weight: 600;
    }

    .player-modern-stats {
        display: flex;
        gap: 1rem;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .stat-item {
        color: rgba(255, 255, 255, 0.6);
    }

    .player-modern-hint {
        color: #adb5bd;
        font-size: 0.75rem;
        font-style: italic;
    }

    .verified-badge-modern {
        width: 16px;
        height: 16px;
    }

    /* Players Search and Sort Controls - Classic Design */
    .players-controls {
        max-width: 1000px;
        margin: 0 auto 2rem auto;
        padding: 0 1.5rem;
    }

    .players-search-sort {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .players-search {
        display: flex;
        flex: 1;
        max-width: 400px;
        position: relative;
    }

    .players-search-field {
        flex: 1;
        padding: 1rem 1.2rem;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px 0 0 10px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05));
        color: white;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s ease;
    }

    .players-search-field::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-style: italic;
    }

    .players-search-field:focus {
        outline: none;
        border-color: #00ff85;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
        box-shadow: 0 0 0 3px rgba(0, 255, 133, 0.1);
    }

    .players-search-button {
        padding: 1rem 1.5rem;
        background: linear-gradient(135deg, #00ff85, #00cc6a);
        border: none;
        border-radius: 0 10px 10px 0;
        color: #37003c;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 8px rgba(0, 255, 133, 0.3);
    }

    .players-search-button:hover {
        background: linear-gradient(135deg, #00cc6a, #00a052);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 255, 133, 0.4);
    }

    .players-search-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 255, 133, 0.3);
    }

    .players-sort {
        min-width: 180px;
        position: relative;
    }

    .players-sort-dropdown {
        width: 100%;
        padding: 1rem 1.2rem;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05));
        color: white;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1.5em 1.5em;
        padding-right: 3rem;
    }

    .players-sort-dropdown:focus {
        outline: none;
        border-color: #00ff85;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
        box-shadow: 0 0 0 3px rgba(0, 255, 133, 0.1);
    }

    .players-sort-dropdown:hover {
        border-color: rgba(255, 255, 255, 0.4);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.06));
    }

    .players-sort-dropdown option {
        background: #1a1a2e;
        color: white;
        padding: 0.5rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .players-search-sort {
            flex-direction: column;
            align-items: stretch;
        }

        .players-search {
            max-width: none;
        }
    }

    @media (max-width: 768px) {
        .players-modern-container {
            padding: 1rem;
        }

        .team-modern-section {
            padding: 1.5rem;
        }

        .players-modern-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .team-modern-info {
            flex-wrap: wrap;
        }

        .team-modern-name {
            font-size: 1.5rem;
        }

        .player-modern-card {
            padding: 1.2rem;
        }

        .player-modern-avatar {
            width: 60px;
            height: 60px;
        }
    }
        flex-shrink: 0;
    }

    .player-compact-details {
        display: flex;
        gap: 1rem;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .player-compact-position {
        color: #00ff85;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .player-compact-number {
        color: #ffd700;
        font-weight: 600;
    }

    .player-compact-stats {
        display: flex;
        gap: 0.8rem;
        margin-left: auto;
        flex-shrink: 0;
    }

    .player-compact-goals,
    .player-compact-assists {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.3rem 0.6rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        min-width: 45px;
        text-align: center;
    }

    .player-compact-goals {
        color: #ffd700;
    }

    .player-compact-assists {
        color: #00ff85;
    }

    .player-compact-hint {
        color: #adb5bd;
        font-size: 0.8rem;
        font-style: italic;
        margin-left: 1rem;
        flex-shrink: 0;
    }

    /* Mobile Responsive for Compact Layout */
    @media (max-width: 768px) {
        .teams-players-compact {
            padding: 0 0.5rem;
        }

        .team-compact-info {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
        }

        .player-compact-row {
            padding: 0.6rem;
        }

        .player-compact-avatar {
            width: 40px;
            height: 40px;
            margin-right: 0.8rem;
            font-size: 1rem;
        }

        .player-compact-name {
            font-size: 0.9rem;
        }

        .player-compact-details {
            font-size: 0.8rem;
            gap: 0.5rem;
        }

        .player-compact-stats {
            gap: 0.5rem;
        }

        .player-compact-goals,
        .player-compact-assists {
            padding: 0.2rem 0.4rem;
            font-size: 0.75rem;
            min-width: 40px;
        }
    }

    @media (max-width: 480px) {
        .player-compact-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .player-compact-avatar {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }

        .player-compact-stats {
            margin-left: 0;
            align-self: flex-end;
        }

        .player-compact-hint {
            margin-left: 0;
            margin-top: 0.5rem;
            align-self: flex-start;
        }
    }

    /* Floating AI Button */
    .ai-floating-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #37003c 0%, #00ff85 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(55, 0, 60, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        animation: pulse 2s infinite;
    }

    .ai-floating-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(55, 0, 60, 0.4);
    }

    .ai-floating-button i {
        color: white;
        font-size: 1.5rem;
    }

    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 4px 20px rgba(55, 0, 60, 0.3);
        }
        50% {
            box-shadow: 0 4px 20px rgba(55, 0, 60, 0.6);
        }
    }

    /* Floating AI Button Mobile */
    @media (max-width: 768px) {
        .ai-floating-button {
            top: 1rem;
            bottom: auto;
            right: 1rem;
            width: 50px;
            height: 50px;
        }

        .ai-floating-button i {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        .ai-floating-button {
            top: 1rem;
            bottom: auto;
            width: 45px;
            height: 45px;
        }

        .ai-floating-button i {
            font-size: 1rem;
        }
    }

    /* AI Assistant Page Styles */
    .ai-page-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .ai-chat-container {
        background: #ffffff;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid #e9ecef;
        height: 600px;
        display: flex;
        flex-direction: column;
    }

    .ai-chat-header {
        background: linear-gradient(135deg, #37003c 0%, #1a1a2e 100%);
        color: white;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .ai-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #00ff85;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
    }

    .ai-info h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .ai-info p {
        margin: 0.25rem 0 0 0;
        font-size: 1rem;
        opacity: 0.9;
    }

    .ai-messages {
        flex: 1;
        padding: 1.5rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        scroll-behavior: smooth;
        background: #f8f9fa;
    }

    .ai-message {
        max-width: 75%;
        padding: 1rem 1.25rem;
        border-radius: 18px;
        font-size: 1rem;
        line-height: 1.5;
        animation: fadeInUp 0.3s ease;
    }

    .ai-message.bot {
        background: #ffffff;
        color: #212529;
        align-self: flex-start;
        border-bottom-left-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .ai-message.user {
        background: linear-gradient(135deg, #37003c 0%, #00ff85 100%);
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 8px;
        box-shadow: 0 2px 8px rgba(55, 0, 60, 0.2);
    }

    .ai-input-container {
        padding: 1.5rem;
        border-top: 1px solid #e9ecef;
        display: flex;
        gap: 1rem;
        background: #ffffff;
    }

    .ai-input {
        flex: 1;
        padding: 1rem 1.25rem;
        border: 2px solid #e9ecef;
        border-radius: 25px;
        outline: none;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .ai-input:focus {
        border-color: #37003c;
    }

    .ai-send {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #37003c 0%, #00ff85 100%);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        font-size: 1.2rem;
    }

    .ai-send:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(55, 0, 60, 0.3);
    }

    .ai-typing-indicator {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.25rem;
        background: #ffffff;
        border-radius: 18px;
        border-bottom-left-radius: 8px;
        align-self: flex-start;
        max-width: 75%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .ai-typing-dots {
        display: flex;
        gap: 0.3rem;
    }

    .ai-typing-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #6c757d;
        animation: typing 1.4s infinite;
    }

    .ai-typing-dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .ai-typing-dot:nth-child(3) {
        animation-delay: 0.4s;
    }

    .ai-quick-actions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .ai-quick-action {
        background: linear-gradient(135deg, #37003c 0%, #1a1a2e 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
        border: none;
        font-size: 1rem;
    }

    .ai-quick-action:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(55, 0, 60, 0.3);
    }

    .ai-quick-action i {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        display: block;
        color: #00ff85;
    }

    /* AI Page Mobile Responsive */
    @media (max-width: 768px) {
        .ai-page-container {
            padding: 0 0.5rem;
        }

        .ai-chat-container {
            height: 500px;
        }

        .ai-chat-header {
            padding: 1rem;
        }

        .ai-avatar {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
        }

        .ai-info h2 {
            font-size: 1.25rem;
        }

        .ai-info p {
            font-size: 0.9rem;
        }

        .ai-messages {
            padding: 1rem;
        }

        .ai-message {
            max-width: 85%;
            font-size: 0.9rem;
        }

        .ai-input-container {
            padding: 1rem;
        }

        .ai-input {
            font-size: 0.9rem;
        }

        .ai-send {
            width: 45px;
            height: 45px;
            font-size: 1rem;
        }

        .ai-quick-actions {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.75rem;
        }

        .ai-quick-action {
            padding: 1rem;
            font-size: 0.9rem;
        }

        .ai-quick-action i {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .ai-chat-container {
            height: 450px;
        }

        .ai-message {
            max-width: 90%;
            font-size: 0.85rem;
        }

        .ai-quick-actions {
            grid-template-columns: 1fr;
        }
    }

    #footer {
        background: #37003c;
        color: white;
        padding: 2rem 0 1rem;
        margin-top: 3rem;
    }

    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 0 2rem;
    }

    .footer-section h3 {
        margin-bottom: 1rem;
        color: #00ff85;
    }

    .footer-section ul {
        list-style: none;
    }

    .footer-section ul li {
        margin-bottom: 0.5rem;
    }

    .footer-section a {
        color: white;
        text-decoration: none;
    }

    .footer-section a:hover {
        color: #00ff85;
    }

    .social-links {
        display: flex;
        gap: 1rem;
    }

    .social-links a {
        width: 40px;
        height: 40px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .social-links a:hover {
        background: #00ff85;
        color: #37003c;
    }

    .footer-bottom {
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        margin-top: 2rem;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        animation: modalFadeIn 0.3s ease-out;
    }

    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .modal-content {
        background: #ffffff;
        margin: 5% auto;
        padding: 2rem;
        border-radius: 12px;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        position: relative;
        animation: modalSlideIn 0.4s ease-out;
    }

    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translateY(-50px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .modal-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: #37003c;
        border-radius: 12px 12px 0 0;
    }

    .close {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        width: 32px;
        height: 32px;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 50%;
        color: #6c757d;
        font-size: 16px;
        font-weight: normal;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    }

    .close:hover {
        background: #e9ecef;
        color: #495057;
        transform: scale(1.05);
    }

    .close:active {
        transform: scale(0.95);
    }

    .search-result-item {
        padding: 1rem;
        margin-bottom: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    }

    .search-result-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        transition: width 0.2s ease;
    }

    .search-result-item:hover {
        transform: translateY(-1px);
    }

    .search-result-item:hover::before {
        width: 5px;
    }

    .search-result-item:last-child {
        margin-bottom: 0;
    }

    .search-result-item h4 {
        color: #ffffff;
        margin-bottom: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
    }

    .search-result-item p {
        color: #ffffff;
        font-size: 0.875rem;
        line-height: 1.4;
    }

    /* Comprehensive Responsive Design */
    
    /* Large Desktop (1200px and up) */
    @media (min-width: 1200px) {
        .header-container {
            padding: 0 3rem;
        }
        
        #main-content {
            padding: 3rem;
        }
        
        .hero-section h2 {
            font-size: 3.5rem;
        }
        
        .page-title {
            font-size: 3rem;
        }
    }
    
    /* Desktop (992px - 1199px) */
    @media (max-width: 1199px) and (min-width: 992px) {
        .header-container {
            padding: 0 2rem;
        }
        
        #main-content {
            padding: 2rem;
        }
    }
    
    /* Tablet Landscape (768px - 991px) */
    @media (max-width: 991px) and (min-width: 768px) {
        .header-container {
            padding: 0 1.5rem;
        }
        
        .nav-menu ul {
            gap: 1.5rem;
        }
        
        #searchInput {
            width: 220px;
        }
        
        .hero-section h2 {
            font-size: 2.5rem;
        }
        
        .page-title {
            font-size: 2.2rem;
        }
        
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .news-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .clubs-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .players-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    /* Tablet Portrait (576px - 767px) */
    @media (max-width: 767px) and (min-width: 576px) {
        .header-container {
            flex-direction: column;
            gap: 1rem;
            padding: 0 0.75rem;
        }
        
        .logo {
            align-self: flex-start;
            margin-left: 0;
        }
        
        .nav-menu ul {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }
        
        .nav-menu a {
            padding: 0.4rem 0.8rem;
            font-size: 0.9rem;
        }
        
        #searchInput {
            width: 200px;
        }
        
        #main-content {
            padding: 1.5rem;
        }
        
        .hero-section {
            padding: 3rem 1.5rem;
        }
        
        .hero-section h2 {
            font-size: 2.2rem;
        }
        
        .hero-section p {
            font-size: 1.1rem;
        }
        
        .page-title {
            font-size: 2rem;
        }
        
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
        
        .stat-card {
            padding: 1.5rem;
        }
        
        .stat-card i {
            font-size: 2.5rem;
        }
        
        .stat-card h3 {
            font-size: 1.8rem;
        }
        
        .news-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .clubs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .players-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .fixture-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
        
        .fixture-teams {
            flex-direction: row;
            gap: 1rem;
        }
        
        .fixture-info {
            text-align: center;
        }
        
        .league-table {
            font-size: 0.9rem;
        }
        
        .league-table th,
        .league-table td {
            padding: 0.8rem 0.5rem;
        }
        
        .fixture-card .team-name {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
        }
        
        .modal-content {
            width: 90%;
            margin: 10% auto;
            padding: 1.5rem;
        }
    }
    
    /* Mobile Large (480px - 575px) */
    @media (max-width: 575px) and (min-width: 480px) {
        .header-container {
            flex-direction: column;
            gap: 1rem;
            padding: 0 0.5rem;
        }
        
        .logo {
            align-self: flex-start;
            margin-left: 0;
        }
        
        .logo h1 {
            font-size: 1.5rem;
        }
        
        .logo-icon {
            width: 3.2rem;
            height: 3.2rem;
        }
        
        .nav-menu ul {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.8rem;
        }
        
        .nav-menu a {
            padding: 0.3rem 0.6rem;
            font-size: 0.85rem;
        }
        
        #searchInput {
            width: 180px;
            font-size: 0.85rem;
        }
        
        #searchBtn {
            padding: 0.4rem 0.8rem;
        }
        
        #main-content {
            padding: 1rem;
        }
        
        .hero-section {
            padding: 2.5rem 1rem;
        }
        
        .hero-section h2 {
            font-size: 1.8rem;
        }
        
        .hero-section p {
            font-size: 1rem;
        }
        
        .page-title {
            font-size: 1.8rem;
        }
        
        .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .stat-card {
            padding: 1.2rem;
        }
        
        .stat-card i {
            font-size: 2rem;
        }
        
        .stat-card h3 {
            font-size: 1.5rem;
        }
        
        .news-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .clubs-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .players-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .club-header,
        .player-header {
            padding: 1.5rem;
        }
        
        .club-logo {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
        }
        
        .player-avatar {
            width: 80px;
            height: 80px;
            font-size: 2.5rem;
        }
        
        /* League Stats specific - keep player avatars small */
        .league-table .player-avatar {
            width: 16px !important;
            height: 16px !important;
            font-size: 0.5rem !important;
        }
        
        .fixture-card {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            padding: 1rem;
        }
        
        .fixture-teams {
            flex-direction: row;
            gap: 1rem;
        }
        
        .fixture-info {
            text-align: center;
        }
        
        .league-table {
            font-size: 0.8rem;
        }
        
        .league-table th,
        .league-table td {
            padding: 0.6rem 0.3rem;
        }
        
        .fixture-card .team-name {
            flex-direction: column;
            gap: 0.3rem;
            text-align: center;
        }
        
        .team-logo {
            width: 25px;
            height: 25px;
            font-size: 0.7rem;
        }
        
        .modal-content {
            width: 95%;
            margin: 15% auto;
            padding: 1rem;
        }
        
        .footer-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
        }
    }
    
    /* Mobile Small (320px - 479px) */
    @media (max-width: 479px) {
        .header-container {
            flex-direction: column;
            gap: 0.8rem;
            padding: 0 0.5rem;
        }
        
        .logo {
            align-self: flex-start;
            margin-left: 0;
        }
        
        .logo h1 {
            font-size: 1.3rem;
        }
        
        .logo-icon {
            width: 2.8rem;
            height: 2.8rem;
        }
        
        .nav-menu ul {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .nav-menu a {
            padding: 0.25rem 0.5rem;
            font-size: 0.8rem;
        }
        
        #searchInput {
            width: 160px;
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
        }
        
        #searchBtn {
            padding: 0.4rem 0.7rem;
        }
        
        #main-content {
            padding: 0.8rem;
        }
        
        .hero-section {
            padding: 2rem 0.8rem;
        }
        
        .hero-section h2 {
            font-size: 1.5rem;
        }
        
        .hero-section p {
            font-size: 0.9rem;
        }
        
        .page-title {
            font-size: 1.5rem;
        }
        
        .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
        
        .stat-card {
            padding: 1rem;
        }
        
        .stat-card i {
            font-size: 1.8rem;
        }
        
        .stat-card h3 {
            font-size: 1.3rem;
        }
        
        .news-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
        
        .clubs-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
        
        .players-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
        
        .club-header,
        .player-header {
            padding: 1.2rem;
        }
        
        .club-logo {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
        }
        
        .player-avatar {
            width: 70px;
            height: 70px;
            font-size: 2rem;
        }
        
        .club-info,
        .player-info {
            padding: 1rem;
        }
        
        .club-stats,
        .player-stats {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
        }
        
        .club-stat,
        .player-stat {
            padding: 0.4rem;
            font-size: 0.8rem;
        }
        
        .fixture-card {
            flex-direction: column;
            text-align: center;
            gap: 0.8rem;
            padding: 0.8rem;
        }
        
        .fixture-teams {
            flex-direction: row;
            gap: 1rem;
        }
        
        .fixture-info {
            text-align: center;
            font-size: 0.9rem;
        }
        
        .league-table {
            font-size: 0.75rem;
        }
        
        .league-table th,
        .league-table td {
            padding: 0.5rem 0.2rem;
        }
        
        .fixture-card .team-name {
            flex-direction: column;
            gap: 0.2rem;
            text-align: center;
        }
        
        .team-logo {
            width: 20px;
            height: 20px;
            font-size: 0.6rem;
        }
        
        .modal-content {
            width: 98%;
            margin: 20% auto;
            padding: 0.8rem;
        }
        
        .search-result-item {
            padding: 0.6rem;
        }
        
        .search-result-item h4 {
            font-size: 0.9rem;
        }
        
        .search-result-item p {
            font-size: 0.8rem;
        }
        
        .modal-content h2 {
            font-size: 1.3rem;
        }
        
        .search-result-item {
            padding: 0.8rem;
        }
        
        .search-result-item h4 {
            font-size: 1rem;
        }
        
        .search-result-item p {
            font-size: 0.8rem;
        }
        
        .footer-container {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0 0.8rem;
        }
        
        .footer-section h3 {
            font-size: 1.1rem;
        }
        
        .social-links a {
            width: 35px;
            height: 35px;
        }
    }
    
    /* Search Page Responsive Styles */
    @media (max-width: 768px) {
        .search-page-container {
            padding: 0 0.5rem !important;
        }
        
        .search-page-content {
            padding: 1rem !important;
        }
        
        .search-page-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
        }
        
        .search-page-title {
            font-size: 1.5rem !important;
        }
        
        .search-input-container {
            flex-direction: column !important;
            gap: 0.75rem !important;
        }
        
        .search-page-input {
            min-width: auto !important;
            width: 100% !important;
        }
        
        .search-page-button {
            width: 100% !important;
        }
        
        .search-result-item {
            padding: 0.75rem !important;
        }
        
        .search-result-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
        }
        
        .search-result-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1rem !important;
        }
        
        .search-result-text {
            min-width: auto !important;
            width: 100% !important;
        }
        
        .search-result-title {
            font-size: 1.1rem !important;
        }
        
        .search-result-description {
            font-size: 0.9rem !important;
        }
    }

    @media (max-width: 480px) {
        .search-page-container {
            padding: 0 0.25rem !important;
        }
        
        .search-page-content {
            padding: 0.75rem !important;
        }
        
        .search-page-title {
            font-size: 1.25rem !important;
        }
        
        .search-result-item {
            padding: 0.5rem !important;
        }
        
        .search-result-icon {
            width: 35px !important;
            height: 35px !important;
            font-size: 0.9rem !important;
        }
        
        .search-result-title {
            font-size: 1rem !important;
        }
        
        .search-result-description {
            font-size: 0.85rem !important;
        }
    }

    /* Extra Small Mobile (below 320px) */
    @media (max-width: 319px) {
        .header-container {
            padding: 0 0.25rem;
        }
        
        .logo {
            align-self: flex-start;
            margin-left: 0;
        }
        
        .logo h1 {
            font-size: 1.1rem;
        }
        
        .logo-icon {
            width: 2.2rem;
            height: 2.2rem;
        }
        
        .nav-menu a {
            padding: 0.2rem 0.4rem;
            font-size: 0.75rem;
        }
        
        #searchInput {
            width: 140px;
            font-size: 0.75rem;
        }
        
        #main-content {
            padding: 0.5rem;
        }
        
        .hero-section {
            padding: 1.5rem 0.5rem;
        }
        
        .hero-section h2 {
            font-size: 1.3rem;
        }
        
        .hero-section p {
            font-size: 0.85rem;
        }
        
        .page-title {
            font-size: 1.3rem;
        }
        
        .stat-card {
            padding: 0.8rem;
        }
        
        .stat-card i {
            font-size: 1.5rem;
        }
        
        .stat-card h3 {
            font-size: 1.1rem;
        }
        
        .club-header,
        .player-header {
            padding: 1rem;
        }
        
        .club-logo {
            width: 40px;
            height: 40px;
            font-size: 1rem;
        }
        
        .player-avatar {
            width: 60px;
            height: 60px;
            font-size: 1.8rem;
        }
        
        /* League Stats specific - keep player avatars small */
        .league-table .player-avatar {
            width: 16px !important;
            height: 16px !important;
            font-size: 0.5rem !important;
        }
        
        .club-info,
        .player-info {
            padding: 0.8rem;
        }
        
        .fixture-card {
            padding: 0.6rem;
        }
        
        .league-table {
            font-size: 0.7rem;
        }
        
        .league-table th,
        .league-table td {
            padding: 0.4rem 0.1rem;
        }
        
        .team-logo {
            width: 18px;
            height: 18px;
            font-size: 0.5rem;
        }
        
        .modal-content {
            width: 99%;
            margin: 25% auto;
            padding: 0.6rem;
        }
        
        .footer-container {
            padding: 0 0.5rem;
        }
    }
    
    /* Landscape orientation adjustments for mobile */
    @media (max-width: 767px) and (orientation: landscape) {
        .hero-section {
            padding: 2rem 1rem;
        }
        
        .hero-section h2 {
            font-size: 1.8rem;
        }
        
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .nav-menu ul {
            gap: 0.8rem;
        }
    }
    
    /* High DPI displays */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .team-logo,
        .club-logo,
        .player-avatar {
            border: 1px solid rgba(0,0,0,0.1);
        }
    }
`;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Team data structured as object with team IDs as keys
const teamsData = {
    'sleek': {
        name: 'Sleek Legends',
        stadium: 'Legends Arena',
        manager: 'Victor',
        founder: 'Mr. Orishaba.J',
        capacity: 45000,
        founded: 2025,
        titles: 0,
        colors: ['#1a237e', '#90caf9'],
        shortName: 'SLE',
        logo: 'assets/club-logos/sleek.svg'
    },
    'lablues': {
        name: 'LaBlues SC',
        stadium: 'Blue Stadium',
        manager: 'Ozil',
        founder: 'Marvin',
        capacity: 42000,
        founded: 2022,
        titles: 1,
        colors: ['#1976d2', '#ffffff'],
        shortName: 'LBSC',
        logo: 'assets/club-logos/lablues.svg'
    },
    'kampomede': {
        name: 'Kampomede FC',
        stadium: 'Covid Arena',
        manager: 'Emma',
        founder: 'Parteymo',
        capacity: 38000,
        founded: 2021,
        titles: 0,
        colors: ['#4caf50', '#ffeb3b'],
        shortName: 'KFC',
        logo: 'assets/club-logos/Kapomede.svg'
    },
    'jaguar': {
        name: 'Black Jaguar',
        stadium: 'Jaguar Den',
        manager: 'Timo',
        founder: 'Goddy',
        capacity: 40000,
        founded: 2020,
        titles: 1,
        colors: ['#000000', '#ffd700'],
        shortName: 'BJFC',
        logo: 'assets/club-logos/black.svg'
    }
};

// Data for the website
const websiteData = {
    
    fixtures: [
        // FIRST LEG - Matchday 1
        { id: 'f1', matchday: 1, date: '2025-07-14', time: '20:00', homeTeam: 'sleek', awayTeam: 'lablues', status: 'completed', score: { home: 4, away: 0 }, playerOfTheMatch: { name: 'Offer', playerId: 'offer', team: 'sleek' } },
        { id: 'f2', matchday: 1, date: '2025-07-14', time: '20:00', homeTeam: 'jaguar', awayTeam: 'kampomede', status: 'completed', score: { home: 1, away: 0 }, playerOfTheMatch: { name: 'Joel', playerId: 'joel', team: 'kampomede' } },
        
        // FIRST LEG - Matchday 2
        { id: 'f3', matchday: 2, date: '2025-07-15', time: '20:00', homeTeam: 'sleek', awayTeam: 'jaguar', status: 'completed', score: { home: 1, away: 0 }, playerOfTheMatch: { name: 'Ryan', playerId: 'ryan', team: 'sleek' } },
        { id: 'f4', matchday: 2, date: '2025-07-15', time: '20:00', homeTeam: 'lablues', awayTeam: 'kampomede', status: 'completed', score: { home: 0, away: 1 }, playerOfTheMatch: { name: 'Yaya', playerId: 'yaya', team: 'kampomede' } },
        
        // FIRST LEG - Matchday 3
        { id: 'f5', matchday: 3, date: '2025-07-16', time: '20:00', homeTeam: 'kampomede', awayTeam: 'sleek', status: 'upcoming', score: null },
        { id: 'f6', matchday: 3, date: '2025-07-16', time: '20:00', homeTeam: 'lablues', awayTeam: 'jaguar', status: 'upcoming', score: null },
        
        // SECOND LEG - Matchday 4
        { id: 'f7', matchday: 4, date: '2025-07-17', time: '20:00', homeTeam: 'lablues', awayTeam: 'sleek', status: 'upcoming', score: null },
        { id: 'f8', matchday: 4, date: '2025-07-17', time: '20:00', homeTeam: 'kampomede', awayTeam: 'jaguar', status: 'upcoming', score: null },
        
        // SECOND LEG - Matchday 5
        { id: 'f9', matchday: 5, date: '2025-07-18', time: '20:00', homeTeam: 'jaguar', awayTeam: 'sleek', status: 'upcoming', score: null },
        { id: 'f10', matchday: 5, date: '2025-07-18', time: '20:00', homeTeam: 'kampomede', awayTeam: 'lablues', status: 'upcoming', score: null },
        
        // SECOND LEG - Matchday 6
        { id: 'f11', matchday: 6, date: '2025-07-19', time: '20:00', homeTeam: 'sleek', awayTeam: 'kampomede', status: 'upcoming', score: null },
        { id: 'f12', matchday: 6, date: '2025-07-19', time: '20:00', homeTeam: 'jaguar', awayTeam: 'lablues', status: 'upcoming', score: null }
    ],
    
    news: [
        { id: "news_001", title: "Sleek Legends Crowned Champions", date: "2024-05-19", content: "Sleek Legends have been crowned Madondo League champions after a spectacular season at the Legends Arena under manager Legend Master.", category: "Championship" },
        { id: "news_002", title: "Record Breaking Season for LaBlues SC Striker", date: "2024-05-18", content: "LaBlues SC's star striker has broken the Madondo League goal-scoring record with an incredible 36 goals in a single season.", category: "Players" },
        { id: "news_003", title: "Kampomede FC Stadium Expansion", date: "2024-05-17", content: "Kampomede FC have announced plans to expand the Kampo Stadium capacity from 38,000 to 50,000 seats.", category: "Clubs" },
        { id: "news_004", title: "Transfer Window Opens", date: "2024-05-16", content: "The summer transfer window is now open with Madondo League clubs already making moves to strengthen their squads for next season.", category: "Transfers" },
        { id: "news_005", title: "VAR Controversy in Legends vs Blues Match", date: "2024-05-15", content: "VAR decisions have sparked debate after controversial calls in the crucial Sleek Legends vs LaBlues SC encounter.", category: "Match Reports" },
        { id: "news_006", title: "Young Talent Emerging Across League", date: "2024-05-14", content: "Several young players have emerged as stars this season, showing the bright future of Madondo League football.", category: "Players" }
    ],
    
    players: {
        'sleek': [
            { id: "ryan", name: "Ahabwe Ryan", position: "Defender", age: 25, nationality: "Ugandan", number: 4, captain: false },
            { id: "benja", name: "Benja", position: "Defender", age: 24, nationality: "Ugandan", number: 2, captain: false },
            { id: "wycliffe", name: "Wycliffe", position: "Striker", age: 26, nationality: "Ugandan", number: 9, captain: false },
            { id: "faye", name: "Faye", position: "Defender", age: 23, nationality: "Ugandan", number: 5, captain: false },
            { id: "mike", name: "Mike", position: "Midfielder", age: 27, nationality: "Ugandan", number: 8, captain: false },
            { id: "jemo", name: "Jemo Young", position: "Striker", age: 22, nationality: "Ugandan", number: 11, captain: false },
            { id: "oscar", name: "Oscar", position: "Midfielder", age: 25, nationality: "Ugandan", number: 7, captain: false },
            { id: "offer", name: "Offer", position: "Midfielder", age: 26, nationality: "Ugandan", number: 10, captain: true }
        ],
        'lablues': [
        { id: "marvin", name: "Marvin", position: "Midfielder", age: 32, nationality: "Uganda", number: 10, captain: false },
        { id: "ozil", name: "Ozil", position: "Forward", age: 31, nationality: "Uganda", number: 9, captain: false },
        { id: "job", name: "Job", position: "Defender", age: 29, nationality: "Uganda", number: 6, captain: true },
        { id: "richard", name: "Richard", position: "Defender", age: 30, nationality: "Uganda", number: 4, captain: false },
        { id: "mosh", name: "Mosh", position: "Defender", age: 28, nationality: "Uganda", number: 2, captain: false },
        { id: "adama", name: "Adama", position: "Forward", age: 26, nationality: "Uganda", number: 11, captain: false },
        { id: "james", name: "James", position: "Defender", age: 27, nationality: "Uganda", number: 3, captain: false },
        { id: "habib", name: "Habib", position: "Midfielder", age: 25, nationality: "Uganda", number: 8, captain: false }
        ],
        'kampomede': [
            { id: "parteymo", name: "Parteymo", position: "Midfielder", age: 26, nationality: "Ugandan", number: 8, captain: false },
            { id: "joel", name: "Joel", position: "Defender", age: 24, nationality: "Ugandan", number: 2, captain: false },
            { id: "george", name: "George", position: "Defender", age: 25, nationality: "Ugandan", number: 3, captain: false },
            { id: "yaya", name: "Yaya", position: "Striker", age: 16, nationality: "Ugandan", number: 7, captain: true },
            { id: "michael", name: "Michael", position: "Midfielder", age: 27, nationality: "Ugandan", number: 5, captain: false },
            { id: "sane", name: "Sane", position: "Midfielder", age: 22, nationality: "Ugandan", number: 6, captain: false },
            { id: "fahad", name: "Fahad", position: "Midfielder", age: 24, nationality: "Ugandan", number: 16, captain: false },
            { id: "eden", name: "Eden", position: "Defender", age: 25, nationality: "Ugandan", number: 4, captain: false },
            { id: "watson", name: "Watson", position: "Striker", age: 23, nationality: "Ugandan", number: 10, captain: false }
        ],
        'jaguar': [
        { id: "jaguar", name: "Timo", position: "Forward", age: 26, nationality: "Uganda", number: 10, captain: false },
        { id: "jaguar2", name: "Goddy", position: "Forward", age: 31, nationality: "Uganda", number: 9, captain: false },
        { id: "jaguar3", name: "Junior", position: "Defender", age: 33, nationality: "Uganda", number: 4, captain: true },
        { id: "jaguar4", name: "Collins", position: "Defender", age: 29, nationality: "Uganda", number: 2, captain: false },
        { id: "jaguar5", name: "DK", position: "Forward", age: 27, nationality: "Uganda", number: 11, captain: false },
        { id: "jaguar6", name: "Thomas", position: "Defender", age: 30, nationality: "Uganda", number: 3, captain: false },
        { id: "jaguar7", name: "Swabul", position: "Midfielder", age: 28, nationality: "Uganda", number: 8, captain: false },
        { id: "jaguar8", name: "Kevin", position: "Forward", age: 24, nationality: "Uganda", number: 7, captain: false },
        { id: "jaguar9", name: "Edgar", position: "Forward", age: 22, nationality: "Uganda", number: 6, captain: false }
        ]
    },
    
    // Lineup and substitute data for each match
    lineups: {
        // Matchday 1 - July 14, 2025
        'f1': {
            playerOfTheMatch: { name: "Jemo Young", playerId: "jemo", team: "sleek" },
            home: {
                starting: [
                    { number: 4, name: "Ahabwe Ryan", playerId: "ryan", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 2, name: "Benja", playerId: "benja", position: "DEF", captain: false, goals: 1, goalMinutes: [14], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [34], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                    { number: 8, name: "Jemo Young", playerId: "jemo", position: "MID", captain: false, goals: 1, goalMinutes: [23], goalTypes: ["open"], assists: 1, assistMinutes: [12], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], redCardFromTwoYellows: false, substituted: false, substitutionMinute: null },
                    { number: 10, name: "Offer", playerId: "offer", position: "MID", captain: true, goals: 2, goalMinutes: [67, 79], goalTypes: ["penalty", "open"], assists: 1, assistMinutes: [23], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 82 },
                    { number: 9, name: "Wycliffe", playerId: "wycliffe", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 61 }
                ],
                substitutes: [
                    { number: 5, name: "Faye", playerId: "faye", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: 2 },
                    { number: 7, name: "Oscar", playerId: "oscar", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 82, cameOnFor: 10 },
                    { number: 11, name: "Mike", playerId: "mike", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 61, cameOnFor: 9 }
                ]
            },
            away: {
                starting: [
                    { number: 6, name: "Job", playerId: "job", position: "DEF", captain: true, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45 },
                    { number: 11, name: "Adama", playerId: "adama", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [34, 67], redCard: true, redCardMinutes: [67], redCardFromTwoYellows: true, substituted: false, substitutionMinute: null },
                    { number: 3, name: "James", playerId: "james", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 10, name: "Marvin", playerId: "marvin", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 1, assistMinutes: [45], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 9, name: "Ozil", playerId: "ozil", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 79 }
                ],
                substitutes: [
                    { number: 4, name: "Richard", playerId: "richard", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 68, cameOnFor: 11 },
                    { number: 8, name: "Habib", playerId: "habib", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: 6 },
                    { number: 2, name: "Mosh", playerId: "mosh", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 79, cameOnFor: 9 }
                ]
            }
        },
        'f2': {
            playerOfTheMatch: { name: "Thomas", playerId: "jaguar6", team: "jaguar" },
            home: {
                starting: [
                    { number: 4, name: "Junior", playerId: "jaguar3", position: "DEF", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                    { number: 2, name: "Collins", playerId: "jaguar4", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60 },
                    { number: 10, name: "Timo", playerId: "jaguar", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: true, redCardMinutes: [85], redCardFromTwoYellows: false, substituted: false, substitutionMinute: null },
                    { number: 9, name: "Goddy", playerId: "jaguar2", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45 },
                    { number: 11, name: "DK", playerId: "jaguar5", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60 }
                ],
                substitutes: [
                    { number: 3, name: "Thomas", playerId: "jaguar6", position: "DEF", captain: false, goals: 1, goalMinutes: [67], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: 4 },
                    { number: 8, name: "Swabul", playerId: "jaguar7", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: 9 },
                    { number: 7, name: "Kevin", playerId: "jaguar8", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [80], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: 2 },
                    { number: 6, name: "Edgar", playerId: "jaguar9", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: 11 }
                ]
            },
            away: {
                starting: [
                    { number: 4, name: "Eden", playerId: "eden", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                    { number: 2, name: "Joel", playerId: "joel", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 67 },
                    { number: 7, name: "Yaya", playerId: "yaya", position: "FWD", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 10, name: "Watson", playerId: "watson", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [45], redCard: false, redCardMinutes: [], redCardFromTwoYellows: false, substituted: true, substitutionMinute: 70 },
                    { number: 8, name: "Parteymo", playerId: "parteymo", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70 }
                ],
                substitutes: [
                    { number: 3, name: "George", playerId: "george", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70, cameOnFor: 8 },
                    { number: 5, name: "Michael", playerId: "michael", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: 4 },
                    { number: 6, name: "Sane", playerId: "sane", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 67, cameOnFor: 2 },
                    { number: 16, name: "Fahad", playerId: "fahad", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70, cameOnFor: 10 }
                ]
            }
        },
        'f3': {
            playerOfTheMatch: { name: "Benja", playerId: "benja", team: "sleek" },
            home: {
                starting: [
                    { number: 4, name: "Ahabwe Ryan", playerId: "ryan", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 2, name: "Benja", playerId: "benja", position: "DEF", captain: false, goals: 1, goalMinutes: [54], goalTypes: ["open"], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45 },
                    { number: 8, name: "Jemo Young", playerId: "jemo", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], redCardFromTwoYellows: false, substituted: false, substitutionMinute: null },
                    { number: 10, name: "Offer", playerId: "offer", position: "MID", captain: true, goals: 0, goalMinutes: [], goalTypes: [], assists: 1, assistMinutes: [54], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 79 },
                    { number: 9, name: "Wycliffe", playerId: "wycliffe", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [31], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45 }
                ],
                substitutes: [
                    { number: 5, name: "Faye", playerId: "faye", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: 2 },
                    { number: 7, name: "Oscar", playerId: "oscar", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: 9 },
                    { number: 11, name: "Mike", playerId: "mike", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 79, cameOnFor: 10 }
                ]
            },
            away: {
                starting: [
                    { number: 4, name: "Junior", playerId: "jaguar3", position: "DEF", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                    { number: 2, name: "Collins", playerId: "jaguar4", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60 },
                    { number: 3, name: "Thomas", playerId: "jaguar6", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                    { number: 9, name: "Goddy", playerId: "jaguar2", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 11, name: "DK", playerId: "jaguar5", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60 }
                ],
                substitutes: [
                    { number: 8, name: "Swabul", playerId: "jaguar7", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: 3 },
                    { number: 7, name: "Kevin", playerId: "jaguar8", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [80], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: 2 },
                    { number: 6, name: "Edgar", playerId: "jaguar9", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 60, cameOnFor: 11 }
                ]
            }
        },
        'f4': {
            playerOfTheMatch: { name: "Yaya", playerId: "yaya", team: "kampomede" },
            home: {
                starting: [
                    { number: 6, name: "Job", playerId: "job", position: "DEF", captain: true, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45 },
                    { number: 11, name: "Adama", playerId: "adama", position: "DEF", captain: false, goals: 1, goalMinutes: [19], goalTypes: ["own"], assists: 0, assistMinutes: [], yellowCard: true, yellowCardMinutes: [37], redCard: false, redCardMinutes: [], redCardFromTwoYellows: false, substituted: true, substitutionMinute: 55 },
                    { number: 3, name: "James", playerId: "james", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 10, name: "Marvin", playerId: "marvin", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 1, assistMinutes: [45], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 9, name: "Ozil", playerId: "ozil", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 79 }
                ],
                substitutes: [
                    { number: 4, name: "Richard", playerId: "richard", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: 11 },
                    { number: 8, name: "Habib", playerId: "habib", position: "MID", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 45, cameOnFor: 6 },
                    { number: 2, name: "Mosh", playerId: "mosh", position: "FWD", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 79, cameOnFor: 9 }
                ]
            },
            away: {
                starting: [
                    { number: 4, name: "Eden", playerId: "eden", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55 },
                    { number: 2, name: "Joel", playerId: "joel", position: "DEF", captain: false, goals: 0, goalMinutes: [], goalTypes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 67 },
                    { number: 7, name: "Yaya", playerId: "yaya", position: "FWD", captain: true, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: false, substitutionMinute: null },
                    { number: 10, name: "Watson", playerId: "watson", position: "FWD", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], redCardFromTwoYellows: false, substituted: true, substitutionMinute: 70 },
                    { number: 8, name: "Parteymo", playerId: "parteymo", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70 }
                ],
                substitutes: [
                    { number: 3, name: "George", playerId: "george", position: "DEF", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70, cameOnFor: 8 },
                    { number: 5, name: "Michael", playerId: "michael", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 55, cameOnFor: 4 },
                    { number: 6, name: "Sane", playerId: "sane", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 67, cameOnFor: 2 },
                    { number: 16, name: "Fahad", playerId: "fahad", position: "MID", captain: false, goals: 0, goalMinutes: [], assists: 0, assistMinutes: [], yellowCard: false, yellowCardMinutes: [], redCard: false, redCardMinutes: [], substituted: true, substitutionMinute: 70, cameOnFor: 10 }
                ]
            }
        },
        'f5': {
            home: {
                starting: [
                    { number: 1, name: "Legend Defender", position: "DEF" },
                    { number: 2, name: "Legend Wall", position: "DEF" },
                    { number: 3, name: "Legend Pro", position: "MID" },
                    { number: 4, name: "Legend Master", position: "FWD" },
                    { number: 5, name: "Legend Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Legend Shield", position: "DEF" },
                    { number: 7, name: "Legend Playmaker", position: "MID" },
                    { number: 8, name: "Legend Speed", position: "FWD" },
                    { number: 9, name: "Legend Fresh", position: "FWD" }
                ]
            },
            away: {
                starting: [
                    { number: 1, name: "Jaguar Defender", position: "DEF" },
                    { number: 2, name: "Jaguar Wall", position: "DEF" },
                    { number: 3, name: "Jaguar King", position: "MID" },
                    { number: 4, name: "Jaguar Beast", position: "FWD" },
                    { number: 5, name: "Jaguar Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Jaguar Shield", position: "DEF" },
                    { number: 7, name: "Jaguar Playmaker", position: "MID" },
                    { number: 8, name: "Jaguar Speed", position: "FWD" },
                    { number: 9, name: "Jaguar Fresh", position: "FWD" }
                ]
            }
        },
        'f6': {
            home: {
                starting: [
                    { number: 1, name: "Blue Defender", position: "DEF" },
                    { number: 2, name: "Blue Wall", position: "DEF" },
                    { number: 3, name: "Blue Star", position: "MID" },
                    { number: 4, name: "Blue Ace", position: "FWD" },
                    { number: 5, name: "Blue Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Blue Shield", position: "DEF" },
                    { number: 7, name: "Blue Playmaker", position: "MID" },
                    { number: 8, name: "Blue Speed", position: "FWD" },
                    { number: 9, name: "Blue Fresh", position: "FWD" }
                ]
            },
            away: {
                starting: [
                    { number: 1, name: "Kampo Defender", position: "DEF" },
                    { number: 2, name: "Kampo Wall", position: "DEF" },
                    { number: 3, name: "Kampo Warrior", position: "MID" },
                    { number: 4, name: "Kampo Hero", position: "FWD" },
                    { number: 5, name: "Kampo Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Kampo Shield", position: "DEF" },
                    { number: 7, name: "Kampo Playmaker", position: "MID" },
                    { number: 8, name: "Kampo Speed", position: "FWD" },
                    { number: 9, name: "Kampo Fresh", position: "FWD" }
                ]
            }
        },
        'f7': {
            home: {
                starting: [
                    { number: 1, name: "Jaguar Defender", position: "DEF" },
                    { number: 2, name: "Jaguar Wall", position: "DEF" },
                    { number: 3, name: "Jaguar King", position: "MID" },
                    { number: 4, name: "Jaguar Beast", position: "FWD" },
                    { number: 5, name: "Jaguar Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Jaguar Shield", position: "DEF" },
                    { number: 7, name: "Jaguar Playmaker", position: "MID" },
                    { number: 8, name: "Jaguar Speed", position: "FWD" },
                    { number: 9, name: "Jaguar Fresh", position: "FWD" }
                ]
            },
            away: {
                starting: [
                    { number: 1, name: "Legend Defender", position: "DEF" },
                    { number: 2, name: "Legend Wall", position: "DEF" },
                    { number: 3, name: "Legend Pro", position: "MID" },
                    { number: 4, name: "Legend Master", position: "FWD" },
                    { number: 5, name: "Legend Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Legend Shield", position: "DEF" },
                    { number: 7, name: "Legend Playmaker", position: "MID" },
                    { number: 8, name: "Legend Speed", position: "FWD" },
                    { number: 9, name: "Legend Fresh", position: "FWD" }
                ]
            }
        },
        'f8': {
            home: {
                starting: [
                    { number: 1, name: "Kampo Defender", position: "DEF" },
                    { number: 2, name: "Kampo Wall", position: "DEF" },
                    { number: 3, name: "Kampo Warrior", position: "MID" },
                    { number: 4, name: "Kampo Hero", position: "FWD" },
                    { number: 5, name: "Kampo Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Kampo Shield", position: "DEF" },
                    { number: 7, name: "Kampo Playmaker", position: "MID" },
                    { number: 8, name: "Kampo Speed", position: "FWD" },
                    { number: 9, name: "Kampo Fresh", position: "FWD" }
                ]
            },
            away: {
                starting: [
                    { number: 1, name: "Blue Defender", position: "DEF" },
                    { number: 2, name: "Blue Wall", position: "DEF" },
                    { number: 3, name: "Blue Star", position: "MID" },
                    { number: 4, name: "Blue Ace", position: "FWD" },
                    { number: 5, name: "Blue Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Blue Shield", position: "DEF" },
                    { number: 7, name: "Blue Playmaker", position: "MID" },
                    { number: 8, name: "Blue Speed", position: "FWD" },
                    { number: 9, name: "Blue Fresh", position: "FWD" }
                ]
            }
        },
        'f9': {
            home: {
                starting: [
                    { number: 1, name: "Legend Defender", position: "DEF" },
                    { number: 2, name: "Legend Wall", position: "DEF" },
                    { number: 3, name: "Legend Pro", position: "MID" },
                    { number: 4, name: "Legend Master", position: "FWD" },
                    { number: 5, name: "Legend Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Legend Shield", position: "DEF" },
                    { number: 7, name: "Legend Playmaker", position: "MID" },
                    { number: 8, name: "Legend Speed", position: "FWD" },
                    { number: 9, name: "Legend Fresh", position: "FWD" }
                ]
            },
            away: {
                starting: [
                    { number: 1, name: "Kampo Defender", position: "DEF" },
                    { number: 2, name: "Kampo Wall", position: "DEF" },
                    { number: 3, name: "Kampo Warrior", position: "MID" },
                    { number: 4, name: "Kampo Hero", position: "FWD" },
                    { number: 5, name: "Kampo Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Kampo Shield", position: "DEF" },
                    { number: 7, name: "Kampo Playmaker", position: "MID" },
                    { number: 8, name: "Kampo Speed", position: "FWD" },
                    { number: 9, name: "Kampo Fresh", position: "FWD" }
                ]
            }
        },
        'f10': {
            home: {
                starting: [
                    { number: 1, name: "Blue Defender", position: "DEF" },
                    { number: 2, name: "Blue Wall", position: "DEF" },
                    { number: 3, name: "Blue Star", position: "MID" },
                    { number: 4, name: "Blue Ace", position: "FWD" },
                    { number: 5, name: "Blue Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Blue Shield", position: "DEF" },
                    { number: 7, name: "Blue Playmaker", position: "MID" },
                    { number: 8, name: "Blue Speed", position: "FWD" },
                    { number: 9, name: "Blue Fresh", position: "FWD" }
                ]
            },
            away: {
                starting: [
                    { number: 1, name: "Jaguar Defender", position: "DEF" },
                    { number: 2, name: "Jaguar Wall", position: "DEF" },
                    { number: 3, name: "Jaguar King", position: "MID" },
                    { number: 4, name: "Jaguar Beast", position: "FWD" },
                    { number: 5, name: "Jaguar Striker", position: "FWD" }
                ],
                substitutes: [
                    { number: 6, name: "Jaguar Shield", position: "DEF" },
                    { number: 7, name: "Jaguar Playmaker", position: "MID" },
                    { number: 8, name: "Jaguar Speed", position: "FWD" },
                    { number: 9, name: "Jaguar Fresh", position: "FWD" }
                ]
            }
        }
    }
};

// Utility functions for ID management
const IDUtils = {
    // Generate unique IDs for new items
    generateClubId: (clubName) => {
        // Convert club name to lowercase single word
        return clubName.toLowerCase().replace(/\s+/g, '');
    },
    
    generatePlayerId: (playerName) => {
        // Convert player name to lowercase single word
        return playerName.toLowerCase().replace(/\s+/g, '');
    },
    
    generateNewsId: () => {
        const existingIds = websiteData.news.map(news => parseInt(news.id.split('_')[1]));
        const nextId = Math.max(...existingIds) + 1;
        return `news_${nextId.toString().padStart(3, '0')}`;
    },
    
    generateFixtureId: () => {
        const existingIds = websiteData.fixtures.map(fixture => parseInt(fixture.id.split('_')[1]));
        const nextId = Math.max(...existingIds) + 1;
        return `fix_${nextId.toString().padStart(3, '0')}`;
    },
    
    // Get item by ID
    getClubById: (id) => {
        const searchId = id.toLowerCase().replace(/\s+/g, '');
        return websiteData.clubs.find(club => club.id === searchId || club.name.toLowerCase() === id.toLowerCase());
    },
    
    getPlayerById: (id) => {
        const searchId = id.toLowerCase().replace(/\s+/g, '');
        return websiteData.players.find(player => player.id === searchId || player.name.toLowerCase() === id.toLowerCase());
    },
    
    getNewsById: (id) => {
        return websiteData.news.find(news => news.id === id);
    },
    
    getFixtureById: (id) => {
        return websiteData.fixtures.find(fixture => fixture.id === id);
    },
    
    // Get all items by type
    getAllClubs: () => websiteData.clubs,
    getAllPlayers: () => websiteData.players,
    
    // Helper function to find player by name
    findPlayerByName: (playerName) => {
        return websiteData.players.find(player => player.name === playerName);
    },
    getAllNews: () => websiteData.news,
    getAllFixtures: () => websiteData.fixtures,
    
    // Validate ID format
    isValidClubId: (id) => {
        // Check if it's a valid club name (exists in our data)
        const searchId = id.toLowerCase().replace(/\s+/g, '');
        return websiteData.clubs.some(club => club.id === searchId || club.name.toLowerCase() === id.toLowerCase());
    },
    isValidPlayerId: (id) => {
        // Check if it's a valid player name (exists in our data)
        const searchId = id.toLowerCase().replace(/\s+/g, '');
        return websiteData.players.some(player => player.id === searchId || player.name.toLowerCase() === id.toLowerCase());
    },
    isValidNewsId: (id) => /^news_\d{3}$/.test(id),
    isValidFixtureId: (id) => /^fix_\d{3}$/.test(id),
    
    // Check if club/player name already exists
    clubExists: (clubName) => {
        const searchId = clubName.toLowerCase().replace(/\s+/g, '');
        return websiteData.clubs.some(club => club.id === searchId || club.name.toLowerCase() === clubName.toLowerCase());
    },
    
    playerExists: (playerName) => {
        const searchId = playerName.toLowerCase().replace(/\s+/g, '');
        return websiteData.players.some(player => player.id === searchId || player.name.toLowerCase() === playerName.toLowerCase());
    },


};

// Main Application Class
class FootballLeagueApp {
    constructor() {
        this.currentPage = 'home';
        this.searchTimeout = null;
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        this.selectedSuggestionIndex = -1;
        this.placeholderIndex = 0;
        this.placeholderTexts = [
            "Search for clubs, players, news...",
            "Find Sleek Legends, Legend Master...",
            "Look for latest transfers...",
            "Search fixtures and results...",
            "Discover top players...",
            "Find club statistics...",
            "Search LaBlues SC, Kampomede FC...",
            "Find Black Jaguar players...",
            "Look for match results...",
            "Search team standings..."
        ];
        this.chatbotOpen = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadPage('home');
        this.startPlaceholderAnimation();
        this.startHeroRotation();
    }
    
    getGoalTypeDisplay(goalTypes, goalMinutes) {
        if (!goalTypes || goalTypes.length === 0) return '';
        
        let penaltyMinutes = [];
        let regularMinutes = [];
        let ownGoalMinutes = [];
        
        // Separate minutes by goal type
        goalTypes.forEach((type, index) => {
            if (type === 'penalty' && goalMinutes[index]) {
                penaltyMinutes.push(goalMinutes[index]);
            } else if (type === 'own' && goalMinutes[index]) {
                ownGoalMinutes.push(goalMinutes[index]);
            } else if (goalMinutes[index]) {
                regularMinutes.push(goalMinutes[index]);
            }
        });
        
        let display = '';
        if (penaltyMinutes.length > 0) {
            display += `P (${penaltyMinutes.join(', ')}') `;
        }
        if (ownGoalMinutes.length > 0) {
            display += `OG (${ownGoalMinutes.join(', ')}') `;
        }
        if (regularMinutes.length > 0) {
            display += `(${regularMinutes.join(', ')}') `;
        }
        
        return display.trim();
    }
    
    startHeroRotation() {
        let currentImage = 0;
        const images = document.querySelectorAll('.hero-image');
        const indicators = document.querySelectorAll('.indicator');
        
        if (images.length === 0) return;
        
        setInterval(() => {
            images[currentImage].classList.remove('active');
            indicators[currentImage].classList.remove('active');
            
            currentImage = (currentImage + 1) % images.length;
            
            images[currentImage].classList.add('active');
            indicators[currentImage].classList.add('active');
        }, 5000);
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                
                // Clear search input when navigating
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.value = '';
                    this.hideSearchSuggestions();
                }
                
                this.loadPage(page);
                this.updateActiveNav(page);
            });
        });

        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.performSearch();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });

            // Search input suggestions
            searchInput.addEventListener('input', (e) => {
                this.performSmartSearch();
            });

            // Set up navbar search dropdown
            this.setupNavbarSearchDropdown(searchInput);
            
            searchInput.addEventListener('focus', () => {
                // Show dropdown when focusing on search input
                const searchTerm = searchInput.value.trim();
                if (searchTerm.length >= 1) {
                    this.showNavbarSearchDropdown(searchTerm);
                }
            });
        }

        // Keyboard navigation for search suggestions
        if (searchInput) {
            searchInput.addEventListener('keydown', (e) => {
                const suggestionsContainer = document.getElementById('searchSuggestions');
                const suggestions = suggestionsContainer.querySelectorAll('.search-suggestion-item');
                
                if (suggestions.length === 0) return;
                
                switch(e.key) {
                    case 'ArrowDown':
                        e.preventDefault();
                        this.selectedSuggestionIndex = Math.min(this.selectedSuggestionIndex + 1, suggestions.length - 1);
                        this.updateSelectedSuggestion(suggestions);
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        this.selectedSuggestionIndex = Math.max(this.selectedSuggestionIndex - 1, -1);
                        this.updateSelectedSuggestion(suggestions);
                        break;
                    case 'Enter':
                        if (this.selectedSuggestionIndex >= 0 && suggestions[this.selectedSuggestionIndex]) {
                            e.preventDefault();
                            suggestions[this.selectedSuggestionIndex].click();
                        }
                        break;
                    case 'Escape':
                        this.hideSearchSuggestions();
                        this.selectedSuggestionIndex = -1;
                        break;
                }
            });
        }

        // Modal close
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                const modal = document.getElementById('searchModal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        }

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('searchModal');
            if (modal && e.target === modal) {
                modal.style.display = 'none';
            }
            
            // Hide search suggestions when clicking outside
            if (!e.target.closest('.search-container')) {
                this.hideSearchSuggestions();
            }
        });

    // Footer links
        const footerLinks = document.querySelectorAll('#footer a[data-page]');
        if (footerLinks.length > 0) {
            footerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = e.target.dataset.page;
                    
                    // Clear search input when navigating
                    const searchInput = document.getElementById('searchInput');
                    if (searchInput) {
                        searchInput.value = '';
                        this.hideSearchSuggestions();
                    }
                    
                    this.loadPage(page);
                    this.updateActiveNav(page);
                });
            });
        }
    }

    updateActiveNav(page) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-page="${page}"]`).classList.add('active');
    }

    loadPage(page, params = {}) {
        this.currentPage = page;
        const mainContent = document.getElementById('main-content');
        
        // Clear search input when changing pages (except when going to search page)
        if (page !== 'search') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = '';
                this.hideSearchSuggestions();
            }
        }
        
        switch(page) {
            case 'home':
                mainContent.innerHTML = this.getHomePage();
                break;
            case 'table':
                mainContent.innerHTML = this.getTablePage();
                break;
            case 'fixtures':
                mainContent.innerHTML = this.getFixturesPage();
                break;
            case 'news':
                mainContent.innerHTML = this.getNewsPage();
                break;
            case 'clubs':
                mainContent.innerHTML = this.getClubsPage();
                break;
            case 'players':
                mainContent.innerHTML = this.getPlayersPage(params);
                break;
            case 'ai':
                mainContent.innerHTML = this.getAIPage();
                break;
            case 'lineup':
                mainContent.innerHTML = this.getLineupPage(params.matchId);
                break;
            case 'match-stats':
                mainContent.innerHTML = this.getMatchStatsPage(params.matchId);
                break;
            case 'search':
                mainContent.innerHTML = this.getSearchPage(params.query || '');
                // Set up real-time search after page loads
                this.setupSearchPageEvents();
                break;
            default:
                mainContent.innerHTML = this.getHomePage();
        }
    }

    getHomePage() {
        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">Welcome to Madondo League</h1>
                    <p class="page-subtitle">Experience the excitement of the world's most competitive football league</p>
                </div>
            </div>
            
                            <div class="hero-section">
                    <div class="hero-background">
                        <div class="hero-image active" style="background-image: url('assets/images/hero.jpeg')"></div>
                        <div class="hero-image" style="background-image: url('assets/images/hero-1.jpeg')"></div>
                        <div class="hero-image" style="background-image: url('assets/images/hero-2.jpeg')"></div>
                        <div class="hero-image" style="background-image: url('assets/images/hero-3.jpeg')"></div>
                    </div>
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <button onclick="app.loadPage('fixtures')" class="hero-btn">View Fixtures</button>
                    </div>
                    <div class="hero-indicators">
                        <span class="indicator active" onclick="changeHeroImage(0)"></span>
                        <span class="indicator" onclick="changeHeroImage(1)"></span>
                        <span class="indicator" onclick="changeHeroImage(2)"></span>
                        <span class="indicator" onclick="changeHeroImage(3)"></span>
                    </div>
                </div>

            <div class="stats-row">
                <div class="stat-square" onclick="app.loadPage('clubs')" style="cursor: pointer;">
                    <i class="fas fa-trophy"></i>
                    <h3>${Object.keys(teamsData).length}</h3>
                    <p>Teams</p>
                </div>
                <div class="stat-square" onclick="app.loadPage('fixtures')" style="cursor: pointer;">
                    <i class="fas fa-calendar"></i>
                    <h3>${websiteData.fixtures.length}</h3>
                    <p>Matches</p>
                </div>
                <div class="stat-square" onclick="app.loadPage('players')" style="cursor: pointer;">
                    <i class="fas fa-users"></i>
                    <h3>${this.getAllPlayersWithStats().length}</h3>
                    <p>Players</p>
                </div>
                <div class="stat-square" onclick="app.loadPage('news')" style="cursor: pointer;">
                    <i class="fas fa-newspaper"></i>
                    <h3>${websiteData.news.length}</h3>
                    <p>News</p>
                </div>
            </div>

            <div class="home-sections">
                <div class="home-section">
                    <div class="section-header">
                        <h2>🏆 League Table</h2>
                        <button onclick="app.loadPage('table')" class="view-all-btn">View Full Table</button>
                    </div>
                    <div class="table-preview">
                        ${this.calculateLeagueTable().slice(0, 5).map((team, index) => `
                            <div class="table-row" onclick="app.viewTeamDetails('${team.id}')" style="cursor: pointer;">
                                <div class="position">${index + 1}</div>
                                <div class="team-info">
                                    <img src="${teamsData[team.id]?.logo}" alt="${team.name}" class="team-logo-small" onerror="this.style.display='none'">
                                    <span class="team-name">${team.name}</span>
                                </div>
                                <div class="points">${team.points}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="home-section">
                    <div class="section-header">
                        <h2>📅 Upcoming Matches</h2>
                        <button onclick="app.loadPage('fixtures')" class="view-all-btn">View All Fixtures</button>
                    </div>
                    <div class="fixtures-preview">
                        ${websiteData.fixtures.filter(f => f.status === 'scheduled' || f.status === 'upcoming').slice(0, 3).map(fixture => {
                            const homeTeam = teamsData[fixture.homeTeam];
                            const awayTeam = teamsData[fixture.awayTeam];
                            return `
                                <div class="fixture-preview" onclick="app.loadPage('fixtures')" style="cursor: pointer;">
                                    <div class="fixture-teams">
                                        <div class="team">
                                            <img src="${homeTeam?.logo}" alt="${homeTeam?.name}" class="team-logo-small" onerror="this.style.display='none'">
                                            <span>${homeTeam?.name || fixture.homeTeam}</span>
                                        </div>
                                        <div class="vs">vs</div>
                                        <div class="team">
                                            <img src="${awayTeam?.logo}" alt="${awayTeam?.name}" class="team-logo-small" onerror="this.style.display='none'">
                                            <span>${awayTeam?.name || fixture.awayTeam}</span>
                                        </div>
                                    </div>
                                    <div class="fixture-date">${this.formatDate(fixture.date)}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="home-section">
                    <div class="section-header">
                        <h2>📰 Latest News</h2>
                        <button onclick="app.loadPage('news')" class="view-all-btn">View All News</button>
                    </div>
                    <div class="news-preview">
                        ${websiteData.news.slice(0, 3).map(news => `
                            <div class="news-item" onclick="app.showNewsDetail('${news.id}')" style="cursor: pointer;">
                                <div class="news-category-badge ${news.category.toLowerCase()}">
                                    ${this.getCategoryIcon(news.category)} ${news.category}
                                </div>
                                <h4 class="news-title">${news.title}</h4>
                                <p class="news-excerpt">${this.truncateText(news.content, 80)}</p>
                                <small class="news-date">${this.formatNewsDate(news.date)}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    getTablePage() {
        const leagueTable = this.calculateLeagueTable();
        
        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">Madondo League Table</h1>
                    <p class="page-subtitle">Current standings and statistics for all teams in the league</p>
                </div>
            </div>
            
            <div class="table-tabs">
                <button class="table-tab active" onclick="app.switchTableTab('short')" data-tab="short">
                    <i class="fas fa-list"></i>
                    Short
                </button>
                <button class="table-tab" onclick="app.switchTableTab('full')" data-tab="full">
                    <i class="fas fa-table"></i>
                    Full
                </button>
                <button class="table-tab" onclick="app.switchTableTab('form')" data-tab="form">
                    <i class="fas fa-chart-line"></i>
                    Form
                </button>
                <button class="table-tab" onclick="app.switchTableTab('players')" data-tab="players">
                    <i class="fas fa-chart-bar"></i>
                    League Stats
                </button>
            </div>
            
            <div class="table-container">
                <!-- Short Table View -->
                <div id="short-table" class="table-view active">
                    <table class="league-table">
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th>P</th>
                                <th>GD</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${leagueTable.map(team => `
                                <tr>
                                    <td>${team.position}</td>
                                    <td>
                                        <div class="team-name">
                                            <div class="team-logo">
                                                <img src="${teamsData[team.id].logo}" alt="${team.name}" onerror="this.style.display='none'">
                                            </div>
                                            ${team.name}
                                        </div>
                                    </td>
                                    <td>${team.played}</td>
                                    <td>${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
                                    <td><strong>${team.points}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                
                <!-- Full Table View -->
                <div id="full-table" class="table-view">
                    <table class="league-table">
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th>P</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Pts</th>
                                <th>Form</th>
                                <th>Next</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${leagueTable.map(team => {
                                const lastFive = this.getLastFiveResults(team.id);
                                const nextOpponent = this.getNextOpponent(team.id);
                                
                                return `
                                    <tr>
                                        <td>${team.position}</td>
                                        <td>
                                            <div class="team-name">
                                                <div class="team-logo">
                                                    <img src="${teamsData[team.id].logo}" alt="${team.name}" onerror="this.style.display='none'">
                                                </div>
                                                ${team.name}
                                            </div>
                                        </td>
                                        <td>${team.played}</td>
                                        <td>${team.won}</td>
                                        <td>${team.drawn}</td>
                                        <td>${team.lost}</td>
                                        <td>${team.goalsFor}</td>
                                        <td>${team.goalsAgainst}</td>
                                        <td>${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
                                        <td><strong>${team.points}</strong></td>
                                        <td>
                                            <div class="form-results">
                                                ${lastFive.map(resultObj => `<span class="form-result ${resultObj.result}${resultObj.isLatest ? ' latest' : ''}">${resultObj.result.charAt(0).toUpperCase()}</span>`).join('')}
                                            </div>
                                        </td>
                                        <td>
                                            ${nextOpponent === 'TBD' ? 'TBD' : `
                                                <div class="team-name">
                                                    <div class="team-logo">
                                                        <img src="${nextOpponent.logo}" alt="${nextOpponent.name}" onerror="this.style.display='none'">
                                                    </div>
                                                    <span>${nextOpponent.shortName}</span>
                                                </div>
                                            `}
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
                
                <!-- Form Table View -->
                <div id="form-table" class="table-view">
                    <table class="league-table">
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Team</th>
                                <th>Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${leagueTable.map(team => {
                                const lastFive = this.getLastFiveResults(team.id);
                                
                                return `
                                    <tr>
                                        <td>${team.position}</td>
                                        <td>
                                            <div class="team-name">
                                                <div class="team-logo">
                                                    <img src="${teamsData[team.id].logo}" alt="${team.name}" onerror="this.style.display='none'">
                                                </div>
                                                ${team.name}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-results">
                                                ${lastFive.map(resultObj => `<span class="form-result ${resultObj.result}${resultObj.isLatest ? ' latest' : ''}">${resultObj.result.charAt(0).toUpperCase()}</span>`).join('')}
                                            </div>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
                
                <!-- League Stats View -->
                <div id="players-table" class="table-view">
                    <h2>League Statistics</h2>
                    
                    <h3>Top Scorers</h3>
                    <table class="league-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Team</th>
                                <th>Goals</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.getAllPlayersWithStats()
                                .sort((a, b) => b.stats.totalGoals - a.stats.totalGoals)
                                .slice(0, 5)
                                .map((player, index) => `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${player.name}</td>
                                        <td>${player.teamName}</td>
                                        <td class="goals-highlight">${player.stats.totalGoals}</td>
                                    </tr>
                                `).join('')}
                        </tbody>
                    </table>

                    <h3>Top Assists</h3>
                    <table class="league-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Team</th>
                                <th>Assists</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.getAllPlayersWithStats()
                                .sort((a, b) => b.stats.totalAssists - a.stats.totalAssists)
                                .slice(0, 5)
                                .map((player, index) => `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${player.name}</td>
                                        <td>${player.teamName}</td>
                                        <td class="assists-highlight">${player.stats.totalAssists}</td>
                                    </tr>
                                `).join('')}
                        </tbody>
                    </table>

                    <h3>Team Performance</h3>
                    <table class="league-table">
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Goals</th>
                                <th>CS</th>
                                <th>Pos</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${(() => {
                                const leagueTable = this.calculateLeagueTable();
                                const cleanSheets = {};
                                
                                // Calculate clean sheets for each team
                                Object.keys(teamsData).forEach(teamId => {
                                    cleanSheets[teamId] = 0;
                                });
                                
                                // Count clean sheets from completed fixtures
                                websiteData.fixtures.forEach(fixture => {
                                    if (fixture.status === 'completed' && fixture.score) {
                                        const homeTeam = fixture.homeTeam;
                                        const awayTeam = fixture.awayTeam;
                                        const homeScore = fixture.score.home;
                                        const awayScore = fixture.score.away;
                                        
                                        // Home team clean sheet
                                        if (awayScore === 0) {
                                            cleanSheets[homeTeam]++;
                                        }
                                        
                                        // Away team clean sheet
                                        if (homeScore === 0) {
                                            cleanSheets[awayTeam]++;
                                        }
                                    }
                                });
                                
                                return leagueTable.map(team => `
                                    <tr>
                                        <td>
                                            <div class="team-row">
                                                <img src="${teamsData[team.id]?.logo}" alt="${team.name}" class="team-logo" onerror="this.style.display='none'">
                                                <span>${team.name}</span>
                                            </div>
                                        </td>
                                        <td>${team.goalsFor}</td>
                                        <td>${cleanSheets[team.id]}</td>
                                        <td>${team.position}</td>
                                    </tr>
                                `).join('');
                            })()}
                        </tbody>
                    </table>
                    <div class="table-legend">
                        <p><em>Goals = Goals Scored, CS = Clean Sheets, Pos = Position</em></p>
                    </div>
                </div>
            </div>
        `;
    }

    getFixturesPage() {
        // Group fixtures by matchday
        const fixturesByMatchday = {};
        websiteData.fixtures.forEach(fixture => {
            if (!fixturesByMatchday[fixture.matchday]) {
                fixturesByMatchday[fixture.matchday] = [];
            }
            fixturesByMatchday[fixture.matchday].push(fixture);
        });

        // Helper function to count red cards for a team in a match
        const getRedCardCount = (matchId, teamType) => {
            if (!websiteData.lineups[matchId]) return 0;
            
            const lineup = websiteData.lineups[matchId];
            const teamPlayers = teamType === 'home' 
                ? [...lineup.home.starting, ...lineup.home.substitutes]
                : [...lineup.away.starting, ...lineup.away.substitutes];
            
            return teamPlayers.filter(player => player.redCard).length;
        };

        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">Fixtures & Results</h1>
                    <p class="page-subtitle">Upcoming matches and recent results from the Madondo League</p>
                </div>
            </div>
            
            <hr class="page-divider">
            
            <div class="fixtures-container">
                ${Object.keys(fixturesByMatchday).sort((a, b) => parseInt(a) - parseInt(b)).map((matchday, index) => `
                    ${index > 0 ? '<hr class="matchday-divider">' : ''}
                    <div class="matchday-section">
                        <h2 class="matchday-title">Matchday ${matchday}</h2>
                        <div class="fixtures-grid">
                            ${fixturesByMatchday[matchday].map(fixture => {
                                const homeTeam = teamsData[fixture.homeTeam];
                                const awayTeam = teamsData[fixture.awayTeam];
                                const statusColor = this.getStatusColor(fixture.status);
                                const statusText = this.getStatusText(fixture.status);
                                
                                return `
                                    <div class="fixture-card ${fixture.status}">
                                        <div class="fixture-header">
                                            <div class="fixture-date">${this.formatDate(fixture.date)}</div>
                                            <div class="fixture-time">${fixture.time}</div>
                                            <div class="fixture-status" style="color: ${statusColor}; font-weight: bold;">${statusText}</div>
                                        </div>
                                        <div class="fixture-teams">
                                            <div class="team home-team">
                                                <div class="team-name">
                                                    <div class="team-logo">
                                                        <img src="${homeTeam ? homeTeam.logo : ''}" alt="${homeTeam ? homeTeam.name : fixture.homeTeam}" onerror="this.style.display='none'">
                                                    </div>
                                                    <div class="team-info">
                                                        <span class="team-text">${homeTeam ? homeTeam.name : fixture.homeTeam}</span>
                                                        ${fixture.status === 'completed' ? `<div class="red-cards-indicator">${'🟥'.repeat(getRedCardCount(fixture.id, 'home'))}</div>` : ''}
                                                    </div>
                                                </div>
                                                ${fixture.score ? `<div class="team-score">${fixture.score.home}</div>` : ''}
                                            </div>
                                            <div class="fixture-vs">
                                                ${fixture.score ? 'FT' : 'vs'}
                                            </div>
                                            <div class="team away-team">
                                                ${fixture.score ? `<div class="team-score">${fixture.score.away}</div>` : ''}
                                                <div class="team-name">
                                                    <div class="team-logo">
                                                        <img src="${awayTeam ? awayTeam.logo : ''}" alt="${awayTeam ? awayTeam.name : fixture.awayTeam}" onerror="this.style.display='none'">
                                                    </div>
                                                    <div class="team-info">
                                                        <span class="team-text">${awayTeam ? awayTeam.name : fixture.awayTeam}</span>
                                                        ${fixture.status === 'completed' ? `<div class="red-cards-indicator">${'🟥'.repeat(getRedCardCount(fixture.id, 'away'))}</div>` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fixture-venue">
                                            ${homeTeam ? homeTeam.stadium : 'TBD'}
                                        </div>
                                        ${(fixture.status === 'completed' || fixture.status === 'live' || fixture.status === 'scheduled') ? `
                                            <div class="fixture-actions">
                                                <button onclick="app.loadPage('lineup', { matchId: '${fixture.id}' })" class="lineup-btn">
                                                    <i class="fas fa-users"></i> View Lineups
                                                </button>
                                                <button onclick="app.loadPage('match-stats', { matchId: '${fixture.id}' })" class="stats-btn">
                                                    <i class="fas fa-chart-bar"></i> View Match Stats
                                                </button>
                                            </div>
                                        ` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    getNewsPage() {
        const sortedNews = [...websiteData.news].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Debug: Log available categories
        const categories = [...new Set(websiteData.news.map(news => news.category))];
        console.log('Available news categories:', categories);
        
        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">📰 Latest News</h1>
                    <p class="page-subtitle">Stay updated with the latest stories and developments from the Madondo League</p>
                    <div class="news-stats">
                        <span class="news-count">${websiteData.news.length} Articles</span>
                        <span class="news-latest">Latest: ${sortedNews[0]?.date || 'No news'}</span>
                    </div>
                </div>
            </div>
            
            <div class="news-container">
                <div class="news-filters">
                    <button class="filter-btn active" onclick="app.filterNews('all', this)">All News</button>
                    <button class="filter-btn" onclick="app.filterNews('championship', this)">Championship</button>
                    <button class="filter-btn" onclick="app.filterNews('clubs', this)">Clubs</button>
                    <button class="filter-btn" onclick="app.filterNews('players', this)">Players</button>
                    <button class="filter-btn" onclick="app.filterNews('match-report', this)">Match Reports</button>
                    <button class="filter-btn" onclick="app.filterNews('transfers', this)">Transfers</button>
                    <button class="filter-btn" onclick="app.filterNews('team-news', this)">Team News</button>
                    <button class="filter-btn" onclick="app.filterNews('general', this)">General</button>
                </div>
                
                <div class="news-grid" id="news-grid">
                    ${sortedNews.map(news => `
                        <div class="news-card" data-category="${news.category.toLowerCase()}">
                            <div class="news-header">
                                <div class="news-category-badge ${news.category.toLowerCase()}">
                                    ${this.getCategoryIcon(news.category)} ${news.category}
                                </div>
                                <div class="news-date">
                                    <i class="fas fa-calendar-alt"></i>
                                    ${this.formatNewsDate(news.date)}
                                </div>
                            </div>
                            <div class="news-content">
                                <h3 class="news-title">${news.title}</h3>
                                <p class="news-excerpt">${this.truncateText(news.content, 120)}</p>
                                <div class="news-footer">
                                    <button class="read-more-btn" onclick="app.showNewsDetail('${news.id}')">
                                        Read More <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${websiteData.news.length === 0 ? `
                    <div class="no-news">
                        <i class="fas fa-newspaper" style="font-size: 3rem; color: #666; margin-bottom: 1rem;"></i>
                        <h3>No News Available</h3>
                        <p>Check back later for the latest updates from the Madondo League.</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    getClubsPage() {
        const leagueTable = this.calculateLeagueTable();
        
        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">Madondo League Clubs</h1>
                    <p class="page-subtitle">Explore all teams competing in the Madondo League</p>
                </div>
            </div>
            
            <div class="clubs-grid">
                ${Object.values(teamsData).map(team => {
                    const teamStats = leagueTable.find(t => t.id === Object.keys(teamsData).find(key => teamsData[key] === team));
                    return `
                        <div class="club-card">
                            <div class="club-header">
                                <div class="club-logo">
                                    <img src="${team.logo}" alt="${team.name}" onerror="this.style.display='none'">
                                </div>
                                <div class="club-name-container">
                                    <h3>${team.name}</h3>
                                    <div class="verification-badge">
                                        <img src="assets/icons/verified-badge.svg" alt="Verified" width="16" height="16" style="filter: brightness(0) saturate(100%) invert(83%) sepia(100%) saturate(300%) hue-rotate(0deg) brightness(0.8) contrast(1);">
                                    </div>
                                </div>
                            </div>
                            <div class="club-info">
                                <p><strong>Stadium:</strong> ${team.stadium}</p>
                                <p><strong>Manager:</strong> 
                                    ${team.manager}
                                    <img src="assets/icons/verified-badge.svg" alt="Verified" width="16" height="16" style="filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.6) contrast(1); margin-left: 0.3rem;">
                                </p>
                                <p><strong>Founder:</strong> 
                                    ${team.founder}
                                    <img src="assets/icons/verified-badge.svg" alt="Verified" width="16" height="16" style="filter: brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.6) contrast(1); margin-left: 0.3rem;">
                                </p>
                                <p><strong>Founded:</strong> ${team.founded}</p>
                                <p><strong>Titles:</strong> ${team.titles}</p>
                                ${teamStats ? `
                                    <div class="club-stats">
                                        <div class="club-stat">
                                            <div><strong>${teamStats.position}</strong></div>
                                            <div>Position</div>
                                        </div>
                                        <div class="club-stat">
                                            <div><strong>${teamStats.points}</strong></div>
                                            <div>Points</div>
                                        </div>
                                        <div class="club-stat">
                                            <div><strong>${teamStats.played}</strong></div>
                                            <div>Played</div>
                                        </div>
                                        <div class="club-stat">
                                            <div><strong>${teamStats.goalsFor}</strong></div>
                                            <div>Goals</div>
                                        </div>
                                    </div>
                                ` : ''}
                                <div class="club-view-more">
                                    <button onclick="app.viewTeamDetails('${Object.keys(teamsData).find(key => teamsData[key] === team)}')" class="view-more-btn">
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // Calculate dynamic player stats from lineup data
    calculatePlayerStats(playerId) {
        let totalGoals = 0;
        let totalAssists = 0;
        let ownGoals = 0;
        let matchesPlayed = 0;
        let yellowCards = 0;
        let redCards = 0;
        let totalMinutes = 0;
        let starts = 0;
        let substitutions = 0;

        // Loop through all matches
        Object.values(websiteData.lineups).forEach(match => {
            // Check home team
            [...match.home.starting, ...match.home.substitutes].forEach(player => {
                if (player.playerId === playerId) {
                    matchesPlayed++;
                    
                    // Count regular goals (not own goals)
                    if (player.goals > 0) {
                        if (player.goalTypes && player.goalTypes.includes('own')) {
                            // This is an own goal - it counts for the opposing team
                            ownGoals += player.goals;
                        } else {
                            // This is a regular goal for their own team
                            totalGoals += player.goals;
                        }
                    }
                    
                    totalAssists += player.assists || 0;
                    
                    if (player.yellowCard) yellowCards++;
                    if (player.redCard) redCards++;
                    
                    // Calculate minutes played
                    if (match.home.starting.includes(player)) {
                        starts++;
                        // Starting player - full 90 minutes unless substituted
                        if (player.substituted) {
                            totalMinutes += player.substitutionMinute || 90;
                        } else {
                            totalMinutes += 90;
                        }
                    } else {
                        substitutions++;
                        // Substitute - minutes from when they came on
                        if (player.substitutionMinute) {
                            totalMinutes += (90 - player.substitutionMinute);
                        }
                    }
                }
            });
            
            // Check away team
            [...match.away.starting, ...match.away.substitutes].forEach(player => {
                if (player.playerId === playerId) {
                    matchesPlayed++;
                    
                    // Count regular goals (not own goals)
                    if (player.goals > 0) {
                        if (player.goalTypes && player.goalTypes.includes('own')) {
                            // This is an own goal - it counts for the opposing team
                            ownGoals += player.goals;
                        } else {
                            // This is a regular goal for their own team
                            totalGoals += player.goals;
                        }
                    }
                    
                    totalAssists += player.assists || 0;
                    
                    if (player.yellowCard) yellowCards++;
                    if (player.redCard) redCards++;
                    
                    // Calculate minutes played
                    if (match.away.starting.includes(player)) {
                        starts++;
                        // Starting player - full 90 minutes unless substituted
                        if (player.substituted) {
                            totalMinutes += player.substitutionMinute || 90;
                        } else {
                            totalMinutes += 90;
                        }
                    } else {
                        substitutions++;
                        // Substitute - minutes from when they came on
                        if (player.substitutionMinute) {
                            totalMinutes += (90 - player.substitutionMinute);
                        }
                    }
                }
            });
        });

        return {
            totalGoals: totalGoals,
            totalAssists: totalAssists,
            ownGoals,
            matchesPlayed,
            yellowCards,
            redCards,
            totalMinutes,
            starts,
            substitutions
        };
    }

    getPlayersPage(params = {}) {
        // Helper function to find player by ID
        const findPlayerById = (playerId) => {
            for (const teamId in websiteData.players) {
                const player = websiteData.players[teamId].find(p => p.id === playerId);
                if (player) {
                    return { player, teamId };
                }
            }
            return null;
        };

        // If a specific player is requested, show that player's details
        if (params.playerId) {
            const playerData = findPlayerById(params.playerId);
            if (playerData) {
                const { player, teamId } = playerData;
                const teamName = teamsData[teamId].name;
                const dynamicStats = this.calculatePlayerStats(player.id);
                
                return `
                    <div class="player-profile-container">
                        <!-- Hero Section -->
                        <div class="player-hero">
                            <div class="player-hero-simple">
                                <div class="player-avatar-simple">
                                    <img src="assets/players/${player.id}.jpg" 
                                         alt="${player.name}" 
                                         style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"
                                         onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-user\\'></i>';">
                                </div>
                                <div class="player-hero-details">
                                    <h1 class="player-name-simple">
                                        ${player.name}
                                        <img src="assets/icons/verified-badge.svg" alt="Verified" class="verified-badge-profile">
                                    </h1>
                                    ${player.captain ? '<p class="captain-title">Captain (C)</p>' : ''}
                                    <div class="player-details-row">
                                        <span class="player-club">${teamName}</span>
                                        <span class="player-position">${player.position}</span>
                                        <span class="player-nationality">${player.nationality}</span>
                                    </div>
                                    <div class="player-stats-row">
                                        <div class="hero-stat-simple">
                                            <span class="stat-label">Goals</span>
                                            <span class="stat-value">${dynamicStats.totalGoals}</span>
                                        </div>
                                        <div class="hero-stat-simple">
                                            <span class="stat-label">Assists</span>
                                            <span class="stat-value">${dynamicStats.totalAssists}</span>
                                        </div>
                                        <div class="hero-stat-simple">
                                            <span class="stat-label">Own Goals</span>
                                            <span class="stat-value">${dynamicStats.ownGoals}</span>
                                        </div>
                                        <div class="hero-stat-simple">
                                            <span class="stat-label">Cards</span>
                                            <span class="stat-value">${dynamicStats.yellowCards + dynamicStats.redCards}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Main Content -->
                        <div class="player-content">
                            <div class="player-info-section">
                                <h2>Player Information</h2>
                                <div class="player-info-compact">
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">Full Name:</span>
                                        <span class="info-value-compact">${player.name}</span>
                                    </div>
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">Club:</span>
                                        <span class="info-value-compact">${teamName}</span>
                                    </div>
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">Position:</span>
                                        <span class="info-value-compact">${player.position}</span>
                                    </div>
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">Nationality:</span>
                                        <span class="info-value-compact">${player.nationality}</span>
                                    </div>
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">Age:</span>
                                        <span class="info-value-compact">${player.age} years</span>
                                    </div>
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">League:</span>
                                        <span class="info-value-compact">Madondo League</span>
                                    </div>
                                    ${player.captain ? `
                                    <div class="info-row-compact">
                                        <span class="info-label-compact">Role:</span>
                                        <span class="info-value-compact captain-role">Team Captain</span>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>

                            <div class="player-stats-section">
                                <h2>Season Statistics</h2>
                                <div class="stats-compact-grid">
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.totalGoals}</div>
                                        <div class="stat-text-compact">Goals</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.totalAssists}</div>
                                        <div class="stat-text-compact">Assists</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.ownGoals}</div>
                                        <div class="stat-text-compact">⚽ Own Goals</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.totalGoals + dynamicStats.totalAssists}</div>
                                        <div class="stat-text-compact">Total Contributions</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.matchesPlayed}</div>
                                        <div class="stat-text-compact">Matches Played</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.matchesPlayed > 0 ? (dynamicStats.totalGoals / dynamicStats.matchesPlayed).toFixed(2) : '0.00'}</div>
                                        <div class="stat-text-compact">Goals per Game</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.yellowCards}</div>
                                        <div class="stat-text-compact">🟨 Yellow Cards</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.redCards}</div>
                                        <div class="stat-text-compact">🟥 Red Cards</div>
                                    </div>
                                    <div class="stat-compact">
                                        <div class="stat-number-compact">${dynamicStats.yellowCards + dynamicStats.redCards}</div>
                                        <div class="stat-text-compact">Total Cards</div>
                                    </div>
                                </div>
                            </div>

                            <div class="player-match-stats-section">
                                <h2>Match Statistics</h2>
                                <div class="match-stats-grid">
                                    <div class="match-stat-item">
                                        <div class="match-stat-number">${dynamicStats.totalMinutes}</div>
                                        <div class="match-stat-label">Total Minutes</div>
                                    </div>
                                    <div class="match-stat-item">
                                        <div class="match-stat-number">${dynamicStats.starts}</div>
                                        <div class="match-stat-label">Starts</div>
                                    </div>
                                    <div class="match-stat-item">
                                        <div class="match-stat-number">${dynamicStats.substitutions}</div>
                                        <div class="match-stat-label">Sub Appearances</div>
                                    </div>
                                    <div class="match-stat-item">
                                        <div class="match-stat-number">${dynamicStats.matchesPlayed > 0 ? Math.round(dynamicStats.totalMinutes / dynamicStats.matchesPlayed) : 0}</div>
                                        <div class="match-stat-label">Avg Minutes per Game</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="player-actions">
                                <button onclick="app.loadPage('players')" class="action-btn back-btn">
                                    <i class="fas fa-arrow-left"></i>
                                    Back to All Players
                                </button>
                                <button onclick="app.loadPage('fixtures')" class="action-btn fixtures-btn">
                                    <i class="fas fa-calendar"></i>
                                    View Fixtures
                                </button>
                                <button onclick="app.loadPage('table')" class="action-btn table-btn">
                                    <i class="fas fa-table"></i>
                                    League Table
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        
        // Show all players grouped by teams (compact view)
        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">Players by Team</h1>
                    <p class="page-subtitle">Discover the stars and rising talents of the Madondo League</p>
                </div>
            </div>
            
            <div class="players-controls">
                <div class="players-search-sort">
                    <div class="players-search">
                        <input type="text" id="players-search-input" placeholder="Search players..." class="players-search-field" oninput="filterPlayers()">
                        <button id="players-search-btn" class="players-search-button" onclick="filterPlayers()">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <div class="players-sort">
                        <select id="players-sort-select" class="players-sort-dropdown" onchange="sortPlayers()">
                            <option value="name">📝 Sort by Name (A-Z)</option>
                            <option value="name-desc">📝 Sort by Name (Z-A)</option>
                            <option value="position">⚽ Sort by Position</option>
                            <option value="number">🔢 Sort by Shirt Number</option>
                            <option value="team">🏆 Sort by Team</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="players-modern-container" id="players-results-container">
                ${Object.keys(websiteData.players).map(teamId => {
                    const teamPlayers = websiteData.players[teamId];
                    const teamData = teamsData[teamId];
                    
                    return `
                        <div class="team-modern-section">
                            <div class="team-modern-header">
                                <div class="team-modern-info">
                                    <img src="${teamData.logo}" alt="${teamData.name}" class="team-modern-logo" onerror="this.style.display='none'">
                                    <div class="team-modern-details">
                                        <h3 class="team-modern-name">${teamData.name}</h3>
                                        <span class="team-modern-count">${teamPlayers.length} players</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="players-modern-list">
                                ${teamPlayers.map(player => {
                                    const playerStats = this.calculatePlayerStats(player.id);
                                    return `
                                        <div class="player-modern-row" onclick="app.loadPage('players', { playerId: '${player.id}' })">
                                            <div class="player-modern-avatar">
                                                <img src="assets/players/${player.id}.jpg" 
                                                     alt="${player.name}" 
                                                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"
                                                     onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-user\\'></i>';">
                                            </div>
                                            <div class="player-modern-content">
                                                <div class="player-modern-name">
                                                    ${player.name}
                                                    <img src="assets/icons/verified-badge.svg" alt="Verified" class="verified-badge-modern">
                                                    ${player.captain ? '<span class="captain-indicator">👑</span>' : ''}
                                                </div>
                                                <div class="player-modern-details">
                                                    <span class="player-modern-position">${player.position}</span>
                                                    <span class="player-modern-number">#${player.number}</span>
                                                    ${player.captain ? '<span class="captain-text">(C)</span>' : ''}
                                                </div>

                                                <div class="player-modern-hint">
                                                    <i>View full profile</i>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    switchLineupTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.lineup-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected tab
        document.getElementById(`${tabName}-tab`).classList.add('active');
        
        // Add active class to clicked button
        event.target.classList.add('active');
    }

    getMatchStatsPage(matchId) {
        const fixture = websiteData.fixtures.find(f => f.id === matchId);
        if (!fixture) {
            return `
                <div class="page-header">
                    <div class="page-header-content">
                        <h1 class="page-title">Match Not Found</h1>
                        <p class="page-subtitle">The requested match could not be found.</p>
                    </div>
                </div>
            `;
        }

        const homeTeam = teamsData[fixture.homeTeam];
        const awayTeam = teamsData[fixture.awayTeam];
        const lineup = websiteData.lineups[matchId];
        
        if (!lineup) {
            return `
                <div class="page-header">
                    <div class="page-header-content">
                        <h1 class="page-title">Match Stats Not Available</h1>
                        <p class="page-subtitle">Statistics are not available for this match.</p>
                    </div>
                </div>
            `;
        }

        // Calculate match statistics
        const homeGoals = fixture.score ? fixture.score.home : 0;
        const awayGoals = fixture.score ? fixture.score.away : 0;
        
        // Count actual number of cards (not just players with cards)
        const homeYellowCards = [...lineup.home.starting, ...lineup.home.substitutes]
            .filter(p => p.yellowCard && p.yellowCardMinutes)
            .reduce((total, p) => total + p.yellowCardMinutes.length, 0);
        const awayYellowCards = [...lineup.away.starting, ...lineup.away.substitutes]
            .filter(p => p.yellowCard && p.yellowCardMinutes)
            .reduce((total, p) => total + p.yellowCardMinutes.length, 0);
        const homeRedCards = [...lineup.home.starting, ...lineup.home.substitutes]
            .filter(p => p.redCard && p.redCardMinutes)
            .reduce((total, p) => total + p.redCardMinutes.length, 0);
        const awayRedCards = [...lineup.away.starting, ...lineup.away.substitutes]
            .filter(p => p.redCard && p.redCardMinutes)
            .reduce((total, p) => total + p.redCardMinutes.length, 0);
        
        const homeSubs = lineup.home.substitutes.filter(p => p.substituted).length;
        const awaySubs = lineup.away.substitutes.filter(p => p.substituted).length;

        // Check if any team has cards
        const hasHomeCards = homeYellowCards > 0 || homeRedCards > 0;
        const hasAwayCards = awayYellowCards > 0 || awayRedCards > 0;

        return `
            <div class="match-stats-container">
                <div class="match-stats-header">
                    <h1>
                        <img src="${homeTeam.logo}" alt="${homeTeam.name}" class="team-logo" onerror="this.style.display='none'">
                        <span class="team-name">${homeTeam.name}</span>
                        <span class="vs-text">vs</span>
                        <span class="team-name">${awayTeam.name}</span>
                        <img src="${awayTeam.logo}" alt="${awayTeam.name}" class="team-logo" onerror="this.style.display='none'">
                    </h1>
                    <div class="match-score">
                        <span class="team-score">${homeGoals}</span>
                        <span class="score-separator">-</span>
                        <span class="team-score">${awayGoals}</span>
                    </div>
                    <div class="match-status">${fixture.status.toUpperCase()}</div>
                    <button onclick="app.loadPage('fixtures')" class="back-btn">Back to Fixtures</button>
                </div>

                <div class="simple-stats">
                    <div class="stats-section">
                        <h3>Score Summary</h3>
                        <div class="score-breakdown">
                            <div class="team-score-row">
                                <span class="team-name">${homeTeam.name}</span>
                                <span class="score">${homeGoals}</span>
                            </div>
                            <div class="team-score-row">
                                <span class="team-name">${awayTeam.name}</span>
                                <span class="score">${awayGoals}</span>
                            </div>
                        </div>
                    </div>

                    <hr class="section-divider">

                    ${lineup.playerOfTheMatch ? `
                    <div class="stats-section">
                        <h3>Player of the Match</h3>
                        <div class="player-of-match">
                            <span class="potm-simple">🏆 ${lineup.playerOfTheMatch.name} (${teamsData[lineup.playerOfTheMatch.team] ? teamsData[lineup.playerOfTheMatch.team].name : lineup.playerOfTheMatch.team})</span>
                        </div>
                    </div>

                    <hr class="section-divider">
                    ` : ''}

                    ${hasHomeCards || hasAwayCards ? `
                    <div class="stats-section">
                        <h3>Cards</h3>
                        <div class="cards-summary">
                            ${hasHomeCards ? `
                            <div class="team-cards">
                                <div class="team-name">${homeTeam.name}</div>
                                <div class="cards-row">
                                    ${homeYellowCards > 0 ? `<span class="yellow-cards">🟨 ${homeYellowCards}</span>` : ''}
                                    ${homeRedCards > 0 ? `<span class="red-cards">🟥 ${homeRedCards}</span>` : ''}
                                </div>
                            </div>
                            ` : ''}
                            ${hasAwayCards ? `
                            <div class="team-cards">
                                <div class="team-name">${awayTeam.name}</div>
                                <div class="cards-row">
                                    ${awayYellowCards > 0 ? `<span class="yellow-cards">🟨 ${awayYellowCards}</span>` : ''}
                                    ${awayRedCards > 0 ? `<span class="red-cards">🟥 ${awayRedCards}</span>` : ''}
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    ` : ''}

                    <hr class="section-divider">

                    <div class="stats-section">
                        <h3>Substitutions</h3>
                        <div class="substitutions-summary">
                            <div class="team-subs">
                                <div class="team-name">${homeTeam.name}</div>
                                <div class="subs-count">${homeSubs} substitutions</div>
                            </div>
                            <div class="team-subs">
                                <div class="team-name">${awayTeam.name}</div>
                                <div class="subs-count">${awaySubs} substitutions</div>
                            </div>
                        </div>
                    </div>

                    <hr class="section-divider">

                    <div class="stats-section">
                        <h3>Goal Scorers</h3>
                        <div class="goal-scorers">
                            ${this.getGoalScorers(lineup)}
                        </div>
                    </div>

                    <hr class="section-divider">

                    <div class="stats-section">
                        <h3>Card Details</h3>
                        <div class="card-details">
                            ${this.getCardDetails(lineup)}
                        </div>
                    </div>

                    <hr class="section-divider">

                    <div class="stats-section">
                        <h3>Substitution Details</h3>
                        <div class="substitution-details">
                            ${this.getSubstitutionDetails(lineup, matchId)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getLineupPage(matchId) {
        const fixture = websiteData.fixtures.find(f => f.id === matchId);
        if (!fixture) {
            return `
                <div class="page-header">
                    <div class="page-header-content">
                        <h1 class="page-title">Match Not Found</h1>
                        <p class="page-subtitle">The requested match could not be found.</p>
                    </div>
                </div>
            `;
        }

        const homeTeam = teamsData[fixture.homeTeam];
        const awayTeam = teamsData[fixture.awayTeam];
        const lineup = websiteData.lineups[matchId];
        
        if (!lineup) {
            return `
                <div class="page-header">
                    <div class="page-header-content">
                        <h1 class="page-title">Lineups Not Available</h1>
                        <p class="page-subtitle">Lineup information is not available for this match.</p>
                    </div>
                </div>
            `;
        }

        return `
            <div class="lineup-container">
                <div class="lineup-header">
                    <h1>${homeTeam.name} vs ${awayTeam.name}</h1>
                                                <div class="lineup-tabs">
                                <button class="tab-btn active" onclick="app.switchLineupTab('home')">${homeTeam.name}</button>
                                <button class="tab-btn" onclick="app.switchLineupTab('away')">${awayTeam.name}</button>
                            </div>
                    <button onclick="app.loadPage('fixtures')" class="back-btn">Back</button>
                </div>
                
                <hr class="lineup-divider">
                
                <!-- Home Team Tab -->
                <div id="home-tab" class="lineup-tab active">
                    <div class="team-section">
                        <h2>${homeTeam.name}</h2>
                        <h3>Starting XI</h3>
                        <div class="players-list">
                            ${lineup.home.starting.map(player => `
                                <div class="player-row">
                                    <span class="player-number">${player.number}</span>
                                    <span class="player-name ${player.playerId ? 'clickable-player' : ''}" ${player.playerId ? `onclick="app.loadPage('players', { playerId: '${player.playerId}' })"` : ''}>${player.name}${player.captain ? ' (C)' : ''}</span>
                                    <span class="player-position">${player.position}</span>
                                    ${player.goals > 0 ? `<span class="player-stats">⚽ ${player.goals} ${this.getGoalTypeDisplay(player.goalTypes, player.goalMinutes)}</span>` : ''}
                                    ${player.assists > 0 ? `<span class="player-stats">🎯 ${player.assists} (${player.assistMinutes.join(', ')}')</span>` : ''}
                                    ${player.yellowCard ? `<span class="player-stats">🟨 (${player.yellowCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.redCard ? `<span class="player-stats">🟥 ${player.redCardFromTwoYellows ? '<div class="two-yellows">🟨🟨</div>' : ''}(${player.redCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.substituted ? `<span class="player-stats">🔄 ${player.substitutionMinute}'</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                        
                        <hr class="section-divider">
                        
                        <h3>Substitutes</h3>
                        <div class="players-list">
                            ${lineup.home.substitutes.map(player => `
                                <div class="player-row">
                                    <span class="player-number">${player.number}</span>
                                    <span class="player-name ${player.playerId ? 'clickable-player' : ''}" ${player.playerId ? `onclick="app.loadPage('players', { playerId: '${player.playerId}' })"` : ''}>${player.name}${player.captain ? ' (C)' : ''}</span>
                                    <span class="player-position">${player.position}</span>
                                    ${player.goals > 0 ? `<span class="player-stats">⚽ ${player.goals} ${player.goalTypes && player.goalTypes.includes('penalty') ? 'P' : ''}${player.goalTypes && player.goalTypes.includes('own') ? 'OG' : ''}(${player.goalMinutes.join(', ')}')</span>` : ''}
                                    ${player.assists > 0 ? `<span class="player-stats">🎯 ${player.assists} (${player.assistMinutes.join(', ')}')</span>` : ''}
                                    ${player.yellowCard ? `<span class="player-stats">🟨 (${player.yellowCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.redCard ? `<span class="player-stats">🟥 ${player.redCardFromTwoYellows ? '<div class="two-yellows">🟨🟨</div>' : ''}(${player.redCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.substituted ? `<span class="player-stats">🔄 ${player.substitutionMinute}' (for #${player.cameOnFor})</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Away Team Tab -->
                <div id="away-tab" class="lineup-tab">
                    <div class="team-section">
                        <h2>${awayTeam.name}</h2>
                        <h3>Starting XI</h3>
                        <div class="players-list">
                            ${lineup.away.starting.map(player => `
                                <div class="player-row">
                                    <span class="player-number">${player.number}</span>
                                    <span class="player-name ${player.playerId ? 'clickable-player' : ''}" ${player.playerId ? `onclick="app.loadPage('players', { playerId: '${player.playerId}' })"` : ''}>${player.name}${player.captain ? ' (C)' : ''}</span>
                                    <span class="player-position">${player.position}</span>
                                    ${player.goals > 0 ? `<span class="player-stats">⚽ ${player.goals} ${player.goalTypes && player.goalTypes.includes('penalty') ? 'P' : ''}${player.goalTypes && player.goalTypes.includes('own') ? 'OG' : ''}(${player.goalMinutes.join(', ')}')</span>` : ''}
                                    ${player.assists > 0 ? `<span class="player-stats">🎯 ${player.assists} (${player.assistMinutes.join(', ')}')</span>` : ''}
                                    ${player.yellowCard ? `<span class="player-stats">🟨 (${player.yellowCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.redCard ? `<span class="player-stats">🟥 ${player.redCardFromTwoYellows ? '<div class="two-yellows">🟨🟨</div>' : ''}(${player.redCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.substituted ? `<span class="player-stats">🔄 ${player.substitutionMinute}'</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                        
                        <hr class="section-divider">
                        
                        <h3>Substitutes</h3>
                        <div class="players-list">
                            ${lineup.away.substitutes.map(player => `
                                <div class="player-row">
                                    <span class="player-number">${player.number}</span>
                                    <span class="player-name ${player.playerId ? 'clickable-player' : ''}" ${player.playerId ? `onclick="app.loadPage('players', { playerId: '${player.playerId}' })"` : ''}>${player.name}${player.captain ? ' (C)' : ''}</span>
                                    <span class="player-position">${player.position}</span>
                                    ${player.goals > 0 ? `<span class="player-stats">⚽ ${player.goals} ${player.goalTypes && player.goalTypes.includes('penalty') ? 'P' : ''}${player.goalTypes && player.goalTypes.includes('own') ? 'OG' : ''}(${player.goalMinutes.join(', ')}')</span>` : ''}
                                    ${player.assists > 0 ? `<span class="player-stats">🎯 ${player.assists} (${player.assistMinutes.join(', ')}')</span>` : ''}
                                    ${player.yellowCard ? `<span class="player-stats">🟨 (${player.yellowCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.redCard ? `<span class="player-stats">🟥 ${player.redCardFromTwoYellows ? '<div class="two-yellows">🟨🟨</div>' : ''}(${player.redCardMinutes.join(', ')}')</span>` : ''}
                                    ${player.substituted ? `<span class="player-stats">🔄 ${player.substitutionMinute}' (for #${player.cameOnFor})</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                


            </div>
        `;
    }

    getAIPage() {
        return `
            <div class="page-header">
                <div class="page-header-content">
                    <h1 class="page-title">AI Assistant</h1>
                    <p class="page-subtitle">Your intelligent companion for everything about the Madondo League</p>
                </div>
            </div>
            
            <div class="ai-page-container">
                <div class="ai-quick-actions">
                    <button class="ai-quick-action" onclick="app.sendQuickMessage('Show me the current league table')">
                        <i class="fas fa-table"></i>
                        League Table
                    </button>
                    <button class="ai-quick-action" onclick="app.sendQuickMessage('Who are the top players?')">
                        <i class="fas fa-star"></i>
                        Top Players
                    </button>
                    <button class="ai-quick-action" onclick="app.sendQuickMessage('What are the upcoming fixtures?')">
                        <i class="fas fa-calendar"></i>
                        Upcoming Fixtures
                    </button>
                    <button class="ai-quick-action" onclick="app.sendQuickMessage('Tell me the latest news')">
                        <i class="fas fa-newspaper"></i>
                        Latest News
                    </button>
                </div>
                
                <div class="ai-chat-container">
                    <div class="ai-chat-header">
                        <div class="ai-avatar">🤖</div>
                        <div class="ai-info">
                            <h2>Madondo AI</h2>
                            <p>League Expert Assistant</p>
                        </div>
                    </div>
                    <div class="ai-messages" id="aiMessages">
                        <div class="ai-message bot">
                            Hello! I'm Madondo AI, your intelligent assistant for everything about the Madondo League! 🏆
                            <br><br>
                            I can help you with:
                            <br>• 📊 Team standings & statistics
                            <br>• ⭐ Player performance & information
                            <br>• 📅 Fixtures & match results
                            <br>• 📰 Latest news & updates
                            <br>• 🏆 League history & records
                            <br><br>
                            Just ask me anything or use the quick action buttons above!
                        </div>
                    </div>
                    <div class="ai-input-container">
                        <input type="text" class="ai-input" id="aiInput" placeholder="Ask me anything about the league..." onkeypress="if(event.key === 'Enter') app.sendAIMessage();">
                        <button class="ai-send" onclick="app.sendAIMessage()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getSearchPage(query) {
        const results = this.searchData(query);
        
        return `
            <div class="search-page-container" style="max-width: 1000px; margin: 0 auto; padding: 0 1rem;">
                <div class="search-page-content" style="
                    background: #ffffff; 
                    padding: 1.5rem; 
                    border-radius: 12px; 
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    margin-bottom: 2rem;
                ">
                    <div class="search-page-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                        <div style="font-size: 1.5rem; color: #37003c;">🔍</div>
                        <h1 class="search-page-title" style="margin: 0; color: #212529; font-size: 1.75rem; flex: 1; min-width: 200px;">Search Results</h1>
                        <div id="searchResultsCount" style="color: #6c757d; font-size: 1rem; white-space: nowrap;">${results.length} result${results.length !== 1 ? 's' : ''}</div>
                    </div>
                    
                    <div style="
                        background: #f8f9fa; 
                        padding: 1rem; 
                        border-radius: 8px; 
                        border: 1px solid #e9ecef;
                        margin-bottom: 1.5rem;
                    ">
                        <div class="search-input-container" style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                            <input type="text" 
                                id="searchPageInput" 
                                class="search-page-input"
                                value="${query}" 
                                placeholder="Search for clubs, players, news, or fixtures..."
                                style="
                                    flex: 1;
                                    min-width: 200px;
                                    padding: 0.75rem 1rem;
                                    border: 1px solid #dee2e6;
                                    border-radius: 6px;
                                    font-size: 1rem;
                                    outline: none;
                                "

                            >
                            <button onclick="app.performSearchFromPage()" 
                                class="search-page-button"
                                style="
                                    background: #37003c;
                                    color: white;
                                    border: none;
                                    padding: 0.75rem 1.5rem;
                                    border-radius: 6px;
                                    cursor: pointer;
                                    font-size: 1rem;
                                    white-space: nowrap;
                                "
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    
                    ${results.length === 0 ? `
                        <div id="searchResultsContainer" style="text-align: center; padding: 2rem; color: #6c757d;">
                            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
                            <h3 style="margin-bottom: 0.5rem;">No results found</h3>
                            <p>Try searching for different terms like club names, player names, or news topics.</p>
                        </div>
                    ` : `
                        <div id="searchResultsContainer" style="display: grid; gap: 1rem;">
                            ${results.map((result, index) => `
                                <div class="search-result-item" style="
                                    background: #ffffff;
                                    border: 1px solid #e9ecef;
                                    border-radius: 8px;
                                    padding: 1rem;
                                    cursor: pointer;
                                    transition: all 0.2s ease;
                                " 
                                onmouseover="this.style.borderColor='#37003c'; this.style.backgroundColor='#f8f9fa';"
                                onmouseout="this.style.borderColor='#e9ecef'; this.style.backgroundColor='#ffffff';"
                                onclick="app.handleSearchResult('${result.type}', '${result.title}'); result.action();"
                                >
                                    <div class="search-result-content" style="display: flex; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
                                        ${result.type === 'Player' ? `
                                        <div class="search-result-icon" style="
                                            width: 50px; 
                                            height: 50px; 
                                            border-radius: 50%; 
                                            overflow: hidden;
                                            border: 2px solid ${this.getTypeColor(result.type)};
                                            display: flex; 
                                            align-items: center; 
                                            justify-content: center; 
                                            background: #f8f9fa;
                                            flex-shrink: 0;
                                        ">
                                            <img src="assets/players/${result.id}.jpg" 
                                                 alt="${result.title}" 
                                                 style="width: 100%; height: 100%; object-fit: cover;"
                                                 onerror="this.style.display='none'; this.parentElement.innerHTML='${this.getTypeIcon(result.type)}'; this.parentElement.style.background='${this.getTypeColor(result.type)}'; this.parentElement.style.color='white'; this.parentElement.style.fontWeight='bold'; this.parentElement.style.fontSize='1.25rem';">
                                        </div>
                                        ` : `
                                        <div class="search-result-icon" style="
                                            width: 50px; 
                                            height: 50px; 
                                            background: ${this.getTypeColor(result.type)}; 
                                            border-radius: 50%; 
                                            display: flex; 
                                            align-items: center; 
                                            justify-content: center; 
                                            color: white; 
                                            font-weight: bold; 
                                            font-size: 1.25rem;
                                            flex-shrink: 0;
                                        ">
                                            ${this.getTypeIcon(result.type)}
                                        </div>
                                        `}
                                        <div class="search-result-text" style="flex: 1; min-width: 200px;">
                                            <h3 class="search-result-title" style="margin: 0 0 0.5rem 0; color: #212529; font-size: 1.25rem; word-wrap: break-word;">${result.title}</h3>
                                            <p class="search-result-description" style="margin: 0 0 0.25rem 0; color: #6c757d; font-size: 1rem; word-wrap: break-word;"><strong style="color: ${this.getTypeColor(result.type)};">${result.type}</strong> - ${result.description}</p>
                                            <p style="margin: 0; color: #adb5bd; font-size: 0.875rem; font-family: monospace; word-wrap: break-word;">ID: ${result.id}</p>
                                        </div>
                                    </div>
                                    ${this.getDetailedInfo(result)}
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    searchData(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return [];

        const results = [];

        // Search in clubs
        const leagueTable = this.calculateLeagueTable();
        Object.values(teamsData).forEach(team => {
            const teamId = Object.keys(teamsData).find(key => teamsData[key] === team);
            const teamStats = leagueTable.find(t => t.id === teamId);
            
            if (team.name.toLowerCase().includes(searchTerm) || 
                team.shortName.toLowerCase().includes(searchTerm)) {
                results.push({
                    id: teamId,
                    type: 'Club',
                    title: team.name,
                    description: teamStats ? `Position: ${teamStats.position}, Points: ${teamStats.points}` : `${team.stadium} • ${team.manager}`,
                    details: {
                        id: teamId,
                        name: team.name,
                        stadium: team.stadium,
                        manager: team.manager,
                        founded: team.founded,
                        titles: team.titles,
                        position: teamStats ? teamStats.position : 'N/A',
                        points: teamStats ? teamStats.points : 0,
                        played: teamStats ? teamStats.played : 0,
                        won: teamStats ? teamStats.won : 0,
                        drawn: teamStats ? teamStats.drawn : 0,
                        lost: teamStats ? teamStats.lost : 0,
                        goalsFor: teamStats ? teamStats.goalsFor : 0,
                        goalsAgainst: teamStats ? teamStats.goalsAgainst : 0,
                        goalDifference: teamStats ? teamStats.goalDifference : 0
                    },
                    action: () => this.loadPage('clubs')
                });
            }
        });

        // Search in players
        Object.keys(websiteData.players).forEach(teamId => {
            const teamName = teamsData[teamId].name;
            websiteData.players[teamId].forEach(player => {
                const playerStats = this.calculatePlayerStats(player.id);
            if (player.name.toLowerCase().includes(searchTerm) || 
                    teamName.toLowerCase().includes(searchTerm) ||
                player.position.toLowerCase().includes(searchTerm) ||
                player.nationality.toLowerCase().includes(searchTerm)) {
                results.push({
                    id: player.id,
                    type: 'Player',
                    title: player.name,
                        description: `${player.position} at ${teamName} - ${playerStats.totalGoals} goals, ${playerStats.totalAssists} assists`,
                    details: {
                        id: player.id,
                            club: teamName,
                        position: player.position,
                        age: player.age,
                        nationality: player.nationality,
                                                    goals: playerStats.totalGoals,
                        assists: playerStats.totalAssists
                    },
                    action: () => this.loadPage('players')
                });
            }
            });
        });

        // Search in news
        websiteData.news.forEach(news => {
            if (news.title.toLowerCase().includes(searchTerm) || 
                news.content.toLowerCase().includes(searchTerm) ||
                news.category.toLowerCase().includes(searchTerm)) {
                results.push({
                    id: news.id,
                    type: 'News',
                    title: news.title,
                    description: news.content.substring(0, 100) + '...',
                    details: {
                        id: news.id,
                        date: news.date,
                        category: news.category,
                        content: news.content
                    },
                    action: () => this.loadPage('news')
                });
            }
        });

        // Search in fixtures
        websiteData.fixtures.forEach(fixture => {
            const homeTeamName = teamsData[fixture.homeTeam] ? teamsData[fixture.homeTeam].name : fixture.homeTeam;
            const awayTeamName = teamsData[fixture.awayTeam] ? teamsData[fixture.awayTeam].name : fixture.awayTeam;
            const homeTeamStadium = teamsData[fixture.homeTeam] ? teamsData[fixture.homeTeam].stadium : '';
            
            if (homeTeamName.toLowerCase().includes(searchTerm) || 
                awayTeamName.toLowerCase().includes(searchTerm) ||
                homeTeamStadium.toLowerCase().includes(searchTerm) ||
                fixture.status.toLowerCase().includes(searchTerm)) {
                results.push({
                    id: fixture.id,
                    type: 'Fixture',
                    title: `${homeTeamName} vs ${awayTeamName}`,
                    description: `${fixture.date} at ${fixture.time} - ${homeTeamStadium}`,
                    details: {
                        id: fixture.id,
                        date: fixture.date,
                        time: fixture.time,
                        venue: homeTeamStadium,
                        status: fixture.status,
                        homeTeam: fixture.homeTeam,
                        awayTeam: fixture.awayTeam
                    },
                    action: () => this.loadPage('fixtures')
                });
            }
        });

        return results;
    }

    performSearchFromPage() {
        const searchTerm = document.getElementById('searchPageInput').value.trim();
        if (!searchTerm) return;
        
        this.loadPage('search', { query: searchTerm });
    }

    setupSearchPageEvents() {
        const searchInput = document.getElementById('searchPageInput');
        const searchContainer = document.querySelector('.search-input-container');
        
        console.log('Setting up search dropdown...');
        console.log('Search input:', searchInput);
        console.log('Search container:', searchContainer);
        
        if (searchInput && searchContainer) {
            // Test: Add a simple visible indicator that setup is working
            searchContainer.style.border = '2px solid red';
            setTimeout(() => {
                searchContainer.style.border = 'none';
            }, 2000);
            
            console.log('Setup is working - you should see a red border for 2 seconds');
            // Create dropdown container with better styling
            const dropdownContainer = document.createElement('div');
            dropdownContainer.id = 'searchDropdown';
            dropdownContainer.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 2px solid #37003c;
                border-top: none;
                border-radius: 0 0 8px 8px;
                max-height: 400px;
                overflow-y: auto;
                z-index: 9999;
                display: none;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                margin-top: 2px;
            `;
            
            // Make search container relative for dropdown positioning
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(dropdownContainer);
            
            console.log('Dropdown container created and added');
            
            // Add input event listener
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.trim();
                console.log('Input event triggered with:', searchTerm);
                
                if (searchTerm.length >= 1) { // Changed to 1 character for better UX
                    this.showSearchDropdown(searchTerm, dropdownContainer);
                } else {
                    dropdownContainer.style.display = 'none';
                }
            });
            
            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchContainer.contains(e.target)) {
                    dropdownContainer.style.display = 'none';
                }
            });
            
            // Handle Enter key
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.performSearchFromPage();
                    dropdownContainer.style.display = 'none';
                }
            });
            
            console.log('Event listeners added successfully');
        } else {
            console.error('Search input or container not found!');
        }
    }

    showSearchDropdown(searchTerm, dropdownContainer) {
        console.log('Showing dropdown for:', searchTerm);
        const suggestions = this.getSearchSuggestions(searchTerm);
        console.log('Found suggestions:', suggestions);
        
        if (suggestions.length === 0) {
            console.log('No suggestions found, hiding dropdown');
            dropdownContainer.style.display = 'none';
            return;
        }
        
        const dropdownHTML = suggestions.map(item => `
            <div class="dropdown-item" style="
                padding: 1rem;
                cursor: pointer;
                border-bottom: 1px solid #e9ecef;
                display: flex;
                align-items: center;
                gap: 1rem;
                transition: all 0.2s ease;
                background: white;
            " 
            onmouseover="this.style.backgroundColor='#f8f9fa'; this.style.transform='translateX(5px)'"
            onmouseout="this.style.backgroundColor='white'; this.style.transform='translateX(0)'"
            onclick="app.selectSearchSuggestion('${item.type}', '${item.id}', '${item.title}')"
            >
                <div style="
                    width: 40px; 
                    height: 40px; 
                    background: ${this.getTypeColor(item.type)}; 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    color: white; 
                    font-weight: bold; 
                    font-size: 1rem;
                    flex-shrink: 0;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                ">
                    ${item.type === 'Player' ? '👤' : this.getTypeIcon(item.type)}
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #212529; font-size: 1rem; margin-bottom: 0.25rem;">${item.title}</div>
                    <div style="color: #6c757d; font-size: 0.875rem;">${item.type} • ${item.description}</div>
                </div>
                <div style="
                    color: #37003c; 
                    font-size: 1.25rem; 
                    opacity: 0.5;
                    transition: opacity 0.2s;
                ">→</div>
            </div>
        `).join('');
        
        dropdownContainer.innerHTML = dropdownHTML;
        dropdownContainer.style.display = 'block';
        console.log('Dropdown displayed with', suggestions.length, 'items');
    }

    selectSearchSuggestion(type, id, title) {
        // Navigate to appropriate page based on type
        switch(type) {
            case 'Club':
                this.loadPage('clubs');
                break;
            case 'Player':
                this.loadPage('players');
                break;
            case 'News':
                this.loadPage('news');
                break;
            case 'Fixture':
                this.loadPage('fixtures');
                break;
        }
        
        // Hide dropdown
        const dropdown = document.getElementById('searchDropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    setupNavbarSearchDropdown(searchInput) {
        const searchContainer = document.querySelector('.search-container');
        
        if (searchInput && searchContainer) {
            // Create dropdown container for navbar
            const dropdownContainer = document.createElement('div');
            dropdownContainer.id = 'navbarSearchDropdown';
            dropdownContainer.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 2px solid #37003c;
                border-top: none;
                border-radius: 0 0 8px 8px;
                max-height: 400px;
                overflow-y: auto;
                z-index: 9999;
                display: none;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                margin-top: 2px;
            `;
            
            // Make search container relative for dropdown positioning
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(dropdownContainer);
            
            // Add input event listener for navbar search
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.trim();
                
                if (searchTerm.length >= 1) {
                    this.showNavbarSearchDropdown(searchTerm);
                } else {
                    dropdownContainer.style.display = 'none';
                }
            });
            
            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchContainer.contains(e.target)) {
                    dropdownContainer.style.display = 'none';
                }
            });
            
            // Handle Enter key for navbar search
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                    dropdownContainer.style.display = 'none';
                }
            });
        }
    }

    showNavbarSearchDropdown(searchTerm) {
        const dropdownContainer = document.getElementById('navbarSearchDropdown');
        if (!dropdownContainer) return;
        
        const suggestions = this.getSearchSuggestions(searchTerm);
        
        if (suggestions.length === 0) {
            dropdownContainer.style.display = 'none';
            return;
        }
        
        const dropdownHTML = suggestions.map(item => {
            // Special handling for players to show their image
            let iconContent = '';
            if (item.type === 'Player') {
                iconContent = `
                    <img src="assets/players/${item.id}.jpg" 
                         alt="${item.title}" 
                         style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"
                         onerror="this.style.display='none'; this.parentElement.innerHTML='👤'; this.parentElement.style.background='${this.getTypeColor(item.type)}'; this.parentElement.style.color='white'; this.parentElement.style.fontWeight='bold'; this.parentElement.style.fontSize='1rem'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
                `;
            } else if (item.type === 'Club') {
                // Get team data to find the logo
                const team = teamsData[item.id];
                if (team && team.logo) {
                    iconContent = `
                        <img src="${team.logo}" 
                             alt="${item.title}" 
                             style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"
                             onerror="this.style.display='none'; this.parentElement.innerHTML='🏆'; this.parentElement.style.background='${this.getTypeColor(item.type)}'; this.parentElement.style.color='white'; this.parentElement.style.fontWeight='bold'; this.parentElement.style.fontSize='1rem'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
                    `;
                } else {
                    iconContent = this.getTypeIcon(item.type);
                }
            } else {
                iconContent = this.getTypeIcon(item.type);
            }
            
            return `
                <div class="dropdown-item" style="
                    padding: 1rem;
                    cursor: pointer;
                    border-bottom: 1px solid #e9ecef;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.2s ease;
                    background: white;
                " 
                onmouseover="this.style.backgroundColor='#f8f9fa'; this.style.transform='translateX(5px)'"
                onmouseout="this.style.backgroundColor='white'; this.style.transform='translateX(0)'"
                onclick="app.selectNavbarSearchSuggestion('${item.type}', '${item.id}', '${item.title}')"
                >
                    <div style="
                        width: 40px; 
                        height: 40px; 
                        background: ${item.type === 'Player' || item.type === 'Club' ? '#f8f9fa' : this.getTypeColor(item.type)}; 
                        border-radius: 50%; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 1rem;
                        flex-shrink: 0;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        border: 2px solid ${this.getTypeColor(item.type)};
                    ">
                        ${iconContent}
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: #212529; font-size: 1rem; margin-bottom: 0.25rem;">${item.title}</div>
                        <div style="color: #6c757d; font-size: 0.875rem;">${item.type} • ${item.description}</div>
                    </div>
                    <div style="
                        color: #37003c; 
                        font-size: 1.25rem; 
                        opacity: 0.5;
                        transition: opacity 0.2s;
                    ">→</div>
                </div>
            `;
        }).join('');
        
        dropdownContainer.innerHTML = dropdownHTML;
        dropdownContainer.style.display = 'block';
    }

    selectNavbarSearchSuggestion(type, id, title) {
        // Navigate to specific page based on type and id
        switch(type) {
            case 'Club':
                this.viewTeamDetails(id);
                break;
            case 'Player':
                // For players, we need to find the player and show their info
                this.showPlayerInfo(id);
                break;
            case 'News':
                this.loadPage('news');
                break;
            case 'Fixture':
                this.loadPage('fixtures');
                break;
        }
        
        // Clear search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        
        // Hide dropdown
        const dropdown = document.getElementById('navbarSearchDropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    showPlayerInfo(playerId) {
        // Load the players page with the specific player ID
        this.loadPage('players', { playerId: playerId });
    }



    getCategoryIcon(category) {
        const icons = {
            'Transfer': '🔄',
            'Match': '⚽',
            'General': '📰',
            'Injury': '🏥',
            'Contract': '📝',
            'Breaking': '🚨',
            'Rumor': '💭',
            'Analysis': '📊',
            'Interview': '🎤',
            'Preview': '👀',
            'Review': '📋',
            'Championship': '🏆',
            'Players': '👤',
            'Match Report': '📊',
            'Transfers': '🔄',
            'Team News': '🏟️',
            'League News': '📈',
            'Cup News': '🏆',
            'Manager News': '👨‍💼',
            'Stadium News': '🏟️',
            'Clubs': '🏢'
        };
        return icons[category] || '📰';
    }

    formatNewsDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return 'Today';
        if (diffDays === 2) return 'Yesterday';
        if (diffDays <= 7) return `${diffDays - 1} days ago`;
        
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    filterNews(category, button) {
        console.log('Filtering news by category:', category);
        
        const newsGrid = document.getElementById('news-grid');
        if (!newsGrid) {
            console.error('News grid not found');
            return;
        }
        
        const newsCards = newsGrid.querySelectorAll('.news-card');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        console.log('Found', newsCards.length, 'news cards');
        
        // Update active button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter news cards
        let visibleCount = 0;
        newsCards.forEach(card => {
            const cardCategory = card.dataset.category;
            console.log('Card category:', cardCategory, 'Filter category:', category);
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        console.log('Visible cards:', visibleCount);
    }

    showNewsDetail(newsId) {
        const news = websiteData.news.find(n => n.id === newsId);
        if (!news) return;
        
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="news-detail-container">
                <button onclick="app.loadPage('news')" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Back to News
                </button>
                
                <div class="news-detail-card">
                    <div class="news-detail-header">
                        <div class="news-detail-category">
                            ${this.getCategoryIcon(news.category)} ${news.category}
                        </div>
                        <div class="news-detail-date">
                            <i class="fas fa-calendar-alt"></i>
                            ${this.formatNewsDate(news.date)}
                        </div>
                    </div>
                    
                    <h1 class="news-detail-title">${news.title}</h1>
                    <div class="news-detail-content">
                        ${news.content}
                    </div>
                </div>
            </div>
        `;
    }

    viewTeamDetails(teamId) {
        const team = teamsData[teamId];
        const leagueTable = this.calculateLeagueTable();
        const teamStats = leagueTable.find(t => t.id === teamId);
        const teamPlayers = this.getAllPlayersWithStats().filter(p => p.teamId === teamId);
        
        // Get team's fixtures
        const teamFixtures = websiteData.fixtures.filter(f => 
            f.homeTeam === teamId || f.awayTeam === teamId
        );
        
        // Calculate clean sheets
        const cleanSheets = teamFixtures.filter(f => {
            if (f.status === 'completed' && f.score) {
                if (f.homeTeam === teamId) {
                    return f.score.away === 0; // Home clean sheet
                } else {
                    return f.score.home === 0; // Away clean sheet
                }
            }
            return false;
        }).length;
        
        // Get recent form (last 5 matches)
        const completedFixtures = teamFixtures.filter(f => f.status === 'completed').slice(-5);
        const formResults = completedFixtures.map(f => {
            const isHome = f.homeTeam === teamId;
            const teamScore = isHome ? f.score.home : f.score.away;
            const opponentScore = isHome ? f.score.away : f.score.home;
            
            if (teamScore > opponentScore) return 'W';
            if (teamScore < opponentScore) return 'L';
            return 'D';
        }).reverse();
        
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="team-details-container">
                <div class="team-details-header">
                    <div class="team-details-logo">
                        <img src="${team.logo}" alt="${team.name}" onerror="this.style.display='none'">
                    </div>
                    <div class="team-details-info">
                        <h1>${team.name}</h1>
                        <p class="team-details-subtitle">${team.stadium} • ${team.manager}</p>
                    </div>
                    <button onclick="app.loadPage('clubs')" class="back-btn">← Back to Clubs</button>
                </div>
                
                <div class="team-details-content">
                    <div class="team-details-section">
                        <h2>📊 Season Statistics</h2>
                        <div class="team-stats-grid">
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.position : 'N/A'}</div>
                                <div class="stat-label">League Position</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.points : 0}</div>
                                <div class="stat-label">Points</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.played : 0}</div>
                                <div class="stat-label">Matches Played</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.won : 0}</div>
                                <div class="stat-label">Wins</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.drawn : 0}</div>
                                <div class="stat-label">Draws</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.lost : 0}</div>
                                <div class="stat-label">Losses</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.goalsFor : 0}</div>
                                <div class="stat-label">Goals Scored</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamStats ? teamStats.goalsAgainst : 0}</div>
                                <div class="stat-label">Goals Conceded</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${cleanSheets}</div>
                                <div class="stat-label">Clean Sheets</div>
                            </div>
                            <div class="team-stat-card">
                                <div class="stat-number">${teamPlayers.length}</div>
                                <div class="stat-label">Players</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="team-details-section">
                        <h2>📈 Recent Form</h2>
                        <div class="team-form">
                            <div class="form-results">
                                ${formResults.map(result => `<span class="form-result ${result.toLowerCase()}">${result}</span>`).join('')}
                            </div>
                            <p class="form-description">Last 5 matches: ${formResults.join(' ')}</p>
                        </div>
                    </div>
                    
                    <div class="team-details-section">
                        <h2>⚽ Match History</h2>
                        <div class="team-fixtures">
                            ${teamFixtures.map(fixture => {
                                const homeTeam = teamsData[fixture.homeTeam];
                                const awayTeam = teamsData[fixture.awayTeam];
                                const isHome = fixture.homeTeam === teamId;
                                const isCompleted = fixture.status === 'completed';
                                
                                return `
                                    <div class="team-fixture ${fixture.status}">
                                        <div class="fixture-date">${this.formatDate(fixture.date)}</div>
                                        <div class="fixture-teams">
                                            <span class="${isHome ? 'team-home' : 'team-away'}">${homeTeam ? homeTeam.name : fixture.homeTeam}</span>
                                            <span class="fixture-vs">vs</span>
                                            <span class="${!isHome ? 'team-home' : 'team-away'}">${awayTeam ? awayTeam.name : fixture.awayTeam}</span>
                                        </div>
                                        ${isCompleted ? `
                                            <div class="fixture-score">
                                                <span class="score-number">${fixture.score.home}</span>
                                                <span class="score-separator">-</span>
                                                <span class="score-number">${fixture.score.away}</span>
                                            </div>
                                        ` : `
                                            <div class="fixture-status">${fixture.status}</div>
                                        `}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <div class="team-details-section">
                        <h2>👥 Squad</h2>
                        <div class="team-players">
                            ${teamPlayers.map(player => `
                                <div class="team-player">
                                    <div class="player-info">
                                        <div class="player-name" onclick="app.loadPage('players', { playerId: '${player.id}' })" style="cursor: pointer; color: #00ff85;">
                                            ${player.name}
                                            ${player.captain ? '<span class="captain-indicator">👑</span>' : ''}
                                        </div>
                                        <div class="player-details">
                                            ${player.position} • Age: ${player.age}
                                            ${player.captain ? '<span class="captain-text">(Captain)</span>' : ''}
                                        </div>
                                    </div>
                                    <div class="player-stats">
                                        <span class="player-stat">⚽ ${player.stats.totalGoals}</span>
                                        <span class="player-stat">🎯 ${player.stats.totalAssists}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    performSearch() {
        const searchTerm = document.getElementById('searchInput').value.trim();
        if (!searchTerm) return;
        
        // Navigate to search page with query parameter
        this.loadPage('search', { query: searchTerm });
    }

    // Enhanced search with auto-detection and suggestions
    performSmartSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm.length === 0) {
            this.hideSearchSuggestions();
            return;
        }

        // Show suggestions for partial matches
        if (searchTerm.length >= 2) {
            this.showSearchSuggestions(searchTerm);
        } else {
            this.hideSearchSuggestions();
        }

        // Auto-search after user stops typing
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            if (searchTerm.length >= 2) {
                this.loadPage('search', { query: searchTerm });
            }
        }, 500);
    }

    showSearchSuggestions(query) {
        let suggestions = [];
        
        if (query.length === 0) {
            // Show recent searches when input is empty
            suggestions = this.getRecentSearches();
        } else {
            // Show search results for query
            suggestions = this.getSearchSuggestions(query);
        }
        
        const suggestionsContainer = document.getElementById('searchSuggestions');
        
        if (suggestions.length === 0) {
            this.hideSearchSuggestions();
            return;
        }

        const suggestionsHTML = suggestions.map(item => `
            <div class="search-suggestion-item" 
                onclick="app.selectSuggestion('${item.type || 'Recent'}', '${item.id || ''}', '${item.title}')"
                onmouseover="this.style.backgroundColor='#f8f9fa'"
                onmouseout="this.style.backgroundColor='#ffffff'"
            >
                <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;">
                    <div style="
                        width: 32px; 
                        height: 32px; 
                        background: ${this.getTypeColor(item.type || 'Recent')}; 
                        border-radius: 50%; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        color: white; 
                        font-weight: bold; 
                        font-size: 0.875rem;
                    ">
                        ${this.getTypeIcon(item.type || 'Recent')}
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; color: #212529; font-size: 0.9rem;">${this.highlightMatch(item.title, query)}</div>
                        <div style="color: #6c757d; font-size: 0.8rem;">${item.type || 'Recent'} • ${item.description}</div>
                    </div>
                    <div style="color: #adb5bd; font-size: 0.75rem;">↵</div>
                </div>
            </div>
        `).join('');

        suggestionsContainer.innerHTML = suggestionsHTML;
        suggestionsContainer.style.display = 'block';
    }

    getRecentSearches() {
        return this.searchHistory.map(query => ({
            type: 'Recent',
            id: '',
            title: query,
            description: 'Recent search'
        }));
    }

    hideSearchSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
    }

    selectSuggestion(type, id, title) {
        document.getElementById('searchInput').value = title;
        this.hideSearchSuggestions();
        this.selectedSuggestionIndex = -1;
        
        // Add to search history
        this.addToSearchHistory(title);
        
        this.loadPage('search', { query: title });
    }

    updateSelectedSuggestion(suggestions) {
        suggestions.forEach((suggestion, index) => {
            if (index === this.selectedSuggestionIndex) {
                suggestion.style.backgroundColor = '#f0f0f0';
                suggestion.style.borderLeft = '3px solid #37003c';
            } else {
                suggestion.style.backgroundColor = '#ffffff';
                suggestion.style.borderLeft = 'none';
            }
        });
    }

    addToSearchHistory(query) {
        // Remove if already exists
        this.searchHistory = this.searchHistory.filter(item => item !== query);
        // Add to beginning
        this.searchHistory.unshift(query);
        // Keep only last 10 searches
        this.searchHistory = this.searchHistory.slice(0, 10);
        // Save to localStorage
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }

    startPlaceholderAnimation() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        // Set initial placeholder
        searchInput.placeholder = this.placeholderTexts[0];

        setInterval(() => {
            if (!searchInput.matches(':focus') && searchInput.value === '') {
                this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholderTexts.length;
                searchInput.placeholder = this.placeholderTexts[this.placeholderIndex];
            }
        }, 3000); // Change every 3 seconds
    }

    getSearchSuggestions(query) {
        const suggestions = [];
        const lowerQuery = query.toLowerCase();
        
        // Search in clubs
        Object.values(teamsData).forEach(team => {
            const teamId = Object.keys(teamsData).find(key => teamsData[key] === team);
            if (team.name.toLowerCase().includes(lowerQuery) || 
                team.stadium.toLowerCase().includes(lowerQuery) ||
                team.manager.toLowerCase().includes(lowerQuery)) {
                suggestions.push({
                    type: 'Club',
                    id: teamId,
                    title: team.name,
                    description: `${team.stadium} • ${team.manager}`
                });
            }
        });

        // Search in players
        Object.keys(websiteData.players).forEach(teamId => {
            const teamName = teamsData[teamId].name;
            websiteData.players[teamId].forEach(player => {
            if (player.name.toLowerCase().includes(lowerQuery) || 
                player.position.toLowerCase().includes(lowerQuery) ||
                    teamName.toLowerCase().includes(lowerQuery)) {
                suggestions.push({
                    type: 'Player',
                    id: player.id,
                    title: player.name,
                        description: `${player.position} • ${teamName}`
                });
            }
            });
        });

        // Search in news
        websiteData.news.forEach(item => {
            if (item.title.toLowerCase().includes(lowerQuery) || 
                item.content.toLowerCase().includes(lowerQuery)) {
                suggestions.push({
                    type: 'News',
                    id: item.id,
                    title: item.title,
                    description: item.content.substring(0, 50) + '...'
                });
            }
        });

        // Search in fixtures
        websiteData.fixtures.forEach(fixture => {
            if (fixture.homeTeam.toLowerCase().includes(lowerQuery) || 
                fixture.awayTeam.toLowerCase().includes(lowerQuery) ||
                fixture.date.toLowerCase().includes(lowerQuery)) {
                suggestions.push({
                    type: 'Fixture',
                    id: fixture.id,
                    title: `${fixture.homeTeam} vs ${fixture.awayTeam}`,
                    description: `${fixture.date} • ${fixture.time}`
                });
            }
        });

        // Return top 8 suggestions, prioritizing exact matches
        return suggestions
            .sort((a, b) => {
                const aExact = a.title.toLowerCase().startsWith(lowerQuery);
                const bExact = b.title.toLowerCase().startsWith(lowerQuery);
                if (aExact && !bExact) return -1;
                if (!aExact && bExact) return 1;
                return a.title.localeCompare(b.title);
            })
            .slice(0, 8);
    }

    highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background: #00ff85; color: #000; padding: 0 2px; border-radius: 2px;">$1</mark>');
    }

    displaySearchResults(results) {
        const modal = document.getElementById('searchModal');
        const resultsContainer = document.getElementById('searchResults');

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>No results found. Try a different search term.</p>';
        } else {
            resultsContainer.innerHTML = `
                <div style="
                    margin-bottom: 1.5rem; 
                    padding: 1rem; 
                    background: #f8f9fa; 
                    border-radius: 8px; 
                    border: 1px solid #e9ecef;
                ">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="font-size: 1.25rem; color: #37003c;">🔍</div>
                        <div style="font-size: 1.125rem; font-weight: 600; color: #212529;">Search Results</div>
                        <div style="margin-left: auto; color: #6c757d; font-size: 0.875rem;">${results.length} result${results.length !== 1 ? 's' : ''}</div>
                    </div>
                </div>
                ${results.map((result, index) => `
                    <div class="search-result-item" onclick="app.handleSearchResult('${result.type}', '${result.title}'); result.action(); document.getElementById('searchModal').style.display='none';">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            ${result.type === 'Player' ? `
                            <div style="
                                width: 40px; 
                                height: 40px; 
                                border-radius: 50%; 
                                overflow: hidden;
                                border: 2px solid ${this.getTypeColor(result.type)};
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                background: #f8f9fa;
                            ">
                                <img src="assets/players/${result.id}.jpg" 
                                     alt="${result.title}" 
                                     style="width: 100%; height: 100%; object-fit: cover;"
                                     onerror="this.style.display='none'; this.parentElement.innerHTML='${this.getTypeIcon(result.type)}'; this.parentElement.style.background='${this.getTypeColor(result.type)}'; this.parentElement.style.color='white'; this.parentElement.style.fontWeight='bold'; this.parentElement.style.fontSize='1rem';">
                            </div>
                            ` : `
                            <div style="
                                width: 40px; 
                                height: 40px; 
                                background: ${this.getTypeColor(result.type)}; 
                                border-radius: 50%; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center; 
                                color: white; 
                                font-weight: bold; 
                                font-size: 1rem;
                            ">
                                ${this.getTypeIcon(result.type)}
                            </div>
                            `}
                            <div style="flex: 1;">
                                <h4 style="margin: 0; color: #212529; font-size: 1rem;">${result.title}</h4>
                                <p style="margin: 0.25rem 0 0 0; color: #6c757d; font-size: 0.875rem;"><strong style="color: ${this.getTypeColor(result.type)};">${result.type}</strong> - ${result.description}</p>
                                <p style="margin: 0.1rem 0 0 0; color: #adb5bd; font-size: 0.75rem; font-family: monospace; word-wrap: break-word;">
                                    ${result.type === 'Club' || result.type === 'Player' ? `ID: ${result.id}` : `ID: ${result.id}`}
                                </p>
                            </div>
                        </div>
                        ${this.getDetailedInfo(result)}
                    </div>
                `).join('')}
            `;
        }

        modal.style.display = 'block';
    }

    getTypeColor(type) {
        const colors = {
            'Club': '#37003c',
            'Player': '#00ff85',
            'News': '#ffc107',
            'Fixture': '#dc3545',
            'Recent': '#6c757d'
        };
        return colors[type] || '#6c757d';
    }

    getTypeIcon(type) {
        const icons = {
            'Club': '🏆',
            'Player': '⚽',
            'News': '📰',
            'Fixture': '📅',
            'Recent': '🕒'
        };
        return icons[type] || '🔍';
    }

    getDetailedInfo(result) {
        if (!result.details) return '';

        switch(result.type) {
            case 'Club':
                return `
                    <div style="
                        background: #f8f9fa; 
                        padding: 0.75rem; 
                        border-radius: 6px; 
                        margin-top: 0.75rem; 
                        font-size: 0.875rem;
                        border: 1px solid #e9ecef;
                    ">
                        <div style="
                            display: grid; 
                            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
                            gap: 0.8rem;
                        ">
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Position:</strong><br>${result.details.position}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Points:</strong><br>${result.details.points}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Played:</strong><br>${result.details.played}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Won:</strong><br>${result.details.won}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Drawn:</strong><br>${result.details.drawn}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Lost:</strong><br>${result.details.lost}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Goals For:</strong><br>${result.details.goalsFor}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Goals Against:</strong><br>${result.details.goalsAgainst}</div>
                            <div style="padding: 0.5rem; background: #ffffff; border-radius: 4px; text-align: center; border: 1px solid #dee2e6;"><strong style="color: #37003c;">Goal Difference:</strong><br>${result.details.goalDifference > 0 ? '+' : ''}${result.details.goalDifference}</div>
                        </div>
                    </div>
                `;
            case 'Player':
                return `
                    <div style="
                        background: linear-gradient(135deg, #f8f9fa, #ffffff); 
                        padding: 1.2rem; 
                        border-radius: 12px; 
                        margin-top: 1rem; 
                        font-size: 0.9rem;
                        border: 1px solid rgba(0, 255, 133, 0.1);
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    ">
                        <div style="
                            display: grid; 
                            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
                            gap: 0.8rem;
                        ">
                            <div style="padding: 0.5rem; background: rgba(0, 255, 133, 0.05); border-radius: 8px; text-align: center;"><strong style="color: #00ff85;">Club:</strong><br>${result.details.club}</div>
                            <div style="padding: 0.5rem; background: rgba(0, 255, 133, 0.05); border-radius: 8px; text-align: center;"><strong style="color: #00ff85;">Position:</strong><br>${result.details.position}</div>
                            <div style="padding: 0.5rem; background: rgba(0, 255, 133, 0.05); border-radius: 8px; text-align: center;"><strong style="color: #00ff85;">Age:</strong><br>${result.details.age}</div>
                            <div style="padding: 0.5rem; background: rgba(0, 255, 133, 0.05); border-radius: 8px; text-align: center;"><strong style="color: #00ff85;">Nationality:</strong><br>${result.details.nationality}</div>
                            <div style="padding: 0.5rem; background: rgba(0, 255, 133, 0.05); border-radius: 8px; text-align: center;"><strong style="color: #00ff85;">Goals:</strong><br>${result.details.goals}</div>
                            <div style="padding: 0.5rem; background: rgba(0, 255, 133, 0.05); border-radius: 8px; text-align: center;"><strong style="color: #00ff85;">Assists:</strong><br>${result.details.assists}</div>
                        </div>
                    </div>
                `;
            case 'News':
                return `
                    <div style="background: #f8f9fa; padding: 0.8rem; border-radius: 5px; margin-top: 0.5rem; font-size: 0.85rem;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem;">
                            <div><strong>Date:</strong> ${result.details.date}</div>
                            <div><strong>Category:</strong> ${result.details.category}</div>
                        </div>
                        <div style="margin-top: 0.5rem;">
                            <strong>Content:</strong> ${result.details.content}
                        </div>
                    </div>
                `;
            case 'Fixture':
                return `
                    <div style="background: #f8f9fa; padding: 0.8rem; border-radius: 5px; margin-top: 0.5rem; font-size: 0.85rem;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem;">
                            <div><strong>Date:</strong> ${result.details.date}</div>
                            <div><strong>Time:</strong> ${result.details.time}</div>
                            <div><strong>Venue:</strong> ${result.details.venue}</div>
                            <div><strong>Status:</strong> ${result.details.status}</div>
                        </div>
                    </div>
                `;
            default:
                return '';
        }
    }

    handleSearchResult(type, title) {
        console.log(`Search result clicked: ${type} - ${title}`);
        // Additional handling can be added here
    }

    // Example methods for data management using unique IDs
    getItemById(id) {
        if (IDUtils.isValidClubId(id)) {
            return IDUtils.getClubById(id);
        } else if (IDUtils.isValidPlayerId(id)) {
            return IDUtils.getPlayerById(id);
        } else if (IDUtils.isValidNewsId(id)) {
            return IDUtils.getNewsById(id);
        } else if (IDUtils.isValidFixtureId(id)) {
            return IDUtils.getFixtureById(id);
        }
        return null;
    }

    // Example: Add new club with name-based ID
    addNewClub(clubData) {
        // Check if club already exists
        if (IDUtils.clubExists(clubData.name)) {
            console.error(`Club "${clubData.name}" already exists!`);
            return null;
        }
        
        const newClub = {
            id: IDUtils.generateClubId(clubData.name),
            name: clubData.name,
            ...clubData
        };
        websiteData.clubs.push(newClub);
        console.log(`New club added: ${newClub.name}`);
        return newClub;
    }

    // Example: Add new player with name-based ID
    addNewPlayer(playerData) {
        // Check if player already exists
        if (IDUtils.playerExists(playerData.name)) {
            console.error(`Player "${playerData.name}" already exists!`);
            return null;
        }
        
        const newPlayer = {
            id: IDUtils.generatePlayerId(playerData.name),
            name: playerData.name,
            ...playerData
        };
        websiteData.players.push(newPlayer);
        console.log(`New player added: ${newPlayer.name}`);
        return newPlayer;
    }

    // Example: Add new news with unique ID
    addNewNews(newsData) {
        const newNews = {
            id: IDUtils.generateNewsId(),
            ...newsData
        };
        websiteData.news.push(newNews);
        console.log(`New news added with ID: ${newNews.id}`);
        return newNews;
    }

    // Example: Add new fixture with unique ID
    addNewFixture(fixtureData) {
        const newFixture = {
            id: IDUtils.generateFixtureId(),
            ...fixtureData
        };
        websiteData.fixtures.push(newFixture);
        console.log(`New fixture added with ID: ${newFixture.id}`);
        return newFixture;
    }

    showSearchSuggestions(query) {
        if (!query.trim()) {
            this.hideSearchSuggestions();
            return;
        }

        const suggestions = [];
        const searchTerm = query.toLowerCase();

        // Get suggestions from all data sources
        websiteData.clubs.forEach(club => {
            if (club.name.toLowerCase().includes(searchTerm) || 
                club.shortName.toLowerCase().includes(searchTerm)) {
                suggestions.push({ text: club.name, type: 'Club' });
            }
        });

        Object.keys(websiteData.players).forEach(teamId => {
            const teamName = teamsData[teamId].name;
            websiteData.players[teamId].forEach(player => {
            if (player.name.toLowerCase().includes(searchTerm) || 
                    teamName.toLowerCase().includes(searchTerm)) {
                suggestions.push({ text: player.name, type: 'Player' });
            }
            });
        });

        websiteData.news.forEach(news => {
            if (news.title.toLowerCase().includes(searchTerm)) {
                suggestions.push({ text: news.title, type: 'News' });
            }
        });

        websiteData.fixtures.forEach(fixture => {
            if (fixture.homeTeam.toLowerCase().includes(searchTerm) || 
                fixture.awayTeam.toLowerCase().includes(searchTerm)) {
                suggestions.push({ text: `${fixture.homeTeam} vs ${fixture.awayTeam}`, type: 'Fixture' });
            }
        });

        // Remove duplicates and limit to 5 suggestions
        const uniqueSuggestions = suggestions.filter((suggestion, index, self) => 
            index === self.findIndex(s => s.text === suggestion.text)
        ).slice(0, 5);

        this.displaySearchSuggestions(uniqueSuggestions);
    }

    displaySearchSuggestions(suggestions) {
        let suggestionsContainer = document.getElementById('searchSuggestions');
        
        if (!suggestionsContainer) {
            suggestionsContainer = document.createElement('div');
            suggestionsContainer.id = 'searchSuggestions';
            suggestionsContainer.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #ffffff, #f8f9fa);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-top: none;
                border-radius: 0 0 20px 20px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                max-height: 250px;
                overflow-y: auto;
                backdrop-filter: blur(10px);
                margin-top: 0.5rem;
            `;
            
            const searchContainer = document.querySelector('.search-container');
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(suggestionsContainer);
        }

        if (suggestions.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        suggestionsContainer.innerHTML = suggestions.map(suggestion => `
            <div class="search-suggestion" onclick="document.getElementById('searchInput').value='${suggestion.text}'; this.parentElement.style.display='none'; app.performSearch();" style="
                padding: 1rem 1.2rem;
                cursor: pointer;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                display: flex;
                align-items: center;
                gap: 0.8rem;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            " onmouseover="this.style.background='linear-gradient(135deg, #f8f9fa, #ffffff)'; this.style.transform='translateX(5px)'" onmouseout="this.style.background='transparent'; this.style.transform='translateX(0)'">
                <div style="
                    width: 35px;
                    height: 35px;
                    background: ${this.getTypeColor(suggestion.type)};
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 0.9rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                ">${this.getTypeIcon(suggestion.type)}</div>
                <div style="flex: 1;">
                    <div style="font-weight: 500; color: #37003c; margin-bottom: 0.2rem;">${suggestion.text}</div>
                    <div style="color: #666; font-size: 0.8rem;">${suggestion.type}</div>
                </div>
                <div style="
                    width: 8px;
                    height: 8px;
                    background: ${this.getTypeColor(suggestion.type)};
                    border-radius: 50%;
                    opacity: 0.6;
                "></div>
            </div>
        `).join('');

        suggestionsContainer.style.display = 'block';
    }

    hideSearchSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
    }

    // AI Assistant Methods
    sendAIMessage() {
        const input = document.getElementById('aiInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Add user message
        this.addAIMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        this.showAITypingIndicator();
        
        // Generate AI response
        setTimeout(() => {
            this.hideAITypingIndicator();
            const response = this.generateAIResponse(message);
            this.addAIMessage(response, 'bot');
        }, 1000 + Math.random() * 1500); // Random delay for realism
    }

    sendQuickMessage(message) {
        // Add user message
        this.addAIMessage(message, 'user');
        
        // Show typing indicator
        this.showAITypingIndicator();
        
        // Generate AI response
        setTimeout(() => {
            this.hideAITypingIndicator();
            const response = this.generateAIResponse(message);
            this.addAIMessage(response, 'bot');
        }, 800 + Math.random() * 1000); // Slightly faster for quick actions
    }

    addAIMessage(message, sender) {
        const messagesContainer = document.getElementById('aiMessages');
        const messageElement = document.createElement('div');
        messageElement.className = `ai-message ${sender}`;
        messageElement.innerHTML = message;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    showAITypingIndicator() {
        const messagesContainer = document.getElementById('aiMessages');
        const typingElement = document.createElement('div');
        typingElement.className = 'ai-typing-indicator';
        typingElement.id = 'aiTypingIndicator';
        typingElement.innerHTML = `
            <div class="ai-typing-dots">
                <div class="ai-typing-dot"></div>
                <div class="ai-typing-dot"></div>
                <div class="ai-typing-dot"></div>
            </div>
            <span>Madondo AI is typing...</span>
        `;
        
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideAITypingIndicator() {
        const typingIndicator = document.getElementById('aiTypingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Comprehensive data collection
        const leagueTable = this.calculateLeagueTable();
        const allPlayers = this.getAllPlayersWithStats();
        const upcomingFixtures = websiteData.fixtures.filter(f => f.status === 'scheduled' || f.status === 'upcoming');
        const completedFixtures = websiteData.fixtures.filter(f => f.status === 'completed');
        const liveFixtures = websiteData.fixtures.filter(f => f.status === 'live');
        
        // Enhanced query understanding with fuzzy matching
        const queryWords = lowerMessage.split(' ').filter(word => word.length > 0);
        
        // Check for very short or incomplete queries and provide helpful suggestions
        if (queryWords.length <= 2) {
            return this.getQuerySuggestionsResponse(queryWords, leagueTable, allPlayers);
        }
        
        // Enhanced team-related queries with fuzzy matching
        if (lowerMessage.includes('table') || lowerMessage.includes('standing') || lowerMessage.includes('position') || 
            lowerMessage.includes('league table') || lowerMessage.includes('table') || lowerMessage.includes('rank') ||
            lowerMessage.includes('points') || lowerMessage.includes('pts')) {
            return this.getComprehensiveTableResponse(leagueTable);
        }
        
        if ((lowerMessage.includes('top') || lowerMessage.includes('best') || lowerMessage.includes('leading')) && 
            (lowerMessage.includes('team') || lowerMessage.includes('club') || lowerMessage.includes('side'))) {
            return this.getTopTeamsResponse(leagueTable);
        }
        
        if (lowerMessage.includes('bottom') || lowerMessage.includes('relegation')) {
            return `📉 <strong>Bottom Teams:</strong><br><br>Currently analyzing relegation battle... The bottom teams are fighting hard to stay in the league! 💪`;
        }
        
        if (lowerMessage.includes('form') || lowerMessage.includes('recent') || lowerMessage.includes('last 5')) {
            return `📈 <strong>Recent Form:</strong><br><br>Analyzing recent performance across all ${leagueTable.length} teams... Form is crucial in this competitive league! 🔥`;
        }
        
        // Enhanced player-related queries with fuzzy matching
        if (lowerMessage.includes('player') || lowerMessage.includes('scorer') || lowerMessage.includes('goal') || 
            lowerMessage.includes('assist') || lowerMessage.includes('striker') || lowerMessage.includes('forward') ||
            lowerMessage.includes('midfielder') || lowerMessage.includes('defender') || lowerMessage.includes('keeper') ||
            lowerMessage.includes('goalkeeper') || lowerMessage.includes('winger')) {
            return this.getComprehensivePlayerResponse(lowerMessage, allPlayers);
        }
        
        if (lowerMessage.includes('top scorer') || lowerMessage.includes('golden boot') || lowerMessage.includes('goals') ||
            lowerMessage.includes('scoring') || lowerMessage.includes('goal scorer') || lowerMessage.includes('top goals') ||
            lowerMessage.includes('best scorer') || lowerMessage.includes('leading scorer') || lowerMessage.includes('most goals')) {
            console.log('AI detected top scorer query:', lowerMessage);
            console.log('All players count:', allPlayers.length);
            return this.getTopScorerResponse(allPlayers);
        }
        
        if (lowerMessage.includes('top assist') || lowerMessage.includes('assist leader') || lowerMessage.includes('assists') ||
            lowerMessage.includes('assisting') || lowerMessage.includes('top assists') || lowerMessage.includes('playmaker') ||
            lowerMessage.includes('best assist') || lowerMessage.includes('leading assist') || lowerMessage.includes('most assists')) {
            return this.getTopAssistResponse(allPlayers);
        }
        
        if (lowerMessage.includes('young') || lowerMessage.includes('youngest')) {
            return this.getYoungestPlayersResponse(allPlayers);
        }
        
        if (lowerMessage.includes('old') || lowerMessage.includes('oldest') || lowerMessage.includes('veteran')) {
            return this.getOldestPlayersResponse(allPlayers);
        }
        
        // Enhanced fixture-related queries with fuzzy matching
        if (lowerMessage.includes('fixture') || lowerMessage.includes('match') || lowerMessage.includes('game') || 
            lowerMessage.includes('next') || lowerMessage.includes('upcoming') || lowerMessage.includes('schedule') ||
            lowerMessage.includes('when') || lowerMessage.includes('play') || lowerMessage.includes('vs') ||
            lowerMessage.includes('versus')) {
            return `📅 <strong>Upcoming Fixtures:</strong><br><br>There are ${upcomingFixtures.length} upcoming matches in the Madondo League! Check the fixtures page for full details. ⚽`;
        }
        
        if (lowerMessage.includes('live') || lowerMessage.includes('current')) {
            return `🔴 <strong>Live Matches:</strong><br><br>Currently ${liveFixtures.length} live matches! The action is happening right now! 🎯`;
        }
        
        if (lowerMessage.includes('result') || lowerMessage.includes('score') || lowerMessage.includes('completed')) {
            return `📊 <strong>Recent Results:</strong><br><br>${completedFixtures.length} matches have been completed this season! Check the fixtures page for all results. 📈`;
        }
        
        if (lowerMessage.includes('statistics') || lowerMessage.includes('stats') || lowerMessage.includes('numbers') || 
            lowerMessage.includes('league stats') || lowerMessage.includes('performance') || lowerMessage.includes('clean sheet')) {
            return this.getLeagueStatisticsResponse(leagueTable, allPlayers, completedFixtures);
        }
        
        // News-related queries
        if (lowerMessage.includes('news') || lowerMessage.includes('latest') || lowerMessage.includes('update') || lowerMessage.includes('transfer')) {
            return `📰 <strong>Latest News:</strong><br><br>${websiteData.news.length} latest news articles available! Check the news section for all updates. 📱`;
        }
        
        // Stadium and venue queries
        if (lowerMessage.includes('stadium') || lowerMessage.includes('venue') || lowerMessage.includes('capacity')) {
            return `🏟️ <strong>Stadiums:</strong><br><br>All teams have amazing stadiums! Check the clubs page for stadium details and capacities. 🏆`;
        }
        
        // Manager queries
        if (lowerMessage.includes('manager') || lowerMessage.includes('coach') || lowerMessage.includes('head coach')) {
            return `👨‍💼 <strong>Managers:</strong><br><br>Each team has an experienced manager leading their squad! Check the clubs page for manager details. 🎯`;
        }
        
        // Season and competition queries
        if (lowerMessage.includes('season') || lowerMessage.includes('championship') || lowerMessage.includes('title')) {
            return `🏆 <strong>Season Overview:</strong><br><br>${completedFixtures.length} matches completed, ${upcomingFixtures.length} remaining! The championship race is heating up! 🔥`;
        }
        
        // Specific team queries
        const team = this.findTeamInMessage(lowerMessage);
        if (team) {
            return `🏆 <strong>${team.name}:</strong><br><br>${team.name} is one of the ${leagueTable.length} teams in the Madondo League! Check the clubs page for detailed information. ⚽`;
        }
        
        // Specific player queries
        const player = this.findPlayerInMessage(lowerMessage);
        if (player) {
            return `🏃‍♂️ <strong>${player.name}:</strong><br><br>${player.name} is a ${player.position} for their team! Check the players page for detailed statistics. 🎯`;
        }
        
        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon')) {
            return this.getGreetingResponse();
        }
        
        // Help queries
        if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('capabilities')) {
            return this.getComprehensiveHelpResponse();
        }
        
        // Data summary queries
        if (lowerMessage.includes('summary') || lowerMessage.includes('overview') || lowerMessage.includes('everything')) {
            return `🏆 <strong>Complete Madondo League Summary:</strong><br><br>` +
                   `📊 <strong>League Overview:</strong><br>` +
                   `• ${leagueTable.length} teams competing<br>` +
                   `• ${allPlayers.length} players registered<br>` +
                   `• ${completedFixtures.length} matches completed<br>` +
                   `• ${upcomingFixtures.length} upcoming fixtures<br>` +
                   `• ${liveFixtures.length} live matches<br><br>` +
                   `🎯 <strong>Key Statistics:</strong><br>` +
                   `• Total Goals: ${allPlayers.reduce((sum, p) => sum + p.stats.totalGoals, 0)}<br>` +
                   `• Total Assists: ${allPlayers.reduce((sum, p) => sum + p.stats.totalAssists, 0)}<br>` +
                   `• Average Age: ${(allPlayers.reduce((sum, p) => sum + p.age, 0) / allPlayers.length).toFixed(1)} years<br><br>` +
                   `This is the complete Madondo League overview! 🏆`;
        }
        
        // Default response for unrecognized queries
        return `🤖 <strong>Madondo League AI Assistant:</strong><br><br>I can help you with:<br>• Top scorers and assist leaders<br>• League table and team positions<br>• Player statistics and information<br>• Fixtures and match results<br>• League statistics and clean sheets<br><br>Try asking about "top scorers", "league table", or "player stats"! ⚽`;
    }

    getComprehensiveTableResponse(leagueTable) {
        let response = `📊 <strong>Complete Madondo League Table:</strong><br><br>`;
        
        leagueTable.forEach((team, index) => {
            const position = index + 1;
            const emoji = position === 1 ? '🥇' : position === 2 ? '🥈' : position === 3 ? '🥉' : '⚽';
            const nextOpponent = this.getNextOpponent(team.id);
            const nextOpponentName = nextOpponent && nextOpponent !== 'TBD' ? nextOpponent.name : 'TBD';
            
            response += `${emoji} ${position}. <strong>${team.name}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Points: ${team.points} | W:${team.won} D:${team.drawn} L:${team.lost}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${team.goalsFor} scored, ${team.goalsAgainst} conceded<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goal Difference: ${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Next: ${nextOpponentName}<br><br>`;
        });
        
        response += `📈 <strong>League Summary:</strong><br>`;
        response += `• Total Teams: ${leagueTable.length}<br>`;
        response += `• Total Matches: ${leagueTable.reduce((sum, team) => sum + team.played, 0) / 2}<br>`;
        response += `• Total Goals: ${leagueTable.reduce((sum, team) => sum + team.goalsFor, 0)}<br>`;
        response += `• Average Goals per Match: ${(leagueTable.reduce((sum, team) => sum + team.goalsFor, 0) / (leagueTable.reduce((sum, team) => sum + team.played, 0) / 2)).toFixed(2)}<br>`;
        
        return response;
    }

    getTableResponse() {
        const leagueTable = this.calculateLeagueTable();
        const topTeams = leagueTable.slice(0, 5);
        let response = `📊 <strong>Current Madondo League Table (Top 5):</strong><br><br>`;
        
        topTeams.forEach((team, index) => {
            const position = index + 1;
            const emoji = position === 1 ? '🥇' : position === 2 ? '🥈' : position === 3 ? '🥉' : '⚽';
            response += `${emoji} ${position}. <strong>${team.name}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Points: ${team.points} | W:${team.won} D:${team.drawn} L:${team.lost}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${team.goalsFor} scored, ${team.goalsAgainst} conceded<br><br>`;
        });
        
        response += `Want to see the full table with form and next opponents? Check out the Table page! 📈`;
        return response;
    }

    getTopTeamsResponse() {
        const leagueTable = this.calculateLeagueTable();
        const topTeams = leagueTable.slice(0, 3);
        let response = `🏆 <strong>Current Top 3 Teams:</strong><br><br>`;
        
        topTeams.forEach((team, index) => {
            const position = index + 1;
            const emoji = position === 1 ? '🥇' : position === 2 ? '🥈' : '🥉';
            response += `${emoji} <strong>${team.name}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Points: ${team.points} | Position: ${team.position}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Form: ${team.won}W ${team.drawn}D ${team.lost}L<br><br>`;
        });
        
        response += `Amazing competition at the top! 🔥`;
        return response;
    }

    getFormResponse() {
        const leagueTable = this.calculateLeagueTable();
        let response = `📈 <strong>Recent Form Analysis:</strong><br><br>`;
        
        leagueTable.slice(0, 4).forEach(team => {
            const lastFive = this.getLastFiveResults(team.id);
            const formString = lastFive.map(resultObj => resultObj.result.charAt(0).toUpperCase()).join('');
            response += `⚽ <strong>${team.name}</strong>: ${formString}<br>`;
        });
        
        response += `<br>Check the Form tab in the Table page for detailed analysis! 📊`;
        return response;
    }

    getComprehensivePlayerResponse(message, allPlayers) {
        if (message.includes('top') || message.includes('best')) {
            const topPlayers = allPlayers
                .sort((a, b) => (b.stats.totalGoals + b.stats.totalAssists) - (a.stats.totalGoals + a.stats.totalAssists))
                .slice(0, 5);
            
            let response = `⭐ <strong>Top 5 Players in Madondo League:</strong><br><br>`;
            
            topPlayers.forEach((player, index) => {
                const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐';
                response += `${emoji} <strong>${player.name}</strong> (${player.teamName})<br>`;
                response += `&nbsp;&nbsp;&nbsp;&nbsp;${player.position} | Age: ${player.age} | Nationality: ${player.nationality}<br>`;
                response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${player.stats.totalGoals} | Assists: ${player.stats.totalAssists}<br>`;
                response += `&nbsp;&nbsp;&nbsp;&nbsp;Total Contributions: ${player.stats.totalGoals + player.stats.totalAssists}<br><br>`;
            });
            
            return response + `These players are absolutely phenomenal! 🌟`;
        }
        
        return `🏃‍♂️ The Madondo League has incredible talent! We have ${allPlayers.length} players across ${Object.keys(websiteData.players).length} teams. Would you like to know about top scorers, assist leaders, or specific players?`;
    }

    getTopScorerResponse(allPlayers) {
        console.log('getTopScorerResponse called with', allPlayers.length, 'players');
        
        if (!allPlayers || allPlayers.length === 0) {
            return `⚽ <strong>Top Scorers:</strong><br><br>No player data available at the moment. Please try again later.`;
        }
        
        const topScorers = allPlayers
            .sort((a, b) => b.stats.totalGoals - a.stats.totalGoals)
            .slice(0, 5);
        
        console.log('Top scorers:', topScorers);
        
        let response = `⚽ <strong>Golden Boot Race - Top 5 Scorers:</strong><br><br>`;
        
        topScorers.forEach((player, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⚽';
            response += `${emoji} <strong>${player.name}</strong> (${player.teamName})<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${player.stats.totalGoals} | Position: ${player.position} | Age: ${player.age}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Assists: ${player.stats.totalAssists} | Own Goals: ${player.stats.ownGoals}<br><br>`;
        });
        
        response += `🔥 <strong>Scoring Statistics:</strong><br>`;
        response += `• Total Goals in League: ${allPlayers.reduce((sum, p) => sum + p.stats.totalGoals, 0)}<br>`;
        response += `• Average Goals per Player: ${(allPlayers.reduce((sum, p) => sum + p.stats.totalGoals, 0) / allPlayers.length).toFixed(1)}<br>`;
        response += `• Players with Goals: ${allPlayers.filter(p => p.stats.totalGoals > 0).length}/${allPlayers.length}<br>`;
        
        return response;
    }

    getTopAssistResponse(allPlayers) {
        const topAssisters = allPlayers
            .sort((a, b) => b.stats.totalAssists - a.stats.totalAssists)
            .slice(0, 5);
        
        let response = `🎯 <strong>Assist Leaders - Top 5 Providers:</strong><br><br>`;
        
        topAssisters.forEach((player, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🎯';
            response += `${emoji} <strong>${player.name}</strong> (${player.teamName})<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Assists: ${player.stats.totalAssists} | Position: ${player.position} | Age: ${player.age}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${player.stats.totalGoals} | Total Contributions: ${player.stats.totalGoals + player.stats.totalAssists}<br><br>`;
        });
        
        response += `📊 <strong>Assist Statistics:</strong><br>`;
        response += `• Total Assists in League: ${allPlayers.reduce((sum, p) => sum + p.stats.totalAssists, 0)}<br>`;
        response += `• Average Assists per Player: ${(allPlayers.reduce((sum, p) => sum + p.stats.totalAssists, 0) / allPlayers.length).toFixed(1)}<br>`;
        response += `• Players with Assists: ${allPlayers.filter(p => p.stats.totalAssists > 0).length}/${allPlayers.length}<br>`;
        
        return response;
    }

    getYoungestPlayersResponse(allPlayers) {
        const youngestPlayers = allPlayers
            .sort((a, b) => a.age - b.age)
            .slice(0, 5);
        
        let response = `👶 <strong>Youngest Players - Top 5:</strong><br><br>`;
        
        youngestPlayers.forEach((player, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '👶';
            response += `${emoji} <strong>${player.name}</strong> (${player.teamName})<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Age: ${player.age} | Position: ${player.position} | Nationality: ${player.nationality}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${player.stats.totalGoals} | Assists: ${player.stats.totalAssists}<br><br>`;
        });
        
        response += `📊 <strong>Age Statistics:</strong><br>`;
        response += `• Average Age: ${(allPlayers.reduce((sum, p) => sum + p.age, 0) / allPlayers.length).toFixed(1)} years<br>`;
        response += `• Youngest: ${youngestPlayers[0].age} years (${youngestPlayers[0].name})<br>`;
        response += `• Players under 25: ${allPlayers.filter(p => p.age < 25).length}/${allPlayers.length}<br>`;
        
        return response;
    }

    getOldestPlayersResponse(allPlayers) {
        const oldestPlayers = allPlayers
            .sort((a, b) => b.age - a.age)
            .slice(0, 5);
        
        let response = `👴 <strong>Veteran Players - Top 5 Oldest:</strong><br><br>`;
        
        oldestPlayers.forEach((player, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '👴';
            response += `${emoji} <strong>${player.name}</strong> (${player.teamName})<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Age: ${player.age} | Position: ${player.position} | Nationality: ${player.nationality}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${player.stats.totalGoals} | Assists: ${player.stats.totalAssists}<br><br>`;
        });
        
        response += `📊 <strong>Experience Statistics:</strong><br>`;
        response += `• Average Age: ${(allPlayers.reduce((sum, p) => sum + p.age, 0) / allPlayers.length).toFixed(1)} years<br>`;
        response += `• Oldest: ${oldestPlayers[0].age} years (${oldestPlayers[0].name})<br>`;
        response += `• Players over 30: ${allPlayers.filter(p => p.age > 30).length}/${allPlayers.length}<br>`;
        
        return response;
    }

    getLeagueStatisticsResponse(leagueTable, allPlayers, completedFixtures) {
        // Calculate clean sheets for each team
        const cleanSheets = {};
        Object.keys(teamsData).forEach(teamId => {
            cleanSheets[teamId] = 0;
        });
        
        // Count clean sheets from completed fixtures
        completedFixtures.forEach(fixture => {
            if (fixture.score) {
                const homeTeam = fixture.homeTeam;
                const awayTeam = fixture.awayTeam;
                const homeScore = fixture.score.home;
                const awayScore = fixture.score.away;
                
                // Home team clean sheet
                if (awayScore === 0) {
                    cleanSheets[homeTeam]++;
                }
                
                // Away team clean sheet
                if (homeScore === 0) {
                    cleanSheets[awayTeam]++;
                }
            }
        });
        
        // Get top scorers
        const topScorers = allPlayers
            .sort((a, b) => b.stats.totalGoals - a.stats.totalGoals)
            .slice(0, 3);
        
        // Get top assisters
        const topAssisters = allPlayers
            .sort((a, b) => b.stats.totalAssists - a.stats.totalAssists)
            .slice(0, 3);
        
        // Get teams with most clean sheets
        const cleanSheetLeaders = Object.keys(cleanSheets)
            .map(teamId => ({
                teamId,
                name: teamsData[teamId].name,
                cleanSheets: cleanSheets[teamId]
            }))
            .sort((a, b) => b.cleanSheets - a.cleanSheets)
            .slice(0, 3);
        
        let response = `📊 <strong>Comprehensive League Statistics:</strong><br><br>`;
        
        // Top Scorers
        response += `⚽ <strong>Top Scorers:</strong><br>`;
        topScorers.forEach((player, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
            response += `${emoji} ${player.name} (${player.teamName}) - ${player.stats.totalGoals} goals<br>`;
        });
        response += `<br>`;
        
        // Top Assisters
        response += `🎯 <strong>Top Assisters:</strong><br>`;
        topAssisters.forEach((player, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
            response += `${emoji} ${player.name} (${player.teamName}) - ${player.stats.totalAssists} assists<br>`;
        });
        response += `<br>`;
        
        // Clean Sheet Leaders
        response += `🛡️ <strong>Clean Sheet Leaders:</strong><br>`;
        cleanSheetLeaders.forEach((team, index) => {
            const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
            response += `${emoji} ${team.name} - ${team.cleanSheets} clean sheets<br>`;
        });
        response += `<br>`;
        
        // Overall Statistics
        response += `📈 <strong>Overall Statistics:</strong><br>`;
        response += `• Total Goals Scored: ${allPlayers.reduce((sum, p) => sum + p.stats.totalGoals, 0)}<br>`;
        response += `• Total Assists: ${allPlayers.reduce((sum, p) => sum + p.stats.totalAssists, 0)}<br>`;
        response += `• Total Clean Sheets: ${Object.values(cleanSheets).reduce((sum, cs) => sum + cs, 0)}<br>`;
        response += `• Matches Played: ${completedFixtures.length}<br>`;
        response += `• Teams: ${leagueTable.length}<br>`;
        response += `• Players: ${allPlayers.length}<br>`;
        
        return response;
    }



    getFixtureResponse() {
        const upcomingFixtures = websiteData.fixtures.filter(f => f.status === 'scheduled' || f.status === 'upcoming').slice(0, 3);
        let response = `📅 <strong>Upcoming Madondo League Fixtures:</strong><br><br>`;
        
        upcomingFixtures.forEach(fixture => {
            const homeTeam = teamsData[fixture.homeTeam];
            const awayTeam = teamsData[fixture.awayTeam];
            response += `⚽ <strong>${homeTeam ? homeTeam.name : fixture.homeTeam} vs ${awayTeam ? awayTeam.name : fixture.awayTeam}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;📍 ${this.formatDate(fixture.date)} at ${fixture.time}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;🏟️ ${homeTeam ? homeTeam.stadium : 'TBD'}<br><br>`;
        });
        
        return response + `Don't miss these exciting matches! 🔥`;
    }

    getLiveMatchesResponse() {
        const liveFixtures = websiteData.fixtures.filter(f => f.status === 'live');
        if (liveFixtures.length === 0) {
            return `📺 <strong>Live Matches:</strong><br><br>No matches are currently live. Check the Fixtures page for upcoming games! ⚽`;
        }
        
        let response = `📺 <strong>Live Matches:</strong><br><br>`;
        liveFixtures.forEach(fixture => {
            const homeTeam = teamsData[fixture.homeTeam];
            const awayTeam = teamsData[fixture.awayTeam];
            response += `🔴 <strong>${homeTeam ? homeTeam.name : fixture.homeTeam} ${fixture.score.home} - ${fixture.score.away} ${awayTeam ? awayTeam.name : fixture.awayTeam}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;📍 ${this.formatDate(fixture.date)} | Matchday ${fixture.matchday}<br><br>`;
        });
        
        return response + `Stay tuned for live updates! 📱`;
    }

    getRecentResultsResponse() {
        const completedFixtures = websiteData.fixtures.filter(f => f.status === 'completed').slice(0, 3);
        let response = `📊 <strong>Recent Results:</strong><br><br>`;
        
        completedFixtures.forEach(fixture => {
            const homeTeam = teamsData[fixture.homeTeam];
            const awayTeam = teamsData[fixture.awayTeam];
            response += `⚽ <strong>${homeTeam ? homeTeam.name : fixture.homeTeam} ${fixture.score.home} - ${fixture.score.away} ${awayTeam ? awayTeam.name : fixture.awayTeam}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;📍 ${this.formatDate(fixture.date)} | Matchday ${fixture.matchday}<br><br>`;
        });
        
        return response + `Check the Fixtures page for all results! 📈`;
    }

    getNewsResponse() {
        const latestNews = websiteData.news.slice(0, 2);
        let response = `📰 <strong>Latest Madondo League News:</strong><br><br>`;
        
        latestNews.forEach(news => {
            response += `🗞️ <strong>${news.title}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;${news.content.substring(0, 80)}...<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;📅 ${news.date}<br><br>`;
        });
        
        return response + `Stay updated with all the latest happenings! 📈`;
    }

    getStadiumResponse() {
        let response = `🏟️ <strong>Madondo League Stadiums:</strong><br><br>`;
        
        Object.values(teamsData).forEach(team => {
            response += `⚽ <strong>${team.name}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;🏟️ ${team.stadium}<br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;👥 Capacity: ${team.capacity.toLocaleString()}<br><br>`;
        });
        
        return response + `These are some of the finest stadiums in football! 🌟`;
    }

    getManagerResponse() {
        let response = `👨‍💼 <strong>Madondo League Managers:</strong><br><br>`;
        
        Object.values(teamsData).forEach(team => {
            response += `⚽ <strong>${team.name}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;&nbsp;👨‍💼 ${team.manager}<br><br>`;
        });
        
        return response + `These managers are leading their teams to glory! 🏆`;
    }

    getSeasonResponse() {
        const leagueTable = this.calculateLeagueTable();
        const totalMatches = websiteData.fixtures.filter(f => f.status === 'completed').length;
        const totalGoals = leagueTable.reduce((sum, team) => sum + team.goalsFor, 0);
        
        let response = `🏆 <strong>Madondo League Season Overview:</strong><br><br>`;
        response += `📊 Total Matches Played: ${totalMatches}<br>`;
        response += `⚽ Total Goals Scored: ${totalGoals}<br>`;
        response += `🏟️ Teams Competing: ${Object.keys(teamsData).length}<br><br>`;
        
        response += `The season is heating up with incredible competition! 🔥`;
        return response;
    }

    getGreetingResponse() {
        const greetings = [
            `Hello! 👋 I'm your Madondo League AI assistant! I have comprehensive knowledge about all teams, players, fixtures, and news. What would you like to know? ⚽`,
            `Hi there! 🌟 Welcome to the Madondo League! I can help you with standings, player stats, upcoming matches, and much more. What interests you? 🏆`,
            `Hey! 🎉 I'm excited to help you explore the Madondo League! Ask me about anything - from current standings to player performance to upcoming fixtures! ⚽`,
            `Good day! 🌞 I'm your knowledgeable guide to the Madondo League! I can provide detailed information about teams, players, matches, and news. What would you like to explore? 🏆`
        ];
        
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    getComprehensiveHelpResponse() {
        const allPlayers = this.getAllPlayersWithStats();
        const leagueTable = this.calculateLeagueTable();
        
        return `🤖 <strong>I can help you with comprehensive Madondo League data:</strong><br><br>` +
               `📊 <strong>League Table & Standings</strong> - Complete table with ${leagueTable.length} teams<br>` +
               `⚽ <strong>Fixtures & Results</strong> - ${websiteData.fixtures.length} total matches<br>` +
               `🏃‍♂️ <strong>Players & Stats</strong> - ${allPlayers.length} players with detailed statistics<br>` +
               `🏆 <strong>Teams & Clubs</strong> - Team details, stadiums, managers<br>` +
               `📰 <strong>News & Updates</strong> - ${websiteData.news.length} latest news articles<br>` +
               `📈 <strong>Form Analysis</strong> - Recent performance, last 5 results<br>` +
               `🎯 <strong>Player Analysis</strong> - Top scorers, assist leaders, age analysis<br>` +
               `📊 <strong>Statistics</strong> - League statistics, averages, trends<br><br>` +
               `Try asking me:<br>` +
               `• "Show me the complete league table"<br>` +
               `• "Who are the top scorers?"<br>` +
               `• "Give me league statistics"<br>` +
               `• "Show me everything"<br><br>` +
               `I have access to all ${allPlayers.length} players and ${leagueTable.length} teams! 🌟`;
    }

    findTeamInMessage(message) {
        return Object.values(teamsData).find(team => 
            message.includes(team.name.toLowerCase()) || 
            message.includes(team.shortName.toLowerCase())
        );
    }

    findPlayerInMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Search through all teams for the player with fuzzy matching
        for (const teamId in websiteData.players) {
            const player = websiteData.players[teamId].find(player => {
                const playerName = player.name.toLowerCase();
                const playerPosition = player.position.toLowerCase();
                const playerId = player.id.toLowerCase();
                
                // Exact matches
                if (lowerMessage.includes(playerName) || lowerMessage.includes(playerId)) {
                    return true;
                }
                
                // Partial name matches (at least 3 characters)
                if (playerName.length >= 3) {
                    const nameParts = playerName.split(' ');
                    for (const part of nameParts) {
                        if (part.length >= 3 && lowerMessage.includes(part)) {
                            return true;
                        }
                    }
                }
                
                // Position-based queries
                if (lowerMessage.includes(playerPosition) || 
                    (playerPosition === 'striker' && lowerMessage.includes('forward')) ||
                    (playerPosition === 'forward' && lowerMessage.includes('striker')) ||
                    (playerPosition === 'defender' && lowerMessage.includes('def')) ||
                    (playerPosition === 'midfielder' && lowerMessage.includes('mid'))) {
                    return true;
                }
                
                // Number-based queries
                if (lowerMessage.includes(player.number.toString())) {
                    return true;
                }
                
                return false;
            });
            
            if (player) {
                return player;
            }
        }
        
        // If no direct match, try to find similar names
        for (const teamId in websiteData.players) {
            const player = websiteData.players[teamId].find(player => {
                const playerName = player.name.toLowerCase();
                
                // Check for similar names (common misspellings or variations)
                const nameVariations = [
                    playerName.replace(' ', ''),
                    playerName.split(' ').reverse().join(' '),
                    playerName.split(' ')[0], // First name only
                    playerName.split(' ')[1]  // Last name only
                ];
                
                return nameVariations.some(variation => 
                    variation.length >= 3 && lowerMessage.includes(variation)
                );
            });
            
            if (player) {
                return player;
            }
        }
        
        return null;
    }

    getTeamResponse(team) {
        const leagueTable = this.calculateLeagueTable();
        const teamStats = leagueTable.find(t => t.id === team.id);
        
        if (teamStats) {
            return `🏆 <strong>${team.name}</strong><br><br>` +
                   `📍 Position: ${teamStats.position}<br>` +
                   `⚽ Points: ${teamStats.points}<br>` +
                   `🎯 Form: ${teamStats.won}W-${teamStats.drawn}D-${teamStats.lost}L<br>` +
                   `🥅 Goals: ${teamStats.goalsFor} scored, ${teamStats.goalsAgainst} conceded<br>` +
                   `📊 Goal Difference: ${teamStats.goalDifference > 0 ? '+' : ''}${teamStats.goalDifference}<br><br>` +
                   `${team.name} is having a great season! 🌟`;
        } else {
            return `🏆 <strong>${team.name}</strong><br><br>` +
                   `🏟️ Stadium: ${team.stadium}<br>` +
                   `👨‍💼 Manager: ${team.manager}<br>` +
                   `📅 Founded: ${team.founded}<br>` +
                   `🏆 Titles: ${team.titles}<br><br>` +
                   `${team.name} is a fantastic club! 🌟`;
        }
    }

    getPlayerDetailsResponse(player) {
        return `⭐ <strong>${player.name}</strong><br><br>` +
               `🏃‍♂️ Position: ${player.position}<br>` +
               `🏆 Club: ${player.club}<br>` +
               `⚽ Goals: ${player.stats.totalGoals}<br>` +
               `🎯 Assists: ${player.stats.totalAssists}<br>` +
               `🌟 Age: ${player.age}<br><br>` +
               `${player.name} is an incredible talent! 🔥`;
    }

    // Helper functions for fixtures
    getStatusColor(status) {
        switch(status) {
            case 'completed': return '#28a745';
            case 'live': return '#dc3545';
            case 'scheduled': return '#007bff';
            case 'upcoming': return '#6c757d';
            case 'postponed': return '#ffc107';
            default: return '#6c757d';
        }
    }

    getStatusText(status) {
        switch(status) {
            case 'completed': return 'FT';
            case 'live': return 'LIVE';
            case 'scheduled': return 'SCHEDULED';
            case 'upcoming': return 'UPCOMING';
            case 'postponed': return 'POSTPONED';
            default: return status.toUpperCase();
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    }

    // Table tab switching functionality
    switchTableTab(tabName) {
        // Remove active class from all tabs and views
        document.querySelectorAll('.table-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.table-view').forEach(view => view.classList.remove('active'));
        
        // Add active class to selected tab and view
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-table`).classList.add('active');
    }

    // Get last 5 results for a team
    getLastFiveResults(teamId) {
        const teamFixtures = websiteData.fixtures
            .filter(fixture => 
                (fixture.homeTeam === teamId || fixture.awayTeam === teamId) && 
                fixture.status === 'completed' && 
                fixture.score
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);

        return teamFixtures.map((fixture, index) => {
            const isHome = fixture.homeTeam === teamId;
            const teamScore = isHome ? fixture.score.home : fixture.score.away;
            const opponentScore = isHome ? fixture.score.away : fixture.score.home;
            
            let result;
            if (teamScore > opponentScore) result = 'win';
            else if (teamScore < opponentScore) result = 'loss';
            else result = 'draw';
            
            return {
                result: result,
                isLatest: index === 0
            };
        });
    }

    // Get next opponent for a team
    getNextOpponent(teamId) {
        const nextFixture = websiteData.fixtures
            .filter(fixture => 
                (fixture.homeTeam === teamId || fixture.awayTeam === teamId) && 
                (fixture.status === 'scheduled' || fixture.status === 'upcoming')
            )
            .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

        if (!nextFixture) return 'TBD';

        const isHome = nextFixture.homeTeam === teamId;
        const opponentId = isHome ? nextFixture.awayTeam : nextFixture.homeTeam;
        return teamsData[opponentId];
    }

    // Helper functions for match stats
    getGoalScorers(lineup) {
        const allPlayers = [...lineup.home.starting, ...lineup.home.substitutes, ...lineup.away.starting, ...lineup.away.substitutes];
        const goalScorers = allPlayers.filter(player => player.goals > 0 && player.goalMinutes && player.goalMinutes.length > 0);
        
        if (goalScorers.length === 0) {
            return '<div class="no-goals">No goals scored in this match</div>';
        }

        return `
            <div class="goal-scorers-list">
                ${goalScorers.map(player => `
                    <div class="goal-scorer-item">
                        <span class="player-name">${player.name}</span>
                        <span class="goal-count">${player.goals} goal${player.goals > 1 ? 's' : ''}</span>
                        <span class="goal-minutes">${this.getGoalTypeDisplay(player.goalTypes, player.goalMinutes)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    getCardDetails(lineup) {
        const allPlayers = [...lineup.home.starting, ...lineup.home.substitutes, ...lineup.away.starting, ...lineup.away.substitutes];
        const cardedPlayers = allPlayers.filter(player => 
            (player.yellowCard && player.yellowCardMinutes && player.yellowCardMinutes.length > 0) || 
            (player.redCard && player.redCardMinutes && player.redCardMinutes.length > 0)
        );
        
        if (cardedPlayers.length === 0) {
            return '<div class="no-cards">No cards shown in this match</div>';
        }

        return `
            <div class="card-details-list">
                ${cardedPlayers.map(player => `
                    <div class="card-item">
                        <span class="player-name">${player.name}</span>
                        ${player.yellowCard && player.yellowCardMinutes && player.yellowCardMinutes.length > 0 ? `<span class="yellow-card">🟨 (${player.yellowCardMinutes.join(', ')}')</span>` : ''}
                        ${player.redCard && player.redCardMinutes && player.redCardMinutes.length > 0 ? `<span class="red-card">🟥 ${player.redCardFromTwoYellows ? '<div class="two-yellows">🟨🟨</div>' : ''} (${player.redCardMinutes.join(', ')}')</span>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    getSubstitutionDetails(lineup, matchId) {
        // Get the fixture to identify teams properly
        const fixture = websiteData.fixtures.find(f => f.id === matchId);
        const homeTeam = fixture ? teamsData[fixture.homeTeam] : null;
        const awayTeam = fixture ? teamsData[fixture.awayTeam] : null;
        
        const homeSubs = lineup.home.substitutes.filter(player => player.substituted && player.substitutionMinute && player.cameOnFor);
        const awaySubs = lineup.away.substitutes.filter(player => player.substituted && player.substitutionMinute && player.cameOnFor);
        
        // Sort substitutions by time
        homeSubs.sort((a, b) => a.substitutionMinute - b.substitutionMinute);
        awaySubs.sort((a, b) => a.substitutionMinute - b.substitutionMinute);
        
        if (homeSubs.length === 0 && awaySubs.length === 0) {
            return '<div class="no-subs">No substitutions made in this match</div>';
        }

        return `
            <div class="substitution-list">
                ${homeSubs.length > 0 ? `
                    <div class="team-substitutions">
                        <h4 class="team-sub-title">${homeTeam ? homeTeam.name : 'Home Team'}</h4>
                        ${homeSubs.map(player => `
                            <div class="substitution-item">
                                <span class="player-name">${player.name}</span>
                                <span class="substitution-time">${player.substitutionMinute}'</span>
                                <span class="substitution-for">for #${player.cameOnFor}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                ${awaySubs.length > 0 ? `
                    <div class="team-substitutions">
                        <h4 class="team-sub-title">${awayTeam ? awayTeam.name : 'Away Team'}</h4>
                        ${awaySubs.map(player => `
                            <div class="substitution-item">
                                <span class="player-name">${player.name}</span>
                                <span class="substitution-time">${player.substitutionMinute}'</span>
                                <span class="substitution-for">for #${player.cameOnFor}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Get all players with comprehensive stats
    getAllPlayersWithStats() {
        const allPlayers = [];
        
        Object.keys(websiteData.players).forEach(teamId => {
            const teamName = teamsData[teamId] ? teamsData[teamId].name : teamId;
            websiteData.players[teamId].forEach(player => {
                const stats = this.calculatePlayerStats(player.id);
                allPlayers.push({
                    ...player,
                    teamName: teamName,
                    teamId: teamId,
                    stats: stats,
                    image: `assets/players/${player.id}.jpg`
                });
            });
        });
        
        return allPlayers;
    }

    // Calculate league table from fixtures data
    calculateLeagueTable() {
        const table = {};
        
        // Initialize teams
        Object.keys(teamsData).forEach(teamId => {
            table[teamId] = {
                id: teamId,
                name: teamsData[teamId].name,
                shortName: teamsData[teamId].shortName,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0
            };
        });

        // Calculate stats from completed fixtures
        websiteData.fixtures.forEach(fixture => {
            if (fixture.status === 'completed' && fixture.score) {
                const homeTeam = fixture.homeTeam;
                const awayTeam = fixture.awayTeam;
                const homeScore = fixture.score.home;
                const awayScore = fixture.score.away;

                // Update home team stats
                table[homeTeam].played++;
                table[homeTeam].goalsFor += homeScore;
                table[homeTeam].goalsAgainst += awayScore;

                // Update away team stats
                table[awayTeam].played++;
                table[awayTeam].goalsFor += awayScore;
                table[awayTeam].goalsAgainst += homeScore;

                // Determine result and update points
                if (homeScore > awayScore) {
                    // Home win
                    table[homeTeam].won++;
                    table[homeTeam].points += 3;
                    table[awayTeam].lost++;
                } else if (homeScore < awayScore) {
                    // Away win
                    table[awayTeam].won++;
                    table[awayTeam].points += 3;
                    table[homeTeam].lost++;
                } else {
                    // Draw
                    table[homeTeam].drawn++;
                    table[homeTeam].points += 1;
                    table[awayTeam].drawn++;
                    table[awayTeam].points += 1;
                }
            }
        });

        // Calculate goal difference
        Object.values(table).forEach(team => {
            team.goalDifference = team.goalsFor - team.goalsAgainst;
        });

        // Sort table by points, goal difference, goals scored
        const sortedTable = Object.values(table).sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
            return b.goalsFor - a.goalsFor;
        });

        // Add position
        sortedTable.forEach((team, index) => {
            team.position = index + 1;
        });

        return sortedTable;
    }

    // Helper method to get next opponent
    getNextOpponent(teamId) {
        const upcomingFixtures = websiteData.fixtures.filter(f => f.status === 'scheduled' || f.status === 'upcoming');
        const nextFixture = upcomingFixtures.find(f => f.homeTeam === teamId || f.awayTeam === teamId);
        
        if (nextFixture) {
            const opponentId = nextFixture.homeTeam === teamId ? nextFixture.awayTeam : nextFixture.homeTeam;
            return teamsData[opponentId];
        }
        return null;
    }

    // Helper method to find team in message with fuzzy matching
    findTeamInMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Direct matches first
        for (const teamId in teamsData) {
            const team = teamsData[teamId];
            if (lowerMessage.includes(team.name.toLowerCase()) || 
                lowerMessage.includes(team.shortName.toLowerCase()) ||
                lowerMessage.includes(teamId.toLowerCase())) {
                return team;
            }
        }
        
        // Fuzzy matching for partial names and common variations
        for (const teamId in teamsData) {
            const team = teamsData[teamId];
            const teamName = team.name.toLowerCase();
            const shortName = team.shortName.toLowerCase();
            
            // Check for partial matches (at least 3 characters)
            if (teamName.length >= 3 && lowerMessage.includes(teamName.substring(0, 3))) {
                return team;
            }
            if (shortName.length >= 2 && lowerMessage.includes(shortName.substring(0, 2))) {
                return team;
            }
            
            // Common abbreviations and variations
            const variations = [
                'sleek', 'legends', 'sleek legends',
                'lablues', 'blues', 'la blues',
                'kampomede', 'kampo', 'kampo fc',
                'jaguar', 'jaguars', 'jaguar fc'
            ];
            
            for (const variation of variations) {
                if (lowerMessage.includes(variation)) {
                    // Map variations to teams
                    if ((variation === 'sleek' || variation === 'legends' || variation === 'sleek legends') && teamId === 'sleek') {
                        return team;
                    }
                    if ((variation === 'lablues' || variation === 'blues' || variation === 'la blues') && teamId === 'lablues') {
                        return team;
                    }
                    if ((variation === 'kampomede' || variation === 'kampo' || variation === 'kampo fc') && teamId === 'kampomede') {
                        return team;
                    }
                    if ((variation === 'jaguar' || variation === 'jaguars' || variation === 'jaguar fc') && teamId === 'jaguar') {
                        return team;
                    }
                }
            }
        }
        
        return null;
    }

    // Helper method to get greeting response
    getGreetingResponse() {
        const responses = [
            `Hello! 👋 Welcome to the Madondo League! I'm your AI assistant with comprehensive knowledge about all teams, players, and matches. How can I help you today? 🌟`,
            `Hi there! ⚽ Great to see you! I have all the latest information about the Madondo League. What would you like to know? 🏆`,
            `Hey! 🎯 Welcome to the most exciting league! I can tell you about standings, players, fixtures, and much more. What interests you? 🔥`,
            `Greetings! 🏟️ The Madondo League is absolutely incredible! I'm here to provide you with all the latest stats and information. What can I help you with? ⚽`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Helper method to get position emoji
    getPositionEmoji(position) {
        if (position === 1) return '🥇';
        if (position === 2) return '🥈';
        if (position === 3) return '🥉';
        return '⚽';
    }

    // Helper method to provide comprehensive information for incomplete queries
    getQuerySuggestionsResponse(queryWords, leagueTable, allPlayers) {
        const completedFixtures = websiteData.fixtures.filter(f => f.status === 'completed');
        const upcomingFixtures = websiteData.fixtures.filter(f => f.status === 'scheduled' || f.status === 'upcoming');
        let response = '';
        let foundInfo = false;
        
        // Analyze query words to provide comprehensive information
        for (const word of queryWords) {
            if (word.length >= 2) {
                // Team information
                for (const teamId in teamsData) {
                    const team = teamsData[teamId];
                    if (team.name.toLowerCase().includes(word) || 
                        team.shortName.toLowerCase().includes(word) ||
                        teamId.toLowerCase().includes(word)) {
                        
                        const teamStats = leagueTable.find(t => t.id === teamId);
                        const teamPlayers = allPlayers.filter(p => p.teamId === teamId);
                        
                        response += `🏆 <strong>${team.name} Information:</strong><br><br>`;
                        
                        if (teamStats) {
                            response += `📊 <strong>League Position:</strong> ${teamStats.position}${this.getPositionEmoji(teamStats.position)}<br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Points: ${teamStats.points} | W:${teamStats.won} D:${teamStats.drawn} L:${teamStats.lost}<br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${teamStats.goalsFor} scored, ${teamStats.goalsAgainst} conceded<br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Goal Difference: ${teamStats.goalDifference > 0 ? '+' : ''}${teamStats.goalDifference}<br><br>`;
                        }
                        
                        response += `👥 <strong>Players (${teamPlayers.length}):</strong><br>`;
                        teamPlayers.slice(0, 5).forEach(player => {
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;• ${player.name} (${player.position}) - Age: ${player.age}<br>`;
                        });
                        if (teamPlayers.length > 5) {
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;... and ${teamPlayers.length - 5} more players<br>`;
                        }
                        response += `<br>`;
                        
                        foundInfo = true;
                    }
                }
                
                // Player information
                for (const teamId in websiteData.players) {
                    for (const player of websiteData.players[teamId]) {
                        if (player.name.toLowerCase().includes(word) || 
                            player.position.toLowerCase().includes(word) ||
                            player.id.toLowerCase().includes(word)) {
                            
                            const playerStats = allPlayers.find(p => p.id === player.id);
                            const team = teamsData[playerStats?.teamId];
                            
                            response += `🏃‍♂️ <strong>${player.name} Information:</strong><br><br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Team: ${team?.name || 'Unknown'}<br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Position: ${player.position}<br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Age: ${player.age} | Nationality: ${player.nationality}<br>`;
                            response += `&nbsp;&nbsp;&nbsp;&nbsp;Shirt Number: ${player.number}<br>`;
                            
                            if (playerStats) {
                                response += `&nbsp;&nbsp;&nbsp;&nbsp;Goals: ${playerStats.stats.totalGoals} | Assists: ${playerStats.stats.totalAssists}<br>`;
                            }
                            response += `<br>`;
                            
                            foundInfo = true;
                        }
                    }
                }
                
                // Position-based information
                if (word.includes('striker') || word.includes('forward')) {
                    const strikers = allPlayers.filter(p => p.position.toLowerCase().includes('striker') || p.position.toLowerCase().includes('forward'));
                    response += `⚽ <strong>All Strikers/Forwards (${strikers.length}):</strong><br><br>`;
                    strikers.slice(0, 8).forEach(player => {
                        response += `&nbsp;&nbsp;&nbsp;&nbsp;• ${player.name} (${player.teamName}) - Goals: ${player.stats.totalGoals}<br>`;
                    });
                    if (strikers.length > 8) {
                        response += `&nbsp;&nbsp;&nbsp;&nbsp;... and ${strikers.length - 8} more strikers<br>`;
                    }
                    response += `<br>`;
                    foundInfo = true;
                }
                
                if (word.includes('mid') || word.includes('midfielder')) {
                    const midfielders = allPlayers.filter(p => p.position.toLowerCase().includes('midfielder'));
                    response += `🎯 <strong>All Midfielders (${midfielders.length}):</strong><br><br>`;
                    midfielders.slice(0, 8).forEach(player => {
                        response += `&nbsp;&nbsp;&nbsp;&nbsp;• ${player.name} (${player.teamName}) - Assists: ${player.stats.totalAssists}<br>`;
                    });
                    if (midfielders.length > 8) {
                        response += `&nbsp;&nbsp;&nbsp;&nbsp;... and ${midfielders.length - 8} more midfielders<br>`;
                    }
                    response += `<br>`;
                    foundInfo = true;
                }
                
                if (word.includes('def') || word.includes('defender')) {
                    const defenders = allPlayers.filter(p => p.position.toLowerCase().includes('defender'));
                    response += `🛡️ <strong>All Defenders (${defenders.length}):</strong><br><br>`;
                    defenders.slice(0, 8).forEach(player => {
                        response += `&nbsp;&nbsp;&nbsp;&nbsp;• ${player.name} (${player.teamName})<br>`;
                    });
                    if (defenders.length > 8) {
                        response += `&nbsp;&nbsp;&nbsp;&nbsp;... and ${defenders.length - 8} more defenders<br>`;
                    }
                    response += `<br>`;
                    foundInfo = true;
                }
            }
        }
        
        if (foundInfo) {
            return response + `💡 <strong>Need more specific information?</strong> Try asking about "league table", "top scorers", "fixtures", or "statistics"! 🎯`;
        }
        
        // If no specific info found, provide general overview
        return `📊 <strong>Madondo League Overview:</strong><br><br>` +
               `🏆 <strong>League Status:</strong><br>` +
               `• ${leagueTable.length} teams competing<br>` +
               `• ${allPlayers.length} players registered<br>` +
               `• ${completedFixtures.length} matches completed<br>` +
               `• ${upcomingFixtures.length} upcoming fixtures<br><br>` +
               `🎯 <strong>Quick Access:</strong><br>` +
               `• "League table" - Complete standings<br>` +
               `• "Top scorers" - Goal leaders<br>` +
               `• "Fixtures" - Upcoming matches<br>` +
               `• "Statistics" - League stats<br>` +
               `• "Show everything" - Complete overview<br><br>` +
               `Ask me anything about teams, players, or matches! 🚀`;
    }


}

// Global function for manual hero image changes
function changeHeroImage(index) {
    const images = document.querySelectorAll('.hero-image');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from all images and indicators
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    // Add active class to selected image and indicator
    if (images[index]) images[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
}

// Initialize the application
const app = new FootballLeagueApp();

// Players page search and sort functions
function filterPlayers() {
    const searchInput = document.getElementById('players-search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const playerRows = document.querySelectorAll('.player-modern-row');
    
    playerRows.forEach(row => {
        const nameElement = row.querySelector('.player-modern-name');
        const positionElement = row.querySelector('.player-modern-position');
        const numberElement = row.querySelector('.player-modern-number');
        
        const playerName = nameElement ? nameElement.textContent.toLowerCase() : '';
        const playerPosition = positionElement ? positionElement.textContent.toLowerCase() : '';
        const playerNumber = numberElement ? numberElement.textContent.toLowerCase() : '';
        
        const matches = playerName.includes(searchTerm) || 
                       playerPosition.includes(searchTerm) || 
                       playerNumber.includes(searchTerm);
        
        row.style.display = matches ? 'flex' : 'none';
    });
}

function sortPlayers() {
    const sortSelect = document.getElementById('players-sort-select');
    const sortBy = sortSelect ? sortSelect.value : 'name';
    const container = document.getElementById('players-results-container');
    
    if (!container) return;

    // Get all team sections
    const teamSections = container.querySelectorAll('.team-modern-section');
    
    teamSections.forEach(teamSection => {
        const playerRows = Array.from(teamSection.querySelectorAll('.player-modern-row'));
        
        playerRows.sort((a, b) => {
            let aValue, bValue;
            
            switch (sortBy) {
                case 'name':
                    const nameA = a.querySelector('.player-modern-name');
                    const nameB = b.querySelector('.player-modern-name');
                    aValue = nameA ? nameA.textContent.trim() : '';
                    bValue = nameB ? nameB.textContent.trim() : '';
                    return aValue.localeCompare(bValue);
                    
                case 'name-desc':
                    const nameADesc = a.querySelector('.player-modern-name');
                    const nameBDesc = b.querySelector('.player-modern-name');
                    aValue = nameADesc ? nameADesc.textContent.trim() : '';
                    bValue = nameBDesc ? nameBDesc.textContent.trim() : '';
                    return bValue.localeCompare(aValue);
                    
                case 'position':
                    const posA = a.querySelector('.player-modern-position');
                    const posB = b.querySelector('.player-modern-position');
                    aValue = posA ? posA.textContent.trim() : '';
                    bValue = posB ? posB.textContent.trim() : '';
                    return aValue.localeCompare(bValue);
                    
                case 'number':
                    const numA = a.querySelector('.player-modern-number');
                    const numB = b.querySelector('.player-modern-number');
                    aValue = numA ? parseInt(numA.textContent.replace('#', '')) : 0;
                    bValue = numB ? parseInt(numB.textContent.replace('#', '')) : 0;
                    return aValue - bValue;
                    
                case 'team':
                    // Already sorted by team in the HTML structure
                    return 0;
                    
                case 'goals':
                    // For now, return 0 to avoid errors - we'll add this later
                    return 0;
                    
                case 'assists':
                    // For now, return 0 to avoid errors - we'll add this later
                    return 0;
                    
                case 'age':
                    // For now, return 0 to avoid errors - we'll add this later
                    return 0;
                    
                case 'age-desc':
                    // For now, return 0 to avoid errors - we'll add this later
                    return 0;
                    
                case 'nationality':
                    // For now, return 0 to avoid errors - we'll add this later
                    return 0;
                    
                case 'experience':
                    // For now, return 0 to avoid errors - we'll add this later
                    return 0;
                    
                default:
                    return 0;
            }
        });
        
        // Re-append sorted players
        const playersList = teamSection.querySelector('.players-modern-list');
        if (playersList) {
            playerRows.forEach(row => {
                playersList.appendChild(row);
            });
        }
    });
}
