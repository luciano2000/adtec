import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceContent } from '@/lib/services-content';
import { ServicePage } from '@/components/sections/ServicePage';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceContent(params.slug);
  if (!service) return {};
  return {
    title: service.meta.title,
    description: service.meta.description,
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
    },
  };
}

export default function ServicePageRoute({ params }: Props) {
  const service = getServiceContent(params.slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
