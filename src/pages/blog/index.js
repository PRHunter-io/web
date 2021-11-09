
import PageWrapper from '@/components/PageWrapper';
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import { getAllPosts } from 'src/lib/ga/blogApi';

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
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="row">
              {heroPost && (
                <HeroPost
                  title={heroPost.title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  author={heroPost.author}
                  slug={heroPost.slug}
                  excerpt={heroPost.excerpt}
                />
              )}
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}ś
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}