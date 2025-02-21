# Project1-FootballPlayerAbilityAnalysis
This is a logic-layer implementation for a Football Player Ability Analysis System that helps scouts, managers, and agents evaluate and compare players based on technical, physical, and mental attributes.

## Author
**Qiong Wu**

## **Overview**
FootballPlayerAbilityAnalysis is an **object-oriented analysis system** built using **ES2024 modules and classes**, designed to improve decision-making in football recruitment and scouting. It supports player classification, score evaluation, AI-based recommendations, and exportable player comparison reports.

---

## **Key Features**
- **Player Attribute Evaluation:** Classify players and calculate scores based on weighted technical, physical, and mental stats.
- **Role Classification:** Automatically classify players as attackers, midfielders, or defenders.
- **Search and AI Recommendation:** Filter and recommend players based on tactical requirements and attribute thresholds.
- **Comparison Reports:** Generate visual and data-driven comparison reports between players.
- **Validation System:** Ensure data quality for imported reports.

---

## **Installation & Setup**
### **1. Clone the Repository**
```bash
git clone https://github.com/qiong-wu-2317/Football-Player-Ability-Analysis-System.git
cd Football-Player-Ability-Analysis-System
```

### **2. Install Dependencies**
Ensure you have **Node.js** installed, then run:
```bash
npm install
```

### **3. Generate JSDoc Documentation**
```bash
npx jsdoc . -r -d out
```
To view the documentation:
```bash
npx http-server out
```

---

## **Technical Implementation**
### **OOP Principles Applied**
- **Encapsulation:** Players, users, and evaluation models are modular and logically independent.
- **Abstraction:** Role classification and score evaluation hide internal complexity.
- **Inheritance:** Specialized users like Scout, Manager, and Agent extend a common User base.
- **Polymorphism:** Different player reports can be generated/exported using the same interface.

### **Design Principles Used**
- **Single Responsibility:** Each class handles one specific function (e.g., EvaluationModel, PlayerReport).
- **Open-Closed:** Role weightings and scoring models are configurable.
- **Reusability:** Evaluation and search logic can be applied to any player dataset.

### **Design Patterns Considered**
- **Strategy Pattern:** For interchangeable scoring strategies.
- **Factory Pattern (Optional):** Could be used for creating users or reports dynamically.

---

## **Class Structure Overview**
- **`User`** - Base class for users; extended by `Scout`, `Manager`, `Agent`, and `Administrator`.
- **`Player`** - Represents player data and supports classification and scoring.
- **`EvaluationModel`** - Calculates scores and assigns player roles using attribute weights.
- **`PlayerReport`** - Represents imported data and handles validation.
- **`ComparisonReport`** - Compares two players and provides exportable report structure.
- **`SearchAndRecommendationSystem`** - Provides player filtering and AI-based suggestions.

---

## **Testing**
This logic system can be tested using custom Jest tests or node-based simulations.
```bash
npm test
```

---

## **AI Usage**
AI assistance (ChatGPT 4 and DeepSeek) was used for:
- Brainstorming class responsibilities and relationships
- Creating well-documented JSDoc annotations
- Creating test file


---

## **Resources**
- Business Requirements: doc/Football Player Ability Analysis System.docx
- video: 

---

## **License**
This project is licensed under the **MIT License**.
