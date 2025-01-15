export interface transactionProps{
    id:Number
    type: String
    status:String
    category: String
    amount: Number
    date:string
}

export interface BalanceChartProps {
    data: Array<{ date: string; balance: number }>
  }

export interface DepositModalProps {
    open: boolean
    onClose: () => void
}

export interface WithdrawModalProps {
    open: boolean
    onClose: () => void
}

export interface WalletStatsProps {
    stats: {
      totalDeposits: number
      totalWithdrawals: number
      successRate: number
      averageTransaction: number
    }
  }
  