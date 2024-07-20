import Link from "next/link";
import Image from "next/image"
import React from "react"
import "./RecipeCard.css"
import { IRecipeCard } from "../interfaces"

export default function RecipeCard({ id, title, cookingTIme, slug, thumbnail }: IRecipeCard) {
  return (
    <div key={id} className="recipe-card">
        <div className="featured">
            <Image
                src={`https:${thumbnail?.file?.url}`}
                alt="Recipe"
                width={500}
                height={200}
            />
        </div>
        <div className="info">
            <h4>{ title }</h4>
            <p>Takes approx { cookingTIme } mins to make</p>
        </div>
        <div className="actions">
            <Link href={`/Recipe/${slug}`} legacyBehavior><a>Cook this</a></Link>
        </div>
    </div>
  );
}
