import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '@/lib/ga/blogApi'
import { markdownToHtml } from '@/lib/ga/blogApi'
import PageWrapper from '@/components/PageWrapper'
import { NextSeo } from 'next-seo'
import Avatar from '@/components/avatar'
import DateFormatter from '@/components/date-formatter'

export default function Post({ post }) {
  const router = useRouter()
  console.log(post)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <NextSeo
        title={`Blog - ${post.excerpt} | PRHunter`}
        description="A short description goes here."
      />
      <PageWrapper>
        <div className="bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
            <div className="row">
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="mb-6">
                  <DateFormatter dateString={post.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className="float-right mt-5">
                  <Avatar name={post.author.name} picture={post.author.picture} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
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
  const posts = getAllPosts(['slug', 'excerpt'])

  console.log(posts)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
          except: post.excerpt
        },
      }
    }),
    fallback: false,
  }
}
