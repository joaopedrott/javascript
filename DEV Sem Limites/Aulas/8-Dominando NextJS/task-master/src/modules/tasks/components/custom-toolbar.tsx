import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

interface CustomToolbarProps {
    onNavigate: (action: 'PREV' | 'NEXT' | 'TODAY') => void
    date: Date
}

export function CustomToolbar ({ onNavigate, date} : CustomToolbarProps) {
    return (
        <div className="flex mb-4 gap-x-2 items-center w-full lg:w-auto justify-center lg:justify-start">
            <Button
            onClick={() => onNavigate('PREV')}
            variant='secondary'
            size-='icon'
            className="flex items-center"
            >
                <ChevronLeft className="size-4"/>
            </Button>

            <div className="flex items-center bg-white border border-input px-3 py-2 h-8 justify-center w-full lg:w-auto">
                <Calendar className="size-4 mr-2" />
                <p className="text-sm">{format(date, 'MMMM, yyyy')}</p>
            </div>

            <Button
            onClick={() => onNavigate('NEXT')}
            variant='secondary'
            size-='icon'
            className="flex items-center"
            >
                <ChevronRight className="size-4"/>
            </Button>
        </div>
    )
}

