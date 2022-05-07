import * as fromTransactions from './transactions.actions';

describe('loadTransactionss', () => {
  it('should return an action', () => {
    expect(fromTransactions.loadTransactionss().type).toBe('[Transactions] Load Transactionss');
  });
});
