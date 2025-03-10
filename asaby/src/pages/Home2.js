import React, { useEffect, useRef } from 'react';
import '../styles/home2.css';
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline';


    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin);

const Home2 = () => {
  function onLoad(spline) {
    try {
        console.log("Spline object:", spline);

        
        setTimeout(() => {
            if (spline._controls) {
                console.log("OrbitControls found:", spline._controls);
                spline._controls.isEnabled = false; 
            } else {
                console.log("OrbitControls not found yet, retrying...");
            }
        }, 500); 

        const scene = spline._scene;
        if (scene) {
            console.log("Scene found");
            console.log("Scene methods:", Object.keys(scene));
        }

        if (spline._camera) {
            spline._camera.position.set(12.10 ,52.44, 358.49);
            console.log("Camera updated.");
        }

    } catch (error) {
        console.error("Error in onLoad:", error);
    }
}



  return (
    
    <>
    <div className="spline-container">
        {/* <Spline scene="https://prod.spline.design/BAQ3BUCRrndUtReh/scene.splinecode" onLoad={onLoad} /> */}
        <Spline scene="https://prod.spline.design/L1srrYRpNXRFMvHY/scene.splinecode" onLoad={onLoad} />

    
    </div>
    <div className="home-container">
        <div className="section section1">
            <h1>Crafted for Comfort,<br></br> Designed for You.</h1>
        </div>
        <div className="scroll-content">
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

export default Home2;
