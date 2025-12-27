// WhatsApp Privacy Blur - Content Script

(function() {
  'use strict';

  // Create privacy indicator element
  function createIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'wpp-privacy-indicator';
    indicator.textContent = 'Privacy Mode';
    document.body.appendChild(indicator);
  }

  // Initialize privacy state from storage
  function initPrivacy() {
    chrome.storage.local.get(['privacyEnabled'], function(result) {
      if (result.privacyEnabled) {
        document.body.classList.add('wpp-privacy-enabled');
      }
    });
  }

  // Listen for toggle messages from popup
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'togglePrivacy') {
      document.body.classList.toggle('wpp-privacy-enabled');
      const isEnabled = document.body.classList.contains('wpp-privacy-enabled');
      
      // Save state
      chrome.storage.local.set({ privacyEnabled: isEnabled });
      
      sendResponse({ enabled: isEnabled });
    } else if (request.action === 'getStatus') {
      sendResponse({ 
        enabled: document.body.classList.contains('wpp-privacy-enabled') 
      });
    }
    return true;
  });

  // Wait for page to be ready
  function init() {
    createIndicator();
    initPrivacy();
    
    // Add keyboard shortcut (Ctrl/Cmd + Shift + P)
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        document.body.classList.toggle('wpp-privacy-enabled');
        const isEnabled = document.body.classList.contains('wpp-privacy-enabled');
        chrome.storage.local.set({ privacyEnabled: isEnabled });
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
