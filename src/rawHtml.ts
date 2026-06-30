export const RAW_HTML_CODE = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swojskie Tradycje | Domowe Wypieki, Ciasta i Garmażeria Wołomin</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Swojskie Tradycje w Wołominie - oferujemy tradycyjne ciasta domowe, torty okolicznościowe, wyroby oraz świeżą garmażerię przygotowywaną według rodzinnych receptur. Zamów już teraz!">
    <meta name="keywords" content="swojskie ciasta, domowe wypieki, ciasta Wołomin, garmażeria Wołomin, sernik oreo, ciasto orzechowe, ciasto czekoladowe, domowe wyroby, swojskie tradycje">
    <meta name="author" content="Swojskie Tradycje">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.facebook.com/profile.php?id=61584089489554">
    <meta property="og:title" content="Swojskie Tradycje | Domowe Wypieki i Garmażeria">
    <meta property="og:description" content="Tradycyjne ciasta domowe, torty okolicznościowe oraz najwyższej jakości świeża garmażeria w Wołominie i okolicach. Prawdziwy smak tradycji!">
    <meta property="og:image" content="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Swojskie Tradycje | Domowe Wypieki i Garmażeria">
    <meta property="twitter:description" content="Tradycyjne ciasta domowe, torty okolicznościowe oraz najwyższej jakości świeża garmażeria w Wołominie i okolicach. Prawdziwy smak tradycji!">
    <meta property="twitter:image" content="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg">

    <!-- Favicon -->
    <link rel="shortcut icon" href="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" type="image/jpeg">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Embedded CSS Styling -->
    <style>
        :root {
            --primary: #8b5e34;
            --primary-light: #a67c52;
            --primary-dark: #6e4722;
            --secondary: #f8f4ec;
            --accent: #d89b45;
            --accent-light: #e6b36a;
            --bg-color: #fffdf9;
            --text-color: #2f2f2f;
            --text-muted: #666666;
            --border-color: #eaddcd;
            --white: #ffffff;
            --shadow-sm: 0 2px 4px rgba(139, 94, 52, 0.04);
            --shadow-md: 0 8px 24px rgba(139, 94, 52, 0.08);
            --shadow-lg: 0 16px 36px rgba(139, 94, 52, 0.12);
            --font-sans: 'Plus Jakarta Sans', sans-serif;
            --font-display: 'Playfair Display', serif;
            --font-accent: 'Cinzel', serif;
            --transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-sans);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
            background-image: radial-gradient(rgba(139, 94, 52, 0.02) 1px, transparent 1px);
            background-size: 24px 24px;
        }

        /* Container helper */
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Button styles */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 28px;
            border-radius: 40px;
            font-family: var(--font-sans);
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
            transition: var(--transition);
            cursor: pointer;
            border: none;
        }

        .btn-primary {
            background-color: var(--primary);
            color: var(--white);
            box-shadow: 0 4px 14px rgba(139, 94, 52, 0.25);
        }

        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(139, 94, 52, 0.35);
        }

        .btn-outline {
            background-color: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background-color: var(--primary);
            color: var(--white);
            transform: translateY(-2px);
        }

        /* Decorative Badge */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: var(--secondary);
            border: 1px solid var(--border-color);
            color: var(--primary);
            padding: 8px 18px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 24px;
            font-family: var(--font-sans);
        }

        /* Navigation Header */
        header {
            background-color: rgba(255, 253, 249, 0.95);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid var(--border-color);
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 16px 0;
            transition: var(--transition);
        }

        .header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--primary);
        }

        .logo-img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2px solid var(--accent);
            object-fit: cover;
        }

        .logo-text h2 {
            font-family: var(--font-accent);
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 1px;
            line-height: 1.2;
        }

        .logo-text span {
            font-size: 10px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: var(--accent);
            font-weight: 500;
            display: block;
        }

        nav {
            display: flex;
            gap: 28px;
        }

        nav a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 500;
            font-size: 14px;
            transition: var(--transition);
            position: relative;
        }

        nav a:hover {
            color: var(--primary);
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent);
            transition: var(--transition);
        }

        nav a:hover::after {
            width: 100%;
        }

        .nav-contact-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: var(--primary);
            color: var(--white);
            padding: 8px 18px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 600;
            font-size: 13px;
            transition: var(--transition);
        }

        .nav-contact-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-1px);
        }

        /* HERO SECTION */
        .hero {
            position: relative;
            padding: 100px 0 120px 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            background-color: var(--secondary);
            background-image: 
                radial-gradient(rgba(139, 94, 52, 0.05) 1.5px, transparent 1.5px),
                linear-gradient(135deg, rgba(248, 244, 236, 0.9) 0%, rgba(255, 253, 249, 0.95) 100%);
            background-size: 30px 30px, 100% 100%;
        }

        /* Decorative wheat ornament graphics using modern inline SVGs */
        .hero-decor-1 {
            position: absolute;
            top: 50px;
            right: -80px;
            opacity: 0.08;
            pointer-events: none;
            width: 300px;
            transform: rotate(45deg);
        }

        .hero-decor-2 {
            position: absolute;
            bottom: -50px;
            left: -80px;
            opacity: 0.08;
            pointer-events: none;
            width: 320px;
            transform: rotate(-15deg);
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 48px;
            align-items: center;
        }

        .hero-text {
            position: relative;
            z-index: 5;
        }

        .hero-text h1 {
            font-family: var(--font-display);
            font-size: 56px;
            font-weight: 700;
            line-height: 1.15;
            color: var(--primary-dark);
            margin-bottom: 12px;
            letter-spacing: -1px;
        }

        .hero-subtitle {
            font-family: var(--font-accent);
            font-size: 18px;
            color: var(--accent);
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        .hero-description {
            font-size: 16px;
            color: var(--text-muted);
            margin-bottom: 30px;
            max-width: 540px;
        }

        .hero-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 35px;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-color);
        }

        .feature-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: rgba(216, 155, 69, 0.15);
            color: var(--primary);
            flex-shrink: 0;
        }

        .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .hero-image-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Aesthetic layered image frame */
        .hero-image-frame {
            position: relative;
            width: 100%;
            max-width: 440px;
            aspect-ratio: 1/1;
            border-radius: 30px;
            z-index: 2;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            border: 8px solid var(--white);
            background-color: var(--white);
        }

        .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .hero-image-frame:hover .hero-image {
            transform: scale(1.05);
        }

        .hero-image-bg {
            position: absolute;
            top: 20px;
            left: 20px;
            right: -20px;
            bottom: -20px;
            background-color: var(--accent);
            border-radius: 30px;
            z-index: 1;
            opacity: 0.15;
        }

        /* ABOUT US SECTION */
        .about {
            padding: 100px 0;
            background-color: var(--bg-color);
        }

        .section-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 60px auto;
        }

        .section-header h2 {
            font-family: var(--font-display);
            font-size: 38px;
            font-weight: 700;
            color: var(--primary-dark);
            margin-bottom: 16px;
        }

        .section-header p {
            font-size: 15px;
            color: var(--text-muted);
            letter-spacing: 0.5px;
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1.1fr;
            gap: 60px;
            align-items: center;
        }

        .about-content h3 {
            font-family: var(--font-display);
            font-size: 28px;
            color: var(--primary);
            margin-bottom: 20px;
            line-height: 1.3;
        }

        .about-content p {
            font-size: 16px;
            color: var(--text-muted);
            margin-bottom: 24px;
        }

        .about-quote {
            border-left: 4px solid var(--accent);
            padding-left: 20px;
            font-style: italic;
            font-size: 17px;
            color: var(--primary-dark);
            font-family: var(--font-display);
            margin-bottom: 30px;
        }

        .about-badge-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .about-badge-card {
            background-color: var(--secondary);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: var(--transition);
        }

        .about-badge-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-sm);
        }

        .about-badge-card h4 {
            font-family: var(--font-accent);
            font-size: 14px;
            color: var(--primary);
            margin-bottom: 8px;
            font-weight: 700;
            letter-spacing: 1px;
        }

        .about-badge-card p {
            font-size: 13px;
            color: var(--text-muted);
            margin: 0;
        }

        .about-image-side {
            position: relative;
        }

        .about-image-collage {
            position: relative;
            width: 100%;
            height: 480px;
        }

        .collage-img-1 {
            position: absolute;
            width: 75%;
            height: 350px;
            top: 0;
            left: 0;
            border-radius: 24px;
            object-fit: cover;
            border: 6px solid var(--white);
            box-shadow: var(--shadow-md);
            z-index: 2;
        }

        .collage-img-2 {
            position: absolute;
            width: 60%;
            height: 250px;
            bottom: 0;
            right: 0;
            border-radius: 24px;
            object-fit: cover;
            border: 6px solid var(--white);
            box-shadow: var(--shadow-lg);
            z-index: 3;
            transition: var(--transition);
        }

        .collage-img-2:hover {
            transform: scale(1.05);
            z-index: 4;
        }

        /* OFFERS SECTION */
        .offers {
            padding: 100px 0;
            background-color: var(--secondary);
            position: relative;
        }

        .offers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }

        .offer-card {
            background-color: var(--white);
            padding: 40px 30px;
            border-radius: 24px;
            border: 1px solid rgba(139, 94, 52, 0.08);
            box-shadow: var(--shadow-sm);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .offer-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: var(--accent);
            transform: scaleX(0);
            transform-origin: left;
            transition: var(--transition);
        }

        .offer-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
        }

        .offer-card:hover::before {
            transform: scaleX(1);
        }

        .offer-icon-wrapper {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background-color: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            transition: var(--transition);
        }

        .offer-card:hover .offer-icon-wrapper {
            background-color: var(--primary);
            color: var(--white);
        }

        .offer-card h3 {
            font-family: var(--font-display);
            font-size: 20px;
            color: var(--primary-dark);
            margin-bottom: 4px;
        }

        .offer-card p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.6;
        }

        /* PRODUCTS GALLERY (KLUCZOWA SEKCJA) */
        .products {
            padding: 100px 0;
            background-color: var(--bg-color);
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 30px;
        }

        .product-card {
            background-color: var(--white);
            border-radius: 24px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(139, 94, 52, 0.06);
            transition: var(--transition);
            display: flex;
            flex-direction: column;
        }

        .product-card:hover {
            transform: translateY(-6px);
            box-shadow: var(--shadow-lg);
        }

        .product-img-wrapper {
            position: relative;
            width: 100%;
            aspect-ratio: 4/3;
            overflow: hidden;
            background-color: #eee;
        }

        .product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .product-card:hover .product-img {
            transform: scale(1.08);
        }

        .product-tag {
            position: absolute;
            top: 16px;
            left: 16px;
            background-color: rgba(255, 253, 249, 0.95);
            backdrop-filter: blur(4px);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
            color: var(--primary);
            letter-spacing: 0.5px;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-color);
        }

        .product-body {
            padding: 24px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .product-body h3 {
            font-family: var(--font-display);
            font-size: 20px;
            color: var(--primary-dark);
            margin-bottom: 8px;
            font-weight: 700;
        }

        .product-body p {
            font-size: 14px;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 16px;
            flex-grow: 1;
        }

        .product-tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: auto;
        }

        .product-subtag {
            font-size: 11px;
            background-color: var(--secondary);
            color: var(--text-muted);
            padding: 3px 8px;
            border-radius: 6px;
            font-weight: 500;
        }

        /* WHY CHOOSE US SECTION */
        .why-us {
            padding: 100px 0;
            background-color: var(--secondary);
        }

        .why-us-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .why-card {
            background-color: var(--white);
            padding: 24px;
            border-radius: 20px;
            border: 1px solid rgba(139, 94, 52, 0.06);
            transition: var(--transition);
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .why-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent);
        }

        .why-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: rgba(216, 155, 69, 0.15);
            color: var(--primary);
            font-weight: bold;
            font-size: 18px;
        }

        .why-card h3 {
            font-family: var(--font-display);
            font-size: 16px;
            font-weight: 700;
            color: var(--primary-dark);
        }

        .why-card p {
            font-size: 13px;
            color: var(--text-muted);
            line-height: 1.5;
        }

        /* GALLERY OF TASTE (MASONRY GALLERY) */
        .taste-gallery {
            padding: 100px 0;
            background-color: var(--bg-color);
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-auto-rows: 240px;
            gap: 20px;
        }

        .gallery-item {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(139, 94, 52, 0.05);
            transition: var(--transition);
        }

        /* Masonry sizing */
        .gallery-item.tall {
            grid-row: span 2;
        }

        .gallery-item.wide {
            grid-column: span 2;
        }

        @media (max-width: 768px) {
            .gallery-item.wide {
                grid-column: span 1;
            }
        }

        .gallery-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(139, 94, 52, 0.85) 0%, rgba(139, 94, 52, 0.2) 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 24px;
            opacity: 0;
            transition: var(--transition);
        }

        .gallery-item:hover .gallery-img {
            transform: scale(1.08);
        }

        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }

        .gallery-overlay h4 {
            color: var(--white);
            font-family: var(--font-display);
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .gallery-overlay p {
            color: var(--secondary);
            font-size: 12px;
            font-weight: 500;
        }

        /* LOCATION / OPERATING AREA SECTION */
        .area {
            padding: 100px 0;
            background-color: var(--secondary);
            position: relative;
            overflow: hidden;
        }

        .area-decor {
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.05;
            pointer-events: none;
            width: 380px;
        }

        .area-box {
            background-color: var(--white);
            border-radius: 30px;
            padding: 50px;
            box-shadow: var(--shadow-md);
            border: 1px solid var(--border-color);
            position: relative;
            z-index: 5;
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
        }

        .area-box h3 {
            font-family: var(--font-display);
            font-size: 32px;
            color: var(--primary-dark);
            margin-bottom: 16px;
        }

        .area-box p {
            font-size: 16px;
            color: var(--text-muted);
            max-width: 650px;
            margin: 0 auto 30px auto;
        }

        .map-badge-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 30px;
        }

        .map-badge {
            background-color: var(--secondary);
            border: 1px solid var(--border-color);
            padding: 8px 18px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 600;
            color: var(--primary);
        }

        /* LARGE CTA SECTION */
        .cta-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta-decor {
            position: absolute;
            inset: 0;
            opacity: 0.05;
            pointer-events: none;
            background-image: radial-gradient(var(--accent) 1.5px, transparent 1.5px);
            background-size: 20px 20px;
        }

        .cta-content {
            position: relative;
            z-index: 5;
            max-width: 800px;
            margin: 0 auto;
        }

        .cta-content h2 {
            font-family: var(--font-display);
            font-size: 40px;
            margin-bottom: 12px;
        }

        .cta-content p {
            font-size: 16px;
            color: var(--secondary);
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .cta-phone {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            background-color: var(--white);
            color: var(--primary-dark);
            padding: 16px 36px;
            border-radius: 50px;
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transition: var(--transition);
            font-family: var(--font-sans);
        }

        .cta-phone:hover {
            transform: scale(1.04);
            box-shadow: 0 14px 40px rgba(0, 0, 0, 0.25);
            background-color: var(--secondary);
        }

        /* CONTACT SECTION */
        .contact {
            padding: 100px 0;
            background-color: var(--bg-color);
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
            }
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }

        .contact-icon-box {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background-color: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            flex-shrink: 0;
        }

        .contact-text h3 {
            font-family: var(--font-display);
            font-size: 18px;
            color: var(--primary-dark);
            margin-bottom: 4px;
        }

        .contact-text p, .contact-text a {
            font-size: 15px;
            color: var(--text-muted);
            text-decoration: none;
            transition: var(--transition);
        }

        .contact-text a:hover {
            color: var(--primary);
        }

        .contact-visual-card {
            background-color: var(--secondary);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .contact-visual-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--white);
            box-shadow: var(--shadow-md);
            margin-bottom: 20px;
        }

        .contact-visual-card h3 {
            font-family: var(--font-display);
            font-size: 22px;
            color: var(--primary-dark);
            margin-bottom: 6px;
        }

        .contact-visual-card p {
            font-size: 14px;
            color: var(--text-muted);
            margin-bottom: 24px;
            max-width: 300px;
        }

        .social-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: #1877f2;
            color: var(--white);
            padding: 12px 28px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: var(--transition);
            box-shadow: 0 4px 12px rgba(24, 119, 242, 0.2);
        }

        .social-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(24, 119, 242, 0.35);
            background-color: #166fe5;
        }

        /* FOOTER */
        footer {
            background-color: #24160b;
            color: var(--white);
            padding: 60px 0 30px 0;
            border-top: 4px solid var(--accent);
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }

        @media (max-width: 768px) {
            .footer-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }

        .footer-brand h2 {
            font-family: var(--font-accent);
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--accent);
            margin-bottom: 12px;
        }

        .footer-brand p {
            font-size: 14px;
            color: rgba(255, 253, 249, 0.7);
            max-width: 320px;
            line-height: 1.6;
        }

        .footer-col h3 {
            font-family: var(--font-display);
            font-size: 18px;
            color: var(--white);
            margin-bottom: 16px;
            font-weight: 600;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: rgba(255, 253, 249, 0.7);
            text-decoration: none;
            font-size: 14px;
            transition: var(--transition);
        }

        .footer-links a:hover {
            color: var(--accent);
            padding-left: 4px;
        }

        .footer-contact-info {
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-size: 14px;
            color: rgba(255, 253, 249, 0.7);
        }

        .footer-contact-info a {
            color: var(--accent);
            text-decoration: none;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 253, 249, 0.1);
            padding-top: 30px;
            text-align: center;
            font-size: 13px;
            color: rgba(255, 253, 249, 0.5);
        }

        /* RESPONSIVE MEDIA QUERIES (MOBILE FIRST APPROACH) */
        @media (max-width: 1024px) {
            .hero-text h1 {
                font-size: 44px;
            }
        }

        @media (max-width: 768px) {
            .hero-grid {
                grid-template-columns: 1fr;
                gap: 40px;
                text-align: center;
            }
            .hero-description {
                margin-left: auto;
                margin-right: auto;
            }
            .hero-features {
                max-width: 480px;
                margin-left: auto;
                margin-right: auto;
            }
            .hero-actions {
                justify-content: center;
            }
            .hero-image-wrapper {
                order: -1;
            }
            .about-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            .about-image-collage {
                height: 380px;
            }
            .collage-img-1 {
                height: 280px;
            }
            .collage-img-2 {
                height: 200px;
            }
            .section-header h2 {
                font-size: 32px;
            }
            nav {
                display: none; /* simple mobile version triggers full navigation easily */
            }
        }
    </style>

    <!-- Schema.org Rich Snippet LocalBusiness -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SWOJSKIE TRADYCJE",
      "image": "https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg",
      "@id": "https://www.facebook.com/profile.php?id=61584089489554",
      "url": "https://www.facebook.com/profile.php?id=61584089489554",
      "telephone": "508474898",
      "email": "swojskietradycje@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wołomin",
        "addressRegion": "mazowieckie",
        "postalCode": "05-200",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.3411,
        "longitude": 21.2428
      },
      "areaServed": "Wołomin i okolice",
      "description": "Tworzymy z pasją to, co najlepsze — domowe wypieki, tradycyjne wyroby oraz świeżą garmażerię przygotowywaną jak u mamy."
    }
    </script>
