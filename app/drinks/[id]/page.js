import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getDrinkDetails = async (id) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Error Retrieving drink details");
  }

  const data = await response.json();

  return data;
};

const DrinkDetailPage = async ({ params }) => {
  const data = await getDrinkDetails(params.id);
  return (
    <div>
      <Link href="/drinks" className="btn btn-outline font-medium mb-4">
        Back to Drinks
      </Link>
      <Image
        src={data?.drinks[0]?.strDrinkThumb}
        width={300}
        height={300}
        alt={data?.drinks[0]?.strDrink}
        priority
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
      />
      <h1 className="text-4xl">{data?.drinks[0]?.strDrink}</h1>
    </div>
  );
};

export default DrinkDetailPage;
