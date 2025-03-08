import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Header from '../components/header/Header';
import Shopwebsite from '../../src/assets/3dmodals/ShopWebsite.glb';
import '../styles/home.css';

const Home = () => {
  const containerRef = useRef(null);
  const glassObjectsRef = useRef([]);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({alpha: true} );
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 200;

    const scene = new THREE.Scene();
    let shop; 
    const loader = new GLTFLoader();
    loader.load(Shopwebsite, (gltf) => {
      shop = gltf.scene;
      shop.position.set(0, -10, 0);
      shop.rotation.y = Math.PI;

      


      
      shop.traverse((child) => {
        if (child.isMesh) {
          if (child.name.includes('Glass')) {
            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 0,
              roughness: 0,
              transmission: 1, // Make it transparent
              opacity: 0.5,
              transparent: true
            });
            glassObjectsRef.current.push(child);
          } else if (child.name.includes('Wooden')) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xaaaaaa, 
              roughness: 0.2,
              metalness: 1
            });
          }
        }
      });

      scene.add(shop);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const pointlight = new THREE.PointLight(0xffffff, 50);
    pointlight.position.set(0, -0.0001, 0);
    scene.add(pointlight);

    const reRender3D = () => {
      requestAnimationFrame(reRender3D);
      renderer.render(scene, camera);
    };
    reRender3D();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      glassObjectsRef.current.forEach((obj) => {
        obj.rotation.y = scrollY * 0.001; 
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the existing scene and object
    return () => {
      window.removeEventListener('scroll', handleScroll);
      while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div id='container3D' ref={containerRef}></div>
      <div className="home-container">
        <div className="fixed-header">
          <Header />
        </div>

        <div className="scroll-content">
          <div className="spacer" style={{ height: '100vh' }}></div>

          <section className="content-section">
            <div className="content-wrapper">
              <h2>Hikayemiz Başlıyor</h2>
              <p>Asaby olarak, modernliği ve konforu bir araya getiriyoruz. Her bir ürünümüz, tasarım ve işlevsellik arasında mükemmel bir denge sağlar.</p>
            </div>
          </section>

          <section className="content-section">
            <div className="content-wrapper">
              <h2>Kalite ve Stil</h2>
              <p>Her detay özenle düşünüldü. Premium malzemeler ve özel tasarımlarla, günlük yaşamınıza şıklık katıyoruz.</p>
            </div>
          </section>

          <section className="content-section">
            <div className="content-wrapper">
              <h2>Keşfetmeye Hazır Mısın?</h2>
              <p>Koleksiyonumuza göz at ve tarzına uygun parçayı bul.</p>
              <button className="shopbtn">Mağazaya Git</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
