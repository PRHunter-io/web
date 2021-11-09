
import PageWrapper from '@/components/PageWrapper';
import HeroPost from '@/components/hero-post'
import { getAllPosts } from 'src/lib/ga/blogApi';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default function BlogMain({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog | PRHunter"
        description="A short description goes here."
      />
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="mb-20">
              <h3 className="text-center">Blog</h3>
              <h4 className="text-center text-muted font-weight-light">The latest news about PRHunter.io</h4>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {allPosts.map((post) => (
                <HeroPost
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}