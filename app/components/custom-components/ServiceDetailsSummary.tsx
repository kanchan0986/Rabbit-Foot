import type { Point } from "~/data/static-data"
import SlideInUp from "./animations/SlideInUp"

type ServiceDetailsSummaryProps = {
    summary: (string | Point[])[]
}

// component to render the service summary items
export const ServiceDetailsSummary = ({summary}:ServiceDetailsSummaryProps) => { 
  return summary.map((summaryItem, idx) => {
    // if summary items are string then render this statement
    if(typeof summaryItem === "string") {
      return (
        <SlideInUp delay={idx * 0.1} key={idx}>
            <p className="text-xbase lg:text-lg">{summaryItem}</p>
        </SlideInUp>
      )
    }
    // if summary items are of Point[] type then render this statement
    if(typeof summaryItem === "object"){
      return summaryItem.map((subSummaryItem, idx) => (
        <SlideInUp delay={idx * 0.1} key={subSummaryItem.id}>
            <p className="flex items-start gap-x-2 text-xbase lg:text-lg">
              {subSummaryItem.icon && <span className="size-5 mt-1"><subSummaryItem.icon className="fill-rf-primary"/></span>}
              {<span className=""><span className="font-semibold text-rf-primary">{subSummaryItem?.title}</span> {subSummaryItem.summary}</span>}
            </p>
        </SlideInUp>
      
      ))
    }
  })
 }