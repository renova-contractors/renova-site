import InstagramEmbed from '@/components/Instagram/Instagram';
import { LocationsList } from '@/components/LocationsList/LocationsList'
import React from 'react'

const page = () => {
  return (
		<main className="container mt-[250px]">
			<LocationsList />
			<div
				id="socials"
				className="scroll container w-2/3 items-start flex max-sm:flex-col sm:justify-around my-auto component-mb max-sm:items-center mx-auto"
			>
				<div className="h-max">
					<InstagramEmbed url="https://www.instagram.com/renova.contractors/?utm_source=ig_embed&amp;utm_campaign=loading" />
				</div>

				<div className="map-container">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172153.33373691145!2d-122.2695375!3d47.608715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xace89cdae412ae93%3A0x40ae051c2253149b!2sRenova%20Contractors%20LLC!5e0!3m2!1sen!2sus!4v1729059408347!5m2!1sen!2sus"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="responsive-iframe"
					></iframe>
				</div>
			</div>
		</main>
  );
}

export default page
