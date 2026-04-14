// ৩ডি ব্যাকগ্রাউন্ড সেটআপ
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// রঙিন ৩ডি পার্টিকেল তৈরি
const geometry = new THREE.SphereGeometry(0.08, 16, 16);
const particles = [];

for (let i = 0; i < 80; i++) {
    const color = Math.random() > 0.5 ? 0x2ecc71 : 0x3498db; // সবুজ ও নীল
    const material = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.5 });
    const sphere = new THREE.Mesh(geometry, material);
    
    sphere.position.x = (Math.random() - 0.5) * 12;
    sphere.position.y = (Math.random() - 0.5) * 12;
    sphere.position.z = (Math.random() - 0.5) * 12;
    
    scene.add(sphere);
    particles.push(sphere);
}

// অ্যানিমেশন লুপ
function animate() {
    requestAnimationFrame(animate);
    
    particles.forEach(p => {
        p.rotation.y += 0.01;
        p.position.y += 0.003;
        if (p.position.y > 6) p.position.y = -6;
    });
    
    renderer.render(scene, camera);
}

// মাউস মুভমেন্ট ইফেক্ট
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 0.5;
    const y = (e.clientY / window.innerHeight - 0.5) * 0.5;
    scene.rotation.x = y;
    scene.rotation.y = x;
});

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
