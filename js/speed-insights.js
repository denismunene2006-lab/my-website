/**
 * Vercel Speed Insights Integration
 * 
 * This module initializes Vercel Speed Insights for tracking web vitals
 * and performance metrics on static HTML pages.
 */

// Initialize Speed Insights using the vanilla JS approach
(function initSpeedInsights() {
    // Create the window.si function queue for Speed Insights
    window.si = window.si || function () { 
        (window.siq = window.siq || []).push(arguments); 
    };

    // Load the Speed Insights script from Vercel's CDN
    // This will be automatically configured when deployed on Vercel
    const script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/speed-insights/script.js';
    
    // Add error handling for when not deployed on Vercel
    script.onerror = function() {
        console.warn('Speed Insights: Script could not be loaded. This is expected in local development.');
    };
    
    document.head.appendChild(script);
})();
