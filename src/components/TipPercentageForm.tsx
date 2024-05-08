import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
   setTip: Dispatch<SetStateAction<number>>,
   tip: number

}

export default function TipPercentageForm({setTip, tip} :TipPercentageFormProps) {
  return (
    <div className="tracking-wide">
        <h3 className="font-medium text-white text-2xl mb-3">Select Tip %</h3>

        <form action="" className="text-white">
            {tipOptions.map(tipOption => (
                <div key ={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id} 
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)}/*El signo + convierte string a number*/
                        checked= {tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
