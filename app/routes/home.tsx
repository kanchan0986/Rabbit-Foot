import Wrapper from "~/components/custom-components/Wrapper";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import smilingKid from "~/assets/smiling-kid.png";
import spacerVectorRabbitBlue from "~/assets/Spacer-Vector-Rabbit-blue.png"
import leavesLeft from "~/assets/leaves-left.png"
import { useMediaQuery } from "~/hooks/useMediaQuery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Home" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function Home() {

  const isLaptop = useMediaQuery("(min-width: 992px)");

  return <main>
    {/* Hero section */}
    <Wrapper as={"section"} className={`${isLaptop ? 'py-10' : ''}`}>
        <div className={`flex flex-col-reverse gap-y-4 ${isLaptop ? 'flex-row items-center justify-between' : ''}`}>
          {/* Left section */}
          <div className={`flex flex-col items-center gap-y-2 ${isLaptop ? 'w-2xl flex-row gap-y-7' : ''}`}>
              {/* Decorative image on the left (only visible on laptop) */}
              {isLaptop && <img src={leavesLeft} alt="leaves-left" className="self-start -mt-8 w-40" />}
              
              {/* Text content container */}
              <div className={`${isLaptop ? 'flex flex-col items-start gap-y-7' : 'flex flex-col items-center gap-y-2'}`}>
                {/* Heading with responsive font sizes */}
                <h1 className={`text-3xl text-center font-flavours text-rf-primary ${isLaptop ? 'text-5xl self-start text-start' : ''}`}>
                  Welcome to 
                  <span className={`block text-4xl text-rf-primary-100 ${isLaptop ? 'text-6xl' : ''}`}>Rabbit Foot</span>
                </h1>
                
                {/* Description paragraph */}
                <p className={isLaptop ? 'text-xl' : ''}>
                  We provide accessable, fast and quality dental care for children in Santa Ana. 
                  Same-day appointments, clear pricing, and a team you can trust.
                </p>
                
                {/* Call-to-action button */}
                <Button 
                  variant={"outline"} 
                  size={isLaptop ? 'xl' : 'lg'} 
                  className={`mt-4 cursor-pointer bg-rf-primary hover:bg-rf-primary-100 hover:text-white text-sm capitalize ${isLaptop ? 'hover:shadow-xl' : ''}`}
                >
                  Book an appointment today!
                </Button>
              </div>
          </div>
          
          {/* Right section - Hero Image */}
          <div className={`flex justify-center ${isLaptop ? 'w-1/2 justify-end' : ''}`}>
            <img src={smilingKid} alt="smiling kid" className={`w-75 bg-cover ${isLaptop ? 'w-lg' : ''}`} />
          </div>
        </div>
    </Wrapper>

    {/* Spacer section with decorative vector image */}
    <Wrapper className="w-full [&>div]:w-full">
      <img src={spacerVectorRabbitBlue} alt="Spacer-Vector-Rabbit-Blue" className="w-full" />
    </Wrapper>
    
  </main>;
}

