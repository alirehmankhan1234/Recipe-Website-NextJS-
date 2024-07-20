

export interface IRecipe {
    title: string,
    slug: string,
    thumbnail:  {
        title: string,
        file: {
          url: string,
          fileName: string,
          contentType: string,
          details: { image: {width: number, height: number}}
        }
      },
    featureImage: {
        title: string,
        file: {
          url: string,
          fileName: string,
          contentType: string,
          details: { image: {width: number, height: number}}
        }
      },
    ingredients: string[],
    cookingTIme: number,
    methodOfpreparation: string

}

export interface IRecipeCard extends IRecipe  {
    id: number | string,
}