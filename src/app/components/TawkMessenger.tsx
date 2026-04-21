import { useEffect } from 'react';

export function TawkMessenger() {
  useEffect(() => {
    // Initialize Tawk_API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();
    
    // Set embedded ID if provided in the script
    (window as any).Tawk_API.embedded = 'tawk_69d637f5c681461c33e51b73';

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69d637f5c681461c33e51b73/1jmobgqro';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    // Cleanup on unmount
    return () => {
      const script = document.querySelector('script[src*="tawk.to"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if ((window as any).Tawk_API) {
        delete (window as any).Tawk_API;
      }
    };
  }, []);

  return (
    <div 
      id="tawk_69d637f5c681461c33e51b73"
      className="fixed bottom-4 right-4 z-[9999]"
      style={{ minHeight: '1px' }}
    />
  );
}
