import CategoryList from "../../../components/Category";

async function getAllListsByCategory(getId: string) {
  const res = await fetch(
    `${process.env.URL}/api/category?categoryId=${getId}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function Category({ params }: { params: any }) {
  const { id } = params;

  const getAllList = await getAllListsByCategory(id);

  return <CategoryList list={getAllList} />;
}
