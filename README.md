# ⚡ SusyType - Typing Speed Test

A minimalist, fast typing speed test built with vanilla JavaScript. Challenge yourself with a 30-second Spanish word typing test and track your WPM and accuracy in real-time.

## 🚀 [Try it Live](https://type.susarro.dev)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## ✨ Features

- **30-second typing challenge** with Spanish words
- **Real-time WPM calculation** and accuracy tracking
- **Visual feedback** with color-coded correct/incorrect letters
- **Smooth animations** and responsive design
- **Clean, dark interface** optimized for focus

## 🎮 How to Play

1. Start typing the highlighted word immediately
2. Follow the blinking cursor for the active letter
3. Use **Space** to skip to the next word
4. Use **Backspace** to correct mistakes
5. Complete as many words as possible in 30 seconds
6. View your final WPM and accuracy results

## 🎯 Game Mechanics

### Scoring
- **WPM**: Words completed correctly per minute
- **Accuracy**: Percentage of correct keystrokes

### Visual Indicators
- 🟢 **Green letters**: Typed correctly
- 🔴 **Red letters**: Typing errors
- 🔵 **Blue cursor**: Current active letter
- ⚪ **Highlighted word**: Currently active word

## 🛠️ Technical Details

Built with modern web technologies:
- **Vanilla JavaScript ES6+** with modules
- **CSS3 animations** for smooth interactions
- **Responsive design** for all screen sizes
- **Event-driven architecture** for real-time feedback

### Project Structure
```
├── index.html      # Main game interface
├── style.css       # Dark theme styling
├── index.js        # Core game logic
├── wordLists.js    # Spanish/English/French word collections
└── CNAME          # Custom domain configuration
```

## 🔧 Local Development

```bash
git clone https://github.com/susarroDEV/SusyType.git
cd SusyType
# Open index.html in your browser or serve locally
python -m http.server 8000
```

## 🌟 Customization

The game supports multiple languages out of the box. To switch from Spanish to English words, simply change the import in `index.js`:

```javascript
// Current: Spanish words
import { wordListSpanish } from './wordLists.js'

// Change to: English words  
import { wordListEnglish } from './wordLists.js'
```

Available word lists: Spanish, English, French

## 🤝 Contributing

Contributions welcome! Ideas for enhancement:
- Additional language support
- Difficulty levels (common vs advanced words)
- User preferences and settings
- Statistics tracking and history
- Multiplayer competitions

## 📄 License

MIT License - feel free to use and modify!

## 👨‍💻 Created by

**susarroDEV** - [GitHub](https://github.com/susarroDEV) | [Portfolio](https://susarro.dev)

---

⭐ **Star this repo if you enjoyed the typing challenge!**