import DateFormatter from '../DateFormatter';
import Link from 'next/link';
import Avatar from '@/components/Avatar';

export default function HeroPost({ title, date, excerpt, author, slug }) {
  return (
    <div className="row">
      <div className="mb-20">
        <div>
          <h3>
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              <a>{title}</a>
            </Link>
          </h3>
          <div className="mb-4">
            <DateFormatter dateString={date} />
          </div>
          <p>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
}
