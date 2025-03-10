import React, { useState, useEffect } from 'react';

const Preloader = ({ 
    type = 'spinner', 
    logo = null, 
    bgColor = '#ffffff', 
    spinnerColor = '#3498db',
    minDisplayTime = 1000, 
    fadeOutTime = 500,
    onLoadComplete = () => {}
}) => {
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const startTime = Date.now();
        
        const hidePreloader = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
            
            setTimeout(() => {
                setLoading(false);
                
                setTimeout(() => {
                    setDisplay(false);
                    onLoadComplete();
                }, fadeOutTime);
            }, remainingTime);
        };

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
        }

        return () => {
            window.removeEventListener('load', hidePreloader);
        };
    }, [minDisplayTime, fadeOutTime, onLoadComplete]);

    if (!display) return null;

    const containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: bgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        opacity: loading ? 1 : 0,
        transition: `opacity ${fadeOutTime}ms ease-in-out`,
    };

    const spinnerStyle = {
        width: '60px',
        height: '60px',
        border: '5px solid #f3f3f3',
        borderTop: `5px solid ${spinnerColor}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    };

    const logoContainerStyle = {
        width: '120px',
        height: '120px',
        position: 'relative',
    };

    const logoImgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    };

    const logoSpinnerStyle = {
        content: '""',
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        right: '-10px',
        bottom: '-10px',
        border: '3px solid transparent',
        borderTop: `3px solid ${spinnerColor}`,
        borderRadius: '50%',
        animation: 'spin 1.5s linear infinite',
    };

    const progressContainerStyle = {
        width: '300px',
    };

    const progressBarContainerStyle = {
        width: '100%',
        height: '20px',
        backgroundColor: '#f3f3f3',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '10px',
    };

    const progressBarStyle = {
        height: '100%',
        backgroundColor: spinnerColor,
        width: '100%',
        animation: 'progress 3s ease-in-out',
    };

    const progressTextStyle = {
        textAlign: 'center',
        fontSize: '14px',
        color: '#666',
    };

    const keyframes = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;

    return (
        <div style={containerStyle}>
            <style>{keyframes}</style>
            
            {type === 'spinner' && (
                <div style={spinnerStyle} />
            )}
            
            {type === 'logo' && logo && (
                <div style={logoContainerStyle}>
                    <img src={logo} alt="Preloader Logo" style={logoImgStyle} />
                    <div style={logoSpinnerStyle} />
                </div>
            )}
            
            {type === 'progress' && (
                <div style={progressContainerStyle}>
                    <div style={progressBarContainerStyle}>
                        <div style={progressBarStyle} />
                    </div>
                    <div style={progressTextStyle}>Loading...</div>
                </div>
            )}
        </div>
    );
};

export default Preloader;
