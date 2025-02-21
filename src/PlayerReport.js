/**
 * @module PlayerReport
 * Manages player data import and validation
 */
export class PlayerReport {
    #validationStatus = "Pending";
    constructor() {
      /** @type {Array<Player>} */
      this.importedData = [];
      /** @type {'Valid'|'Invalid'|'Pending'} */
      this.validationStatus = "Pending";
    }
  
    /**
     * Imports and validates player data
     * @param {Array<Object>} data - Player data array
     * @throws {Error} If data format is invalid
     */
    importData(data) {
        this.importedData = data;
        this.validateData();
      }

    get status() {
        return this.#validationStatus;
    }
    /**
     * Validates required player fields
     * @returns {boolean} True if all data is valid
     */
    validateData() {
        const isValid = this.importedData.every(p => p.id && p.technicalAttributes);
        this.#validationStatus = isValid ? "Valid" : "Invalid";
        return isValid;
    }
  }