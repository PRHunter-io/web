
import PageWrapper from '@/components/PageWrapper';
import ReactMarkdown from 'react-markdown'
import BlogList from "@/components/BlogList";
import matter from 'gray-matter'


export async function getStaticProps() {
    //get posts & context from folder
    const posts = (context => {
      const keys = context.keys()
      const values = keys.map(context)
  
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')
        const value = values[index]
        // Parse yaml metadata & markdownbody in document
        const document = matter(value.default)
        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
        }
      })
      return data
    })(require.context('./posts', true, /\.md$/))
  
    return {
      props: {
        allBlogs: posts,
        title: "BLog",
        description: "Desc",
      },
    }
  }

const BlogMain = (props) => {
    return (
        <>
            <PageWrapper>
                <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
                    <div className="container">
                        <div className="row">
                            Blog
                            <BlogList allBlogs={props.allBlogs} />
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}


export default BlogMain;