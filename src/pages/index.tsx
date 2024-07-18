import Image from "next/image";
import { createClient } from 'contentful'

export async function getStaticProps(){
  const client = createClient({
    space: "lyn9u3bkiwv8",
    accessToken: "bmrTIMd7xmSiOEhK11AXelVHERdiwOpHwdkwurF3Fe8",
  })

  const res = await client.getEntries({content_type: "recipe"})


  return {
    props:{
      recipes:res.items
    }
  }

}

export default function Recipes({ recipes }: any) {

  console.log(recipes)

  return (
    <div>
      Recipe List
    </div>
  );
}
