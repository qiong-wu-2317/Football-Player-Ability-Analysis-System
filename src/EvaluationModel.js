/**
 * @module EvaluationModel
 * Handles role-based scoring calculations and weight adjustments
 */
export class EvaluationModel {
    constructor() {
      this.roleWeights = {
        Attacker: { technical: 0.5, physical: 0.3, mental: 0.2 },
        Midfielder: { technical: 0.4, physical: 0.3, mental: 0.3 },
        Defender: { technical: 0.3, physical: 0.5, mental: 0.2 },
      };
    }
  
    /**
     * Adjusts weightings for a specific role
     * @param {string} role - Role to modify (Attacker/Midfielder/Defender)
     * @param {Object} newWeights - New weight percentages
     * @param {number} newWeights.technical - Technical attributes weight (0-1)
     * @param {number} newWeights.physical - Physical attributes weight (0-1)
     * @param {number} newWeights.mental - Mental attributes weight (0-1)
     */
    adjustWeights(role, newWeights) {
      if (this.roleWeights[role]) {
        this.roleWeights[role] = newWeights;
      }
    }
  
    /**
     * Calculates weighted score for a player
     * @param {Player} player - Player to evaluate
     * @returns {number} Total calculated score
     */
    calculatePlayerScore(player) {
      const weights = this.roleWeights[player.role];
      const technicalScore = this._sumAttributes(player.technicalAttributes) * weights.technical;
      const physicalScore = this._sumAttributes(player.physicalAttributes) * weights.physical;
      const mentalScore = this._sumAttributes(player.mentalAttributes) * weights.mental;
      return technicalScore + physicalScore + mentalScore;
    }

    _sumAttributes(attributes) {
      return Object.values(attributes).reduce((acc, val) => acc + val, 0);
    }
  }