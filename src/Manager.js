import { User } from './User.js';

/**
 * @module Manager
 * Handles manager-specific functionality
 */
export class Manager extends User {
    /**
     * @param {string} name - User's full name
     */
    constructor(name) {
      super(name, "Manager");
    }
  }