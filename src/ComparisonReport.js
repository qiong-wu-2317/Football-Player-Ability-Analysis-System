/**
 * @module ComparisonReport
 * Generates player comparison reports
 */
export class ComparisonReport {
    /**
     * @param {Player} player1 - First player to compare
     * @param {Player} player2 - Second player to compare
     */
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.metrics = { technical: {}, physical: {}, mental: {} };
      }
  
    /**
     * Generates comparison metrics across all attributes
     * @returns {Object} Comparison data structure containing:
     * - technical: {attribute: {player1: number, player2: number}}
     * - physical: {attribute: {player1: number, player2: number}}
     * - mental: {attribute: {player1: number, player2: number}}
     */
    generateReport() {
        this._compareAttributes("technical");
        this._compareAttributes("physical");
        this._compareAttributes("mental");
        return this.metrics;
      }

    _compareAttributes(attributeType) {
        for (const key in this.player1[`${attributeType}Attributes`]) {
            this.metrics[attributeType][key] = {
            player1: this.player1[`${attributeType}Attributes`][key],
            player2: this.player2[`${attributeType}Attributes`][key],
            };
        }
    }
  }