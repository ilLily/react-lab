import data from '@/data/product/products';
export default function Product() {
  //   console.log(data);

  return (
    <>
      <style jsx>
        {`
          table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          td,
          th {
            border: 1px solid #ddd;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          tr:hover {
            background-color: #ddd;
          }

          th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04aa6d;
            color: white;
          }
        `}
      </style>
      <h1>Product</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>photo</th>
            <th>name</th>
            <th>price</th>
            <th>stock</th>
            <th>tags</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <img src={p.picture} alt="" />
                </td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>{p.tags}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
