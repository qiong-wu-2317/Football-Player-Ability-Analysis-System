/**
 * @module Player
 * Represents a football player with attributes and scoring logic.
 */
export class Player {
    /**
     * @param {string} id - Unique player identifier
     * @param {string} name - Player's full name
     * @param {number} age - Player's age
     * @param {number} marketValue - Market valuation in currency units
     * @param {Object} technical - Technical attributes (passing, dribbling, etc.)
     * @param {Object} physical - Physical attributes (speed, stamina, etc.)
     * @param {Object} mental - Mental attributes (vision, composure, etc.)
     * @param {'Attacker'|'Midfielder'|'Defender'} role - Player's classified role
     */
    constructor(id, name, age, marketValue, technical, physical, mental, role) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.marketValue = marketValue;
        this.technicalAttributes = technical;
        this.physicalAttributes = physical;
        this.mentalAttributes = mental;
        this.role = role;
        this.score = 0;
      }
  
    /**
     * Calculates player score using role-based weights
     * @param {EvaluationModel} evaluationModel - Scoring model with weights
     * @returns {number} Computed player score
     */
    calculateScore(evaluationModel) {
        this.score = evaluationModel.calculatePlayerScore(this);
        return this.score;
      }
  }