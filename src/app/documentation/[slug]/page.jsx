import docs from "@/data";
import DocumentationLayout from "../_layout";

export default function DocPage({ params }) {
  const { slug } = params;
  const allDocs = docs.flatMap((section) => section.items);
  const doc = allDocs.find((d) => d.slug === slug);

  if (!doc) {
    return <div className="p-6 text-red-500">Documentation not found.</div>;
  }

  return (
    <>
      <DocumentationLayout>
        <div className="pb-24 pt-10 px-10">
          {/* Content */}
          <div>
            <h1 className="text-3xl font-bold">{doc.title}</h1>
            <div className="prose mt-4 whitespace-pre-line">{doc.content}</div>
          </div>
        </div>
      </DocumentationLayout>
    </>
  );
}
