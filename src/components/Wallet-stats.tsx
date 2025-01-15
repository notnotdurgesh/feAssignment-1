import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownRight, ArrowUpRight, BarChart2, Percent } from 'lucide-react'
import { WalletStatsProps } from "./types"

export function WalletStats({ stats }: WalletStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-zinc-100 border-zinc-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-black">Total Deposits</CardTitle>
          <ArrowDownRight className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-black">₹{stats.totalDeposits.toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card className="bg-zinc-100 border-zinc-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-black">Total Withdrawals</CardTitle>
          <ArrowUpRight className="h-6 w-6 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-black">₹{stats.totalWithdrawals.toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card className="bg-zinc-100 border-zinc-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-black">Success Rate</CardTitle>
          <Percent className="h-6 w-6 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-black">{stats.successRate}%</div>
        </CardContent>
      </Card>
      <Card className="bg-zinc-100 border-zinc-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-black">Average Transaction</CardTitle>
          <BarChart2 className="h-6 w-6 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-black">₹{stats.averageTransaction.toLocaleString()}</div>
        </CardContent>
      </Card>
    </div>
  )
}

