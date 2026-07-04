import type { BlogPost, ContentBlock } from "@/data/blogPosts";

const renderBlock = (block: ContentBlock, i: number) => {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          id={block.id}
          className="mt-12 mb-2 text-2xl sm:text-3xl font-bold text-foreground scroll-mt-24"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-8 mb-1 text-xl font-semibold text-foreground">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2 list-disc pl-5 text-foreground/90">
          {block.items.map((it, j) => (
            <li key={j} className="leading-relaxed">{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 space-y-2 list-decimal pl-5 text-foreground/90">
          {block.items.map((it, j) => (
            <li key={j} className="leading-relaxed">{it}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-6 rounded-xl border-l-4 border-accent bg-secondary/70 p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {block.title}
          </p>
          <p className="mt-2 text-foreground leading-relaxed">{block.text}</p>
        </div>
      );
    case "table":
      return (
        <div key={i} className="my-6 overflow-x-auto">
          {block.caption && (
            <p className="mb-2 text-sm text-muted-foreground italic">{block.caption}</p>
          )}
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {block.headers.map((h, j) => (
                  <th key={j} className="border border-primary/40 px-4 py-2 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className={j % 2 === 0 ? "bg-card" : "bg-secondary/40"}>
                  {row.map((c, k) => (
                    <td key={k} className="border border-border px-4 py-2 text-foreground/90">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

const BlogArticleRenderer = ({ post }: { post: BlogPost }) => (
  <div className="prose-none">
    {post.content.map(renderBlock)}
  </div>
);

export default BlogArticleRenderer;
