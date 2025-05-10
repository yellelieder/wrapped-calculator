# 🎧 Wrapped CO2 Calculator

A playful year-end web app inspired by the popular music streaming recaps — but with a climate-conscious twist: calculate your estimated **CO₂ emissions** from music streaming.

---

## 🚀 Features

- **Input your streaming minutes**  
  Enter your total minutes listened (e.g., from your music streaming service) and get an environmental footprint estimate.

- **Instant CO₂ Emissions Calculation**  
  Based on real data for bandwidth, energy intensity, and carbon impact.

- **Visualize & Share**  
  Share your results on social media or download them as an image to show your yearly streaming impact.

- **Helpful Tooltips**  
  Hover on metrics to see assumptions and data sources.

- **Progressive Web App (PWA)**  
  Works offline and can be installed on your device.

---

## 🧠 Why?

Every year we share how many minutes we streamed — but rarely ask what that means for the environment. This app isn’t about guilt — music is a beautiful thing. But maybe, just maybe, this year we can also take a moment to reflect on the hidden costs of digital consumption.

---

## 📈 Default Assumptions

| Parameter | Assumption |
|----------|--------|
| Streaming Minutes | 3,695 minutes/year *(Dataconomy, 2023)* |
| Data Usage | 2.4 MB/min *(Borgini, 2023)* |
| CO₂ Intensity | 349 gCO₂e/kWh *(Statista, 2022, Germany)* |
| Energy Use | 0.5 kWh/GB *(Pihkola et al., 2018)* |
| Tree Offset | 25 kg CO₂e/year/tree *(USDA, 2015)* |
| Carbon Certificate Price | €89/ton CO₂e *(Ember, 2023)* |
| Environmental Damage Cost | €809/ton CO₂e *(UBA, 2022)* |

---

## 📦 Installation

This is a frontend-only web app. To run it locally:

```bash
git clone https://github.com/yellelieder/wrapped-calculator.git
cd wrapped-calculator
npm install
npm run build
```

Then deploy using your preferred static host (e.g., Vercel).

**Live:** 👉 [wrapped.yel.li](https://wrapped.yel.li)

---

## 🧩 Technology Stack

- Built with **v0 by Vercel**
- Tailwind CSS
- React (via v0 component abstraction)
- HTML2Canvas for image export
- Web Share API & custom share links

---

## 🤝 Support

Enjoying the project?  
☕ [Buy me a coffee](https://buymeacoffee.com/yellelieder)

---

## 📄 License

Licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.  
See the full license for terms and conditions: [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)
