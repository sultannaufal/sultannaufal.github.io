export function createDOM() {
    // Create main wrapper for snap scrolling
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'snap-container';
  
    // Create first section (existing content)
    const section1 = document.createElement('section');
    section1.className = 'snap-section';
  
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'geometricCanvas';
    document.body.appendChild(canvas);
  
    // Create particles div
    const particles = document.createElement('div');
    particles.className = 'particles';
    section1.appendChild(particles);
  
    // Create container
    const container = document.createElement('div');
    container.className = 'container';
  
    // Hero section (existing content)
    const hero = document.createElement('div');
    hero.className = 'hero';
  
    // Bio section (existing content)
    const bio = document.createElement('div');
    bio.className = 'bio';
  
    // Add bio content
    const tagline = document.createElement('span');
    tagline.className = 'tagline';
    tagline.textContent = 'S Naufal Abdillah';
  
    const title = document.createElement('h1');
    title.innerHTML = 'Software Engineer.<br>AI Enthusiast';
  
    const specialty = document.createElement('p');
    specialty.className = 'specialty';
    specialty.textContent = "Building tomorrow's solutions while mastering today's technologies";
  
    const ctaGroup = document.createElement('div');
    ctaGroup.className = 'cta-group';
  
    const cta = document.createElement('a');
    cta.href = 'https://www.threads.net/@sltnnflbdllh';
    cta.target = '_blank';
    cta.className = 'cta cta-primary';
    cta.textContent = 'View My Journey';
  
    // Console panel (existing content)
    const consolePanel = document.createElement('div');
    consolePanel.className = 'console-panel';
  
    const consoleHeader = document.createElement('div');
    consoleHeader.className = 'console-header';
  
    // Console buttons
    const buttonColors = ['#ff5f57', '#febc2e', '#28c940'];
    buttonColors.forEach(color => {
      const button = document.createElement('div');
      button.className = 'console-button';
      button.style.background = color;
      consoleHeader.appendChild(button);
    });
  
    const consoleContent = document.createElement('div');
    consoleContent.className = 'console-content';
  
    // Code lines data
    const codeLines = [
      { text: 'const developer = {', delay: '0.2s', type: 'code' },
      { text: "  expertise: ['Cloud', 'AI'],", delay: '0.4s', type: 'values' },
      { text: "  languages: ['JS/TS', 'PHP', 'C#', 'Go', 'Dart'],", delay: '0.6s', type: 'values' },
      { text: "  focus: 'fast, scalable, and secure systems'", delay: '0.8s', type: 'values' },
      { text: '};', delay: '1s', type: 'code' },
      { text: '// Transforming ideas into scalable solutions', delay: '1.2s', type: 'comment' }
    ];
  
    // Create code lines
    codeLines.forEach(line => {
      const codeLine = document.createElement('div');
      codeLine.className = 'code-line';
      codeLine.style.animationDelay = line.delay;
  
      let content = line.text;
      if (line.type === 'values') {
        content = content.replace(/'([^']+)'/g, "<span class='string'>'$1'</span>");
      } else if (line.type === 'comment') {
        content = `<span class='comment'>${content}</span>`;
      } else if (line.type === 'code') {
        content = content.replace('const', "<span class='const'>const</span>")
                        .replace('developer', "<span class='function'>developer</span>");
      }
      
      codeLine.innerHTML = content;
      consoleContent.appendChild(codeLine);
    });
  
    // Create second section (products)
    const section2 = document.createElement('section');
    section2.className = 'snap-section products-section';
  
    const productsContainer = document.createElement('div');
    productsContainer.className = 'container products-container';
  
    const productsTitle = document.createElement('h2');
    productsTitle.className = 'products-title';
    productsTitle.textContent = 'Featured Products';
  
    const productsGrid = document.createElement('div');
    productsGrid.className = 'products-grid';
  
    // Product data
    const products = [
      {
        title: 'Cloud Solutions',
        description: 'Scalable and reliable cloud infrastructure for modern applications',
        icon: '☁️'
      },
      {
        title: 'AI Integration',
        description: 'Smart AI solutions to enhance your business processes',
        icon: '🤖'
      },
      {
        title: 'Web Applications',
        description: 'Modern web applications built with cutting-edge technologies',
        icon: '🌐'
      },
      {
        title: 'Mobile Apps',
        description: 'Cross-platform mobile applications for iOS and Android',
        icon: '📱'
      }
    ];
  
    // Create product cards
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
  
      const icon = document.createElement('div');
      icon.className = 'product-icon';
      icon.textContent = product.icon;
  
      const cardTitle = document.createElement('h3');
      cardTitle.className = 'product-card-title';
      cardTitle.textContent = product.title;
  
      const description = document.createElement('p');
      description.className = 'product-description';
      description.textContent = product.description;
  
      card.appendChild(icon);
      card.appendChild(cardTitle);
      card.appendChild(description);
      productsGrid.appendChild(card);
    });
  
    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    const scrollText = document.createElement('span');
    scrollText.textContent = 'Scroll down';
    const scrollArrow = document.createElement('div');
    scrollArrow.className = 'scroll-arrow';
    scrollIndicator.appendChild(scrollText);
    scrollIndicator.appendChild(scrollArrow);
  
    // Assemble the DOM
    ctaGroup.appendChild(cta);
    bio.appendChild(tagline);
    bio.appendChild(title);
    bio.appendChild(specialty);
    bio.appendChild(ctaGroup);
  
    consolePanel.appendChild(consoleHeader);
    consolePanel.appendChild(consoleContent);
  
    hero.appendChild(bio);
    hero.appendChild(consolePanel);
  
    container.appendChild(hero);
    section1.appendChild(container);
    section1.appendChild(scrollIndicator);
  
    productsContainer.appendChild(productsTitle);
    productsContainer.appendChild(productsGrid);
    section2.appendChild(productsContainer);
  
    mainWrapper.appendChild(section1);
    mainWrapper.appendChild(section2);
    document.body.appendChild(mainWrapper);
  }