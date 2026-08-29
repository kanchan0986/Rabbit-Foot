import { tabLabel } from "~/helper/tabLabel";
import type { Route } from "./+types/service-details";
import { doctorArray, servicesArray } from "~/data/static-data";
import ServiceDetailsAndSubDetails from "~/components/custom-components/ServiceDetailsAndSubDetails";

export function meta({loaderData, location}: Route.MetaArgs) {
    const { servicesData } = loaderData ?? {}
  return [
    { title: `Rabbit Foot | ${servicesData ? tabLabel({ data: servicesData }) : tabLabel({data: {...location, type: 'location'}})}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({params} : Route.ClientLoaderArgs) => { 
    const serviceId = params["service-id"]
  // make api call
  const servicesData = servicesArray.find(service => service.id === serviceId)
  const relatedDoctorsData = doctorArray.filter(doctor => doctor.speciality?.some(speciality => servicesData?.speciality.includes(speciality) ))
  return { servicesData, relatedDoctorsData };
 }

export default function ServiceDetails({loaderData}: Route.ComponentProps) {
    const { servicesData, relatedDoctorsData } = loaderData
  return <ServiceDetailsAndSubDetails servicesData={servicesData} relatedDoctorsData={relatedDoctorsData} />
}