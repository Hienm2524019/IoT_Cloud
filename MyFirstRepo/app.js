const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  const html = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Danh sách sinh viên</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <h2>Danh Sách Sinh Viên</h2>
        <table>
            <tr>
                <th>MSHV</th>
                <th>Họ tên</th>
                <th>Ngày sinh</th>
                <th>Quê quán</th>
                <th>Email</th>
                <th>SĐT</th>
            </tr>
            <tr>
                <td>M2524019</td>
                <td>Huỳnh Minh Hiển</td>
                <td>26/09/2000</td>
                <td>Can Tho</td>
                <td>oireyou0@gmail.com</td>
                <td>0939485606</td>
            </tr>
            
        </table>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
