import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "~/components/ui/tooltip"

type TooltipSidesProps = {
  side: "left" | "top" | "bottom" | "right";
  content: string;
  children: React.ReactElement;
}

export function TooltipSides({side, content, children}: TooltipSidesProps) {
  return (
    <TooltipProvider>
        <Tooltip key={side}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>{content}</TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
