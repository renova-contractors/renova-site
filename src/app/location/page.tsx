import { SocialsWidget } from '@/components/SocialsWidget/SocialsWidget';
import { LocationsList } from '@/components/LocationsList/LocationsList'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Location | RENOVA Contractors',
	description: 'Find RENOVA Contractors locations and service areas',
	alternates: {
		canonical: 'https://www.renova.contractors/location'
	}
};

const page = () => {
  return (
		<main className="container mt-[250px]">
			<LocationsList />
			<SocialsWidget />
		</main>
  );
}

export default page
