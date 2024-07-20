import Image from "next/image";
import { createClient } from "contentful";
import RecipeCard from "./components/RecipeCard";

export async function getRecipes() {
  const client = createClient({
    space: "lyn9u3bkiwv8",
    accessToken: "bmrTIMd7xmSiOEhK11AXelVHERdiwOpHwdkwurF3Fe8",
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return res.items;
}

export default async function Recipes() {
  const recipes: any = await getRecipes();
  console.log(recipes);

  return (
    <div className="chef-corner-container">
      <h1 className="title">Chef's Corner</h1>
      <h4 className="title title-desc">Spread the Joy</h4>
      <div className="recipe-list-wrapper">
        <div className="recipe-list">
          {recipes.map((recipe: any) => {
            return (
              <RecipeCard
                key={recipe.sys.id}
                {...{
                  id: recipe.sys.id,
                  ...recipe.fields,
                  thumbnail: { ...recipe.fields.thumbnail.fields },
                  featureImage: { ...recipe.fields.featureImage.fields },
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
