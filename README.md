# MemeMatch Presentation Slides

This directory contains the Slidev presentation for the MemeMatch project.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to slides directory
cd slides

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with hot reload
npm run dev

# The slides will open automatically at http://localhost:3030
```

### Build for Production

```bash
# Build static HTML
npm run build

# Output will be in dist/ directory
```

### Export to PDF

```bash
# Export slides to PDF
npm run export

# Output: slides-export.pdf
```

## 📝 Presentation Structure

The presentation is designed for a **4-minute talk** and includes:

1. **Title Slide** - Project introduction
2. **What is MemeMatch?** - Problem statement and features
3. **System Architecture** - High-level architecture diagram (Mermaid)
4. **Core Workflow** - Sequence diagram showing the process (Mermaid)
5. **Technical Deep Dive: Retrieval** - Vector search with LaTeX formulas
6. **Technical Deep Dive: Agent** - LLM agent implementation with formulas
7. **Performance Metrics** - Results and dataset visualization (Mermaid pie chart)
8. **Tech Stack** - Technologies used
9. **Live Demo Flow** - State diagram and example (Mermaid)
10. **Key Innovations** - Unique features with formulas
11. **Future Roadmap** - Short/mid/long-term plans
12. **Results & Impact** - Achievements
13. **Thank You** - Q&A slide
14. **Appendix** - Technical details

## 🎨 Features

- ✅ **LaTeX Math Formulas** - Using KaTeX for beautiful equations
- ✅ **Mermaid Diagrams** - Architecture, sequence, state, and pie charts
- ✅ **Animations** - Smooth transitions and v-clicks
- ✅ **Code Highlighting** - Syntax highlighting with Shiki
- ✅ **Responsive Design** - Works on different screen sizes
- ✅ **Speaker Notes** - Hidden notes for presenter (press 'S' during presentation)

## ⌨️ Keyboard Shortcuts

During presentation:

- `Space` / `→` - Next slide
- `←` - Previous slide
- `O` - Slides overview
- `D` - Dark mode toggle
- `F` - Fullscreen
- `S` - Speaker notes
- `G` - Go to slide (enter number)
- `C` - Camera view (for recording)

## 📊 Timing Guide (4 minutes)

- Slides 1-2: Introduction (30s)
- Slides 3-4: Architecture & Workflow (45s)
- Slides 5-6: Technical Deep Dive (60s)
- Slide 7: Performance (30s)
- Slide 8: Tech Stack (20s)
- Slide 9: Demo Flow (30s)
- Slide 10: Innovations (30s)
- Slide 11: Roadmap (20s)
- Slide 12: Results (20s)
- Slide 13: Q&A (remaining time)

## 🎯 Presentation Tips

1. **Practice timing** - Run through at least 2-3 times
2. **Use speaker notes** - Press 'S' to see presenter notes
3. **Explain diagrams** - Take time to walk through Mermaid charts
4. **Math formulas** - Don't read formulas, explain the concept
5. **Demo preparation** - Have a backup if live demo fails
6. **Q&A preparation** - Review appendix for technical details

## 🔧 Customization

### Change Theme

Edit the frontmatter in `slides.md`:

```yaml
---
theme: default  # Change to: seriph, apple-basic, etc.
---
```

### Modify Background

```yaml
---
background: https://your-image-url.jpg
---
```

### Add Custom CSS

Create `style.css` in the slides directory and it will be automatically loaded.

## 📚 Resources

- [Slidev Documentation](https://sli.dev/)
- [Mermaid Documentation](https://mermaid.js.org/)
- [KaTeX Supported Functions](https://katex.org/docs/supported.html)

## 🐛 Troubleshooting

### Slides not loading?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Math formulas not rendering?
- Make sure you're using `$$` for block formulas
- Use `$` for inline formulas
- Check KaTeX syntax

### Mermaid diagrams not showing?
- Verify Mermaid syntax
- Check browser console for errors
- Try refreshing the page

## 📄 License

This presentation is part of the MemeMatch project.

---

**Good luck with your presentation! 🎉**
# Trigger deployment
