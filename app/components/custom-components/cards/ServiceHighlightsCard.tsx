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
        // sets background image if available and apply opacity else fallback to background color
        <div key={item.id} style={{backgroundImage: `url(${item.imageUrl})`}} className={`relative bg-cover bg-no-repeat bg-center border border-rf-primary rounded-md overflow-hidden ${item.imageUrl ? 'opacity-95' : 'bg-rf-white-100/90'}`}>
          {/* apply overlay if image is available */}
          {item.imageUrl && <div className="absolute inset-0 bg-black/30 size-full" />}
          {/* card details at the middle */}
          <div className="relative grow flex flex-col justify-center gap-y-2 p-8 pb-4 min-h-80">
              {/* title */}
              <h4 className="capitalize text-lg font-semibold text-rf-primary text-shadow-md text-center">{item.title}</h4>
              {/* summary items */}
              {item.summary && item.summary.map((summary, idx) => (
                <h5 key={idx} className={`capitalize text-center ${item.imageUrl && 'text-white text-shadow-lg'}`}>{summary}</h5>
              ))}
          </div>
        </div>
      ))}
    </Wrapper>        
  )
}