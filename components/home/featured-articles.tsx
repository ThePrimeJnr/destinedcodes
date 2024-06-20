import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

interface Article {
  title: string;
  description: string;
  publishedAt: string;
  image: string;
  tags: string[];
  slug: string;
  featured: boolean;
}

const FeaturedArticles = () => {
  const articlesDirectory = path.join(process.cwd(), 'data/articles');
  const articleFiles = fs.readdirSync(articlesDirectory);

  const featuredArticles = articleFiles
    .map((filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        image: data.image,
        tags: data.tags,
        slug: filename.replace('.md', ''),
        featured: data.featured,
      } as Article;
    })
    .filter((article) => article.featured);

  return (
    <div id="featured-articles">
      <h2 className="font-bold text-4xl md:text-6xl mb-8 text-center md:text-left">
        Featured Articles
      </h2>
      {featuredArticles.map((article, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center mb-6"
        >
          <div className="flex-shrink-0 w-1/3">
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex-grow pl-4">
            <h3 className="font-bold text-xl md:text-2xl mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(article.publishedAt).toLocaleDateString()} - 5 min read
            </p>
            <p className="text-base md:text-lg mb-4">{article.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold inline-block py-1 px-2 rounded text-secondary bg-secondary-light"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              href={`/articles/${article.slug}`}
              passHref
              className="text-primary hover:underline focus:underline"
            >
              Read Article
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedArticles;
