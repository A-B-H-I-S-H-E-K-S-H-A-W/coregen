import docs from "@/data";
import DocumentationLayout from "../_layout";
import { ScriptCopyBtn } from "@/components/other/Script";

export default async function DocPage({ params }) {
  const { slug } = await params;
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
            <div className="prose mt-4 whitespace-pre-line">{doc.content}</div>\
            {doc.command && (
              <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage="shell"
                lightTheme="nord"
                darkTheme="vitesse-dark"
                commandMap={doc?.command}
              />
            )}
          </div>
        </div>
      </DocumentationLayout>
    </>
  );
}
