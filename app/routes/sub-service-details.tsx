import type { Route } from './+types/sub-service-details';
import { tabLabel } from '~/helper/tabLabel';
import { doctorArray, servicesArray } from '~/data/static-data';
import ServiceDetailsAndSubDetails from '~/components/custom-components/ServiceDetailsAndSubDetails';

export function meta({loaderData, location}: Route.MetaArgs) {
    const { subServicesData } = loaderData ?? {}
  return [
    { title: `Rabbit Foot | ${subServicesData ? tabLabel({ data: subServicesData }) : tabLabel({data: {...location, type: 'location'}})}` },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export const clientLoader = ({ params }: Route.ClientLoaderArgs) => {
  const subServiceId = params['sub-service-id'];
  const subServicesData = servicesArray.flatMap(services => services.serviceNiche).find(subService => subService?.id === subServiceId)
  const relatedDoctorsData = doctorArray.filter(doctor => doctor.speciality?.some(speciality => subServicesData?.speciality.includes(speciality) ))
  return { subServicesData, relatedDoctorsData };
};


export default function SubServiceDetails({loaderData}: Route.ComponentProps) {
  const { subServicesData, relatedDoctorsData } = loaderData
  return <ServiceDetailsAndSubDetails servicesData={subServicesData} relatedDoctorsData={relatedDoctorsData} />
}