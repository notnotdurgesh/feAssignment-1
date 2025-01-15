

import { format } from 'date-fns'
import { ArrowUpRight, ArrowDownRight, XCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { transactionProps } from './types'

export function Transactitem({ transaction } : { transaction : transactionProps } ) {
    return(
        <Card className="bg-zinc-100 border-zinc-300">
        <CardContent className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            {transaction.type === 'withdrawal' && transaction.status === 'completed' && (
              <ArrowUpRight className="h-5 w-5 text-red-500 mr-3" />
            )}
            {transaction.type === 'withdrawal' && transaction.status === 'cancelled' && (
              <XCircle className="h-5 w-5 text-black mr-3" />
            )}
            {transaction.type === 'deposit' && (
              <ArrowDownRight className="h-5 w-5 text-green-500 mr-3" />
            )}
            <div>
              <p className="text-black font-medium">
                {transaction.type === 'withdrawal' ? 'Withdrawal' : 'Deposit'}
                {transaction.status === 'cancelled' ? ' Cancelled' : ''}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <p className="text-sm text-gray-700">
                  {format(new Date(transaction.date), 'dd MMM yyyy, hh:mm a')}
                </p>
                <span className="hidden sm:inline text-black">•</span>
                <p className="text-sm text-gray-700">{transaction.category}</p>
              </div>
            </div>
          </div>
          <p className={`text-lg font-semibold ${
            transaction.type === 'withdrawal' 
              ? 'text-red-500' 
              : 'text-green-500'
          }`}>
            {transaction.type === 'withdrawal' ? '-' : '+'}₹{transaction.amount.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    )
}