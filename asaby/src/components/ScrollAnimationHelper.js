// ScrollAnimationHelper.js
import { useEffect, useRef, useState } from 'react';

// Scroll edildiğinde görünür olan elementlere animasyon ekleyen hook
export const useScrollAnimationEffect = () => {
  const observerRef = useRef(null);
  
  useEffect(() => {
    // IntersectionObserver ile scroll edildiğinde görünür olan elementleri tespit et
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // Ne kadar görünür olmalı
    };
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // İsteğe bağlı: Tekrar görünmez olduğunda sınıfı kaldır
          entry.target.classList.remove('visible');
        }
      });
    }, options);
    
    // Tüm fade-in sınıfına sahip elementleri gözlemle
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      observerRef.current.observe(el);
    });
    
    return () => {
      if (observerRef.current) {
        elements.forEach(el => {
          observerRef.current.unobserve(el);
        });
      }
    };
  }, []);
};

// Scroll pozisyonunu takip eden hook
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollPosition;
};

// Three.js modellerini scroll ile etkileşimli hale getiren yardımcı fonksiyon
export const updateModelWithScroll = (model, camera, scrollY, pageHeight) => {
  if (!model || !camera) return;
  
  const normalizedScroll = scrollY / (pageHeight - window.innerHeight);
  
  // Örnek: Scroll pozisyonuna göre model manipülasyonu
  if (normalizedScroll < 0.33) {
    // İlk bölüm
    model.rotation.y = normalizedScroll * Math.PI * 2;
    camera.position.y = 4 - normalizedScroll * 3;
  } else if (normalizedScroll < 0.66) {
    // İkinci bölüm
    model.rotation.x = (normalizedScroll - 0.33) * 2 * Math.PI;
    camera.position.x = 5 - (normalizedScroll - 0.33) * 3;
  } else {
    // Üçüncü bölüm
    model.position.y = -2 + (normalizedScroll - 0.66) * 3;
    camera.position.z = 5 + (normalizedScroll - 0.66) * 5;
  }
};