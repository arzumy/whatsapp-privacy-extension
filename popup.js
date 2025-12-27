// WhatsApp Privacy Blur - Popup Script

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('privacy-toggle');
  const status = document.getElementById('status');
  const mainContent = document.getElementById('main-content');
  const notWhatsapp = document.getElementById('not-whatsapp');

  // Check if we're on WhatsApp Web
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentTab = tabs[0];
    
    if (!currentTab.url || !currentTab.url.includes('web.whatsapp.com')) {
      mainContent.style.display = 'none';
      notWhatsapp.style.display = 'block';
      return;
    }

    // Get current privacy status
    chrome.tabs.sendMessage(currentTab.id, { action: 'getStatus' }, function(response) {
      if (chrome.runtime.lastError) {
        // Content script not loaded yet, check storage
        chrome.storage.local.get(['privacyEnabled'], function(result) {
          updateUI(result.privacyEnabled || false);
        });
        return;
      }
      
      if (response) {
        updateUI(response.enabled);
      }
    });

    // Handle toggle click
    toggle.addEventListener('change', function() {
      chrome.tabs.sendMessage(currentTab.id, { action: 'togglePrivacy' }, function(response) {
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
          return;
        }
        
        if (response) {
          updateUI(response.enabled);
        }
      });
    });
  });

  function updateUI(enabled) {
    toggle.checked = enabled;
    
    if (enabled) {
      status.textContent = '🔒 Privacy mode is ON';
      status.className = 'status enabled';
    } else {
      status.textContent = 'Privacy mode is OFF';
      status.className = 'status disabled';
    }
  }
});
