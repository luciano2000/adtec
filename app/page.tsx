import { Hero }         from '@/components/sections/Hero';
import { Ecosystem }    from '@/components/sections/Ecosystem';
import { Services }     from '@/components/sections/Services';
import { About }        from '@/components/sections/About';
import { Clients }      from '@/components/sections/Clients';
import { BlogPreview }  from '@/components/sections/BlogPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact }      from '@/components/sections/Contact';
import { getAllPosts }   from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <Ecosystem />
      <Services />
      <About />
      <Clients />
      <BlogPreview posts={posts} />
      <Testimonials />
      <Contact />
    </>
  );
}