</head>
<body>

    <!-- Header Navigation -->
    <header>
        <div class="container header-content">
            <a href="#" class="logo">
                <img src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" alt="Swojskie Tradycje Logo" class="logo-img">
                <div class="logo-text">
                    <h2>Swojskie Tradycje</h2>
                    <span>Wyroby • Ciasta • Garmażeria</span>
                </div>
            </a>
            
            <nav>
                <a href="#o-nas">O nas</a>
                <a href="#oferta">Nasza oferta</a>
                <a href="#nasze-ciasta">Nasze ciasta</a>
                <a href="#dlaczego-my">Dlaczego warto</a>
                <a href="#kontakt">Kontakt</a>
            </nav>

            <a href="tel:508474898" class="nav-contact-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>508 474 898</span>
            </a>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="hero">
        <!-- SVG ornaments in background -->
        <svg class="hero-decor-1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" stroke="#8b5e34" stroke-width="2" stroke-dasharray="2 2"/>
            <path d="M20 50H80" stroke="#8b5e34" stroke-width="1"/>
            <circle cx="50" cy="50" r="3" fill="#d89b45"/>
        </svg>
        <svg class="hero-decor-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" stroke="#8b5e34" stroke-width="2"/>
            <circle cx="50" cy="50" r="5" fill="#8b5e34"/>
        </svg>

        <div class="container hero-grid">
            <div class="hero-text">
                <div class="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    Domowe receptury • Tradycyjny smak
                </div>
                <h1>Swojskie Tradycje</h1>
                <div class="hero-subtitle">Swojskie Wyroby • Ciasta • Garmażeria</div>
                <p class="hero-description">Tworzymy z pasją to, co najlepsze — domowe wypieki, tradycyjne wyroby oraz świeżą garmażerię przygotowywaną według sprawdzonych, przekazywanych z pokolenia na pokolenia receptur.</p>
                
                <div class="hero-features">
                    <div class="feature-item">
                        <span class="feature-icon">✓</span>
                        <span>Domowe receptury</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">✓</span>
                        <span>Świeże składniki</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">✓</span>
                        <span>Tradycyjny smak</span>
                    </div>
                    <div class="feature-item">
                        <span class="feature-icon">✓</span>
                        <span>Robione na bieżąco</span>
                    </div>
                </div>

                <div class="hero-actions">
                    <a href="tel:508474898" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Zadzwoń: 508 474 898
                    </a>
                    <a href="#nasze-ciasta" class="btn btn-outline">Zobacz nasze wypieki</a>
                </div>
            </div>
            
            <div class="hero-image-wrapper">
                <div class="hero-image-frame">
                    <img src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" alt="Swojskie Tradycje Wyroby" class="hero-image">
                </div>
                <div class="hero-image-bg"></div>
            </div>
        </div>
    </section>

    <!-- ABOUT US SECTION -->
    <section class="about" id="o-nas">
        <div class="container">
            <div class="about-grid">
                <div class="about-image-side">
                    <div class="about-image-collage">
                        <img src="https://i.ibb.co/LD1wQ8DZ/588394097-122097555447136316-4601116834085491923-n.jpg" alt="Ciasto Orzechowe" class="collage-img-1">
                        <img src="https://i.ibb.co/s79hwtd/588722105-122097555549136316-241752297020309244-n.jpg" alt="Sernik Oreo" class="collage-img-2">
                    </div>
                </div>

                <div class="about-content">
                    <div class="badge">Szlachetna Pasja Kulinarna</div>
                    <h3>Smak tradycji w nowoczesnym wydaniu</h3>
                    <p>Swojskie Tradycje zrodziły się z miłości do prawdziwego, domowego jedzenia oraz chęci dzielenia się tym, co najlepsze. Nasza kuchnia i pracownia cukiernicza to miejsce, gdzie czas płynie wolniej, a jakość nie zna kompromisów.</p>
                    
                    <div class="about-quote">
                        "Każde ciasto, każdy pieróg i każda potrawa są przygotowywane ręcznie, z dbałością o najmniejszy szczegół, tak jak robimy to w naszych domach dla najbliższych."
                    </div>

                    <p>Wierzymy, że sekret wyjątkowego smaku tkwi w prostocie i szacunku do tradycji. Wybieramy wyłącznie świeże, naturalne składniki od lokalnych dostawców. Nie znajdziesz u nas sztucznych polepszaczy ani gotowych półproduktów.</p>

                    <div class="about-badge-grid">
                        <div class="about-badge-card">
                            <h4>Ręczne wykonanie</h4>
                            <p>Każdy produkt tworzony jest z pasją i rzemieślniczą precyzją.</p>
                        </div>
                        <div class="about-badge-card">
                            <h4>Lokalny charakter</h4>
                            <p>Obsługujemy z dumą Wołomin oraz wszystkie sąsiadujące miejscowości.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- OFFERS SECTION -->
    <section class="offers" id="oferta">
        <div class="container">
            <div class="section-header">
                <div class="badge">Co dla Ciebie przygotujemy</div>
                <h2>Nasza bogata oferta</h2>
                <p>Każdego dnia dbamy o to, by na Twoim stole lądowały wyroby najwyższej próby. Poznaj nasze rzemieślnicze specjalności.</p>
            </div>

            <div class="offers-grid">
                <!-- Ciasta domowe -->
                <div class="offer-card">
                    <div class="offer-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <h3>Ciasta domowe</h3>
                    <p>Tradycyjne wypieki według rodzinnych receptur. Puszyste serniki, aromatyczne szarlotki, drożdżówki pełne kruszonki oraz wyjątkowe ciasta przekładane kremem.</p>
                </div>

                <!-- Wypieki okolicznościowe -->
                <div class="offer-card">
                    <div class="offer-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l-4 4h8l-4-4z"/></svg>
                    </div>
                    <h3>Wypieki okolicznościowe</h3>
                    <p>Artystycznie zdobione torty i ciasta na chrzciny, komunie, wesela, jubileusze i urodziny. Każdy wypiek dopasowujemy do indywidualnych życzeń klienta.</p>
                </div>

                <!-- Garmażeria -->
                <div class="offer-card">
                    <div class="offer-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <h3>Garmażeria</h3>
                    <p>Tradycyjne potrawy przygotowywane z najwyższej jakości świeżych produktów. Pyszne domowe pierogi, chrupiące krokiety, gołąbki oraz pieczenie pachnące majerankiem.</p>
                </div>

                <!-- Tradycyjne wyroby -->
                <div class="offer-card">
                    <div class="offer-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h3>Tradycyjne wyroby</h3>
                    <p>Własnoręcznie przygotowywane specjały, które przywołują smak dzieciństwa. Bez sztucznych konserwantów i polepszaczy smaku — czysta tradycja w każdym kęsie.</p>
                </div>

                <!-- Produkty na zamówienie -->
                <div class="offer-card">
                    <div class="offer-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    </div>
                    <h3>Produkty na zamówienie</h3>
                    <p>Dostosujemy naszą ofertę do Twojego menu. Przygotujemy pakiety potraw i wypieków na domowe przyjęcia, święta czy spotkania w gronie przyjaciół.</p>
                </div>

                <!-- Słodkie stoły -->
                <div class="offer-card">
                    <div class="offer-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
                    </div>
                    <h3>Słodkie stoły</h3>
                    <p>Kompleksowa aranżacja deserowa na Twoją imprezę. Mini-deserki, babeczki, ptysie i makaroniki, które zachwycą Twoich gości smakiem i wyjątkowym wyglądem.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- PRODUCTS GALLERY SECTION (KLUCZOWA SEKCJA) -->
    <section class="products" id="nasze-ciasta">
        <div class="container">
            <div class="section-header">
                <div class="badge">Domowa cukiernia</div>
                <h2>Nasze pyszne ciasta</h2>
                <p>Oto garść naszych najpopularniejszych, uwielbianych przez klientów słodkich kompozycji. Każde ciasto pieczemy z sercem.</p>
            </div>

            <div class="products-grid">
                <!-- Orzechowe z karmelem -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                        <img src="https://i.ibb.co/LD1wQ8DZ/588394097-122097555447136316-4601116834085491923-n.jpg" alt="Orzechowe z karmelem" class="product-img">
                        <span class="product-tag">Bestseller</span>
                    </div>
                    <div class="product-body">
                        <h3>Orzechowe z karmelem</h3>
                        <p>Delikatne ciasto orzechowe przekładane aksamitnym, domowym kremem i obficie wykończone złocistym karmelem oraz orzechami.</p>
                    </div>
                </div>

                <!-- Sernik Oreo -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                        <img src="https://i.ibb.co/s79hwtd/588722105-122097555549136316-241752297020309244-n.jpg" alt="Sernik Oreo" class="product-img">
                        <span class="product-tag">Ulubiony</span>
                    </div>
                    <div class="product-body">
                        <h3>Sernik Oreo</h3>
                        <p>Aksamitny, wyjątkowo kremowy sernik na spodzie z kultowych ciasteczek Oreo, ozdobiony chrupiącymi ciasteczkami.</p>
                    </div>
                </div>

                <!-- Ciasto Pomarańczowe -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                        <img src="https://i.ibb.co/hJdSCpYJ/587055399-122097547683136316-2858735629695295399-n.jpg" alt="Ciasto Pomarańczowe" class="product-img">
                        <span class="product-tag">Nowość</span>
                    </div>
                    <div class="product-body">
                        <h3>Ciasto pomarańczowe</h3>
                        <p>Delikatny krem z nutą świeżo wyciskanych pomarańczy, zbalansowany galaretką oraz aromatyczną, kandyzowaną skórką pomarańczową.</p>
                    </div>
                </div>

                <!-- Ciasto Czekoladowe -->
                <div class="product-card">
                    <div class="product-img-wrapper">
                        <img src="https://i.ibb.co/1YSkY0Mb/588478057-122097555459136316-5872430428203881493-n-1.jpg" alt="Ciasto Czekoladowe" class="product-img">
                        <span class="product-tag">Dla dzieci</span>
                    </div>
                    <div class="product-body">
                        <h3>Ciasto czekoladowe</h3>
                        <p>Intensywnie czekoladowe, puszyste i wilgotne ciasto pełne najgłębszego smaku naturalnego kakao. Ulubieniec wszystkich dzieci.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- WHY US SECTION -->
    <section class="why-us" id="dlaczego-my">
        <div class="container">
            <div class="section-header">
                <div class="badge">Nasze fundamenty</div>
                <h2>Dlaczego warto nas wybrać?</h2>
                <p>Tradycja to dla nas nie tylko słowo — to zobowiązanie do codziennej, uczciwej pracy krakowskim i mazowieckim rzemiosłem.</p>
            </div>

            <div class="why-us-grid">
                <!-- 1. Domowe receptury -->
                <div class="why-card">
                    <div class="why-icon">1</div>
                    <h3>Domowe receptury</h3>
                    <p>Przepisy z rodzinnego zeszytu, ulepszane latami dla uzyskania niepowtarzalnej, głębokiej harmonii smaku.</p>
                </div>
                <!-- 2. Świeże składniki -->
                <div class="why-card">
                    <div class="why-icon">2</div>
                    <h3>Świeże składniki</h3>
                    <p>Prawdziwe wiejskie jaja, świeże owoce, rzemieślnicza mąka oraz prawdziwe, gęste masło bez ulepszaczy.</p>
                </div>
                <!-- 3. Wysoka jakość -->
                <div class="why-card">
                    <div class="why-icon">3</div>
                    <h3>Wysoka jakość</h3>
                    <p>Nie idziemy na skróty. Eliminujemy margarynę i gotowe mieszanki cukiernicze na rzecz naturalnych produktów.</p>
                </div>
                <!-- 4. Tradycyjne smaki -->
                <div class="why-card">
                    <div class="why-icon">4</div>
                    <h3>Tradycyjne smaki</h3>
                    <p>Przywołujemy smaki dzieciństwa – zapach pieczonego drożdżowego ciasta i klasycznych, wiejskich obiadów.</p>
                </div>
                <!-- 5. Indywidualne podejście -->
                <div class="why-card">
                    <div class="why-icon">5</div>
                    <h3>Indywidualne podejście</h3>
                    <p>Rozumiemy Twoje potrzeby. Dopasowujemy wielkość ciast, dekoracje i stopień słodkości do Twojego wydarzenia.</p>
                </div>
                <!-- 6. Produkcja na bieżąco -->
                <div class="why-card">
                    <div class="why-icon">6</div>
                    <h3>Produkcja na bieżąco</h3>
                    <p>Wszystkie wyroby powstają tuż przed odbiorem lub dostawą. Gwarantujemy stuprocentową świeżość.</p>
                </div>
                <!-- 7. Atrakcyjne ceny -->
                <div class="why-card">
                    <div class="why-icon">7</div>
                    <h3>Atrakcyjne ceny</h3>
                    <p>Wyjątkowy, rzemieślniczy smak premium oferujemy w przystępnych cenach, aby każdy mógł cieszyć się tradycją.</p>
                </div>
                <!-- 8. Lokalna marka -->
                <div class="why-card">
                    <div class="why-icon">8</div>
                    <h3>Lokalna marka</h3>
                    <p>Jesteśmy dumni ze swoich korzeni. Dostarczamy radość kulinarną mieszkańcom Wołomina i okolic.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- TASTE GALLERY (MASONRY GALLERY) -->
    <section class="taste-gallery">
        <div class="container">
            <div class="section-header">
                <div class="badge">Uczta dla oka</div>
                <h2>Galeria smaku</h2>
                <p>Spójrz na nasze rzemieślnicze realizacje kadr po kadrze. Poczuj zapach świeżego ciasta i chrupiących wyrobów.</p>
            </div>

            <div class="gallery-grid">
                <div class="gallery-item tall">
                    <img src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" alt="Logo Swojskie Tradycje" class="gallery-img">
                </div>
                <div class="gallery-item">
                    <img src="https://i.ibb.co/LD1wQ8DZ/588394097-122097555447136316-4601116834085491923-n.jpg" alt="Ciasto Orzechowe zbliżenie" class="gallery-img">
                    <div class="gallery-overlay">
                        <h4>Karmelowa Słodycz</h4>
                        <p>Złocisty karmel na chrupiących orzechach</p>
                    </div>
                </div>
                <div class="gallery-item wide">
                    <img src="https://i.ibb.co/hJdSCpYJ/587055399-122097547683136316-2858735629695295399-n.jpg" alt="Ciasto Pomarańczowe" class="gallery-img">
                    <div class="gallery-overlay">
                        <h4>Aromat Cytrusów</h4>
                        <p>Lekki, puszysty krem z pomarańczową nutą</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="https://i.ibb.co/s79hwtd/588722105-122097555549136316-241752297020309244-n.jpg" alt="Sernik Oreo prezentacja" class="gallery-img">
                    <div class="gallery-overlay">
                        <h4>Sernik Oreo</h4>
                        <p>Wyśmienity deser na każdą okazję</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="https://i.ibb.co/1YSkY0Mb/588478057-122097555459136316-5872430428203881493-n-1.jpg" alt="Ciasto Czekoladowe z bliska" class="gallery-img">
                    <div class="gallery-overlay">
                        <h4>Głęboka Czekolada</h4>
                        <p>Wilgotne, mocno czekoladowe ciasto</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- OPERATING AREA SECTION -->
    <section class="area">
        <!-- Wheat SVG backdrop -->
        <svg class="area-decor" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C50 10 35 30 35 50C35 70 50 90 50 90C50 90 65 70 65 50C65 30 50 10 50 10Z" stroke="#8b5e34" stroke-width="1"/>
            <path d="M40 30L60 30M38 50L62 50M42 70L58 70" stroke="#8b5e34" stroke-width="0.75"/>
        </svg>

        <div class="container">
            <div class="area-box">
                <div class="badge">Blisko Ciebie</div>
                <h3>Gdzie działamy?</h3>
                <p>Nasze pyszne ciasta oraz tradycyjne wyroby dostarczamy i przygotowujemy dla mieszkańców Wołomina oraz okolicznych miast i wsi powiatu wołomińskiego.</p>
                
                <div class="map-badge-container">
                    <span class="map-badge">Wołomin</span>
                    <span class="map-badge">Kobyłka</span>
                    <span class="map-badge">Zielonka</span>
                    <span class="map-badge">Ząbki</span>
                    <span class="map-badge">Marki</span>
                    <span class="map-badge">Radzymin</span>
                    <span class="map-badge">Duczki</span>
                </div>

                <p style="margin-bottom: 0; font-weight: 600; color: var(--primary);">Masz wątpliwości czy dojedziemy? Zadzwoń do nas, chętnie odpowiemy!</p>
            </div>
        </div>
    </section>

    <!-- LARGE CTA SECTION -->
    <section class="cta-section">
        <div class="cta-decor"></div>
        <div class="container cta-content">
            <h2>Masz ochotę na domowe wypieki?</h2>
            <p>Skontaktuj się z nami, zapytaj o wolny termin i zamów swoje ulubione ciasta lub wyroby garmażeryjne przygotowywane specjalnie na Twoje zamówienie.</p>
            <a href="tel:508474898" class="cta-phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                508 474 898
            </a>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="contact" id="kontakt">
        <div class="container">
            <div class="section-header">
                <div class="badge">Napisz lub zadzwoń</div>
                <h2>Skontaktuj się z nami</h2>
                <p>Chętnie odpowiemy na każde pytanie, pomożemy dobrać idealne menu oraz doradzimy w wyborze świątecznych słodkości.</p>
            </div>

            <div class="contact-grid">
                <div class="contact-info">
                    <!-- Telefon -->
                    <div class="contact-item">
                        <div class="contact-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div class="contact-text">
                            <h3>Telefon kontaktowy</h3>
                            <p><a href="tel:508474898">508 474 898</a></p>
                        </div>
                    </div>

                    <!-- E-mail -->
                    <div class="contact-item">
                        <div class="contact-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </div>
                        <div class="contact-text">
                            <h3>Adres e-mail</h3>
                            <p><a href="mailto:swojskietradycje@gmail.com">swojskietradycje@gmail.com</a></p>
                        </div>
                    </div>

                    <!-- Lokalizacja -->
                    <div class="contact-item">
                        <div class="contact-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div class="contact-text">
                            <h3>Obszar dostawy</h3>
                            <p>Wołomin, Kobyłka, Zielonka, Marki, Radzymin i okolice</p>
                        </div>
                    </div>
                </div>

                <div class="contact-visual-card">
                    <img src="https://i.ibb.co/3xM8Xkv/586384734-3210949255741841-807157120297580569-n.jpg" alt="Swojskie Tradycje Profil" class="contact-visual-img">
                    <h3>Śledź nas na Facebooku</h3>
                    <p>Bądź na bieżąco z najnowszymi wypiekami, ofertami świątecznymi i zobacz kulisy naszej domowej pracowni kulinarniczej.</p>
                    <a href="https://www.facebook.com/profile.php?id=61584089489554" target="_blank" rel="noopener noreferrer" class="social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Odwiedź nasz profil
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="container footer-grid">
            <div class="footer-brand">
                <h2>Swojskie Tradycje</h2>
                <p>Tworzymy z pasją to, co najlepsze — domowe wypieki, tradycyjne wyroby oraz świeżą garmażerię przygotowywaną według rodzinnych receptur. Prawdziwy smak domowej kuchni.</p>
            </div>
            
            <div class="footer-col">
                <h3>Szybkie linki</h3>
                <ul class="footer-links">
                    <li><a href="#o-nas">O nas</a></li>
                    <li><a href="#oferta">Nasza oferta</a></li>
                    <li><a href="#nasze-ciasta">Nasze ciasta</a></li>
                    <li><a href="#dlaczego-my">Dlaczego warto</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Kontakt z nami</h3>
                <div class="footer-contact-info">
                    <p>Wołomin i okolice</p>
                    <p>Telefon: <strong>508 474 898</strong></p>
                    <p>E-mail: <a href="mailto:swojskietradycje@gmail.com">swojskietradycje@gmail.com</a></p>
                    <p>Facebook: <a href="https://www.facebook.com/profile.php?id=61584089489554" target="_blank" rel="noopener noreferrer">Swojskie Tradycje</a></p>
                </div>
            </div>
        </div>
        
        <div class="container footer-bottom">
            <p>© 2026 Swojskie Tradycje. Wszystkie prawa zastrzeżone.</p>
        </div>
    </footer>

</body>
</html>`;
