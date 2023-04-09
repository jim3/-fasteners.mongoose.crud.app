### A basic Node/Express/Mongoose Inventory App, it does basic CRUD operations. It could be used as a starter file/project for those totally unfamilar with this stack.

---

#### Data Model

| Field       | Type   | Description             |
| :---------- | :----- | :---------------------- |
| partNumber  | String | Part number of the part |
| name        | String | Name of the part        |
| description | String | Description of the part |
| category    | String | Category of the part    |
| quantity    | Number | Quantity of the part    |
| price       | Number | Price of the part       |
| head        | Array  | Array of head types     |
| drive       | Array  | Array of drive types    |

### API Endpoints

| Endpoint   | HTTP Method | Description   |
| :--------- | :---------- | :------------ |
| /parts     | GET         | Get all parts |
| /parts/:id | GET         | Get a part    |
| /parts     | POST        | Create a part |
| /parts/:id | PUT         | Update a part |
| /parts     | DELETE      | Delete a part |


Document structure of the parts collection

```json
{
  "partNumber": "135",
  "name": "Wood Screw",
  "description": "Wood screw for attaching wood to wood or wood to metal",
  "quantity": 100,
  "price": 0.05,
  "head": ["Flat", "Oval", "Round"],
  "drive": ["Phillips", "Square", "Torx"]
}
```
