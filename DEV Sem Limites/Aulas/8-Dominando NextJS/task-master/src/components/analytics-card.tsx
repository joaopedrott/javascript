import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
    title: string;
    value: number;
    variant: 'up' | 'down';
    valueDifference: number;
}

export function AnalyticsCard ({
    title, 
    value, 
    variant, 
    valueDifference
}: AnalyticsCardProps) {
    const iconColor = variant === 'up' ? 'text-emerald-500' : 'text-red-500'
    const valueDifferenceColor = variant === 'up' ? 'text-emerald-500' : 'text-red-500'
    const Icon = variant === 'up' ? ChevronUp : ChevronDown
    
    return (
        <Card className="border w-full rounded-none shadow-none">
            <CardHeader className="" >
                <div className="flex items-center gap-x-2">
                    <CardDescription className="flex items-center gap-x-2 font-medium overflow-hidden">
                        <span className="truncate text-base">{title}</span>
                    </CardDescription>

                    <div className="flex items-center gap-x-1">
                        <Icon className={cn('size-4', iconColor)} />
                        <span className={cn('truncate text-base font-medium', valueDifferenceColor)}>
                            {valueDifference}
                        </span>
                    </div>
                </div>

                <CardTitle className="text-3xl font-semibold">{value}</CardTitle>
            </CardHeader>
        </Card>
    )
}