'use client';

import React, { FC } from 'react';
import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Certs = {
  title: string;
  tag: string;
  link: string;
};

interface CertsAccordionProps {
  certs: Certs[];
}

const CertsAccordion: FC<CertsAccordionProps> = ({ certs }) => (
  <Accordion>
    <AccordionItem
      key='1'
      title='JavaScript/Web Development'
      subtitle='JavaScript and Web Development related certs'
    >
      {certs
        .filter((cert) => cert.tag === 'JS/Web')
        .map((cert, index, self) => (
          <React.Fragment key={cert.title}>
            <Link href={cert.link} className='flex p-2 gap-3'>
              <p className='hover:underline'>{cert.title}</p>
              <ExternalLink size={20} />
            </Link>
            {index !== self.length - 1 && <Divider />}
          </React.Fragment>
        ))}
    </AccordionItem>
    <AccordionItem
      key='2'
      title='Others'
      subtitle='Other programming and developing related certs'
    >
      {certs
        .filter((cert) => cert.tag === 'Others')
        .map((cert) => (
          <React.Fragment key={cert.title}>
            <Link href={cert.link} className='flex p-2 gap-3'>
              <p className='hover:underline'>{cert.title}</p>
              <ExternalLink size={20} />
            </Link>
            <Divider />
          </React.Fragment>
        ))}
    </AccordionItem>
  </Accordion>
);

export default CertsAccordion;
