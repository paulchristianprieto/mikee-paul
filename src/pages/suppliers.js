import Image from "next/image";
import Link from "next/link";

export default function Suppliers({ suppliers }) {
  return (
    <div className="page">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        {suppliers.map((supplier, index) => {
          return (
            <div key={supplier.name}>
              <div>
                <div className="flex flex-col pb-2">
                  <div className="flex text-xl font-medium justify-center">
                    {supplier.role}
                  </div>
                  <div className="flex flex-row text-lg justify-center mb-2">
                    <Link href={supplier.links.website || supplier.links.facebook || supplier.links.instagram}>
                      <a target="_blank">
                        <div className="text-lg">
                          {supplier.name}
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    {supplier.links.facebook &&
                      <Link href={supplier.links.facebook}>
                        <a target="_blank" className="mr-2">
                          <Image src={'/brands/facebook.png'} width={24} height={24} />
                        </a>
                      </Link>
                    }
                    {supplier.links.instagram &&
                      <Link href={supplier.links.instagram}>
                        <a target="_blank" className="mr-2">
                          <Image src={'/brands/instagram.png'} width={24} height={24} />
                        </a>
                      </Link>
                    }
                    {supplier.links.youtube &&
                      <Link href={supplier.links.youtube}>
                        <a target="_blank" className="mr-2">
                          <Image src={'/brands/youtube.png'} width={32} height={24} />
                        </a>
                      </Link>
                    }
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-theme-dark shadow-lg">
                  <Image
                    src={supplier.imageSrc}
                    width={300}
                    height={300}
                    layout="responsive"
                  />
                </div>
              </div>

              {index !== suppliers.length - 1 && (
                <div className="w-full border-t-2 border-t-slate-50 opacity-10 sm:hidden" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      suppliers: [
        {
          imageSrc: '/suppliers/OnTheEve.jpeg',
          role: 'Wedding Coordinator',
          name: 'On The Eve Events',
          links: {
            facebook: 'https://www.facebook.com/ontheeveevents',
            instagram: 'https://www.instagram.com/weddings_ontheeveevents/',
            youtube: '',
            website: ''
          },
        },
        {
          imageSrc: '/suppliers/OurHaven.jpg',
          role: 'Events Place',
          name: 'Our Haven Events Place',
          links: {
            facebook: 'https://www.facebook.com/OurHavenIndang',
            instagram: 'https://www.instagram.com/ourhaven.indang/',
            youtube: '',
            website: 'https://www.ourhaveneventsplace.com/'
          },
        },
        {
          imageSrc: '/suppliers/ADM.jpg',
          role: 'Catering',
          name: 'ADM Catering',
          links: {
            facebook: 'https://www.facebook.com/admcatering',
            instagram: 'https://www.instagram.com/admcatering/',
            youtube: '',
            website: ''
          },
        },
        {
          imageSrc: '/suppliers/OurStoryFilms.jpg',
          role: 'Videography',
          name: 'Our Story Films',
          links: {
            facebook: 'https://www.facebook.com/ourstoryfilms',
            instagram: 'https://www.instagram.com/ourstory_films/',
            youtube: 'https://www.youtube.com/channel/UCzDrs_yz5iT5fl66ueBqHEg',
            website: ''
          },
        },
        {
          imageSrc: '/suppliers/EDPS.jpg',
          role: 'Photography',
          name: 'EDPS Studio',
          links: {
            facebook: 'https://www.facebook.com/EdpsStudio/',
            instagram: 'https://www.instagram.com/edps_studio/',
            youtube: '',
            website: ''
          },
        },
        {
          imageSrc: '/suppliers/BlacksmithJewelry.jpg',
          role: 'Wedding Rings',
          name: 'Blacksmith Jewelry PH',
          links: {
            facebook: 'https://www.facebook.com/blacksmithjewelryph',
            instagram: 'https://www.instagram.com/blacksmith_jewelry/',
            youtube: '',
            website: ''
          },
        },
      ]
    },
  }
}