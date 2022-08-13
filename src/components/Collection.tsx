import React, { FC } from "react";
import ShoesCard, { Article } from "./ShoesCard";

const Collection = ({ articles,accueil }: {articles :any, accueil:any}) => {
  console.log('accueil',accueil);
  return (
    <div
        style={{
            textAlign: "center",
        }}
    >
      <h1>Collection</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat
        nam laboriosam fugiat possimus tempore quibusdam ullam adipisci numquam
        qui non veniam ea vitae, neque laborum consequatur, nihil sapiente
        porro.
      </p>
      <div
        style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "60%",
            margin: "0 auto",
          }}
      >

        {articles.map((article:any) => (
          <ShoesCard key={article.id} article={article} />
        ))}

      </div>
    </div>
  );
};

export default Collection;
