# Red Team Leaders Website

A modern, dark-themed website for Red Team Leaders - AI-Powered Security Solutions and Penetration Testing.

## Features

- **Modern Dark Design**: Sleek, professional dark theme with cybersecurity aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Elegant transitions and scroll animations
- **Interactive Elements**: Hover effects, parallax scrolling, and dynamic interactions
- **Contact Form**: Integrated mailto form for easy communication
- **Mobile Menu**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **Hero Section**: Eye-catching landing section with call-to-action buttons
2. **Services**:
   - AI-Powered PenTest
   - Custom AI Agents Development
3. **Projects**:
   - NeuroSploit
   - BlueGuardian
4. **Contact**: Contact form and information
5. **Footer**: Quick links and branding

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript (no dependencies)

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `redteamleaders.github.io` (or any name you prefer)
3. Make it public
4. Don't initialize with README (since we already have files)

### Step 2: Push Your Code

```bash
# Navigate to the website directory
cd /opt/redteamleaderswebsite

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Red Team Leaders website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be published at: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #00d9ff;
    --secondary: #7c3aed;
    --accent: #ff006e;
    /* ... more colors */
}
```

### Content

- Edit `index.html` to change text content
- Update service descriptions, project information, and contact details
- Modify links to match your actual GitHub repos and course platform

### Email

The contact form uses `mailto:` to open the user's default email client. To change the email:

1. Find `services@redteamleaders.com` in `index.html`
2. Replace with your email address
3. Also update in `script.js` line 93

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- No external dependencies
- Optimized images and animations
- Debounced scroll events
- Lazy loading with Intersection Observer

## License

© 2026 Red Team Leaders. All rights reserved.

## Contact

For inquiries: services@redteamleaders.com

---

Built with modern web technologies for optimal performance and user experience.
