import { Hero }        from '@/components/sections/Hero';
import { Services }    from '@/components/sections/Services';
import { About }       from '@/components/sections/About';
import { Clients }     from '@/components/sections/Clients';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { Contact }     from '@/components/sections/Contact';
import { getAllPosts }  from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Clients />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  );
}
