import React from 'react'
import type { Route } from './+types/office-locations';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rabbit Foot | Office Locations" },
    { name: "description", content: "A dental services company totally committed for your kids!" },
  ];
}

export default function OfficeLocations({}: Route.ComponentProps) {
  return (
    <div>OfficeLocations</div>
  )
}