const handleclick = (id) => {
    alert(id);
}
export function renderProductTable(products) {
  function renderTableRow(product) {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>
          <button
            onClick={() => handleclick(product.id)}
            className="btn btn-primary btn-curve btn-hover-primary text-danger"
          >
            Clicked
          </button>
        </td>
      </tr>
    );
  }

  return products.map((product) => renderTableRow(product));
}