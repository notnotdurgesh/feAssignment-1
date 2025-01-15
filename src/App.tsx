'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { WithdrawModal } from './components/withdraw-modal'
import { DepositModal } from './components/deposit-modal'
import { BalanceChart } from './components/Balance-chart'
import { WalletStats } from './components/Wallet-stats'
import { Transactitem } from './components/Transact-item'
import { transactions, balanceHistory, stats } from './utils/mock-data'
import { transactionProps } from './components/types'

export default function App() {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false)
  const [isDepositOpen, setIsDepositOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'deposits') return transaction.type === 'deposit'
    if (filter === 'withdrawals') return transaction.type === 'withdrawal'
    return true
  })

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200 p-4 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5 text-zinc-600" />
          </Button>
          <h1 className="text-xl font-semibold text-yellow-400">Your Wallet</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 pb-24 space-y-6">

        <Card className="bg-zinc-100 border-zinc-300">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-black">Available Balance</p>
              <h2 className="text-4xl font-bold text-yellow-500 mt-2">₹12,626.00</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-zinc-200 rounded-lg">
                <p className="text-lg text-gray-800">Available</p>
                <p className="text-xl font-bold text-green-500 mt-1">₹12,626.00</p>
              </div>
              <div className="text-center p-4 bg-zinc-200 rounded-lg">
                <p className="text-lg text-gray-800">In Order</p>
                <p className="text-xl font-semibold text-red-500 mt-1">₹0.00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <WalletStats stats={stats} />

        <BalanceChart data={balanceHistory} />

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black">Transactions</h3>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px] bg-zinc-100 border-zinc-300 text-black">
                <SelectValue placeholder="Filter transactions" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-100 border-zinc-300">
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="deposits">Deposits Only</SelectItem>
                <SelectItem value="withdrawals">Withdrawals Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            {filteredTransactions.map((transaction: transactionProps, idx) => (
              <div key={idx}>
                <Transactitem transaction={transaction} />
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-zinc-100/80 backdrop-blur-md border-t border-zinc-200 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsDepositOpen(true)}
              >
                Deposit
              </Button>
              <Button 
                className="bg-gradient-to-r from-zinc-700 to-zinc-800 hover:from-zinc-600 hover:to-zinc-700 text-white font-semibold py-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsWithdrawOpen(true)}
              >
                Withdraw
              </Button>
            </div>
          </div>
        </div>
      </main>

      <WithdrawModal open={isWithdrawOpen} onClose={() => setIsWithdrawOpen(false)} />
      <DepositModal open={isDepositOpen} onClose={() => setIsDepositOpen(false)} />
    </div>
  )
}

