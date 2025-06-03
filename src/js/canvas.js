class Shape {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 20 + 10;
      this.targetX = x;
      this.targetY = y;
      this.dx = Math.random() * 2 - 1;
      this.dy = Math.random() * 2 - 1;
      this.color = `rgba(100, 255, 218, ${Math.random() * 0.2})`;
      this.type = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
    }
  
    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
  
      switch (this.type) {
        case 0: // Circle
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          break;
        case 1: // Square
          ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
          break;
        case 2: // Triangle
          ctx.moveTo(this.x, this.y - this.size / 2);
          ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
          ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
          break;
      }
  
      ctx.fill();
      ctx.closePath();
    }
  
    update(mouseX, mouseY) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance < 200) {
        const angle = Math.atan2(dy, dx);
        const force = (200 - distance) / 200;
        this.targetX = this.x - Math.cos(angle) * force * 5;
        this.targetY = this.y - Math.sin(angle) * force * 5;
      } else {
        this.targetX = this.x;
        this.targetY = this.y;
      }
  
      this.x += (this.targetX - this.x) * 0.05;
      this.y += (this.targetY - this.y) * 0.05;
    }
  }
  
  export function initCanvas() {
    const canvas = document.getElementById('geometricCanvas');
    const ctx = canvas.getContext('2d');
  
    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    // Create shapes
    const shapes = [];
    for (let i = 0; i < 50; i++) {
      shapes.push(new Shape(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
  
    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      shapes.forEach(shape => {
        shape.update(mouseX, mouseY);
        shape.draw(ctx);
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }