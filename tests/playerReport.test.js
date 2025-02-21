import { PlayerReport } from '../src/PlayerReport.js';

describe('PlayerReport', () => {
  let report;

  beforeEach(() => {
    report = new PlayerReport();
  });

  test('validates correct player data', () => {
    const testData = [
      { id: 'P1', technicalAttributes: {}, physicalAttributes: {} }
    ];
    report.importData(testData);
    expect(report.status).toBe('Valid');
  });

  test('flags invalid data with missing ID', () => {
    const testData = [{
      technicalAttributes: { passing: 80 },
      physicalAttributes: { speed: 90 }
    }];
    report.importData(testData);
    expect(report.status).toBe('Invalid');
  });
});