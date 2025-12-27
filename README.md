# 🔒 WhatsApp Web Privacy Blur - Chrome Extension

A Chrome extension that adds a privacy blur effect to WhatsApp Web. When enabled, the chat list and messages are blurred out, protecting your conversations from prying eyes. Simply hover over any element to reveal its content.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)](https://developer.chrome.com/docs/extensions/mv3/)

## Features

- 🔒 **Privacy Blur**: Blurs chat list, messages, and profile pictures on WhatsApp Web
- 👆 **Hover to Reveal**: Simply hover over any blurred element to see its content
- ⌨️ **Keyboard Shortcut**: Toggle privacy mode with `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac)
- 💾 **Persistent State**: Your privacy preference is saved and restored when you reopen WhatsApp Web
- 🎨 **Visual Indicator**: Shows a "🔒 Privacy Mode" badge when active
- 🚀 **Lightweight**: Minimal performance impact, runs entirely locally
- 🔄 **Easy Toggle**: Quick on/off switch via extension popup

## 📋 Requirements

- Google Chrome (or Chromium-based browser) version 88 or higher
- Chrome Extensions API support (Manifest V3)
- Access to [WhatsApp Web](https://web.whatsapp.com)

## 🚀 Installation

### Method 1: Install from GitHub (Recommended)

1. **Download the extension:**
   ```bash
   git clone https://github.com/arzumy/whatsapp-privacy-extension.git
   cd whatsapp-privacy-extension
   ```
   Or download as ZIP from the repository and extract it.

2. **Load in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** (toggle in the top right)
   - Click **Load unpacked**
   - Select the `whatsapp-privacy-extension` folder
   - The extension icon will appear in your toolbar

3. **Open WhatsApp Web:**
   - Navigate to [https://web.whatsapp.com](https://web.whatsapp.com)
   - The extension will automatically activate on WhatsApp Web pages

### Method 2: Pack as .crx (for distribution)

1. Go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Pack extension**
4. Select the `whatsapp-privacy-extension` folder
5. This creates a `.crx` file you can share
6. Install the `.crx` file by dragging it to `chrome://extensions/`

## Usage

### Enabling Privacy Mode

1. Open [WhatsApp Web](https://web.whatsapp.com)
2. Click the extension icon (🔒) in your Chrome toolbar
3. Toggle the **Privacy Mode** switch ON
4. All chats and messages will be blurred
5. Hover over any blurred content to reveal it temporarily

### Keyboard Shortcut

Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac) to quickly toggle privacy mode without opening the popup.

### Disabling Privacy Mode

- Click the extension icon and toggle the switch OFF
- Or use the keyboard shortcut again

## What Gets Blurred

| Element | Selector Used |
|---------|--------------|
| Chat list items | `div[aria-label="Chat list"] > div > div` |
| Locked chats | `div[role="listitem"]` |
| Incoming messages | `.message-in` |
| Outgoing messages | `.message-out` |
| Chat header | `div#main > header` |
| Profile pictures | `div[aria-label="Chat list"] img` |
| Last message preview | `div[aria-label="Chat list"] span[title]` |

> ⚠️ **Note:** Search results are intentionally **not blurred** to make it easy to scan through search results and find what you're looking for. If privacy mode is enabled, be aware that search results will be visible.

## Customization

You can adjust the blur intensity by editing `styles.css`. Look for `filter: blur(8px)` and change `8px` to your preferred value:
- Lower value (e.g., `5px`) = lighter blur
- Higher value (e.g., `12px`) = stronger blur

## Privacy & Security

✅ **This extension:**
- Runs entirely locally in your browser
- Does not collect, transmit, or store any data externally
- Only stores your privacy toggle preference (on/off) in Chrome's local storage
- Has no network access - operates completely offline
- Does not access your messages or contacts
- Does not modify WhatsApp Web's functionality

⚠️ **Important Notes:**
- This extension provides a **visual privacy layer**, not encryption
- It prevents casual viewing but determined users could inspect the page source
- Always lock your computer when away for maximum privacy
- For sensitive conversations, consider using WhatsApp's built-in end-to-end encryption features

## 🛠️ How It Works

1. **Content Script Injection**: The extension injects CSS and JavaScript into WhatsApp Web pages
2. **CSS Blur Filters**: Uses CSS `filter: blur()` to blur sensitive elements
3. **Hover Detection**: CSS `:hover` pseudo-class reveals content on hover
4. **State Management**: Privacy toggle state is stored in Chrome's local storage
5. **Message Passing**: Communication between popup and content script via Chrome's messaging API
6. **Keyboard Shortcuts**: Listens for keyboard events to toggle privacy mode

### Technical Details

- **Manifest Version**: 3 (MV3)
- **Permissions**: `storage` (for saving preferences)
- **Host Permissions**: `https://web.whatsapp.com/*` (only runs on WhatsApp Web)
- **Content Scripts**: Runs on WhatsApp Web pages at `document_idle`
- **Storage**: Uses `chrome.storage.local` (data stays on your device, never synced)
- **No Network Access**: Extension operates completely offline - no data is sent to external servers

## Troubleshooting

**Extension not working?**
- Make sure you're on `web.whatsapp.com`
- Try refreshing the WhatsApp Web page
- Check if the extension is enabled in `chrome://extensions/`
- Ensure the extension has permission to run on WhatsApp Web

**Blur not applying to some elements?**
- WhatsApp Web occasionally updates their HTML structure and class names
- You may need to inspect the page and update the selectors in `styles.css`
- Check the browser console for any errors

**Keyboard shortcut not working?**
- Make sure the WhatsApp Web tab is active
- Try clicking on the page first to ensure it has focus
- Check if another extension is using the same shortcut

**Privacy indicator not showing?**
- The indicator appears in the top-right corner when privacy mode is active
- If it's not visible, check if it's being blocked by other page elements
- Try refreshing the page

## 📁 Project Structure

```
whatsapp-privacy-extension/
├── manifest.json              # Extension configuration (Manifest V3)
├── content.js                # Content script (injects blur styles & handles toggle)
├── styles.css                 # CSS blur styles and privacy indicator
├── popup.html                 # Extension popup UI
├── popup.js                   # Popup functionality
├── icons/                     # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md                  # This file
└── SECURITY_REVIEW.md         # Security analysis documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This extension provides a **visual privacy layer** for WhatsApp Web. It prevents casual viewing of your conversations but does not provide encryption or absolute security. For maximum privacy, always lock your computer when away and use WhatsApp's built-in security features.

## 🙏 Acknowledgments

- Built with Chrome Extensions Manifest V3
- Uses Chrome Storage API for local data persistence
- Designed to work seamlessly with WhatsApp Web's interface

## 🤖 Development

This project was **100% built with [Claude AI](https://claude.ai) and [Cursor](https://cursor.sh)**. The entire codebase, documentation, and architecture were developed through AI-assisted pair programming to provide a simple, effective privacy solution for WhatsApp Web users.

---

**Made with ❤️ for privacy-conscious users**
