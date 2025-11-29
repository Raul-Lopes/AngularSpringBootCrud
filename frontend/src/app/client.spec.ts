import { Client } from './client.model';

describe('Client', () => {
  it('should create an instance', () => {
    const client: Client = {
      id: 1,
      firstName: 'Test',
      lastName: 'User',
      emailId: 'test@example.com',
      creditLimit: 1000
    };
    expect(client).toBeTruthy();
  });
});
