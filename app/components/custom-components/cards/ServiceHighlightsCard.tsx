import type { Highlights } from "~/data/static-data";
import Wrapper from "../Wrapper";

type ServiceHighlightsCardProps = {
    serviceHighlights: Highlights;
}

// component to render the service highlights items
export default function ServiceHighlightsCard({serviceHighlights }: ServiceHighlightsCardProps) {
  return (
    <Wrapper className="[&>div]:p-0 [&>div]:grid [&>div]:gap-4 [&>div]:grid-cols-1 sm:[&>div]:grid-cols-2 2xmd:[&>div]:grid-cols-3 xl:[&>div]:grid-flow-col xl:[&>div]:auto-cols-fr">
      {serviceHighlights.item.map(item => (
        <div key={item.id} className="border border-rf-primary rounded-md overflow-hidden bg-rf-white-100/90">
          {/* card details at the middle */}
          <div className="grow flex flex-col justify-center gap-y-2 p-8 pb-4 min-h-80">
              {/* title */}
              <h4 className="capitalize text-lg font-semibold text-rf-primary text-shadow-md text-center">{item.title}</h4>
              {/* summary items */}
              {item.summary && item.summary.map((summary, idx) => (
                <h5 key={idx} className="capitalize text-center">{summary}</h5>
              ))}
          </div>
        </div>
      ))}
    </Wrapper>        
  )
}