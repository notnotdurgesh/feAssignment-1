import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { WithdrawModalProps } from "./types"


export function WithdrawModal({ open, onClose }: WithdrawModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-100 border-zinc-300">
        <DialogHeader>
          <DialogTitle className="text-black">Withdraw Funds</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-zinc-600">Amount (INR)</label>
            <Input 
              type="number" 
              placeholder="Enter amount" 
              className="mt-1 bg-zinc-100 border-zinc-300 text-white"
            />
          </div>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Confirm Withdrawal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

