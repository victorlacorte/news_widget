import date from '../date';

describe('Date utils', () => {
  it('Converts an ISO date to Brazil locale', () => {
    expect(date.convertIsoToBrLocale('2019-11-08T11:00:00Z')).toEqual('08/11/2019');
  });
});
