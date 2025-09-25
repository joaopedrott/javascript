import { CalendarIcon } from "lucide-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'
import { Calendar } from "./calendar";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: Date
  onChange: (date: Date) => void;
  className?: string
  placeholder?: string
}

export function DatePicker ({
  value,
  onChange,
  className,
  placeholder
}: DatePickerProps) {
  return (
    <Popover modal>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='lg'
          className={cn(
            'w-full justify-start text-left font-normal px-3',
            !value && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {value ? format(value, 'PPP', { locale: ptBR }) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-none">
        <Calendar 
          mode='single'
          selected={value}
          onSelect={(date) => onChange(date as Date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}