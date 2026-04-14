// ১. ৩ডি ব্যাকগ্রাউন্ড (Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bgCanvas'), antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// জ্যামিতিক ৩ডি অবজেক্ট
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.PointsMaterial({ size: 0.005, color: 0x00f2fe });
const starField = new THREE.Points(geometry, material);
scene.add(starField);

function animate() {
    requestAnimationFrame(animate);
    starField.rotation.x += 0.001;
    starField.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();

// ২. অটো-টাইপিং ইফেক্ট
var typed = new Typed('#typed', {
    strings: ['স্বপ্নদ্রষ্টা।', 'প্রযুক্তি প্রেমী।', 'ক্রিয়েটিভ ডিজাইনার।', 'মিজানুর ইসলাম।'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// ৩. মাউস টিল্ট ইফেক্ট (Card Move)
const card = document.getElementById('mainCard');
document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// উইন্ডো রিসাইজ হ্যান্ডেলার
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
