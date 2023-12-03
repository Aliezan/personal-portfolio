'use client';

import React, { FC } from 'react';
import { Accordion, AccordionItem, Divider } from '@nextui-org/react';
import { ExternalLink } from 'lucide-react';

type Certs = {
  title: string;
  tag: string;
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
        .map((cert) => (
          <>
            <div className='flex p-2 gap-3'>
              <p key={cert.title}>{cert.title}</p>
              <ExternalLink size={20} />
            </div>
            <Divider />
          </>
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
          <>
            <div className='flex p-2 gap-3'>
              <p key={cert.title}>{cert.title}</p>
              <ExternalLink size={20} />
            </div>
            <Divider />
          </>
        ))}
    </AccordionItem>
  </Accordion>
);

export default CertsAccordion;
