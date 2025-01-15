export const transactions = [
    {
      id: 1,
      type: 'withdrawal',
      status: 'completed',
      amount: 2374,
      date: '2024-01-15T11:09:00',
      category: 'Bank Transfer'
    },
    {
      id: 2,
      type: 'deposit',
      status: 'completed',
      amount: 5000,
      date: '2024-01-14T15:30:00',
      category: 'Sales Revenue'
    },
    {
      id: 3,
      type: 'withdrawal',
      status: 'cancelled',
      amount: 2374,
      date: '2024-01-13T19:49:00',
      category: 'Bank Transfer'
    },
    {
      id: 4,
      type: 'deposit',
      status: 'completed',
      amount: 3500,
      date: '2024-01-12T14:20:00',
      category: 'Platform Credits'
    },
    {
      id: 5,
      type: 'withdrawal',
      status: 'completed',
      amount: 1500,
      date: '2024-01-11T09:15:00',
      category: 'Bank Transfer'
    },
    {
      id: 6,
      type: 'deposit',
      status: 'completed',
      amount: 4200,
      date: '2024-01-10T16:45:00',
      category: 'Sales Revenue'
    },
    {
      id: 7,
      type: 'withdrawal',
      status: 'cancelled',
      amount: 2000,
      date: '2024-01-09T13:30:00',
      category: 'Bank Transfer'
    },
    {
      id: 8,
      type: 'deposit',
      status: 'completed',
      amount: 3800,
      date: '2024-01-08T11:20:00',
      category: 'Platform Credits'
    }
  ]
  
  export const balanceHistory = [
    { date: '2024-01-08', balance: 3800 },
    { date: '2024-01-09', balance: 3800 },
    { date: '2024-01-10', balance: 8000 },
    { date: '2024-01-11', balance: 6500 },
    { date: '2024-01-12', balance: 10000 },
    { date: '2024-01-13', balance: 10000 },
    { date: '2024-01-14', balance: 15000 },
    { date: '2024-01-15', balance: 12626 }
  ]
  
  export const stats = {
    totalDeposits: 16500,
    totalWithdrawals: 3874,
    successRate: 98.5,
    averageTransaction: 3084.25
  }
  
  