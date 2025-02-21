# **Design Patterns in FootballPlayerAbilityAnalysis**

This document explains the application of three design patterns in the Football Player Ability Analysis System: **Factory, Strategy, and Observer**. 
---

## **Factory Pattern - ComparisonReportFactory.js (hypothetical)**

### **Implementation**
```js
export class ReportFactory {
    static generateReport(type, player1, player2, metrics) {
        switch (type.toLowerCase()) {
            case "comparison":
                return new ComparisonReport(player1, player2, metrics);
            default:
                throw new Error(`Unsupported report type: ${type}`);
        }
    }
}
```

### **OOP application**
- **Encapsulation**: Users do not interact with individual class constructors.
- **Open-Closed Principle**: Easy to extend with new types of reports (e.g., tactical report).
- **Simplifies object creation**: Abstracts report instantiation.

### **Anti-Pattern (Violation)**
```js
let report;
if (type === 'comparison') {
    report = new ComparisonReport(...);
}
```
**Why it breaks**: Hardcoded conditionals make it harder to scale or add new report types, breaking OCP.

---

## **Strategy Pattern - EvaluationModel.js**

### **Implementation**
```js
export class EvaluationModel {
    constructor(weightings) {
        this.weightings = weightings;
    }

    score(player) {
        const weights = this.weightings[player.role];
        let score = 0;
        for (const attrType of ['technical', 'physical', 'mental']) {
            for (const key in player[attrType]) {
                score += player[attrType][key] * (weights[attrType][key] || 0);
            }
        }
        return score;
    }

    classify(player) {
        return 'Midfielder'; // Placeholder logic
    }
}
```

### **OOP application**
- **Encapsulation**: All scoring logic is encapsulated.
- **Flexibility**: Supports custom weighting strategies.
- **Reusability**: Can support multiple evaluation schemes for different clubs.

### **Anti-Pattern (Violation)**
```js
function evaluatePlayer(player) {
    if (player.role === 'Attacker') {
        return player.technical.shooting * 0.8 + player.physical.speed * 0.2;
    } else if (player.role === 'Defender') {
        return player.technical.tackling * 0.9 + player.mental.composure * 0.1;
    }
    return 0;
}
```
**Why it breaks**: Role-based logic is hardcoded, violating encapsulation and making reuse difficult.

---

## **Observer Pattern - RecommendationSystem.js (hypothetical)**

### **Implementation**
```js
export class Observer {
    receiveUpdate(data) {
        throw new Error("Method not implemented");
    }
}

export class Manager extends User {
    receiveUpdate(playerList) {
        console.log("Recommended players updated:", playerList);
    }
}
```

### **OOP application**
- **Loose coupling**: Recommendations system notifies subscribed users.
- **Scalability**: Add more observers without modifying core logic.

### **Anti-Pattern (Violation)**
```js
class RecommendationEngine {
    notifyUsers(users, data) {
        users.forEach(user => console.log(`Hey ${user.name}, here's an update:`, data));
    }
}
```
**Why it breaks**: Users aren't subscribing to updates, and `RecommendationEngine` depends on knowing every recipient in advance.

---

# OOP Pillars in FootballPlayerAbilityAnalysis

## Abstraction

### Good Example:
```js
class Player {
    evaluate(model) {
        this.score = model.score(this);
    }
}
```
**Why it works**: `evaluate()` hides scoring detail.

### **Counter-Example (Violation)**
```js
class Player {
    calculateScore(model) {
        // exposes raw formula
        console.log('Speed * 0.5 + Passing * 0.5');
        return this.physical.speed * 0.5 + this.technical.passing * 0.5;
    }
}
```
**Why it breaks**: Reveals implementation details rather than abstracting them.

---

## Encapsulation

### Good Example:
```js
class Player {
    #technical;
    getTechnical() {
        return this.#technical;
    }
}
```
**Why it works**: Direct attribute access is protected.

### **Counter-Example (Violation)**
```js
class Player {
    constructor() {
        this.technical = { passing: 85 };
    }
}
```
**Why it breaks**: Public access to sensitive internal state.

---

## Inheritance

### Good Example:
```js
class Scout extends User {
    constructor(...) {
        super(...);
    }
}
```
**Why it works**: Shared functionality across user types.

### **Counter-Example (Violation)**
```js
class Scout extends User {
    notify() {
        throw new Error("Scout can't be notified!");
    }
}
```
**Why it breaks**: Breaks substitutability and the purpose of base behavior.

---

## Polymorphism

### Good Example:
```js
const report = ReportFactory.generateReport("comparison", player1, player2, metrics);
```
**Why it works**: Different report types from same interface.

### **Counter-Example (Violation)**
```js
function generateComparisonReport(type, player1, player2) {
    if (type === 'comparison') {
        return new ComparisonReport(player1, player2);
    } else {
        throw new Error('Invalid type');
    }
}
```
**Why it breaks**: Not leveraging polymorphism; uses conditionals instead.

---

# SOLID Principles in FootballPlayerAbilityAnalysis

## SRP - Single Responsibility Principle

### Good Example:
```js
class PlayerReport {
    validate() {...}
    parse() {...}
}
```
**Why it works**: Handles only import/validation.

### **Counter-Example (Violation)**
```js
class PlayerReport {
    validate() {...}
    parse() {...}
    exportPDF() {...}
    sendEmail() {...}
}
```
**Why it breaks**: Report handling and communication responsibilities are mixed.

---

## OCP - Open-Closed Principle

### Good Example:
```js
class RoleClassifier {
    classify(player) {
        // strategy can change without modifying method
    }
}
```
**Why it works**: Supports new classification rules.

### **Counter-Example (Violation)**
```js
class RoleClassifier {
    classify(player) {
        if (player.age < 22) return "Prospect";
        if (player.age >= 22 && player.age < 30) return "Prime";
        return "Veteran";
    }
}
```
**Why it breaks**: Adding new rules requires modifying method.

---

## LSP - Liskov Substitution Principle

### Good Example:
```js
const users = [new Scout(...), new Manager(...)];
users.forEach(user => user.notify());
```
**Why it works**: All user types behave similarly in interface.

### **Counter-Example (Violation)**
```js
class Manager extends User {
    notify() {
        throw new Error("Managers can't be notified");
    }
}
```
**Why it breaks**: Derived class violates behavior contract of base class.

---

## ISP - Interface Segregation Principle

### Good Example:
```js
class Scout extends User {
    importData()
    classifyPlayer()
}
```
**Why it works**: Methods relevant only to scout role.

### **Counter-Example (Violation)**
```js
class Scout {
    importData() {}
    classifyPlayer() {}
    generateTeamTactics() {}
}
```
**Why it breaks**: Includes responsibilities beyond scout's role.

---

## DIP - Dependency Inversion Principle

### Good Example:
```js
class ReportService {
    constructor(reportModel) {
        this.reportModel = reportModel;
    }
}
```
**Why it works**: High-level module depends on abstraction.

### **Counter-Example (Violation)**
```js
class ReportService {
    constructor() {
        this.reportModel = new ComparisonReport();
    }
}
```
**Why it breaks**: Hardcoded dependency; hard to substitute or extend.