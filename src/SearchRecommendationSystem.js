/**
 * @module SearchRecommendationSystem
 * Handles player filtering and AI recommendations
 */
export class SearchRecommendationSystem {
    /**
     * @param {Array<Player>} players - Player database to search
     */
    constructor(players) {
        this.players = players;
      }
  
    /**
     * Filters players by criteria
     * @param {Object} filters - Search parameters
     * @param {string} [filters.position] - Role filter
     * @param {number} [filters.maxAge] - Maximum age
     * @param {number} [filters.minRating] - Minimum score rating
     * @returns {Array<Player>} Filtered players
     */
    filterPlayers(filters) {
        return this.players.filter((player) => {
          return (
            (!filters.position || player.role === filters.position) &&
            (!filters.maxAge || player.age <= filters.maxAge) &&
            (!filters.minRating || player.score >= filters.minRating)
          );
        });
      }
  
    /**
     * Generates top recommendations based on scores
     * @returns {Array<Player>} Top 5 players by calculated score
     */
    getRecommendations() {
        return this.players.sort((a, b) => b.score - a.score).slice(0, 5);
      }
  }