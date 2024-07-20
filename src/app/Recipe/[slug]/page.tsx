import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import { IRecipe } from "../../interfaces";
import "./recipeDetails.css";

const client = createClient({
  space: "lyn9u3bkiwv8",
  accessToken: "bmrTIMd7xmSiOEhK11AXelVHERdiwOpHwdkwurF3Fe8",
});

export async function getRecipeById(
  slug: number | string
): Promise<IRecipe | null> {
  try {
    const res: any = await client.getEntries({
      content_type: "recipe",
      "fields.slug": slug,
    });

    return {
      ...res.items[0]?.fields,
      featureImage: { ...res.items[0]?.fields?.featureImage?.fields },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}

const getRecipeImage = (rec: IRecipe | null) => {
  if (rec?.featureImage != null) {
    return (
      <Image
        src={`https:${rec?.featureImage?.file?.url}`}
        alt="Recipe Image"
        width={1000}
        height={500}
      />
    );
  } else {
    return <></>;
  }
};

export default async function RecipeDetails({ params }: any) {
  const recipeDetails: IRecipe | null = await getRecipeById(params?.slug);

  return <>
    <Link href={`/`}><button className="back-to-recipes">Back to recipes</button></Link>
    <h1 className="title">Chef's Corner</h1>
    <p className="title title-desc">Where every dish tells a story.</p>

    <div className="recipe-details">
      <div className="banner">
        <div className="image-wrapper">{getRecipeImage(recipeDetails)}</div>
        <h2 className="title">{recipeDetails?.title} </h2>
      </div>
      <div className="info">
        <p className="take-about">
          Take about {recipeDetails?.cookingTIme} min to cook{" "}
        </p>
        <h3 className="ingredient-title">Ingredient:</h3>
        {recipeDetails?.ingredients?.map((ing: string) => {
          return (
            <span key={ing} className="ingredient">
              {ing}
            </span>
          );
        })}
      </div>

      <div className="method">
        <h3 className="method-title">Method:</h3>
        <div className="method-desc">{recipeDetails?.methodOfpreparation}</div>
      </div>
    </div>
  </>;
}
