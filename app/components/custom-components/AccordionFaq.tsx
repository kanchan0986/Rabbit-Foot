import { useLocation } from "react-router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import type { Faq } from "~/data/static-data"

type AccordionFaqProps = {
    items: Faq[]
}

export function AccordionFaq({items}: AccordionFaqProps) {
    const location = useLocation()
  return (
    <Accordion
      key={location.pathname} // remounts on every route change
      className="w-full rounded-lg border border-rf-primary overflow-hidden 2xmd:w-10/12 lg:h-9/12 xl:w-8/12 bg-white"
      defaultValue={items[0].id}
      type="single"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-b last:border-b-0 border-rf-primary"
        >
          <AccordionTrigger className="px-4 bg-rf-primary/50 rounded-none [&[data-state=closed]>svg]:stroke-black [&[data-state=open]>svg]:stroke-rf-primary text-md lg:text-lg lg:[&>svg]:size-5! hover:cursor-pointer hover:data-[state=open]:cursor-auto">{item.question}</AccordionTrigger>
          <AccordionContent className="bg-rf-primary-300 px-4 pt-2 h-fit text-md lg:text-lg">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
