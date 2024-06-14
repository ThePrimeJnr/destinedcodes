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
        featured: data.featured,
      } as Article;
    })
    .filter((article) => article.featured);

  return (
    <div id="featured-articles" className="py-24">
      <h2 className="font-bold text-4xl md:text-6xl mb-8 text-center md:text-left">
        Featured Articles
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article, index) => (
          <div key={index}>
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={200}
              className="w-full h-auto rounded-xl"
            />
            <div>
              <h3 className="font-bold text-2xl mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(article.publishedAt).toLocaleDateString()} - 5 min
                read
              </p>
              <p className="text-lg mb-4">{article.description}</p>
              <div className="flex gap-2 mb-4">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold inline-block py-1 px-2 rounded text-secondary bg-secondary-light last:mr-0 mr-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/articles/${index}`}
                className="text-primary underline"
              >
                Read Article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
