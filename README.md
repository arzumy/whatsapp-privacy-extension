# WhatsApp Web Privacy Blur

A Chrome extension that adds a privacy blur effect to WhatsApp Web. When enabled, the chat list and messages are blurred out. Hover over any element to reveal its content.

## Features

- **Chat List Blur**: Blurs all chats in the sidebar (under `div[aria-label="Chat list"]`)
- **Message Blur**: Blurs both incoming (`message-in`) and outgoing (`message-out`) messages
- **Profile Picture Blur**: Blurs contact photos in the chat list
- **Hover to Reveal**: Simply hover over any blurred element to see its content
- **Keyboard Shortcut**: Toggle privacy mode with `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac)
- **Persistent State**: Your privacy preference is saved and restored when you reopen WhatsApp Web
- **Visual Indicator**: Shows a "🔒 Privacy Mode" badge when active

## Installation

1. Download or clone this extension folder
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the `whatsapp-privacy-extension` folder
6. The extension icon should appear in your toolbar
7. Reload the [WhatsApp Web](https://web.whatsapp.com) tab or restart the browser

## Usage

1. Open [WhatsApp Web](https://web.whatsapp.com)
2. Click the extension icon in your toolbar
3. Toggle the **Privacy Mode** switch ON
4. All chats and messages will be blurred
5. Hover over any blurred content to reveal it

### Keyboard Shortcut

Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac) to quickly toggle privacy mode without opening the popup.

## What Gets Blurred

| Element | Selector Used |
|---------|--------------|
| Chat list items | `div[aria-label="Chat list"] > div > div` |
| Incoming messages | `.message-in` |
| Outgoing messages | `.message-out` |
| Profile pictures | `div[aria-label="Chat list"] img` |
| Chat header name | `header span[dir="auto"][title]` |
| Last message preview | `div[aria-label="Chat list"] span[title]` |

## Customization

You can adjust the blur intensity by editing `styles.css`. Look for `filter: blur(8px)` and change `8px` to your preferred value:
- Lower value (e.g., `5px`) = lighter blur
- Higher value (e.g., `12px`) = stronger blur

## Troubleshooting

**Extension not working?**
- Make sure you're on `web.whatsapp.com`
- Try refreshing the WhatsApp Web page
- Check if the extension is enabled in `chrome://extensions/`

**Blur not applying to some elements?**
- WhatsApp Web occasionally updates their class names
- You may need to inspect the page and update the selectors in `styles.css`

## Privacy Note

This extension runs entirely locally in your browser. It does not collect, transmit, or store any data externally. The only data stored is your privacy toggle preference (on/off) in Chrome's local storage.

## License

MIT License - Feel free to modify and distribute.
