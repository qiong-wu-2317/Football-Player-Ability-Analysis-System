import { User } from './User.js';

/**
 * @module Scout
 * Handles scout-specific functionality
 */
export class Scout extends User {
    /**
     * @param {string} name - User's full name
     */
    constructor(name) {
      super(name, "Scout");
    }
  
    /**
     * Imports data into a player report
     * @param {PlayerReport} report - Target report object
     * @param {Array<Object>} data - Player data to import
     */
    importData(report, data) {
      report.importData(data);
    }
  }
  

