import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostHeader from '@/components/post-header'
import { getPostBySlug, getAllPosts } from '../../../lib/ga/blogApi'
import Head from 'next/head'
import { markdownToHtml } from '../../../lib/ga/blogApi'
import PageWrapper from '@/components/PageWrapper'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <PageWrapper>
      <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
        <div className="container">
          <div className="row">
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {post.title} | Next.js Blog Example
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <div dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
              </article>
            </>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
