import ProjectLayout from "../../components/ProjectLayout";

export default function ArtAuctionML({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Course", value: "INFO 371" },
        { label: "Type", value: "ML Proposals" },
        { label: "Dataset", value: "Kaggle Art Auctions" },
      ]}
      links={[]}
    >
      <section>
        <h3 className="h3">Problem</h3>
        <p className="p">Can we predict the sale price of art at auction? And separately, can we predict whether a piece is likely to end up in a museum collection vs. private hands?</p>
      </section>
      <section>
        <h3 className="h3">Models</h3>
        <p className="p">Built two separate proposals: a regression model for sale price estimation using features like artist, medium, dimensions, and provenance — and a classification model predicting museum acquisition likelihood.</p>
      </section>
      <section>
        <h3 className="h3">Approach</h3>
        <p className="p">Feature engineering on a Kaggle art auction dataset, model selection with scikit-learn, evaluation via cross-validation and held-out test sets.</p>
      </section>
    </ProjectLayout>
  );
}
