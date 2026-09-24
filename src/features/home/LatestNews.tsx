import { Link } from 'react-router-dom';
import ArticleListItemComponent from '../../components/article/ArticleListItem';
import { useInfiniteArticles } from '../../hooks/useInfiniteArticles';

export default function LatestNews() {
  const { articles, loading, lastElementRef } = useInfiniteArticles(10);

  if (articles.length === 0 && !loading) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <h2 className="text-xl font-bold text-text lg:text-xl">
          Update Terbaru
        </h2>
        <Link
          to="/artikel-terbaru"
          className="text-sm font-semibold text-primary hover:text-primary-hover"
        >
          Lihat Semua &rarr;
        </Link>
      </div>

      <div className="divide-y divide-border">
        {articles.map((article, index) => {
          if (index === articles.length - 2) {
            return (
              <div ref={lastElementRef} key={article._id}>
                <ArticleListItemComponent article={article} />
              </div>
            );
          }
          return (
            <ArticleListItemComponent key={article._id} article={article} />
          );
        })}
      </div>

      {loading && (
        <div className="py-4 text-center text-sm text-text-muted">
          Memuat berita...
        </div>
      )}
    </section>
  );
}
