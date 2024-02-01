import Section from 'src/components/Section';
import Mail from 'src/components/icons/Mail';
import Phone from 'src/components/icons/Phone';
import GitHub from 'src/components/icons/GitHub';
import X from 'src/components/icons/X';
import WorldMap from 'src/components/icons/WorldMap';

import LinkedIn from 'src/components/icons/LinkedIn';

import { basics } from 'cv';

const { name, label, image, location, profiles, phone, email } = basics;
const { city, region } = location;

const linkedInfo = profiles.find(({ network }) => network === 'LinkedIn');
const linkedUrl = linkedInfo?.url;

const printInfo = [email, phone, linkedUrl].filter(Boolean).join(' • ');

const SOCIAL_ICONS: any = {
  GitHub,
  LinkedIn,
  X,
};

function Hero() {
  return (
    <Section>
      <div className="flex flex-row justify-between items-start">
        <div className="pr-6">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h2 className="font-mono text-slate-500">{label}</h2>
          <span className="flex flex-row items-center justify-left gap-1 font-mono text-sm text-slate-500 my-1">
            <WorldMap />
            {city}, {region}
          </span>

          <footer className="font-mono text-sm print">{printInfo}</footer>

          <footer className="no-print flex flex-row gap-3 mt-2 no-print">
            {email && (
              <a
                className="p-3 border-2 border-inherit rounded-md"
                href={`mailto:${email}`}
                title={`Send mail to ${name} using ${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            )}
            {phone && (
              <a
                className="p-3 border-2 border-inherit rounded-md"
                href={`tel:${phone}`}
                title={`Call to ${name} al número ${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone />
              </a>
            )}
            {profiles.map(({ network, url, username }) => {
              const Icon = SOCIAL_ICONS[network];

              return (
                <a
                  className="p-3 border-2 border-inherit rounded-md"
                  key={network}
                  href={url}
                  title={`Check profile ${name} en ${network}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </footer>
        </div>
        <figure>
          <img
            className="object-cover rounded-2xl aspect-square"
            src={image}
            alt={name}
          />
        </figure>
      </div>
    </Section>
  );
}

export default Hero;
