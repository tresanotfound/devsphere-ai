function Table({ columns = [], data = [] }) {

  return (
    <div className="overflow-x-auto">

      <table className="w-full border-collapse">

        <thead>
          <tr className="bg-gray-800">

            {columns.map((column, index) => (
              <th
                key={index}
                className="
                  text-left
                  p-4
                  text-white
                "
              >
                {column}
              </th>
            ))}

          </tr>
        </thead>

        <tbody>

          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-800"
            >

              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="
                    p-4
                    text-gray-300
                  "
                >
                  {cell}
                </td>
              ))}

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Table;